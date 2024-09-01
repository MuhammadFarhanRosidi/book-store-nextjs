import { getProductById } from "@/db/models/product";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = await getProductById(params.id);
  return Response.json(product);
}
