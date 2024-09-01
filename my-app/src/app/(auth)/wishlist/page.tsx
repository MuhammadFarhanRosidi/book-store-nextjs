import ListWishlistCard from "@/components/listWishlistCard";
import ButtonLogout from "@/components/logoutButton";
import Search from "@/components/search";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import Link from "next/link";

// export interface Wishlist {
//   _id: ObjectId;
//   name: string;
//   slug: string;
//   description: string;
//   excerpt: string;
//   price: number;
//   tags: string[];
//   thumbnail: string;
//   images: string[];
//   createdAt: Date;
//   updatedAt: Date;
// }
export interface WishlistModel {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  product: {
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
  };
}

async function fetchWishlist() {
  const res = await fetch("http://localhost:3000/api/wishlist", {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();
  return data;
}

export default async function Wishlist() {
  const data = await fetchWishlist();
  return (
    <section id="Dashboard" className="flex">
      {/* sidebar */}
      <div
        id="Sidebar"
        className="w-[280px] flex flex-col gap-[30px] p-[30px] shrink-0 h-screen overflow-y-scroll no-scrollbar"
      >
        <div className="flex justify-center">
          <Link href={`/`} className="font-bold logo text-2xl text-indigo-950">
            FarBook
          </Link>
        </div>
        <div className="general-menu flex flex-col gap-[18px]">
          <h3 className="font-semibold text-sm leading-[21px]">GENERAL</h3>
          <Link
            href={`/products`}
            className="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey"
          >
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                />
              </svg>
            </div>
            <p className="font-semibold">All Products</p>
          </Link>
          <Link
            href={`/wishlist`}
            className="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey"
          >
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <p className="font-semibold">My Wishlist</p>
          </Link>
        </div>
        <hr className="text-taskia-background-grey" />
        <div className="general-menu flex flex-col gap-[18px]">
          <h3 className="font-semibold text-sm leading-[21px]">OTHERS</h3>
          <a
            href="#"
            className="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey"
          >
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <p className="font-semibold">Settings</p>
          </a>
          <a
            href="#"
            className="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey"
          >
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <p className="font-semibold">Help Center</p>
          </a>
          <ButtonLogout />
        </div>
      </div>
      {/* end of sidebar */}

      {/* Content */}
      <div
        id="Content"
        className="flex flex-col bg-taskia-background-grey rounded-l-[60px] w-full h-screen overflow-y-scroll p-[50px] gap-[30px]"
      >
        <div className="dashboard-nav bg-white flex justify-between items-center w-full  p-4 rounded-[18px]">
          <Search />
          <div className="flex gap-[30px] items-center">
            <div className="flex gap-3 items-center">
              <a
                href=""
                className="flex justify-center items-center w-12 h-12 rounded-full border border-taskia-background-grey"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="flex justify-center items-center w-12 h-12 rounded-full border border-taskia-background-grey"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>
            </div>
            <div className="flex h-12 border-x border-[0.5px] border-taskia-background-grey" />
            <div className="flex gap-3 items-center">
              <div className="*:text-right flex flex-col">
                <p className="text-taskia-grey text-sm w-full">Howdy,</p>
                <p className="font-bold">Jannellia</p>
              </div>
              <div className="w-12 h-12 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="content-header flex justify-between items-center">
            <div>
              <h1 className="font-extrabold text-[30px] leading-[45px]">
                My Wishlist
              </h1>
              <p className="leading-[21px] text-sm">
                You can delete from your wishlist
              </p>
            </div>
          </div>

          {/* Wishlist Container */}
          <div
            className="flex justify-center flex-wrap gap-8 items-center h-[420px] mx-auto"
            id="taskWrapperEmpty"
          >
            {/* Card Wishlist */}
            {data.map((el: WishlistModel) => {
              return <ListWishlistCard key={`${el._id}`} wishlist={el} />;
            })}
            {/* <h1>TESTTTTTT</h1> */}
            {/* End of Card Wishlist */}
          </div>
          {/* End of Wishlist Container*/}
        </div>
      </div>
    </section>
  );
}
