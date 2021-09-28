import type { GetStaticProps, NextPage } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

import Layout from "../components/Layout";
import { getLocation } from "../lib/getLocation";
import Filters from "../components/Filter";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
];

type Props = {
  post: {
    body: string;
  };
};

const Test: NextPage<Props> = (props) => {
  const { post } = props;

  const Component = useMemo(() => getMDXComponent(post.body), [post.body]);

  console.log(post);
  return (
    <Layout title="Test">
      <Filters filters={filters} />
      <p>hey</p>
      <Component />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getLocation();

  return {
    props: {
      post,
    },
  };
};

export default Test;
