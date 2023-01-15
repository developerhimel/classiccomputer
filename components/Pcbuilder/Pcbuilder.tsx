import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SaveIcon from "@mui/icons-material/Save";
import ScreenshotIcon from "@mui/icons-material/Screenshot";
import PrintIcon from "@mui/icons-material/Print";
import Link from "next/link";

function Pcbuilder() {
  return (
    <div className="container m-auto mb-20">
      <div className="relative shadow mx-auto mt-10 flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between border border-b-0 rounded-t">
        <a className="flex items-center text-xl " href="/">
          <span className="mr-2  text-blue-600">
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              width={96}
              height={60}
            />
          </span>
          <span className="text-base font-semibold">Classic Computer</span>
        </a>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <li className="flex-col flex items-center justify-center">
              <Link href={"/"}>
                <ShoppingCartIcon className="w-6 h-6 text-indigo-500" />
              </Link>
              <span className="text-xs mt-1">Add to Cart</span>
            </li>
            <li className="flex-col flex items-center justify-center">
              <Link href={"/"}>
                <SaveIcon className="w-6 h-6 text-indigo-500" />
              </Link>
              <span className="text-xs py-1">Save PC</span>
            </li>
            <li className="flex-col flex items-center justify-center">
              <Link href={"/"}>
                <PrintIcon className="w-6 h-6 text-indigo-500" />
              </Link>
              <span className="text-xs mt-1">Print</span>
            </li>

            <li className="flex-col flex items-center justify-center">
              <Link href={"/"}>
                <ScreenshotIcon className="w-6 h-6 text-indigo-500" />
              </Link>
              <span className="text-xs mt-1">Screenshot</span>
            </li>
            <li className="mt-2 mr-2">
              <Link
                className="rounded-xl border-2 border-blue-600 px-6 py-2  font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                href={"/"}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border rounded-b container m-auto max-w-screen-lg pb-5">
        <div className="flex justify-between p-5">
          <div className="flex flex-col">
            <h1 className="text-blue-500 text-base">
              PC Builder - Build Your Own Computer - Classic Computer
            </h1>
            <div className="flex gap-2 ">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mt-3  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="mt-2">Hide Unconfigured Components</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border border-dotted border-red-500  px-10 py-2 text-center">
              <span className="text-xl ">OW</span>
              <p className="text-gray-600 text-xs whitespace-normal">
                Estimated Wattage
              </p>
            </div>
            <div className="border  bg-blue-500 px-10 py-2 ">
              <span className="text-xl text-white">0৳</span>
              <p className="text-white text-xs">0 Items</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 rounded-sm mx-10 justify-center items-center m-auto">
          <span className="px-3 text-xs text-white ">Core Components</span>
        </div>
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img src="/assets/Icon/Cpu.png" alt="cpu" height={50} width={50} />
            <span className="text-sm mt-4 ">CPU</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/CpuCooler.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">CPU Cooler</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/Motherboard.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">MotherBoard</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img src="/assets/Icon/Ram.png" alt="cpu" height={50} width={50} />
            <span className="text-sm mt-4 ">Ram</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/Storage.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Storage</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/Graphics Card.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Graphics Card</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/powersupply.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Power Supply</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/2704333.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Casing</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>
        <div className="bg-gray-600 rounded-sm mx-10 justify-center items-center m-auto">
          <span className="px-3 text-xs text-white ">Peripherals & Others</span>
        </div>
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/3474360.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Monitor</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/9019524.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Casing Cooler</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/2263611.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Keyboard</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/1786973.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Mouse</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/937363.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Headphone</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>{" "}
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/1368352.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">Ups</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>
        <div className="flex justify-between mx-12 border-b my-2">
          <div className="flex ml-3 gap-3">
            <img
              src="/assets/Icon/2603242.png"
              alt="cpu"
              height={50}
              width={50}
            />
            <span className="text-sm mt-4 ">AntiVirus</span>
          </div>
          <button className="rounded text-sm  border border-blue-500 md:mx-0 h-10 w-24 mt-2 hover:text-white hover:bg-blue-400">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pcbuilder;
