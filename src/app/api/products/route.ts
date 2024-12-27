import { NextResponse } from "next/server";
import { products } from "@/lib/db";

// Named export for GET method
export async function GET() {
  return NextResponse.json(products)
}