import type { NextApiRequest } from "next";
import { MongoClient } from "mongodb";

export default async function handler(req: NextApiRequest, res: any) {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );

  const db = client.db("cc");

  const menuCollections = db.collection("menu");
  const filter = {} as any;
  if (req.query.userId) {
    filter.userId = req.query.userId;
  }
  if (req.query.collectionId) {
    filter.collectionId = req.query.collectionId;
  }
  if (req.query.nftId) {
    filter.nftId = req.query.nftId;
  }

  const menuItems = await menuCollections.find().toArray();

  res.status(200).json(
    menuItems.map((item) => ({
      ...item,
      id: item._id.toString(),
    }))
  );
}
