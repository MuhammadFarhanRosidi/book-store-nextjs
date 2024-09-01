import { MongoClient } from "mongodb";

const connectionString =
  process.env.MONGO_URI ||
  "mongodb+srv://muhfarros28:hacktivfarhan@farhanrosidi.wmzyn.mongodb.net/?retryWrites=true&w=majority&appName=FarhanRosidi";

if (!connectionString) {
  throw new Error("Connection string tidak ada");
}

let client: MongoClient;

export const getMongoClientInstance = async () => {
  if (!client) {
    client = new MongoClient(connectionString);
    await client.connect();
  }
  return client;
};
