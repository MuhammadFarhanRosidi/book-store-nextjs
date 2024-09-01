import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "book_store";
const COLLECTION_PRODUCTS = "products";

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

export type ProductModelInput = Omit<ProductModel, "_id">;

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getAllProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection(COLLECTION_PRODUCTS)
    .find()
    .toArray()) as ProductModel[];
  return products;
};

export const getProductById = async (_id: string) => {
  const db = await getDb();
  const product = (await db
    .collection(COLLECTION_PRODUCTS)
    .findOne({ _id: new ObjectId(_id) })) as ProductModel;
  return product;
};
