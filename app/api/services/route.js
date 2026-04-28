import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM services");

    return Response.json(rows);
  } catch (err) {
    console.error("SERVICES ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}