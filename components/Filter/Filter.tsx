import React from "react";

function Filter() {
  return (
    <div className="bg-gray-50">
      <div className="w-full bg-white shadow-lg">
        <div className=" p-5  w-[280px]">
          <div className="border-b  p-3 border-b-gray-400">
            <span className="font-bold truncate">Price Range</span>
          </div>
          <div className="relative pt-5">
            <input
              type="range"
              className="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      
      bg-slate-100
      focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-5 mt-5">
            <div>
              <input
                type="text"
                className=" py-2 text-base rounded-sm w-[80px]"
                placeholder="0"
              />
            </div>
            <div>
              <input
                type="text"
                className=" py-2 text-base rounded-sm w-[80px]"
                placeholder="532,220"
              />
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
