import React from "react";
import Image from "next/image";

function Featured() {
  return (
    <div className="container m-auto">
      <div className="flex flex-col justify-center items-center">
        <h3 className="mb-5 text-lg font-bold text-gray-900 dark:text-white">
          Featured Category
        </h3>
        <h3 className="mb-5 text-base  text-gray-900 dark:text-white">
          Get Your Desired Product from Featured Category!
        </h3>
      </div>
      <ul className="grid w-full gap-6 md:grid-cols-8">
        <li>
          <div className="justify-center items-center flex-col flex p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
            <Image
              src={"/assets/Featured/laptop.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-orange-600">
              All Laptop
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/desktop-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Desktop
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300cursor-pointer">
            <Image
              src={"/assets/Featured/monitor-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Monitor
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/cpu-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full text-center hover:text-green-600">
              Processor
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/gpu-48x48 (1).png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full text-center hover:text-green-600">
              Graphics Card
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/ssd-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">SSD</div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/laptop-battery-01-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Laptop Adapter
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/mouse.png-40x40.webp"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Mouse
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/keyboard-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Keyboard
            </div>
          </div>
        </li>
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/headphone-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Headphone
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/router-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
              Router
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/portable-ip-camera-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
          Portable Wifi Camera
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/smart-watch-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
          Smart Watch
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/gaming-console-48x48.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
             Gaming Consol
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/cableconverter.png"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-red-600">
            Converter & Cable
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="justify-center items-center flex-col flex border-3 p-2 border rounded-lg shadow-md hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  border-gray-300 cursor-pointer">
            <Image
              src={"/assets/Featured/chair.png-40x40.webp"}
              alt={"laptop"}
              height={48}
              width={48}
            />
            <div className="w-full  text-center hover:text-green-600">
            Gamning Chair
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Featured;
