export default function FeaturedProducts() {
  return (
    <section className="mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col text-center">
          <h3 className="text-[34px] lg:text-5xl text-indigo-950 font-['Clash_Display'] font-bold mb-5">
            Our Showcase
          </h3>
          <p className="text-base leading-lg text-gray-500">
            They built amazing website to help more people around the world
            <br className="hidden md:block" />
            by using our recommendation services and products
          </p>
        </div>
        <div className="flex flex-wrap gap-y-8 lg:flex-row justify-center gap-x-7 items-center">
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className="transition-all ease-in-out duration-500 shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1464865885825-be7cd16fad8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
            />
          </div>
          <div className="group relative ">
            <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 absolute opacity-0 bottom-8 justify-center flex w-full">
              <a
                href="#"
                className=" transition-all ease-in-out duration-500shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base"
              >
                View Details
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
