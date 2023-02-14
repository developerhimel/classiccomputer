import { MongoClient, ObjectId } from "mongodb";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Product from "../../components/Products/Product";

const ProductPage: NextPage = (props: any) => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const router = useRouter();
  const query = router.query;
  //   console.log(props.product);
  // const refreshData = () => {
  //   router.replace(router.asPath);
  //   setIsRefreshing(true);
  // };
  // React.useEffect(() => {
  //   setIsRefreshing(false);
  // }, [props]);

  // async function handleSubmit() {
  //   const userData = {}; /* create an object from the form */
  //   const res = await fetch("/api/user", {
  //     method: "PUT",
  //     body: JSON.stringify(userData),
  //   });
  //   // Check that our status code is in the 200s,
  //   // meaning the request was successful.
  //   if (res.status < 300) {
  //     refreshData();
  //   }
  // }

  return (
    <>
      <Head>
        <title>{props.product[0]?.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${props.product[0]?.description}`} />
        <meta name="keywords" content={`${props.product[0]?.name}`} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Product menu={props.menu} product={props.product} />
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );
  const db = client.db("cc");

  const menuCollections = db.collection("menu");
  const productsCollection = db.collection("products");

  const menuItems = await menuCollections.find().toArray();
  const product = await productsCollection
    .find({ _id: new ObjectId(ctx.query.id) })
    .toArray();

  client.close();

  return {
    props: {
      menu: menuItems.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
      })),
      product: product.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
        createdAt: item.createdAt.toString(),
      })),
    },
  };
}

export default ProductPage;
