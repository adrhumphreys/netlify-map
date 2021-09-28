import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Modal from "../components/Modal";
import Layout from "../components/Layout";

declare global {
  var netlifyIdentity: any;
}
const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <Layout>
      <Head>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </Head>
      <p>Where the map would go if I had one</p>
      <button onClick={() => setOpen(true)}>Open</button>

      <Modal open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default Home;
