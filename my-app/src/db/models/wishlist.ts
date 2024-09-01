import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "book_store";
const COLLECTION_WISHLIST = "wishlists";

export interface WishlistModel {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type WishlistModelInput = Omit<WishlistModel, "_id">;

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getAllWishtlists = async () => {
  const db = await getDb();
  // const wishtlists = (await db
  //   .collection(COLLECTION_WISHLIST)
  //   .find()
  //   .toArray()) as WishlistModel[];
  const agg = [
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: {
        path: "$product",
        includeArrayIndex: "string",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];
  const coll = db.collection("wishlists");
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  return result;
};

export const createWishlist = async (wishlist: {
  userId: string;
  productId: string;
}) => {
  const db = await getDb();
  const modifiedWishtlist: WishlistModelInput = {
    userId: new ObjectId(wishlist.userId),
    productId: new ObjectId(wishlist.productId),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const newWishlist = await db
    .collection(COLLECTION_WISHLIST)
    .insertOne(modifiedWishtlist);
  return newWishlist;
};

export const deleteWishlistById = async (_id: string) => {
  const db = await getDb();
  await db
    .collection(COLLECTION_WISHLIST)
    .deleteOne({ _id: new ObjectId(_id) });
};
