import database from "../../../../infra/database.js";

async function status(request, response) {
  const db = await database.query("SELECT 1 + 1");
  response.status(200).json({ status: "API is working" });
}

export default status;
