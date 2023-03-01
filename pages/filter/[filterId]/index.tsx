import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Filter from "../../../components/Filter/Filter";

const FilterPage: NextPage = (props: any) => {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <Head>
        <title>
          {`${query.cg} - Classic Computer || Largest tech accessories shop
          in Bangladesh`}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Classic Computer || Largest tech accessories shop in Bangladesh"
        />
        <meta
          name="keywords"
          content="Largest tech accessories shop in Bangladesh"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Filter />
    </>
  );
};

export default FilterPage;
