import { getAllProducts } from "@/db/models/product";

export async function GET(request: Request) {
  const products = await getAllProducts();
  return Response.json(products);
}
