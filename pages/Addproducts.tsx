
import React from "react";
import Sidebar from "../components/Admin/Resusable/Sidebar";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Image from "next/image";
import FilterListIcon from "@mui/icons-material/FilterList";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageUploader from "../components/Admin/Resusable/ImageUploader";

function Addproducts() {
  return (
    <div className="flex-row flex shadow-md">
      <Sidebar />
      <div className="">
        <div className="flex-row flex p-8 justify-between w-full">
          <div className="flex-col">
            <div className="gap-2 flex">
              <h2 className="font-bold text-xl">Edit Products</h2>
              <QuestionMarkIcon className="text-white bg-gray-400  text-sm  mt-2 rounded-full" />
            </div>
            <div>
              <p className="text-gray-500 mt-3 text-sm mx-6 p-5">
                The Most Important Feature in the Product Editing Section Is The
                Adding Part.When Adding Products Here,Do Not Ignore To Fill in
                All The Recquired Fields Completely And follow The Products
                Adding Rules.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <div className="border-2 h-12 justify-center text-center border-blue-600 items-center">
              <button className="px-6 py-3 h-10 hover:text-blue-500 truncate">
                Open Documentation
              </button>
            </div>

            <div className="border-2 h-12 border-blue-600 ">
              <button className="px-5 py-3 h  hover:text-blue-500 truncate">
                Setup Details
              </button>
            </div>

            <div className="py-2">
              <MoreHorizIcon className="border-2 text-2xl w-10 h-7 hover:text-blue-500 hover:cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex  mt-5 p-5 shadow-sm">
          <ul className="mx-auto grid  grid-cols-3 gap-x-5 px-8">
            <li className="">
              <input
                className="peer sr-only"
                type="radio"
                value="yes"
                name="answer"
                id="yes"
                checked
              />
              <label
                className="flex  cursor-pointer truncate border text-center items-center justify-center bg-gray-50 border-gray-300  py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                htmlFor="yes"
              >
                Product List
              </label>

              <div className=" absolute ml-72 bg-white shadow-lg left-0 p-6 border mt-2 rounded-lg mx-auto  w-full transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                <div>
                  <div className="py-5 mr-10">
                    <h1 className="text-center text-2xl font-bold text-gray-800">
                      All Products
                    </h1>
                  </div>

                  <section className="py-10 bg-gray-100 mr-60">
                    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div className="relative flex items-end overflow-hidden justify-center rounded-xl">
                          <Image
                            src="/assets/Featured/380.png"
                            height={100}
                            width={190}
                            alt="Hotel Photo"
                          />
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">MSI Modern 14 </h2>
                          <p className="mt-1 text-sm text-slate-400">
                            Intel Core i3
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p>
                              <span className="text-lg font-bold text-blue-500">
                                45000৳
                              </span>
                            </p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                              <ModeEditIcon />

                              <button className="text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </section>
                </div>
              </div>
            </li>

            <li className="">
              <input
                className="peer sr-only"
                type="radio"
                value="no"
                name="answer"
                id="no"
              />
              <label
                className="flex justify-center  cursor-pointer bg-gray-50  border border-gray-300  py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                htmlFor="no"
              >
                Add Products
              </label>

              <div className=" ml-72 absolute bg-white  left-0 mt-10  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                <div className="">
                  <div className="flex flex-row justify-between gap-5 m-auto w-full">
                    <div className="w-2/3">
                      <input
                        type="text"
                        placeholder="Search Products"
                        id="large-input"
                        className="p-4 w-full ml-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="flex flex-row bg-gray-50 px-5 py-3 w-28 h-12 shadow mt-2">
                      <FilterListIcon /> <p>Filter</p>
                    </div>
                    <div className="flex flex-row bg-gray-50 px-5 py-3 w-36 h-12 shadow mt-2">
                      <AttachFileIcon /> <p>Attachment</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 w-full gap-4 mt-5">
                    <div className="px-10  flex-col flex">
                      <h2 className="font-semibold">Product Name</h2>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="px-5 w-full py-3 mt-3"
                      />
                      <span className="text-gray-500 text-sm mt-3">
                        Do not Need Exceed 20 Characters When Entering The
                        Product Name.
                      </span>
                      <div className="flex flex-row justify-between">
                        <div className="mt-5">
                          <h2 className="font-semibold">Product Price</h2>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="px-5 w-full py-2 mt-3"
                          />
                        </div>
                        <div className="mt-5">
                          <h2 className="font-semibold">Reguler Price</h2>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="px-5 w-full py-2 mt-3"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <h2 className="font-semibold">Description</h2>
                        <textarea
                          name=""
                          className="mt-2"
                          typeof="text"
                          placeholder="Description"
                          id=""
                          cols={60}
                          rows={10}
                        ></textarea>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="mt-5">
                          <h2 className="font-semibold">Count In Stock</h2>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="px-5 w-full py-2 mt-3"
                          />
                        </div>
                        <div className="mt-5">
                          <h2 className=" font-semibold">Warranty Details</h2>
                          <select name="Warranty" id="" className="px-5 py-2 mt-2 w-full">
                            <option value="">1 Year</option>
                            <option value="">2 Year</option>
                            <option value="">3 Year</option>
                            <option value="">4 Year</option>
                            <option value="">5 Year</option>
                          </select>
                        </div>
                        <div className="mt-5">
                          <p className="font-semibold">Status</p>
                          <select
                            name="Brands"
                            id=""
                            className="px-5 py-2 mt-3"
                          >
                            <option value="">IN Stock</option>
                            <option value="">Out Of Stock</option>
                          </select>
                        </div>
                      </div>
                      <div className=" flex flex-row gap-2 mt-5 justify-between">
                        <div>
                          <p className="font-semibold">Categories</p>
                          <select
                            name="Brands"
                            id=""
                            className="px-5 py-2 mt-3"
                          >
                            <option value="">Top New</option>
                            <option value="">Recent</option>
                            <option value="">Most Populer</option>
                          </select>
                        </div>

                        <div>
                          <p className="font-semibold">Brands</p>
                          <select
                            name="Brands"
                            id=""
                            className="px-5 w-32 py-2 mt-3"
                          >
                            <option value="">MSI</option>
                            <option value="">Acer</option>
                          </select>
                        </div>
                      </div>
                      <div>
                     <h2 className="font-semibold text-emerald-600 text-center mt-5 "> Extra Specification</h2>
                     <div className="grid grid-cols-3 mt-4">
                      <div className="text-emerald-600"> <h2>Fingerprint Sensor</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Security Locker Slot</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Operating System</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Battery Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Battery Capacity</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Color</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            </div>
                      <div className="text-emerald-600"><h2>Display Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Panel Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Aspect Ratio</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Brightness</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Refresh Rate</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Color Support</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            </div>
                      <div className="text-emerald-600"><h2>Response Time</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Connectivity</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Mechanical Design</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Weight</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Power Consumption</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Power Factor</h2>
                            <input type="text" className="w-2/3 mt-3" /></div>

                     </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <ImageUploader />
                      <div className="mt-5">
                        <h2 className="text-lg font-semibold text-center text-emerald-600">
                          
                          Specification
                        </h2>
                        <div className="grid grid-cols-3 mt-5 ">
                          <div className="text-emerald-600">       
                            <h2>Processor Brand</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Processor Model</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Processor Frequency</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Processor Core</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Processor Thread</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>CPU Cache</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Graphics Model</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Graphics Memory</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Keyboard Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>TouchPad</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <button className="px-10 py-3 mt-10 hover:bg-teal-600 bg-green-400 cursor-pointer text-white">
                              Add Products
                            </button>
                          </div>
                          <div className="text-emerald-600">
                          <h2>Display Size</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Display Resolution</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Display Features</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>RAM</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>RAM Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Storage Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Storage Capacity</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Extra M.2 Slot</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Supported SSD Type</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Storage Capacity</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <button className="px-10 py-3 mt-10 hover:bg-teal-600 bg-green-400 cursor-pointer text-white">
                              Save Products
                            </button>
                          </div>
                          <div className="text-emerald-600">
                            <h2>Bluetooth</h2>
                          <input type="text" className="w-2/3 mt-3" />
                            <h2>WebCam</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Speaker</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Microphone</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Optical Drive</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Mini HDMI Port</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>USB Ports</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>Headphone & Microphone Port</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>LAN</h2>
                            <input type="text" className="w-2/3 mt-3" />
                            <h2>WiFi</h2>
                            <input type="text" className="w-2/3 mt-3 rounded-sm" />
                            <button className="px-10 py-3 mt-10 hover:bg-teal-600 bg-green-400 cursor-pointer text-white">
                              Publish Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Addproducts
