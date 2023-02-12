import { Select } from "antd";
import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import type { UploadFile } from "antd/es/upload/interface";
import brands from "../../../json/brands.json";

function AddProducts() {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [regularPrice, setRegularPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [productStatus, setProductStatus] = useState("In Stock");
  const [keyFeatures, setKeyFeatures] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const [specifications, setSpecifications] = useState([
    { title: "", items: [{ key: "", value: "" }] },
  ]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [description, setDescription] = useState("");

  console.log(fileList);

  const handleKeyFeatures = (index: number) => (e: any) => {
    let newKeyFeatures = [...keyFeatures];
    newKeyFeatures[index] = { value: e.target.value };
    setKeyFeatures(newKeyFeatures);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const handleAddProduct = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          name: productName,
          price: regularPrice,
          discountPrice: discountPrice !== 0 ? discountPrice : null,
          brand: brand,
          productStatus: productStatus,
          keyFeatures: keyFeatures,
          specifications: specifications,
          description: description,
          published: true,
        },
      }),
    });
    const data = await res.json();
    console.log(data.message);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="border-r pr-3 pb-4">
        {/* Product title section */}
        <div className="flex justify-start pt-5">
          <div className="mb-3 xl:w-full">
            <label
              htmlFor="productName"
              className="form-label inline-block mb-2 text-indigo-700 text-base"
            >
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="productName"
              placeholder="Product Name..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
        </div>
        {/* Product price section */}
        <div className="flex justify-start gap-2">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="regularPrice"
              className="form-label inline-block mb-2 text-indigo-700 text-base"
            >
              Regular Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="regularPrice"
              placeholder=""
              required
              value={regularPrice !== 0 ? regularPrice : ""}
              onChange={(e) => setRegularPrice(Number(e.target.value))}
            />
          </div>
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="discountPrice"
              className="form-label inline-block mb-2 text-indigo-700 text-base"
            >
              Discount Price
            </label>
            <input
              type="number"
              className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="discountPrice"
              placeholder=""
              value={discountPrice !== 0 ? discountPrice : ""}
              onChange={(e) => setDiscountPrice(Number(e.target.value))}
            />
          </div>
        </div>
        {/* Product brands and product status */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="brand"
              className="form-label inline-block mb-2 text-indigo-700 text-base"
            >
              Choose Brand <span className="text-red-500">*</span>
            </label>
            <br />
            <Select
              showSearch
              id="brand"
              style={{ width: "100%" }}
              size="large"
              placeholder="Select brand"
              optionFilterProp="children"
              onChange={(value) => setBrand(value)}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={brands}
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="form-label inline-block mb-2 text-indigo-700 text-base"
            >
              Product Status <span className="text-red-500">*</span>
            </label>
            <br />
            <Select
              defaultValue="In Stock"
              size="large"
              style={{ width: "100%" }}
              onChange={(value) => setProductStatus(value)}
              options={[
                { value: "In Stock", label: "In Stock" },
                { value: "Out of Stock", label: "Out of Stock" },
              ]}
            />
          </div>
        </div>
        {/* Key Features */}
        <div className="flex justify-start mt-5">
          <div className="mb-3 xl:w-full">
            <div className="flex flex-row justify-between items-center shadow mb-2 bg-indigo-50 shadow-indigo-200 p-1 rounded pl-3">
              <label
                htmlFor="productName"
                className="form-label inline-block text-indigo-700 text-base font-semibold"
              >
                Key Features
              </label>
              <button
                onClick={() => setKeyFeatures([...keyFeatures, { value: "" }])}
                className="flex flex-row justify-center items-center hover:bg-indigo-500 text-white ease-in-out duration-200 bg-indigo-600 px-2 py-1 rounded text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span>Add New</span>
              </button>
            </div>
            {keyFeatures.map((item, index) => (
              <div key={index} className="flex my-1">
                <input
                  type="text"
                  required
                  value={item.value}
                  onChange={handleKeyFeatures(index)}
                  className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l border-r-0 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <button
                  onClick={() => {
                    let deletedKeyFeatures = [...keyFeatures];
                    deletedKeyFeatures.splice(index, 1);
                    setKeyFeatures(deletedKeyFeatures);
                  }}
                  className="px-2 hover:bg-red-500 hover:text-white hover:border-red-500 rounded-r bg-gray-100 border ease-in-out duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Specifications */}
        <div className="">
          <div className="flex justify-start mt-1">
            <div className="xl:w-full">
              <div className="flex flex-row justify-between items-center shadow mb-2 bg-indigo-50 shadow-indigo-200 p-1 rounded pl-3">
                <label
                  htmlFor="productName"
                  className="form-label inline-block text-indigo-700 text-base font-semibold"
                >
                  Specifications
                </label>
                <button
                  onClick={() =>
                    setSpecifications([
                      ...specifications,
                      { title: "", items: [{ key: "", value: "" }] },
                    ])
                  }
                  className="flex flex-row justify-center items-center hover:bg-indigo-500 text-white ease-in-out duration-200 bg-indigo-600 px-2 py-1 rounded text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span>Add New</span>
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div
              className="accordion block w-full"
              id="specificationsAccordion"
            >
              {specifications.map((item, index) => {
                const mainIndex = index;
                const mainSpecifications = item;
                return (
                  <div
                    key={index}
                    className="accordion-item bg-white border-l border-r border-gray-200 my-2"
                  >
                    <h2
                      className="accordion-header mb-0 flex border-b border-t"
                      id={`heading${index}`}
                    >
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-1 pr-5 pl-1 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseThree${index}`}
                        aria-expanded="false"
                        aria-controls={`collapseThree${index}`}
                      >
                        <input
                          type="text"
                          required
                          placeholder="Title..."
                          className="py-1 border-none block w-full outline-none focus:ring-0 mr-3 rounded"
                          onChange={(e) => {
                            let changedSpecifications = [...specifications];
                            changedSpecifications[index] = {
                              title: e.target.value,
                              items: item.items,
                            };
                            setSpecifications(changedSpecifications);
                          }}
                        />
                      </button>
                      <button
                        onClick={() => {
                          let deletedSpecifications = [...specifications];
                          deletedSpecifications.splice(index, 1);
                          setSpecifications(deletedSpecifications);
                        }}
                        className="px-2 hover:bg-red-500 hover:text-white hover:border-red-500 rounded-r bg-gray-100 border ease-in-out duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id={`collapseThree${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#specificationsAccordion"
                    >
                      <div className="accordion-body p-3">
                        <div className="flex flex-row justify-between items-center shadow mb-2 bg-gray-100 shadow-gray-200 p-1 rounded pl-3">
                          <label
                            htmlFor="productName"
                            className="form-label inline-block text-gray-700 text-base font-semibold"
                          >
                            Sub-Specifications
                          </label>
                          <button
                            onClick={() => {
                              let newSpecifications = [...specifications];
                              newSpecifications[index] = {
                                title: item.title,
                                items: [...item.items, { key: "", value: "" }],
                              };
                              setSpecifications(newSpecifications);
                            }}
                            className="flex flex-row justify-center items-center hover:bg-gray-500 text-white ease-in-out duration-200 bg-gray-600 px-2 py-1 rounded text-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </button>
                        </div>
                        {item.items.map((item, index) => (
                          <div key={index} className="flex my-1 gap-1">
                            <div className="flex gap-2 w-full">
                              <input
                                type="text"
                                required
                                placeholder="Name"
                                value={item.key}
                                onChange={(e) => {
                                  let changedSpecifications = [
                                    ...specifications,
                                  ];
                                  let changedSpecificationsItems = [
                                    ...mainSpecifications.items,
                                  ];
                                  changedSpecificationsItems[index] = {
                                    key: e.target.value,
                                    value: item.value,
                                  };
                                  changedSpecifications[mainIndex] = {
                                    title: mainSpecifications.title,
                                    items: changedSpecificationsItems,
                                  };
                                  setSpecifications(changedSpecifications);
                                }}
                                className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                              <input
                                type="text"
                                required
                                placeholder="Value"
                                value={item.value}
                                onChange={(e) => {
                                  let changedSpecifications = [
                                    ...specifications,
                                  ];
                                  let changedSpecificationsItems = [
                                    ...mainSpecifications.items,
                                  ];
                                  changedSpecificationsItems[index] = {
                                    key: item.key,
                                    value: e.target.value,
                                  };
                                  changedSpecifications[mainIndex] = {
                                    title: mainSpecifications.title,
                                    items: changedSpecificationsItems,
                                  };
                                  setSpecifications(changedSpecifications);
                                }}
                                className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                            </div>
                            <button
                              onClick={() => {
                                let deletedSpecifications = [...specifications];
                                let delSubSpec = [...mainSpecifications.items];
                                delSubSpec.splice(index, 1);
                                deletedSpecifications[mainIndex] = {
                                  title: mainSpecifications.title,
                                  items: delSubSpec,
                                };
                                setSpecifications(deletedSpecifications);
                              }}
                              className="px-2 hover:bg-red-500 hover:text-white hover:border-red-500 rounded bg-gray-100 border ease-in-out duration-200"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div>
          <ImageUploader fileList={fileList} setFileList={setFileList} />
        </div>
        <div>
          <label
            htmlFor="productDescription"
            className="form-label inline-block mb-2 text-indigo-700 text-base"
          >
            Product Description <span className="text-red-500">*</span>
          </label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows={10}
            placeholder="Product descriptions..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-3 pt-5">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            // onClick={()=>handleAddProduct({published:false})}
            className="inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Save Product
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            disabled={loading}
            onClick={() => handleAddProduct()}
            className="inline-block w-full px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            {loading && (
              <div
                className="spinner-border animate-spin inline-block w-3 h-3 border-2 rounded-full mr-2"
                role="status"
              />
            )}
            {loading ? "Publishing..." : "Publish Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
