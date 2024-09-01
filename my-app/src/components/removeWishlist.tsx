"use client";

import { redirect, useRouter } from "next/navigation";

// async function handleDelete(id: string) {
//   const router = useRouter();
//   const res = await fetch("http://localhost:3000/api/wishlist/" + id, {
//     method: "DELETE",
//   });
//   const data = await res.json();
//   return router.push("/wishlist");
// }

export default function RemoveWishlist({ productId }: { productId: string }) {
  const router = useRouter();
  async function handleDelete() {
    const res = await fetch("http://localhost:3000/api/wishlist/" + productId, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    return router.push("/wishlist");
  }
  return (
    <button
      onClick={handleDelete}
      className="p-[12px_20px] bg-gradient-to-b from-[#e85151] to-[#ee0612] rounded-full w-full border border-taskia-background-grey font-semibold text-white text-center"
    >
      Remove Wishlist
    </button>
  );
}
