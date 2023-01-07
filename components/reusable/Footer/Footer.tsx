import React from "react";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900">
      <div className="container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gray-900">
        <div>
          <Image
            alt="Logo"
            src={"/assets/logo/logo.png"}
            height={50}
            width={110}
          />
          <p className="py-4 text-sm ">
            Join our community! Stay on top of all the latest technology,
            industry events, and consumer electronics content from around the
            web
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-white hover:text-red-600 cursor-pointer">
              About Us
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                EMI Terms
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer ">
                CC Policy
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                Insights
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-white hover:text-red-600 cursor-pointer">
              Support
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                Pricing
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                Terms and Conditions
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer">
                Guides
              </li>
              <li className="py-2 text-sm hover:text-red-600 cursor-pointer ">
                Online Service Support
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium dark:text-white text-white flex flex-row mb-5">
              Contact Number
            </h5>
            <ul className="flex-col flex items-center">
             
                <div className="flex-row flex items-center">
                  <CallIcon />
                  <p className="py-2 text-sm hover:text-gray-400 cursor-pointer links-text ml-3">
                    01718443892
                  </p>
                </div>
                <div className="flex-row flex items-center">
                  <CallIcon />
                  <p className="py-2 text-sm hover:text-gray-400 cursor-pointer links-text ml-3">
                   01711945155
                  </p>
                </div>
                <div className="flex-row flex items-center">
                <CallIcon />
                <p className="py-2 text-sm hover:text-gray-400 cursor-pointer links-text ml-3">
                01750577439
                </p>
                </div>
             
            </ul>
          </div>
          <div>
            <h6 className="font-medium dark:text-whit hover:text-red-600 cursor-pointer mb-5">
              Online Delivery
            </h6>
            <ul>
              <li className="py-2 text-sm dark:text-white hover:text-red-600 cursor-pointer ">
                Refund & Return Policy
              </li>
              <li className="py-2 text-sm dark:text-white hover:text-red-600 cursor-pointer  ">
                Contact US
              </li>
              <li className="py-2 text-sm dark:text-white hover:text-red-600 cursor-pointer ">
                Complain & Advice
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm text-center">
            © 2023 | All rights reserved by Classic Computer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
