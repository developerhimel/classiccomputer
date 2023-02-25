import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

function profile() {
  return (
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
              <svg
                viewBox="0 0 384 12"
                fill="none"
                aria-hidden="true"
                className="absolute top-full right-0 w-[384px] max-w-[120%] transition"
              >
                <mask
                  id=":r3:-a"
                  maskUnits="userSpaceOnUse"
                  x="48"
                  y="0"
                  width="269"
                  height="4"
                  style={{ maskType: "alpha" }}
                >
                  <path
                    transform="rotate(180 316.656 4)"
                    fill="#C4C4C4"
                    d="M316.656 4h268v4h-268z"
                  ></path>
                </mask>
                <g filter="url(#:r3:-b)" mask="url(#:r3:-a)">
                  <path
                    transform="rotate(180 292.656 1)"
                    fill="url(#:r3:-c)"
                    d="M292.656 1h220v2h-220z"
                  ></path>
                </g>
                <mask
                  id=":r3:-d"
                  maskUnits="userSpaceOnUse"
                  x="116"
                  y="0"
                  width="268"
                  height="12"
                  style={{ maskType: "alpha" }}
                >
                  <path
                    transform="rotate(180 384 12)"
                    fill="#C4C4C4"
                    d="M384 12h268v12H384z"
                  ></path>
                </mask>
                <g filter="url(#:r3:-e)" mask="url(#:r3:-d)">
                  <path
                    transform="rotate(180 360 1)"
                    fill="url(#:r3:-f)"
                    d="M360 1h220v2H360z"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id=":r3:-c"
                    x1="292.656"
                    y1="1"
                    x2="512.656"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A78BFA" stopOpacity="0"></stop>
                    <stop offset=".323" stopColor="#A78BFA"></stop>
                    <stop
                      offset=".672"
                      stopColor="#EC4899"
                      stopOpacity=".3"
                    ></stop>
                    <stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id=":r3:-f"
                    x1="360"
                    y1="1"
                    x2="580"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A78BFA" stopOpacity="0"></stop>
                    <stop offset=".323" stopColor="#A78BFA"></stop>
                    <stop
                      offset=".672"
                      stopColor="#EC4899"
                      stopOpacity=".3"
                    ></stop>
                    <stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop>
                  </linearGradient>
                  <filter
                    id=":r3:-b"
                    x="71.656"
                    y="-2"
                    width="222"
                    height="4"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation=".5"
                      result="effect1_foregroundBlur_311_43467"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id=":r3:-e"
                    x="131"
                    y="-10"
                    width="238"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.5"
                      result="effect1_foregroundBlur_311_43467"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
