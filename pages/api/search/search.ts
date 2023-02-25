import type { NextApiRequest } from "next";
import { MongoClient } from "mongodb";

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === "POST") {
    const { query } = req.body;
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URL as string
    );

    const db = client.db("cc");

    const products = db.collection("products");
    const filteredProducts = await products
      .find({ name: { $regex: query, $options: "i" } })
      .toArray();

    res.json(filteredProducts);

    client.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}
