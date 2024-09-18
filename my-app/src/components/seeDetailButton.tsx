"use client";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import AddToWishlist from "./addToWishlist";

export interface Product {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export default function DetailButton({ product }: { product: Product }) {
  const router = useRouter();
  const slug = product.slug;
  return (
    <button
      onClick={() => router.push(`/products/${slug}-${product._id}`)}
      // className="p-[12px_20px] text-center rounded-full border border-taskia-black w-full font-semibold"
      className="p-[12px_20px] bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey font-semibold text-white text-center"
    >
      See Detail
    </button>
  );
}
