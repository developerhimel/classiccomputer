import Link from "next/link";
import React from "react";
import Filter from "../components/Filter/Filter";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import DifferenceIcon from "@mui/icons-material/Difference";
import Footer from "../components/reusable/Footer/Footer";

function Docs() {
  return (<><div className="container mx-auto">
  <nav
    aria-label="Page Navigation"
    className="my-5 flex max-w-xs  text-sm space-x-1 rounded-md bg-white py-2"
  >
    <Link
      href="#"
      className="flex items-center space-x-1 font-medium hover:text-blue-600"
      aria-label="First Page"
    >
      <HomeIcon className="w-5" />
    </Link>
    <Link
      href="#"
      className="flex items-center font-medium hover:text-blue-600"
      aria-label="Previous Page"
    >
      <p>/</p>
    </Link>
    <ul className="flex items-center flex-row">
      <li>
        <Link
          href="#"
          className="px-2  font-base text-gray-700 text-sm sm:px-1 hover:underline"
          aria-label="Page 8"
        >
          Desktop
        </Link>
      </li>
      <p>/</p>
      <li>
        <Link
          href="#"
          className="rounded-md px-2 font-base text-sm text-gray-700  hover:underline"
          aria-label="Current Page"
        >
          Next
        </Link>
      </li>
      <p>/</p>
      <li>
        <Link
          href="#"
          className="px-2  font-base text-sm text-gray-700 sm:px-1  hover:underline"
          aria-label="Page 10"
        >
          Next Page
        </Link>
      </li>
    </ul>
  </nav>
  <div className="flex flex-row flex-wrap w-full  text-sm tracking-widest items-center m-auto gap-2 my-3">
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      0-9
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      AMD
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500 hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500 hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500  hover:underline border"
    >
      Intel
    </Link>
    <Link
      href={"/"}
      className="p-3 hover:text-white rounded-2xl hover:bg-blue-500 hover:underline border"
    >
      Intel
    </Link>
  </div>
  <div className="flex-row flex bg-gray-50 gap-3">
    <Filter />
    <div className="flex-col flex">
      <div className="flex-row flex bg-white shadow-b rounded-lg h-16 mx-8 border justify-between items-center my-4 ">
        <p className=" p-5  text-black font-semibold  items-center">
          Desktop
        </p>
        <div className="flex-row  flex h-20 justify-center items-center text-sm  gap-4 my-4 mr-24">
          <p className="text-gray-600">Sort By:</p>
          <select className="block text-sm px-4 py-2 w-28  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            <option selected>Default</option>
            <option value="US">Low to High </option>
            <option value="US"> High to Low </option>
          </select>
        </div>
      </div>
      <section className="bg-gray-50 py-4 text-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 ">
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={250}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
              <div className="aspect-square overflow-hidden border-b">
                <Image
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  height={100}
                  width={200}
                  src="/assets/Featured/380.png"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-cyan-700 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Save 1000৳
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2">
                  <p className="font-semibold text-sm hover:underline hover:cursor-pointer hover:text-red-500">
                    Antec DF600 Flux Mid-Tower Case & Symphony 360 ARGB
                    Black CPU Cooler Combo
                  </p>
                  <ul className="mt-5 text-sm text-gray-600 list-disc">
                    <li>Motherboard Support: ATX, Micro-ATX, Mini-ITX</li>
                    <li>
                      Pre-installed fans: 3 In Front, 1 on PSU shroud, 1 in
                      Rear
                    </li>
                    <li>3x PWM ARGB LED Fan</li>
                    <li>Speed: 800-1600rpm ± 100</li>
                  </ul>
                  <div className="flex-row flex gap-2">
                    <p className="mr-3 mt-5  font-semibold text-blue-500">
                      16,500৳
                    </p>
                    <del className=" mt-5 text-gray-500"> 17,500৳ </del>
                  </div>
                </div>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
                  Buy Now
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-700 group-hover:text-white">
                  +
                </div>
              </button>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600 flex-row">
                <div className="flex w-full items-center justify-center text-sm text-gray-600 transition group-hover:bg-gray-300 group-hover:text-black gap-2">
                  <DifferenceIcon className="w-5" /> Add to Compare
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>
      
        <div className="flex flex-row flex-wrap w-full tracking-widest  items-center ml-5 gap-2 mb-5">
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline "
          >
            Previous
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline "
          >
            1
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            2
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            3
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            4
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            5
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            6
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            7
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            8
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            9
          </Link>
          <Link
            href={"/"}
            className="p-3  hover:text-white rounded-2xl hover:bg-blue-500 hover:underline"
          >
            Next
          </Link>
          <p className="ml-72 text-base">Showing 1 to 20 of 244 (13 Pages)</p>
        </div>
        <div className="bg-white shadow-lg p-10 ">
            <p className="font-semibold text-lg my-5 ">
            Get the Latest Configured Desktop PC within an Affordable Price in Bangladesh

            </p>
            <span className="text-xs mt-3 my-5">
            Desktop PCs are a bear necessity for any person as it allows you to compute seamlessly and get your work done faster and is much more efficient. Desktops are flexible because you can change the components and upgrade them with the latest available technology. There are many different desktop setups for various tasks and work. Desktops can be configured for everyday office tasks to high-configured and performing content-creating layouts.
            </span>
            <p className="font-semibold text-base my-5 text-blue-800">Get Your Required Desktop PC      </p>
            <span className="text-xs mt-5 my-5">
            You will be able to find a vast range of desktop PCs with various configurations and form factors. Classic Computer has numerous Desktop PCs available to choose from, starting with Special PC, Star PC, Gaming PC, Brand PC, All in One PC, Portable Mini PC, Apple Mac Mini, and Apple iMac. You can choose the PC you need for yourself from this vast range of desktop PCs. All of these Desktop PCs are configured with the latest generation components and can complete your work quickly and efficiently. If you are looking for a dedicated branded desktop PC, you can choose from the Brand PC category to select your favorite brand’s Desktop. But if you are looking for a small form factor desktop PC, you can go for the Portable Mini PC category to select the suitable candidate for your computing. You can also choose from our Gaming Desktop collection if you are looking for a gaming and working setup. 
            </span>
            <p className="font-semibold text-base my-5  text-blue-800">Get Your Desired Desktop PC at your doorstep.</p>
            <span className="text-xs mt-5 my-5">
           Classic Computer provides you with the top Desktop PCs to buy at the most reasonable price in Bangladesh. You can visit our website and directly order from there for your desired Desktop PC. You can also visit our dedicated and authorized shops located in Dhaka, Gazipur, Chattagram, Khulna, and Rangpur. 
            </span>
        </div>
      
    </div>
  </div>
</div>
<Footer/>
</>
    
  );
}

export default Docs;
