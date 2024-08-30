import Link from "next/link";

export default function Banner() {
  return (
    <section className="hero max-w-6xl md:px-8 px-4 mx-auto py-12 xl:px-0">
      <div className="flex w-full flex-col md:flex-row md:justify-between items-center">
        <div className="gap-y-10 flex flex-col md:basis-2/4 lg:basis-3/6">
          <div className="flex py-2 flex-row small-badge items-center bg-white rounded-full gap-x-2 px-3 w-fit">
            <p className="lg:text-base text-sm font-semibold text-indigo-950">
              We sell more than 1,000 books
            </p>
          </div>
          <div>
            <h1 className="lg:text-[70px] text-[40px] text-indigo-950 font-['Clash_Display'] font-bold leading-none mb-3">
              Book Store
              <br />
              Buy Faster.
            </h1>
            <p className="text-base leading-loose text-gray-500">
              We provide a variety of servers to grow your users
              <br className="lg:block hidden" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center">
            <Link
              href={`/products`}
              className="w-full text-center lg:w-fit transition-all ease-in-out duration-500 hover:bg-indigo-950 bg-violet-700 px-10 py-4 rounded-full text-white text-lg font-semibold"
            >
              See More
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <img
            src="https://img.freepik.com/free-vector/book-store_53876-17163.jpg?t=st=1724800761~exp=1724804361~hmac=f13658b7f897dda89ad570d3186506dfe841a6fb100f42ee8ca5cda7601d1d38&w=740"
            className="mix-blend-multiply rounded-lg h-[397px] md:basis-2/4 lg:h-[550px] w-96"
            alt="hello"
          />
        </div>
      </div>
    </section>
  );
}
