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
  const wishtlists = (await db
    .collection(COLLECTION_WISHLIST)
    .find()
    .toArray()) as WishlistModel[];
  return wishtlists;
};

export const createWishlist = async (wishtlist: WishlistModelInput) => {
  const db = await getDb();
  const newWishlist = await db
    .collection(COLLECTION_WISHLIST)
    .insertOne(wishtlist);
  return newWishlist;
};

export const deleteWishlistById = async (_id: ObjectId) => {
  const db = await getDb();
  await db.collection(COLLECTION_WISHLIST).deleteOne({ _id });
};
