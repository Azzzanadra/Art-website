import { put } from "@vercel/blob";
import { sql } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const categoryId = formData.get("categoryId") as string;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const blob = await put(file.name, file, {
  access: "public",
  addRandomSuffix: true,
    });

  await sql`
    INSERT INTO items (category_id, title, image_url)
    VALUES (${categoryId}, ${title}, ${blob.url})
  `;

  return NextResponse.json({ url: blob.url });
}