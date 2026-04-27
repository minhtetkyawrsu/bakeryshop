import mysql from "mysql2/promise";

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "", // change if needed
      database: "bakery_db",
    });

    const [rows] = await db.execute("SELECT * FROM products");

    await db.end();

    return Response.json(rows);
  } catch (err) {
    console.error("PRODUCTS ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}