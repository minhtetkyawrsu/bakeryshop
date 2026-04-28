import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { items, total } = await req.json();

    // VALIDATION
    if (!items || !Array.isArray(items) || items.length === 0) {
      return Response.json(
        { success: false, error: "No items provided" },
        { status: 400 }
      );
    }

    await db.execute(
      "INSERT INTO orders (items, total) VALUES (?, ?)",
      [JSON.stringify(items), Number(total)]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error("ORDER ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}