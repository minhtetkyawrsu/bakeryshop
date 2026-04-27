import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const { items, total } = await req.json();

    // VALIDATION (important)
    if (!items || !Array.isArray(items) || items.length === 0) {
      return Response.json(
        { success: false, error: "No items provided" },
        { status: 400 }
      );
    }

    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "", // change if needed
      database: "bakery_db",
    });

    await db.execute(
      "INSERT INTO orders (items, total) VALUES (?, ?)",
      [JSON.stringify(items), Number(total)]
    );

    await db.end();

    return Response.json({ success: true });

  } catch (err) {
    console.error("ORDER ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}