import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    await db.execute(
      "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}