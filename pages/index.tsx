import Head from "next/head";
import Navbar from "../components/reusable/NavBar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import ccdetails from "../json/ccdetails.json";
import { MongoClient } from "mongodb";
import { NextPage } from "next";
import Homepage from "../components/Homepage/Homepage";
import Footer from "../components/reusable/Footer/Footer";

const Home: NextPage = (props: any) => {
  // console.log(props.products);

  return (
    <>
      <Head>
        <title>
          Classic Computer || Largest tech accessories shop in Bangladesh
        </title>
        <meta
          name="description"
          content="Classic Computer has the most comprehensive array of Desktop PCs. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at our stores spread all over Bangladesh. Get your new iMac Desktop or Apple Mac Mini with an international warranty and servicing plan. To build a Desktop PC with the components of your choice, you can always depend on the experts of the Classic Computer PC shop. Take your gaming or professional content creation to the next level with a large collection of high-end Gaming and Rendering PC from Classic Computer. You can choose and build a complete Personal computer with our PC Builder feature anytime, anywhere. Or, build a Desktop PC to your taste right in front of you at the Classic Computer PC Shop."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="w-full">
        <Homepage
          banner={props.banner}
          products={props.products}
          slider={props.slider}
        />
        {/* Recent viewed products section */}
        <div className="bg-white dark:bg-gray-700">
          <div className="container m-auto mt-16 pt-10 pb-12">
            <div className="w-full">
              <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                Recent Viewed Products
              </h1>
              <p className="text-center text-sm mt-1 text-gray-800 dark:text-white">
                Check Your Recent Viewed Products!
              </p>
            </div>
            <div className="w-full mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-3 sm:px-0 gap-5">
                {props.products.slice(8, 14).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 group/main py-4 rounded-lg border dark:border-gray-800 shadow-sm hover:shadow-md"
                  >
                    <div className="border-b-[5px] border-b-gray-50 dark:border-b-gray-700">
                      {/* <span className="text-xs bg-pink-500 pr-2 text-white p-1 rounded-r-full">
                        Save:
                        <NumericFormat
                          displayType="text"
                          className="px-1"
                          value={item.price - item.discountPrice}
                          thousandSeparator=","
                        />
                        ৳
                      </span> */}

                      <div className="p-3 relative w-full h-[230px] overflow-hidden my-2">
                        {item.src && (
                          <Link
                            href={{
                              pathname: `/${item.name
                                .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
                                .toLowerCase()}`,
                              query: { id: item.id },
                            }}
                          >
                            <Image
                              src={item.src}
                              fill
                              alt={"product image"}
                              className="w-full group-hover/main:scale-105 ease-in-out duration-300 object-contain"
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="px-4 pt-4">
                      <Link
                        href={"/"}
                        className="text-sm text-ellipsis line-clamp-3 hover:underline hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-500"
                      >
                        {item.name}
                      </Link>
                      <div className="pt-2 flex flex-row flex-wrap justify-start items-end">
                        <div className="flex flex-row justify-start text-sky-600 font-semibold">
                          <NumericFormat
                            displayType="text"
                            className=""
                            value={
                              item.discountPrice
                                ? item.discountPrice
                                : item.price
                            }
                            thousandSeparator=","
                          />
                          <span className="ml-1">৳</span>
                        </div>
                        {item.discountPrice && (
                          <div className="flex flex-row justify-start text-xs dark:text-gray-400 ml-3 line-through">
                            <NumericFormat
                              displayType="text"
                              className=""
                              value={item.price}
                              thousandSeparator=","
                            />
                            <span className="ml-1">৳</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-16">
          <div className="container m-auto px-3 md:px-0">
            <div className="w-full pb-8">
              <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                Classic Computer Info
              </h1>
              <p className="text-center text-sm mt-1 text-gray-800 dark:text-white">
                Look & Get Information About Classic Computer!
              </p>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item bg-white dark:bg-gray-700 dark:border-gray-600 border border-gray-200 p-1">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button
                    className="accordion-button collapsed relative flex items-center w-full py-3 px-5 text-sm font-bold text-gray-600 text-left bg-white dark:bg-gray-700 dark:text-gray-200 border-0 rounded-none transition focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Expand and get information about classic computer
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5 border-t">
                    {ccdetails.map((item: any, index: number) => (
                      <div className="bg-white dark:bg-gray-700" key={index}>
                        <h1 className="text-gray-800 dark:text-white text-base font-semibold py-2">
                          {item.title}
                        </h1>
                        <p className="text-justify text-gray-500 dark:text-gray-200 text-sm pb-4">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URL as string
  );

  const db = client.db("cc");

  const menuCollections = db.collection("menu");
  const productsCollection = db.collection("products");

  const menuItems = await menuCollections.find().toArray();
  const products = await productsCollection
    .find()
    .limit(12)
    .sort({ createdAt: -1 })
    .toArray();
  const slider = await db.collection("slider").find().toArray();
  const banner = await db.collection("banner").find().toArray();

  client.close();

  return {
    props: {
      menu: menuItems.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
      })),
      products: products.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
        createdAt: item.createdAt.toString(),
      })),
      slider: slider.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
      })),
      banner: banner.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: null,
      })),
    },
  };
}

export default Home;
