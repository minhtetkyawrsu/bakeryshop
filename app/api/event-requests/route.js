import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "bakery_db",
    });

    await db.execute(
      "INSERT INTO event_requests (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await db.end();

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}