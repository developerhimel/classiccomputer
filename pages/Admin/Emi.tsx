import React from "react";
import Navbar from "../../components/reusable/NavBar/Navbar";
import Footer from "../../components/reusable/Footer/Footer";
import emi from "../../json/emi.json";

function Emi() {
  return (
    <div>
      <Navbar />

      <div className="container m-auto dark:bg-gray-900 dark:text-gray-200 ">
        <div>
          <h1 className="text-lg font-semibold mt-10 ml-5">
            Enjoy 0% EMI Facility From The Banks Listed Below
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {emi.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col border rounded shadow p-3"
            >
              <img
                src={item.src}
                alt={item.name}
                width={"512"}
                height={"300"}
              />
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <div className="mt-3 flex flex-row">
                <h2 className="font-semibold "> Applicable For: </h2>{" "}
                <span className="text-base ml-1">{item.status}</span>
              </div>

              <div className="mt-1 flex flex-row">
                <h2 className="font-semibold"> EMI Tenure:</h2>{" "}
                <span className="text-base ml-1">{item.tenure}</span>
              </div>
              <div className="mt-1 flex flex-row">
                <h2 className="font-semibold"> Min. Purchase:</h2>{" "}
                <span className="text-base ml-1">{item.minimum}</span>
              </div>
              <div className="mt-1 flex flex-row">
                <h2 className="font-semibold"> Condition:</h2>{" "}
                <span className="text-base ml-1"> N/A</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h1 className="text-lg font-semibold mt-10 ml-5 py-3">
              EMI সুবিধা কার্যকরের শর্তাবলি :
            </h1>
            <hr />
            <ul className="mt-2 p-4 text-sm list-disc m-3">
              <li>
                ক্লাসিক কম্পিউটার এর যেকোনো রিটেইল আউটলেট (ঢাকা, চট্রগ্রাম ও রংপুর) থেকে
                ১২ মাসের 0% EMI সুবিধাটি উপভোগ করা যাবে।
              </li>
              <br />
              <li>
                0% EMI সুবিধাটি সর্বোচ্চ ১২ মাস মেয়াদ এর জন্য কার্যকর হবে। এখানে
                চাইলে আপনি ৬ ,৯, ১২ মাসের EMI সুবিধাটি উপভোগ করতে পারবেন।
              </li>
              <br />
              <li>
                সর্বনিম্ন ৫০০০ টাকার পণ্য এবং কিছু কিছু ব্যাংক এর ক্ষেত্রে
                সর্বনিম্ন ১০০০০ টাকার পণ্য ক্রয়ের ক্ষেত্রে এই সুবিধাটি প্রযোজ্য
                হবে।
              </li>
              <br />
              <li>
                অনলাইন EMI সুবিধাটি শুধুমাত্র ৩ এবং ৬ মাসের জন্য প্রযোজ্য।
              </li>
              <br />
              <li>
                EMI সুবিধার ক্ষেত্রে স্পেশাল প্রাইস / ডিস্কাউন্ট প্রাইস প্রযোজ্য
                নয়, এক্ষেত্রে রেগুলার প্রাইস প্রযোজ্য হবে।
              </li>
            </ul>
            <div>
              <img
                src="/assets/Emi/saadiq-pf-banner.webp"
                alt="emi"
                width={"1300"}
                height={"400"}
              />

              <h1 className="text-lg font-semibold mt-10 ml-5 py-3">
                Saadiq Personal Finance সুবিধার শর্তাবলি:
              </h1>
              <ul className="mt-2 p-4 text-sm list-disc m-3">
                <li>
                  চাকুরীজীবীর ক্ষেত্রে যেকোনো ব্যাংকে সেলারি একাউন্ট থাকলে অথবা
                  ব্যবসায়ী বা ডাক্তার হলে এই সুবিধাটি পেতে পারেন।
                </li>
                <li>
                  স্যালারি Standard Chartered Bank এ সর্বনিম্ন ২২,০০০ টাকা ও
                  অন্যান্য ব্যাংক এ সর্বনিম্ন ৩৫,০০০ টাকা স্যালারি হতে হবে।
                </li>
                <li>
                  ব্যবসায়ীদের ক্ষেত্রে সর্বনিম্ন ৫৫,০০০ টাকা ইনকাম থাকতে হবে।
                </li>
              </ul>
              <h1 className="text-lg font-semibold mt-10 ml-5 py-3">
                Saadiq Personal Finance -এ পণ্য ক্রয়ের নিয়মাবলি:
              </h1>
              <ul className="mt-2 p-4 text-sm list-disc m-3">
                <li>
                  ক্রেতা যে পণ্য অথবা পণ্যসমূহ কিনবেন তার একটি ফর্মাল কোটেশন
                  স্টার টেক থেকে নিতে হবে।
                </li>
                <li>
                  ক্রেতা Standard Chartered Bank এর ওয়েবসাইট থেকে মোট এমাউন্ট ও
                  পেমেন্ট সময় দিয়ে Apply Now তে ক্লিক করে এপ্লাই করতে পারবেন
                  অথবা ক্রেতা চাইলে স্টার টেক এর যেকোনো হটলাইন এজেন্টকে তার নাম
                  ও ফোন নাম্বার দিলে ব্যাংক থেকে ক্রেতার সাথে যোগাযোগ করা হবে।
                </li>
                <li>
                  পরবর্তীতে সকল ডকুমেন্ট ব্যাংকে জমা দিয়ে ব্যাংক কতৃক এসেসমেন্ট
                  এর পর ক্রেতা ব্যাংকের পে-অর্ডার নিয়ে স্টার টেক থেকে তার পণ্যটি
                  কিনতে পারবেন।
                </li>
              </ul>
              <h2 className="mb-3 text-md font-semibold flex flex-row">
                বিস্তারিত জানতে ভিজিট করুনঃ
                <a href="https://www.sc.com/bd/islamic-banking/saadiq-personal-finance" target={"_blank"} className=" ml-2 text-red-500">
                  https://www.sc.com/bd/islamic-banking/saadiq-personal-finance
                </a>
                <p className="ml-2">অথবা কল করুন:</p>
                <span className="text-red-500"> 09678002003 </span>-এই নম্বরে।
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Emi;
