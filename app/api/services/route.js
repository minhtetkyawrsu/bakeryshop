import mysql from "mysql2/promise";

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "bakery_db",
    });

    const [rows] = await db.execute("SELECT * FROM services");

    await db.end();

    return Response.json(rows);
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}