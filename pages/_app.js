import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// Add bootstrap
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
