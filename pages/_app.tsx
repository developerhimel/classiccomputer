import { useEffect, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
import "../styles/globals.css";
import 'swiper/css';
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  const [Theme, setTheme] = useState(undefined as any);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.theme = "light" ? setTheme("light") : setTheme("dark");
    } else null;
  }, []);
  console.log(Theme);

  return (
    <ConfigProvider
      theme={{
        algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
  // }
}
