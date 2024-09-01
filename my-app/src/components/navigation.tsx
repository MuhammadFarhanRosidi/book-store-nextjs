import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 inset-x-0 bg-white z-50 w-full mx-auto py-6 px-5 md:px-8 xl:px-4 rounded-b-[24px]">
      <div className="flex flex-row items-center w-screen justify-between">
        <div className="logo flex flex-row justify-center items-center gap-x-2">
          <Link href={`/`} className="font-bold logo text-2xl text-indigo-950">
            FarBook
          </Link>
        </div>
        <ul className=" flex-row gap-x-8 lg:flex hidden">
          <li>
            <Link
              href={`/products`}
              className="text-indigo-950 hover:text-violet-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href={`/wishlist`}
              className="text-indigo-950 hover:text-violet-700"
            >
              Wishlist
            </Link>
          </li>
        </ul>
        <div className="flex flex-row gap-x-4">
          <Link
            href={`/register`}
            className="md:block hidden py-3 bg-indigo-950 text-white text-base px-5 rounded-full hover:bg-violet-700 transition duration-500"
          >
            Sign up
          </Link>
          <Link
            href={`/login`}
            className="md:block hidden py-3 bg-indigo-950 text-white text-base px-5 rounded-full hover:bg-violet-700 transition duration-500"
          >
            Login
          </Link>
          <div
            id="btn-dropdown"
            className="lg:hidden bg-white flex items-center p-[10px] rounded-full"
          >
            <a href="#">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H21"
                  stroke="#080C2E"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="#080C2E"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="#080C2E"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
