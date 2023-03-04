import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DifferenceIcon from "@mui/icons-material/Difference";
import Link from "next/link";
import { Button } from "@mui/material";
import { Skeleton } from "antd";

function ProductUi(props: { data: any; limit: number }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, [props.data]);

  return (
    <>
      {props.data?.slice(0, props.limit).map((item: any, index: number) => (
        <div
          key={index}
          className="bg-white shadow-md min-h-[580px] rounded-md group/main hover:shadow-pink-300"
        >
          <div>
            <div className="pt-2">
              <span
                className={`text-xs bg-pink-600 pr-2 text-white p-1 rounded-r-full`}
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
            </div>
            <div className="p-3 relative w-full h-[230px] overflow-hidden border-b-2">
              {loading && (
                <Skeleton.Image className="w-full h-full" active={loading} />
              )}
              <Link
                href={{
                  pathname: `/${item.name
                    .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
                    .toLowerCase()}`,
                  query: { id: item._id },
                }}
              >
                <Image
                  src={item.src}
                  fill
                  alt={item.name}
                  onLoad={() => setLoading(false)}                  
                  className="w-full group-hover/main:scale-105 ease-in-out duration-300 object-contain p-5"
                />
              </Link>
            </div>
          </div>
          <div className="px-3 py-3 text-sm font-semibold cursor-pointer">
            <Link
              href={{
                pathname: `/${item.name
                  .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
                  .toLowerCase()}`,
                query: { id: item._id },
              }}
            >
              <div className="w-full h-10">
                <h3 className="hover:text-red-500 hover:underline line-clamp-2 text-ellipsis">
                  {item?.name}
                </h3>
              </div>
            </Link>
          </div>
          <div className="border-b mx-3 pb-2 min-h-[120px]">
            {item.keyFeatures.slice(0, 4).map((item: any, index: number) => (
              <div
                key={index}
                className="text-xs flex justify-start items-start my-2 text-gray-700"
              >
                <i className="fa-solid fa-circle text-[4px] mr-2 mt-[5px]"></i>
                <p className="line-clamp-1 text-ellipsis">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="pt-2 flex flex-row flex-wrap justify-center items-center px-3">
            <div className="flex flex-row justify-start text-sky-600 font-semibold">
              <NumericFormat
                displayType="text"
                className=""
                value={item.discountPrice ? item.discountPrice : item.price}
                thousandSeparator=","
              />
              <span className="ml-1">৳</span>
            </div>
            <div className="flex flex-row justify-start text-xs dark:text-gray-300 ml-3 line-through">
              <NumericFormat
                displayType="text"
                className=""
                value={item.price}
                thousandSeparator=","
              />
              <span className="ml-1">৳</span>
            </div>
          </div>
          <div className="mx-3 py-3">
            <Button
              startIcon={<ShoppingCartIcon />}
              className="bg-indigo-50 text-indigo-700 hover:text-white w-full shadow-none font-semibold capitalize hover:bg-indigo-700"
              variant="contained"
            >
              Buy Now
            </Button>
            <Button
              startIcon={<DifferenceIcon />}
              className="bg-white mt-2 text-gray-700 w-full shadow-none capitalize hover:bg-gray-100 text-xs"
              variant="contained"
            >
              Add to Compare
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductUi;
