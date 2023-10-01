import 'dotenv/config';


export const envs = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  MONGO_URL: process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://mongo-user:123456@localhost:27017",
  MONGO_DB_NAME:  process.env.MONGO_DB_NAME ? process.env.MONGO_DB_NAME : "mystore"
}