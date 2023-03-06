import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { NumericFormat } from "react-number-format";

function Checkout() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  console.log(items);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [deliveryMethod, setDeliveryMethod] = useState("Home Delivery - 60৳");

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };
  const handleChangeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(event.target.value);
  };
  return (
    <div>
      {/* Breadcamp section start */}
      <div className="bg-white py-3 shadow">
        <nav
          className="flex container m-auto px-3 lg:px-0"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-red-500 hover:underline dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href={"/checkout/cart"}
                  className="ml-1 text-xs font-medium text-gray-700 hover:text-red-500 hover:underline md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Shopping Cart
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Checkout
                </span>
              </div>
            </li>
            {/* <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Flowbite
              </span>
            </div>
          </li> */}
          </ol>
        </nav>
      </div>
      {/* Breadcamp section end */}
      <div className="container m-auto">
        <h1 className="text-xl my-5 mx-3 md:mx-0">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 mb-5">
          <div className="bg-white p-5 rounded-md text-sm mb-5 mx-3 lg:mx-0">
            <div className="flex items-center border-b pb-3 pt-1">
              <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full text-center justify-center text-sm font-bold items-center flex">
                1
              </span>
              <h2 className="ml-3 font-semibold text-lg">
                Customer Information
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-5 my-1">
              <div className="flex flex-col">
                <label htmlFor="FirstName" className="py-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="First Name*"
                  className="p-2 border outline-none border-gray-300 rounded text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="LastName" className="py-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Last Name*"
                  className="p-2 border outline-none border-gray-300 rounded text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="Address" className="py-2">
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address*"
                className="p-2 border outline-none border-gray-300 rounded text-sm"
                required
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="PhoneNumber" className="py-2">
                Phone Number
              </label>
              <input
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Telephone*"
                className="p-2 border outline-none border-gray-300 rounded text-sm"
                required
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="email" className="py-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                className="p-2 border outline-none border-gray-300 rounded text-sm"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-5 my-1">
              <div className="flex flex-col">
                <label htmlFor="city" className="py-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City*"
                  className="p-2 border outline-none border-gray-300 rounded text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="State" className="py-2">
                  State
                </label>
                <input
                  type="text"
                  name="State"
                  id="State"
                  placeholder="State*"
                  className="p-2 border outline-none border-gray-300 rounded text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="cusComment" className="py-2">
                Customer Comment
              </label>
              <textarea
                name="cusComment"
                id="cusComment"
                cols={30}
                rows={5}
                className="p-2 border outline-none border-gray-300 rounded text-sm"
              ></textarea>
            </div>
          </div>
          <div className="col-span-2 mx-3 lg:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
              <div className="bg-white p-5 rounded-md mb-5">
                <div className="flex items-center border-b pb-3 pt-1">
                  <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full text-center justify-center text-sm font-bold items-center flex">
                    2
                  </span>
                  <h2 className="ml-3 font-semibold text-lg">Payment Method</h2>
                </div>
                <div className="my-2">
                  <h3 className="text-sm">Select a payment method</h3>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={paymentMethod}
                    onChange={handleChangePayment}
                    className="mt-3"
                  >
                    <FormControlLabel
                      value="Cash on Delivery"
                      className="hover:bg-indigo-50 rounded"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 14,
                            },
                          }}
                        />
                      }
                      label="Cash on Delivery"
                    />
                    <FormControlLabel
                      value="Online Payment"
                      className="hover:bg-indigo-50 rounded"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 14,
                            },
                          }}
                        />
                      }
                      label="Online Payment"
                    />
                  </RadioGroup>
                  <div className="w-full">
                    <h2 className="text-sm font-semibold mt-5">
                      Accepted methods:
                    </h2>
                    <div className="relative w-8/12 h-8 my-1">
                      <Image
                        src={"/assets/images/methods/payment-methods.png"}
                        fill
                        alt="Payment Methods"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-md mb-5">
                <div className="flex items-center border-b pb-3 pt-1">
                  <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full text-center justify-center text-sm font-bold items-center flex">
                    3
                  </span>
                  <h2 className="ml-3 font-semibold text-lg">
                    Delivery Method
                  </h2>
                </div>
                <div className="my-2">
                  <h3 className="text-sm">Select a delivery method</h3>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={deliveryMethod}
                    onChange={handleChangeDelivery}
                    className="mt-3"
                  >
                    <FormControlLabel
                      value="Home Delivery - 60৳"
                      className="hover:bg-indigo-50 rounded"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 14,
                            },
                          }}
                        />
                      }
                      label="Home Delivery - 60৳"
                    />
                    <FormControlLabel
                      value="Store Pickup - 0৳"
                      className="hover:bg-indigo-50 rounded"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 14,
                            },
                          }}
                        />
                      }
                      label="Store Pickup - 0৳"
                    />
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-md text-sm mb-5">
              <div className="flex items-center border-b pb-3 pt-1">
                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full text-center justify-center text-sm font-bold items-center flex">
                  4
                </span>
                <h2 className="ml-3 font-semibold text-lg">Order Overview</h2>
              </div>
              <div className="bg-gray-50 rounded flex justify-between items-center mt-3 mb-1">
                <div className="w-full">
                  <h3 className="w-full border-r-4 p-3 border-r-white font-semibold">
                    Product Name
                  </h3>
                </div>
                <div className="w-[30%]">
                  <h3 className="w-full border-r-4 p-3 border-r-white font-semibold">
                    Price
                  </h3>
                </div>
                <div className="w-[30%]">
                  <h3 className="w-full p-3 font-semibold text-end">Total</h3>
                </div>
              </div>
              {items.map((product: any, index: number) => (
                <div
                  key={index}
                  className="border-b flex justify-between items-center my-1"
                >
                  <div className="w-full">
                    <h3 className="w-full border-r-4 p-3 border-r-white">
                      <Link
                        className="hover:text-red-500 hover:underline"
                        target={"_blank"}
                        href={{
                          pathname: `/${product.name
                            .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
                            .toLowerCase()}`,
                          query: { id: product.id },
                        }}
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="w-[30%]">
                    <h3 className="w-full border-r-4 p-3 border-r-white">
                      <NumericFormat
                        displayType="text"
                        className="px-1"
                        value={product.discountPrice}
                        thousandSeparator=","
                      />
                      ৳ x {product.quantity}
                    </h3>
                  </div>
                  <div className="w-[30%]">
                    <h3 className="w-full p-3 text-end">
                      <NumericFormat
                        displayType="text"
                        className="px-1"
                        value={product.itemTotal}
                        thousandSeparator=","
                      />
                      ৳ &nbsp; &nbsp;
                      <i
                        onClick={() => removeItem(product.id)}
                        className="fa-solid fa-close text-orange-500 hover:text-orange-700 hover:cursor-pointer hover:scale-110"
                      ></i>
                    </h3>
                  </div>
                </div>
              ))}
              <div>
                <div className="rounded flex justify-between items-center -mt-1">
                  <div className="w-full"></div>
                  <div className="w-[70%] md:w-[30%] lg:w-[40%] bg-gray-100 border-b">
                    <h3 className="w-full border-r-4 p-3 border-r-white text-end">
                      Sub Total:
                    </h3>
                  </div>
                  <div className="w-[60%] md:w-[30%] bg-gray-100 border-b">
                    <h3 className="w-full p-3 text-indigo-600 text-end">
                      <NumericFormat
                        displayType="text"
                        className="px-1"
                        value={cartTotal}
                        thousandSeparator=","
                      />
                      ৳
                    </h3>
                  </div>
                </div>
                <div className="rounded flex justify-between items-center">
                  <div className="w-full"></div>
                  <div className="w-[70%] md:w-[30%] lg:w-[40%] bg-gray-100 border-b">
                    <h3 className="w-full border-r-4 p-3 border-r-white text-end">
                      {deliveryMethod === "Home Delivery - 60৳"
                        ? "Home Delivery:"
                        : "Store Pickup"}
                    </h3>
                  </div>
                  <div className="w-[60%] md:w-[30%] bg-gray-100 border-b">
                    <h3 className="w-full p-3 text-indigo-600 text-end">
                      {deliveryMethod === "Home Delivery - 60৳" ? "60" : "0"}৳
                    </h3>
                  </div>
                </div>
                <div className="rounded flex justify-between items-center">
                  <div className="w-full"></div>
                  <div className="w-[70%] md:w-[30%] lg:w-[40%] bg-gray-100 rounded-bl-md">
                    <h3 className="w-full border-r-4 p-3 border-r-white font-semibold text-end">
                      Total:
                    </h3>
                  </div>
                  <div className="w-[60%] md:w-[30%] bg-gray-100 rounded-br-md">
                    <h3 className="w-full p-3 font-semibold text-orange-600 text-end">
                      <NumericFormat
                        displayType="text"
                        className="px-1"
                        value={
                          deliveryMethod === "Home Delivery - 60৳"
                            ? cartTotal + 60
                            : cartTotal
                        }
                        thousandSeparator=","
                      />
                      ৳
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 flex justify-between items-center flex-col-reverse gap-3 lg:gap-0 lg:flex-row">
          <div className="flex items-center">
            <Checkbox defaultChecked />
            <h2>
              I have read and agree to the{" "}
              <Link className="text-red-500 hover:underline text-sm" href={"/"}>
                Terms and Conditions
              </Link>
              ,{" "}
              <Link className="text-red-500 hover:underline text-sm" href={"/"}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="text-red-500 hover:underline text-sm" href={"/"}>
                Refund and Return Policy
              </Link>
            </h2>
          </div>
          <Button
            className="shadow bg-indigo-600 hover:bg-indigo-700 capitalize text-base py-2 shadow-indigo-200"
            variant="contained"
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
