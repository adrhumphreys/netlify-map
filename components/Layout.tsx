import Head from "next/head";
import { FC } from "react";
import Header from "./Header";

const siteTitle = "Mappy";

const Layout: FC<{ title?: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta name="description" content="Ethically sourced" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
