"use client";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";

export default function DetailButton({ _id }: { _id: ObjectId }) {
  const router = useRouter();
  return (
    <button
      //   onClick={() => router.push(`/products/${_id}`)}
      className="p-[12px_20px] text-center rounded-full border border-taskia-black w-full font-semibold"
    >
      See Detail
    </button>
  );
}
