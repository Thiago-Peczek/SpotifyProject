import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admThiago:Senha-ADM1@cluster0.o7qrl9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projetoSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
