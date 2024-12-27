import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const productData = products.filter((item) => item.id === parseInt(id));

  if (productData.length === 0) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(productData[0]);
}
