import { ChangeEvent, Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import { useRouter } from "next/router";
import debounce from "lodash.debounce";

function Searchbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const cancelButtonRef = useRef(null);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/search/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: e.target.value,
      }),
    });
    const data = await res.json();
    setFiltered(data);
    setLoading(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="relative rounded-r-full rounded-l-full border border-sky-500 cursor-pointer group"
      >
        <input
          disabled
          type="text"
          className="block w-full cursor-pointer rounded-r-full rounded-l-full pl-3 py-2 md:text-base sm:text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-transparent focus:border-none ring-transparent border-none"
          placeholder="Search for products"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4 rounded-r-full bg-sky-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white group-hover:scale-105"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* Search Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={() => {
            setFiltered([]);
            setOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-300 bg-opacity-50 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center pt-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl min-h-[600px]">
                  <div>
                    <div className="border-b px-3 py-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <input
                        type="search"
                        name="search"
                        id="searchproduct"
                        className="w-full mx-1 px-2 border-none rounded"
                        placeholder="Search"
                        autoFocus
                        onChange={debounce(handleSearch, 500)}
                      />
                      <button
                        className="border px-1 rounded bg-gray-50"
                        type="button"
                      >
                        esc
                      </button>
                    </div>
                    <div className="p-3 max-h-[600px] overflow-auto flex flex-col-reverse">
                      <div className="w-full h-full justify-center items-center flex">
                        {filtered.length === 0 ? (
                          <div>
                            <h2>No products found!</h2>
                          </div>
                        ) : filtered.length > 6 ? (
                          <div className="pt-2">
                            <button
                              type="button"
                              className="hover:text-red-500 hover:underline px-2"
                            >
                              See all results - {filtered.length}
                            </button>
                          </div>
                        ) : null}
                      </div>
                      {filtered.slice(0, 6).map((item: any, index: number) => (
                        <div
                          onClick={() => {
                            setOpen(false);
                            setFiltered([]);
                            router.push({
                              pathname: `/${item.name
                                .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-")
                                .toLowerCase()}`,
                              query: { id: item._id },
                            });
                          }}
                          key={index}
                          className="flex items-center hover:bg-sky-50 p-2 my-1 cursor-pointer shadow shadow-sky-100 border border-sky-50 hover:border-sky-400 rounded"
                        >
                          <div className="w-14 h-14 relative mr-2">
                            <Image
                              loading="lazy"
                              src={item.src}
                              fill
                              alt={item.name}
                              className=" object-contain"
                            />
                          </div>
                          <div>
                            <h2 className="text-sm">{item.name}</h2>
                            <div className="text-sky-600 text-xs">
                              <NumericFormat
                                displayType="text"
                                className="mx-1"
                                value={item.discountPrice}
                                thousandSeparator=","
                              />
                              <span>৳</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {loading && (
                        <div className="text-sky-500 flex items-center justify-center py-2">
                          <div
                            className="spinner-border  animate-spin inline-block w-6 h-6 border-4  rounded-full mr-1"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Searchbar;
