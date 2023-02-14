import { MongoClient } from "mongodb";
import { NextPage } from "next";
import React from "react";
import UpdateMongodb from "../components/reusable/UpdateMongodb";

const Updatedb: NextPage = (props: any) => {
  return (
    <>
      <UpdateMongodb products={props.products} />
    </>
  );
};
export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );

  const db = client.db("cc");

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();

  client.close();

  return {
    props: {
      products: products.map((item) => ({
        ...item,
        _id: item._id.toString(),
        createdAt: item.createdAt.toString(),
      })),
    },
  };
}
export default Updatedb;
