import { getProductById } from "@/db/models/product";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("masuk");
  console.log(params.id, "<< params id");
  const product = await getProductById(params.id);
  return Response.json(product);
}
