import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Layout from "../components/layout";

config.autoAddCss = false;

const defaultLayout = (page) => <Layout>{page}</Layout>;

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;

  // needed to reset the focus link on change
  // see https://github.com/vercel/next.js/issues/33060#issuecomment-1006615395
  const router = useRouter();
  useEffect(() => {
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
