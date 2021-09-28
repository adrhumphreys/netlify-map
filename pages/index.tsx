import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <p>Where the map would go if I had one</p>
      <button onClick={() => setOpen(true)}>Open</button>

      <Modal open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default Home;
