// eslint-disable-next-line
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { CartProvider } from "react-use-cart";

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
      {router.route.match("/admin") ? (
        <Component {...pageProps} />
      ) : (
        <CartProvider id="cccart">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      )}
    </>
  );
}
