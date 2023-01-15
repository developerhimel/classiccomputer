import { useEffect, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import FloatBox from "../components/reusable/FloatBox";

export default function App({ Component, pageProps }: AppProps) {
  const [Theme, setTheme] = useState(undefined as any);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // if (
      //   localStorage.getItem("theme") === "dark" ||
      //   (!("color-theme" in localStorage) &&
      //     window.matchMedia("(prefers-color-scheme: dark)").matches)
      // ) {
      //   document.documentElement.classList.add("dark");
      // } else {
      //   document.documentElement.classList.remove("dark");
      // }
      // localStorage.theme = "light" ? setTheme("light") : setTheme("dark");
    }
  }, []);
  console.log(Theme);

  return (
    <>
      <FloatBox />
      <Component {...pageProps} />
    </>
  );
}
