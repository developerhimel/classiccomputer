import type { NextApiRequest } from "next";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: any) {
  const { products } = req.body;

  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );

  const db = client.db("cc");

  const collections = db.collection("products");

  products.forEach(async (item: any) => {
    const id = new ObjectId(item._id);
    const result = await collections.findOneAndUpdate(
      { _id: id },
      { $set: { createdAt: id.getTimestamp() } }
    );
    console.log(result);
  });

  res.status(200).json({ message: "Database updated" });
}
