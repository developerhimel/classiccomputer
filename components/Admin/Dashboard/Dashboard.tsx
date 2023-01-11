import React from "react";
import Navbar from "./Navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Sidebar from "../Resusable/Sidebar";

export default function Dashboard() {
  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <Sidebar />
          <div className="grid grid-cols-4 gap-4 w-full h-20 p-5 ">
            <div className="border shadow-sm flex flex-col dark:bg-gray-800 transition ease-in-out   hover:-translate-y-1 hover:scale-105 hover:text-lime-600 duration-300">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-indigo-700 fad">
                  <AddShoppingCartIcon />
                </div>
                <span className="rounded-full p-1 text-white badge bg-teal-400 text-xs">
                  12%
                  <ArrowUpwardIcon className="w-4" />
                </span>
              </div>

              <div className="mt-8">
                <h1 className="num-1 text-2xl font-bold dark:text-white">9772</h1>
                <p className="text-lg font-semibold dark:text-gray-500 text-gray-500">
                  {" "}
                  Items Sales
                </p>
              </div>
            </div>
            <div className="border shadow-sm rounded-md flex flex-col dark:bg-gray-800 transition ease-in-out   hover:-translate-y-1 hover:scale-105 hover:text-lime-600 duration-300">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-indigo-700 fad">
                  <AddShoppingCartIcon />
                </div>
                <span className="rounded-full p-1 text-white badge bg-amber-400 text-xs">
                  6%
                  <ArrowDownwardIcon className="w-4" />
                </span>
              </div>

              <div className="mt-8">
                <h1 className="num-2 text-2xl font-bold dark:text-white">9054</h1>
                <p className="text-lg font-semibold dark:text-gray-500 text-gray-500">
                  New Orders
                </p>
              </div>
            </div>
            <div className="border shadow-sm flex flex-col dark:bg-gray-800 transition ease-in-out  hover:-translate-y-1 hover:scale-105 hover:text-lime-600 duration-300">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-indigo-700 ">
                  <AddShoppingCartIcon />
                </div>
                <span className="rounded-full p-1 text-white badge bg-teal-400 text-xs">
                  72%
                  <ArrowUpwardIcon className="w-4" />
                </span>
              </div>

              <div className="mt-8">
                <h1 className="num-3 text-2xl font-bold dark:text-white">8352</h1>
                <p className="text-lg font-semibold dark:text-gray-500 text-gray-500">
                  Total Products
                </p>
              </div>
            </div>
            <div className="border shadow-sm flex flex-col dark:bg-gray-800 transition ease-in-out   hover:-translate-y-1 hover:scale-105 hover:text-lime-600 duration-300">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-indigo-700 ">
                  <AddShoppingCartIcon />
                </div>
                <span className="rounded-full p-1 text-white badge bg-teal-400 text-xs">
                  150%
                  <ArrowUpwardIcon className="w-4" />
                </span>
              </div>

              <div className="mt-8">
                <h1 className="num-4 text-2xl font-bold dark:text-white">9903</h1>
                <p className="text-lg font-semibold dark:text-gray-500 text-gray-500">
                  New Visitor
                </p>
              </div>
            </div>

            <div className="border col-span-4 shadow-lg mt-6">
              <div className="card-header flex flex-row justify-between">
                <h1 className="h6">Sales Overview</h1>

                <div className="flex flex-row justify-center items-center">
                  <a href="#">
                    <i className="fad fa-chevron-double-down mr-6"></i>
                  </a>

                  <a href="#">
                    <i className="fad fa-ellipsis-v"></i>
                  </a>
                </div>
              </div>

              <div className="">
                <div className="p-8">
                  <h1 className="h2">5,337</h1>
                  <p className="text-black font-medium">Sales this month</p>

                  <div className="mt-20 mb-2 flex items-center">
                    <div className="py-1 px-3 rounded bg-green-200 text-green-900 mr-3">
                      <i className="fa fa-caret-up"></i>
                    </div>
                    <p className="text-black">
                      <span className="num-2 text-green-400"></span>
                      <span className="text-green-400">% more sales</span> in
                      comparison to last month.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="py-1 px-3 rounded bg-red-200 text-red-900 mr-3">
                      <i className="fa fa-caret-down"></i>
                    </div>
                    <p className="text-black">
                      <span className="num-2 text-red-400"></span>
                      <span className="text-red-400">
                        % revenue per sale
                      </span>{" "}
                      in comparison to last month.
                    </p>
                  </div>

                  <a href="#" className="btn-shadow mt-6">
                    view details
                  </a>
                </div>

                <div className="">
                  <div id="sealsOverview"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
