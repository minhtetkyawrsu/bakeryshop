import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "bakery_db",
    });

    await db.execute(
      "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    await db.end();

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false });
  }
}