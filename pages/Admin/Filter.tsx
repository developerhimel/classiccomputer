import Slider from "@mui/material/Slider";
import React from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

function filter() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <section className="">
      <div className="container m-auto">
        <div className="w-72  text-center mt-5 bg-gray-200 border shadow h-full">
          <h1 className="text-base font-semibold border-b text-start ml-3 p-2">
            Price Range
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-60 mt-5">
              <Slider
                getAriaLabel={() => "Price Range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-6 ">
            <div className="relative">
              <input
                type="text"
                className="block px-2.5 pb-2.5 pt-4 w-28 text-sm text-gray-900 bg-transparent rounded-lg border-1"
                placeholder="0"
              />
              <label htmlFor="0" className="absolute text-sm "></label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4  w-28 text-sm text-gray-900 bg-transparent rounded-lg border-1"
                placeholder="85000"
              />
              <label htmlFor="0" className="absolute text-sm "></label>
            </div>
          </div>

          <div className=" flex h-full w-72 flex-col rounded-tr-2xl rounded-br-2xl bg-gray-200">
            <ul className="mt-5 flex flex-col">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-2" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 text-gray-500"></span>
                  Avilablity
                  <label
                    htmlFor="menu-2"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-full m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm  hover:bg-white">
                    <span className=" items-center text-center"> Brand</span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        AMD
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col h-full">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-3" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 "></span>
                  Socket
                  <label
                    htmlFor="menu-3"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA1150
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA1151
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA2011
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA2066
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA1200
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Intel LGA1700
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        AMD AM4
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        AMD AM5
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        AMD TR4
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-4" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 "></span>
                  Number Of Core
                  <label
                    htmlFor="menu-4"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-full m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        6
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        8
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        12
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        16
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        20
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        24
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        32
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-5" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 "></span>
                  Number Of Thread
                  <label
                    htmlFor="menu-5"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-full m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        6
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        8
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        12
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        16
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        20
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        24
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        32
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-6" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 "></span>
                  Clock Speed
                  <label
                    htmlFor="menu-6"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-full m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Up To 2.4Ghz
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2.5Ghz to 3.4Ghz
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        3.5Ghz to 3.90Ghz
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4.00Ghz to 5.00Ghz
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Above 5.1Ghz
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-7" />
                <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm">
                  <span className="mr-5 flex w-5 "></span>
                 Cache
                  <label
                    htmlFor="menu-7"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-full m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Up to 1MB
                      </label>
                    </span>
                  </li>
                
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2MB to 6MB
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        8MB to 12MB
                      </label>
                    </span>
                  </li>
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        14MB to 30MB
                      </label>
                    </span>
                  </li>{" "}
                  <li className="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                    <span className="mr-5">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        32MB & Above
                      </label>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default filter;
