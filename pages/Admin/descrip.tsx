import React from "react";
import specification from "../../json/specification.json";
function descrip() {
  console.log(specification);

  return (
    <div className="container m-auto dark:bg-gray-900 dark:text-gray-200 bg-white">
      <div>
        <h1 className="text-lg font-semibold mt-10 ">Specification</h1>
      </div>
      {specification.map((item: any, index: number) => (
        <div key={index}>
          <div className="bg-gray-200 ">
            <h1 className="border-b border mt-5 text-lg font-semibold text-blue-500 py-2 ml-4">
              {item.title}
            </h1>
          </div>
          <table className="w-full">
            <tbody className="w-full text-sm">
              {item.Items.map((item: any, index: number) => (
                <tr key={index} className="border-b p-3 flex">
                  <td className="table-flex">{item.name}</td>
                  <td className="flex-auto">{item.Value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default descrip;
