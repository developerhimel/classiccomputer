import { Avatar } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import GradientBb from "../../components/reusable/svg/GradientBb";

const UserProfilePage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>
          Classic Computer || Largest tech accessories shop in Bangladesh
        </title>
        <meta
          name="description"
          content="Classic Computer has the most comprehensive array of Desktop PCs. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at our stores spread all over Bangladesh. Get your new iMac Desktop or Apple Mac Mini with an international warranty and servicing plan. To build a Desktop PC with the components of your choice, you can always depend on the experts of the Classic Computer PC shop. Take your gaming or professional content creation to the next level with a large collection of high-end Gaming and Rendering PC from Classic Computer. You can choose and build a complete Personal computer with our PC Builder feature anytime, anywhere. Or, build a Desktop PC to your taste right in front of you at the Classic Computer PC Shop."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-sky-300">
        <div className="container m-auto py-3">
          <div className="bg-white rounded-lg p-5">
            <Avatar
              className="shadow bg-gray-100"
              shape="square"
              size={250}
              src={"https://joesch.moe/api/v1/random"}
            />
            <div>
              <div className="relative rounded-xl p-6 text-sm leading-6 transition shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-600/[0.04]">
                <h2>
                  <button
                    className="flex gap-2 transition"
                    id="headlessui-tabs-tab-:r2:"
                    role="tab"
                    type="button"
                    aria-controls="headlessui-tabs-panel-:R1al6:"
                    aria-selected="true"
                    tabIndex={0}
                    data-headlessui-state="selected"
                  >
                    <span className="absolute inset-0 rounded-xl"></span>
                    <span className="font-semibold text-violet-500">Solid</span>
                    <span className="hidden text-slate-400 lg:block">
                      24x24, Solid fill
                    </span>
                  </button>
                </h2>
                <p className="mt-1 text-slate-500">
                  For primary navigation and marketing sections, with a filled
                  appearance.
                </p>
                <GradientBb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
