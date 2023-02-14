import React from "react";

function UpdateMongodb(props: { products: any }) {
  console.log(props.products);
  const handleUpdatedb = async () => {
    const res = await fetch("/api/updatedb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: props.products }),
    });
    const data = await res.json();
  };
  return (
    <div className="container h-screen m-auto flex justify-center items-center">
      <div className="flex space-x-2 justify-center">
        <button
          //   onClick={handleUpdatedb}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Update Database
        </button>
      </div>
    </div>
  );
}

export default UpdateMongodb;
