import Link from "next/link";
import React from "react";

function Searchbar() {
  return (
    <div>
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
  );
}

export default Searchbar;
