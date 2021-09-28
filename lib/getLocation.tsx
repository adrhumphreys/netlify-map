import { bundleMDX } from "mdx-bundler";
import Content from "../content/home.json";

export const prepareMDX = async (source: string) => {
  const { code } = await bundleMDX(source);
  return code;
};

type MapData = {
  type: string;
  lat: number;
  lon: number;
};

const parseMap = (mapData: string): MapData => {
  const parsed = JSON.parse(mapData);

  return {
    type: parsed.type,
    lat: parsed.coordinates[0],
    lon: parsed.coordinates[1],
  };
};

export const getLocation = async () => {
  const code = await prepareMDX(Content.body);

  const cats = Content.cats.map((cat) => ({ ...cat, map: parseMap(cat.map) }));

  return { ...Content, body: code, cats };
};
