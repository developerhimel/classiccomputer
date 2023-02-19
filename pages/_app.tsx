// eslint-disable-next-line
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import FloatBox from "../components/reusable/FloatBox";
import { useRouter } from "next/router";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
      {router.route.startsWith("/Admin") ? null : <FloatBox />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
