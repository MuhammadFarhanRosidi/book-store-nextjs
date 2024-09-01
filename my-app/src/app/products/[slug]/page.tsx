import AddToWishlist from "@/components/addToWishlist";
import { BASE_URL } from "@/constants";
import { ObjectId } from "mongodb";
import Link from "next/link";

interface Props {
  params: {
    _id: ObjectId;
  };
}

async function fetchDetailProductBySlug(_id: string) {
  try {
    const res = await fetch(BASE_URL + `/api/products/${_id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export interface ProductModel {
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

// export default async function getDataUserLogin({
//   const res = await fetch(BASE_URL + "/api/login")
// })

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const idFromParamSlug = params.slug.split("-");
  const pureId = idFromParamSlug[idFromParamSlug.length - 1];
  const data: ProductModel = await fetchDetailProductBySlug(pureId);
  return (
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li className="text-sm">
            <Link
              href={`/`}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              Home /
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href={`/products`}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              Products /
            </Link>
          </li>
          <li className="text-sm">
            <a
              href=""
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {data.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            alt=""
            src={data.thumbnail}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              alt=""
              src={data.images[1]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              alt=""
              src={data.images[2]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            alt=""
            src={data.thumbnail}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {data.name}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            Rp. {data.price}
          </p>

          <div className="mt-10">
            <AddToWishlist productId={String(data._id)} />
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{data.excerpt}</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {data.tags.map((el) => (
                  <li key={el} className="text-gray-400">
                    <span className="text-gray-600">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
