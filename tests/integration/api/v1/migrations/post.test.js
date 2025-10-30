import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations should return status 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody = await response1.json();

  expect(response1.status).toBe(201);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody2 = await response2.json();

  expect(response2.status).toBe(200);
  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);
});
