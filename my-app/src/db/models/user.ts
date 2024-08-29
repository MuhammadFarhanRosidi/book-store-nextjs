import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPass } from "../helpers/bcrypt";

const DATABASE_NAME = "book_store";
const COLLECTION_USERS = "users";

export interface UserModel {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

export type UserModelInput = Omit<UserModel, "_id">;

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const createUser = async (user: UserModelInput) => {
  const db = await getDb();
  const modified: UserModelInput = {
    ...user,
    password: hashPass(user.password),
  };
  const newUser = await db.collection(COLLECTION_USERS).insertOne(modified);
  return newUser;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db.collection(COLLECTION_USERS).findOne({
    email,
  })) as UserModel;
  return user;
};
