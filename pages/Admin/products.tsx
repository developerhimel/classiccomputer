import React from "react";
import Sidebar from "../../components/Admin/Resusable/Sidebar";
import Navbar from "../../components/Admin/Dashboard/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
function products() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="dark:bg-gray-900">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between mb-4">
              <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Products"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  Search
                </button>
              </form>
        <Link href={"/Admin/Addproducts"}>      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add Products
              </span>
            </button></Link> 

            </div>
           
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
               <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="/assets/Featured/380.png"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  MSI GF63 Thin 10SCXR Core
                </h3>
                <div className="flex mt-1 justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    90000৳
                  </p>
                  <EditIcon className="ml-20" />
                  <DeleteIcon className="mr-3" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default products;
