import React from "react";
import Navbar from "../components/reusable/NavBar/Navbar";
import Footer from "../components/reusable/Footer/Footer";
import { NextPage } from "next";
import { MongoClient } from "mongodb";
import Pcbuilder from "../components/Pcbuilder/Pcbuilder";

const PcbuilderPage: NextPage = (props: any) => {
  return (
    <div>
      <Navbar categoryItems={props.menu} />
      <div>
        <Pcbuilder />
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );

  const db = client.db("cc");

  const menuCollections = db.collection("menu");

  const menuItems = await menuCollections.find().toArray();

  client.close();

  return {
    props: {
      menu: menuItems.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
      })),
    },
  };
}

export default PcbuilderPage;
