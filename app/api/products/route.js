import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM products");

    return Response.json(rows);
  } catch (err) {
    console.error("PRODUCTS ERROR:", err);

    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}