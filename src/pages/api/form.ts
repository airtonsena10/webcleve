/* eslint-disable import/no-anonymous-default-export */
import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient } from "mongodb";
import url from "url";

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const { name, date, dia, hora } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection("submit");

  await collection.insertOne({
    name,
    date,
    dia,
    hora,
  });

  return response.status(201).json({ message: "Formulario enviado" });
};
