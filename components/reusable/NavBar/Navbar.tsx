import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { MenuProps, Modal, MenuTheme } from "antd";
import { Dropdown } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Searchbar from "./Searchbar";
import { DarkThemeToggle, Flowbite, Tooltip } from "flowbite-react";
import Menu from "./Menu";

function Navbar(props: { categoryItems: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={showModal} className="flex flex-row items-center">
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
          onClick={() => setIsRegisterModalOpen(true)}
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
    <div>
      <div className="bg-gray-900 lg:py-[15px] pt-3 pb-[1px] rounded-b-md lg:rounded-none">
        <div className="container m-auto">
          {/* Codes For Mobile Mode Start*/}
          <div className="lg:hidden">
            <div className="flex flex-row justify-between items-center lg:hidden px-3">
              <MenuOutlined className="text-white text-xl" />
              <Link href={"/"}>
                <Image
                  alt="Logo"
                  src={"/assets/logo/logo.png"}
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
              <Image
                alt="Logo"
                src={"/assets/logo/logo.png"}
                height={55}
                width={115}
                priority
              />
            </Link>
            <div className="w-full flex flex-row">
              <div className="w-1/2 mx-5 hidden lg:block">
                <Searchbar />
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
                      <h2 className="text-white text-base">Offers</h2>
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
                      <h2 className="text-white text-base">Bijoy Offers</h2>
                      <h3 className="text-gray-400 text-xs">Special Offer</h3>
                    </div>
                  </div>
                </Link>
                <Dropdown menu={{ items }} placement="bottom" arrow>
                  <Link href={"/"}>
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
                        <h2 className="text-white text-base">Account</h2>
                        <h3 className="text-gray-400 text-xs">
                          Register || Login
                        </h3>
                      </div>
                    </div>
                  </Link>
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

          {/* Modal Section Start */}
          <div>
            {/* Login Modal */}
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              closable={false}
              centered
            >
              <div className="relative w-full h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={handleCancel}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Sign in to our platform
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?
                        <span
                          onClick={() => {
                            setIsModalOpen(false);
                            setTimeout(() => {
                              setIsRegisterModalOpen(true);
                            }, 200);
                          }}
                          className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer ml-2"
                        >
                          Create account
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal>

            {/* Register Modal */}
            <Modal
              open={isRegisterModalOpen}
              onOk={() => {}}
              onCancel={() => setIsRegisterModalOpen(false)}
              footer={null}
              closable={false}
              centered
            >
              <div className="relative w-full h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setIsRegisterModalOpen(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Register in to our platform
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account?
                        <span
                          onClick={() => {
                            setIsRegisterModalOpen(false);
                            setTimeout(() => {
                              setIsModalOpen(true);
                            }, 200);
                          }}
                          className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer ml-2"
                        >
                          Sign In
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          {/* Modal Section End */}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-700 shadow-sm">
        <div className="container m-auto relative">
          <Menu mainItems={props.categoryItems} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
