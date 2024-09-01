import { deleteWishlistById } from "@/db/models/wishlist";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = await deleteWishlistById(params.id);
  return Response.json(product);
}

// POST menerima productId
import { createWishlist } from "@/db/models/wishlist";
import { headers } from "next/headers";

interface ParamsAddWishlist {
  params: {
    id: string;
  };
}

export async function POST(request: Request, { params }: ParamsAddWishlist) {
  // ambil user Id dari auth
  const headerList = headers();
  const addProductToWishlist = await createWishlist({
    userId: String(headerList.get("x-user-id")),
    productId: params.id,
  });
  // console.log(headerList.get("x-user-id"), "<<<< iki headerlist");
  return Response.json(addProductToWishlist);
}
