import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import featuredItems from "../../json/featuredItems.json";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

SwiperCore.use([Autoplay]);

function Homepage(props: { banner: any; products: any; slider: any }) {
  return (
    <div className="container m-auto">
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

      {/* Featured Category */}
      <div className="w-full mt-16">
        <div className="w-full">
          <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
            Featured Category
          </h1>
          <p className="text-center text-sm mt-1 text-gray-800 dark:text-white">
            Get Your Desired Product from Featured Category!
          </p>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-8 items-center my-6 gap-[2px]">
          {featuredItems.map((item: any, index: number) => (
            <div className="w-full group overflow-hidden" key={index}>
              <div className="bg-white dark:bg-gray-700 items-center hover:scale-[1.08] cursor-pointer rounded shadow-sm ease-in-out duration-200 flex flex-col p-5 overflow-hidden">
                <i
                  className={`fa-${item.style} text-gray-400 ${item.icon} text-4xl`}
                ></i>
                <h2 className="mt-2 truncate text-gray-800 group-hover:text-pink-600 dark:text-gray-200 text-sm">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
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
            {props.products.map((item: any, index: number) => (
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
                          loading="lazy"
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
                    href={{
                      pathname: `/${item.name
                        .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
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
                          item.discountPrice ? item.discountPrice : item.price
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
  );
}

export default Homepage;
