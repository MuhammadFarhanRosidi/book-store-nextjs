"use client";

import { BASE_URL } from "@/constants";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

export default async function AddToWishlist({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();
  const handleAdd = async () => {
    const res = await fetch(BASE_URL + `/api/wishlist/${productId}`, {
      method: "POST",
      body: JSON.stringify(productId),
      headers: {
        "Content-Type": "application/json",
        // Cookie: cookies().toString(),
      },
    });
    router.push("/wishlist");
    console.log(res);
  };

  return (
    <button
      type="submit"
      onClick={handleAdd}
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Add to wishlist
    </button>
  );
}
