import { CaretRightOutlined } from "@ant-design/icons";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import menuItems from "../../../json/menuItems.json";

export default function Menu() {
  console.log(menuItems);

  const MenuItems = (props: { name: string; mainItem: any }) => {
    return (
      <div className="text-gray-800 relative group/main font-semibold dark:text-white hover:bg-gray-800 hover:text-white rounded-b-md ease-in-out duration-200 hover:shadow-md cursor-pointer">
        <p className="text-[14px] px-2 py-3">{props.name}</p>
        <div className="absolute top-12 z-10 rounded-sm hover:cursor-default scale-y-0 origin-top group-hover/main:scale-y-100 duration-200 ease-in-out">
          <div className="flex flex-col justify-start w-48 shadow-md rounded-md">
            {props.mainItem.items && (
              <Fragment>
                {props.mainItem.items.map((subItem: any, index: number) => (
                  <Fragment key={index}>
                    <Link
                      href={"/"}
                      className="text-[14px] group/sub relative px-3 py-2 hover:text-gray-800 bg-white dark:bg-gray-700 dark:hover:bg-slate-800 dark:text-white text-gray-800 hover:bg-sky-500 flex flex-row justify-between items-center"
                    >
                      {subItem.name}
                      {subItem.items && (
                        <Fragment>
                          <CaretRightOutlined />
                          <div className="absolute cursor-default -right-48 w-48 bg-white dark:bg-gray-700 shadow-md top-0 z-10 scale-x-0 origin-left group-hover/sub:scale-x-100 duration-200 ease-in-out">
                            <div className="flex flex-col">
                              {subItem.items.map(
                                (exsubItem: any, index: number) => (
                                  <Fragment key={index}>
                                    <Link
                                      className="p-2 w-full hover:bg-sky-400 bg-white dark:bg-gray-700 dark:hover:bg-gray-800"
                                      href={"/"}
                                    >
                                      {exsubItem.name}
                                    </Link>
                                  </Fragment>
                                )
                              )}
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </Link>
                  </Fragment>
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="main_menu_wrapper flex flow-row justify-between items-center">
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItems name={item.name} mainItem={item} />
        </div>
      ))}
    </div>
  );
}
