import { getAllWishtlists } from "@/db/models/wishlist";

export async function GET(request: Request) {
  const allWishlist = await getAllWishtlists();
  return Response.json(allWishlist);
}
