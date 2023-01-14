import React from "react";
import Navbar from "../../components/reusable/NavBar/Navbar";
import Footer from "../../components/reusable/Footer/Footer";
import About from "../../json/about.json";

function about() {
  return (
    <div>
      <Navbar />
      <div className="container m-auto dark:bg-gray-900 dark:text-gray-200 ">
        <div>
          <h1 className="text-lg font-semibold mt-10">
            Classic Computer 
          </h1>
          <div className="mt-5">
            {About.map(( item: any, index: number) => (
              <div className="flex flex-col" key={index}>
                <h1 className="text-lg font-semibold mt-10">{item.name}</h1>
                <p className="text-base mt-3 leading-loose">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
