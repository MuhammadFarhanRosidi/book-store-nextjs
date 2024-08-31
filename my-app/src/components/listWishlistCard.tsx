import { ObjectId } from "mongodb";
import AddToWishlist from "./addToWishlist";
import { Wishlist } from "@/app/(auth)/wishlist/page";
import RemoveWishlist from "./removeWishlist";

export default function ListWishlistCard({ wishlist }: { wishlist: Wishlist }) {
  return (
    <div className="bg-white p-[30px] gap-[30px] rounded-[30px] h-[850px] w-[350px] shrink-0 flex flex-col items-center justify-between">
      <div className="w-full rounded-2xl bg-[#FEE7BA] flex shrink-0 items-center justify-center">
        <img
          src={wishlist.thumbnail}
          alt={wishlist.name}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-center">
        <p className="font-bold text-xl leading-[30px]">{wishlist.name}</p>
        <p className="font-bold text-xl leading-[30px]">Rp. {wishlist.price}</p>
        <p className="text-sm text-taskia-grey leading-6">{wishlist.excerpt}</p>
        {wishlist.tags.map((el) => {
          return (
            <p className="text-center rounded-full border border-taskia-black w-full font-semibold">
              {el}
            </p>
          );
        })}
      </div>
      <div className="flex gap-2 w-full">
        <RemoveWishlist />
      </div>
    </div>
  );
}
