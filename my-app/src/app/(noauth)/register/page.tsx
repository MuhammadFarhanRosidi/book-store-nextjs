import { BASE_URL } from "@/constants";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const createUser = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await fetch(BASE_URL + "/api/users", {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect("/login");
  };
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-white items-center p-6 flex flex-row justify-between sticky inset-x-0 top-0">
        <div className="logo flex flex-row justify-center items-center gap-x-2">
          <Link href={`/`} className="font-bold logo text-2xl text-indigo-950">
            FarBook
          </Link>
        </div>
        <div className="hidden lg:flex flex-row gap-x-3">
          <Link
            href={`/register`}
            className="md:w-fit w-full text-center px-7 rounded-full text-base py-3 font-semibold text-indigo-950 bg-white"
          >
            Sign Up
          </Link>
          <Link
            href={`/login`}
            className="md:w-fit w-full text-center px-7 rounded-full text-base py-3 font-semibold text-white bg-violet-700"
          >
            Login
          </Link>
        </div>
      </div>
      {/* End of Navbar */}

      <div className="gap-y-16 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-x-10 xl:gap-x-28 p-10 items-center xl:px-20">
        <div className="bg-white p-10 rounded-2xl">
          <form action={createUser}>
            <div className="flex flex-col gap-y-7">
              <h3 className="xl:text-4xl md:text-3xl text-2xl text-indigo-950 font-bold leading-relaxed">
                Sign Up &amp; Become <br className="lg:block hidden" /> Book
                Seeker
              </h3>
              <div>
                <p className="font-semibold text-indigo-950 text-base mb-2">
                  Name
                </p>
                <input
                  name="name"
                  type="text"
                  className="w-full py-3 rounded-full pl-5 pr-10 border border-gray-300 text-indigo-950 font-semibold"
                />
              </div>
              <div>
                <p className="font-semibold text-indigo-950 text-base mb-2">
                  Username
                </p>
                <input
                  name="username"
                  type="text"
                  className="w-full py-3 rounded-full pl-5 pr-10 border border-gray-300 text-indigo-950 font-semibold"
                />
              </div>
              <div>
                <p className="font-semibold text-indigo-950 text-base mb-2">
                  Email Address
                </p>
                <input
                  name="email"
                  type="email"
                  className="w-full py-3 rounded-full pl-5 pr-10 border border-gray-300 text-indigo-950 font-semibold"
                />
              </div>
              <div className="justify-end flex flex-col">
                <p className="font-semibold text-indigo-950 text-base mb-2">
                  Password
                </p>
                <input
                  name="password"
                  type="password"
                  className="w-full py-3 rounded-full pl-5 pr-10 border border-gray-300 text-indigo-950 font-semibold"
                />
              </div>
              <div className="justify-start gap-x-2 flex flex-row w-full items-center">
                <input
                  type="checkbox"
                  className="border border-gray-300 w-5 h-5"
                />
                <p className="font-semibold text-indigo-950 text-base">
                  I agree with terms and coditions
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <button
                  type="submit"
                  className=" w-full text-center px-7 rounded-full text-base py-3 font-semibold text-white bg-violet-700"
                >
                  Sign Up
                </button>
                <a
                  href=""
                  className=" w-full flex flex-row justify-center px-7 gap-x-2 items-center rounded-full text-base py-3 font-semibold text-indigo-950 border border-gray-300"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6 10.2H12.2V13.9H17.7C17.6 14.8 17 16.2 15.7 17.1C14.9 17.7 13.7 18.1 12.2 18.1C9.59995 18.1 7.29995 16.4 6.49995 13.9C6.29995 13.3 6.19995 12.6 6.19995 11.9C6.19995 11.2 6.29995 10.5 6.49995 9.9C6.59995 9.7 6.59995 9.5 6.69995 9.4C7.59995 7.3 9.69995 5.8 12.2 5.8C14.1 5.8 15.3 6.6 16.1 7.3L18.9 4.5C17.1999 3 14.9 2 12.2 2C8.29995 2 4.89995 4.2 3.29995 7.5C2.59995 8.9 2.19995 10.4 2.19995 12C2.19995 13.6 2.59995 15.1 3.29995 16.5C4.89995 19.8 8.29995 22 12.2 22C14.9 22 17.1999 21.1 18.7999 19.6C20.6999 17.9 21.7999 15.3 21.7999 12.2C21.7999 11.4 21.7 10.8 21.6 10.2Z"
                      stroke="#17191C"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sign up with Google
                </a>
              </div>
            </div>
          </form>
        </div>
        <img
          src="https://media.istockphoto.com/id/1278703639/id/foto/merapatkan-aplikasi-ponsel-cerdas-dan-layar-dengan-membuka-kunci-ponsel-konsep-keamanan.jpg?s=1024x1024&w=is&k=20&c=MkRiR1irwBATnH4h58cjC7hr_FJbqjG-xDKxd88Bsss="
          alt=""
          className="rounded-full"
        />
      </div>
    </>
  );
}
