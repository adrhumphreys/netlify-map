import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllSlugs, getBySlug, LocationData } from "../../lib/locations";

interface Props {
  location: LocationData;
}

interface Params extends ParsedUrlQuery {
  location: string;
}

const Location: NextPage<Props> = ({ location }) => {
  const { title } = location;
  return <p>{title}</p>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = getAllSlugs().map((s) => ({ params: { location: s } }));

  return {
    paths: locations,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const slug = context?.params?.location!;

  const data = await getBySlug(slug);

  return {
    props: {
      location: data,
    },
  };
};

export default Location;
