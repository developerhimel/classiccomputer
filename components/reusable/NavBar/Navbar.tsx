import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { MenuProps, Modal, MenuTheme } from "antd";
import { Dropdown } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { DarkThemeToggle, Flowbite, Tooltip } from "flowbite-react";
import Menu from "./Menu";
import { useRouter } from "next/router";

const DynamicSearchbar = dynamic(() => import("./Searchbar"), {
  suspense: true,
});

function Navbar() {
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => router.push("/login")}
          className="flex flex-row items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <h2 className="ml-2">Login</h2>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => router.push("/register")}
          className="flex flex-row items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-teal-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <h2 className="ml-2">Register</h2>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="sticky top-0 z-40">
        <div className="bg-white bg-opacity-90 dark:bg-gray-900 backdrop-blur-sm shadow dark:shadow-none shadow-sky-100 pb-[1px] rounded-b-md lg:rounded-none">
          {/* <div className="bg-gray-900 lg:py-[15px] pt-3 pb-[1px] rounded-b-md lg:rounded-none"> */}
          <div className="container m-auto">
            {/* Codes For Mobile Mode Start*/}
            <div className="lg:hidden">
              <div className="flex flex-row justify-between items-center lg:hidden px-3">
                <MenuOutlined className="text-white text-xl" />
                <Link href={"/"}>
                  <Image
                    alt="Logo"
                    src={"/assets/logo/logo1.png"}
                    height={50}
                    width={110}
                    priority
                  />
                </Link>
                <ShoppingCartOutlined className="text-white text-2xl" />
              </div>
              <div className="relative mt-1 rounded-md">
                <input
                  type="text"
                  className="block w-full rounded-md px-3 py-[10px] md:text-base sm:text-sm"
                  placeholder="Search for products"
                />
                <Link href={"/"}>
                  <div className="absolute inset-y-0 right-0 flex items-center mr-3 hover:scale-95">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            {/* Codes For Mobile Mode End*/}

            {/* Codes For Desktop Mode Start*/}
            <div className="hidden lg:flex flex-row justify-start items-center">
              <Link href={"/"}>
                <div className="w-40 h-20 relative">
                  <Image
                    alt="Logo"
                    src={"/assets/logo/logo1.png"}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="w-full flex flex-row items-center">
                <div className="w-1/2 mx-5 hidden lg:block">
                  <DynamicSearchbar />
                </div>
                <div className="hidden lg:w-1/2 lg:flex flex-row justify-between items-center">
                  <Link href={"/"}>
                    <div className="flex flex-row items-center hover:cursor-pointer">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 ccprimary animate-pulse"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-gray-800 text-base">Offers</h2>
                        <h3 className="text-gray-400 text-xs">Latest Offers</h3>
                      </div>
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="flex flex-row items-center hover:cursor-pointer">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 ccprimary animate-pulse"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-gray-800 text-base">
                          Bijoy Offers
                        </h2>
                        <h3 className="text-gray-400 text-xs">Special Offer</h3>
                      </div>
                    </div>
                  </Link>
                  <Dropdown menu={{ items }} placement="bottom" arrow>
                    <div className="flex flex-row items-center hover:cursor-pointer">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 ccprimary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-gray-800 text-base">Account</h2>
                        <h3 className="text-gray-400 text-xs">
                          Register || Login
                        </h3>
                      </div>
                    </div>
                  </Dropdown>
                  {/* <Flowbite>
                    <Tooltip content="Switch Theme" style="light">
                      <DarkThemeToggle className="focus:outline-none focus:bg-gray-800 hover:bg-none" />
                    </Tooltip>
                  </Flowbite> */}
                  <Link
                    href={"/pcbuilder"}
                    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-normal text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white text-sm font-semibold">
                      PC Builder
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Codes For Desktop Mode End*/}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-700 border-b dark:border-gray-600">
        <div className="container m-auto relative">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
