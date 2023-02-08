import Head from "next/head";
import Navbar from "../components/reusable/NavBar/Navbar";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import featuredItems from "../json/featuredItems.json";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import ccdetails from "../json/ccdetails.json";
import Footer from "../components/reusable/Footer/Footer";
import { MongoClient } from "mongodb";
import { NextPage } from "next";

SwiperCore.use([Autoplay]);

const Home: NextPage = (props: any) => {
  // console.log(props.banner);

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
        <Navbar categoryItems={props.menu} />
        <div className="container m-auto mt-10">
          {/* Slider Section Start */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-2">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {props.banner.slice(0, 2).map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-full hover:scale-[0.98] ease-in-out duration-300 cursor-pointer"
                >
                  <Image
                    src={item.src}
                    width={350}
                    height={160}
                    alt={item.title}
                    className="w-full hover:rounded-md ease-in-out duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-2 relative rounded-b-md shadow-md hover:cursor-pointer cursor-default">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                autoplay={{ delay: 3000 }}
                loop={true}
                speed={300}
                direction="horizontal"
                draggable={true}
              >
                {props.slider.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    {/* <Image
                      src={item.src}
                      alt={item.title}
                      width={500}
                      height={250}
                      className="w-full"
                      priority
                    /> */}
                    {/* <Image fill={true} className="object-contain" src={item.src} alt={item.title} /> */}
                    <img src={item.src} alt={item.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {props.banner.slice(2, 4).map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-full hover:scale-[0.98] ease-in-out duration-300 cursor-pointer"
                >
                  <Image
                    src={item.src}
                    width={350}
                    height={160}
                    alt={item.title}
                    className="w-full hover:rounded-md ease-in-out duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Slider Section End */}

          {/*  */}
          <div className="w-full mt-16">
            <div className="w-full">
              <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                Featured Category
              </h1>
              <p className="text-center text-sm mt-1 text-gray-800 dark:text-white">
                Get Your Desired Product from Featured Category!
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center my-6 gap-[2px]">
              {featuredItems.map((item: any, index: number) => (
                <div className="w-full group overflow-hidden" key={index}>
                  <div className="bg-white dark:bg-gray-700 items-center hover:scale-[1.08] cursor-pointer rounded shadow-sm ease-in-out duration-200 flex flex-col p-5 overflow-hidden">
                    <Image
                      src={item.url}
                      alt={item.title}
                      height={48}
                      width={48}
                    />
                    <h2 className="mt-2 truncate text-gray-800 group-hover:text-pink-600 dark:text-gray-200 text-sm">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-16">
            <div className="w-full">
              <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                Featured Products
              </h1>
              <p className="text-center text-sm mt-1 text-gray-800 dark:text-white">
                Check & Get Your Desired Product!
              </p>
            </div>
            <div className="w-full mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-3 sm:px-0 gap-5">
                {props.products.slice(0, 12).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 group/main py-4 rounded-lg shadow-sm hover:shadow-md"
                  >
                    <div className="border-b-[5px] border-b-gray-50 dark:border-b-gray-800">
                      <span
                        className={`text-xs bg-pink-600 ${
                          !item.discountPrice && "opacity-0"
                        } pr-2 text-white p-1 rounded-r-full`}
                      >
                        Save:
                        <NumericFormat
                          displayType="text"
                          className="px-1"
                          value={item.price - item.discountPrice}
                          thousandSeparator=","
                        />
                        ৳
                      </span>
                      <div className="p-3 relative">
                        <Link
                          href={{
                            pathname: `/${item.name
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                            query: { id: item.id },
                          }}
                        >
                          <Image
                            src={item.src}
                            width={100}
                            height={100}
                            alt={"product image"}
                            className="w-full group-hover/main:scale-105 ease-in-out duration-300"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="px-4 pt-4">
                      <Link
                        href={{
                          pathname: `/${item.name
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                          query: { id: item.id },
                        }}
                        className="text-sm text-ellipsis line-clamp-3 hover:underline hover:text-pink-600 dark:text-gray-100"
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
                          <div className="flex flex-row justify-start text-xs dark:text-gray-300 ml-3 line-through">
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
                {props.products.slice(0, 6).map((item: any, index: number) => (
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
                      <div className="p-3 relative">
                        <Link href={"/"}>
                          <Image
                            src={"/assets/products/1.jpg"}
                            width={100}
                            height={100}
                            alt={"product image"}
                            className="w-full group-hover/main:scale-105 ease-in-out duration-300"
                          />
                        </Link>
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
                    className="accordion-button relative flex items-center w-full py-3 px-5 text-sm font-bold text-gray-600 text-left bg-white dark:bg-gray-700 dark:text-gray-200 border-0 rounded-none transition focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
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
        <div>
          <Footer />
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
  const products = await productsCollection.find().toArray();
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
