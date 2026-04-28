import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, pickup_time, notes } = await req.json();

    await db.execute(
      "INSERT INTO pickup_orders (name, email, pickup_time, notes) VALUES (?, ?, ?, ?)",
      [name, email, pickup_time, notes]
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error("PICKUP ORDER ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}