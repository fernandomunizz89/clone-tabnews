test("GET to /api/v1/status should return status 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(responseBody).toHaveProperty("updated_at");
  expect(new Date(responseBody.updated_at).toString()).not.toBe("Invalid Date");
  expect(responseBody.updated_at).toBe(
    new Date(responseBody.updated_at).toISOString(),
  );

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.current_connections).toEqual(1);
});
