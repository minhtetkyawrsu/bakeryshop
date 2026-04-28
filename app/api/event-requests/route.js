import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await db.execute(
      "INSERT INTO event_requests (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error("EVENT REQUEST ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}