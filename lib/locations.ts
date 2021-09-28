import fs from "fs";
import { join } from "path";

export type LocationData = {
  title: string;
  neighbourhood: string;
  address: string;
  significance: string;
  image: string;
  longitude: number;
  latitude: number;
  categories: Array<string>;
};

export const directory = join(process.cwd(), "content/locations");

export const getAllLocations = () => {
  const locations = fs.readdirSync(directory);
  return locations.map((fileName) => {
    const fullPath = join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents);
  });
};

export const getAllSlugs = () => {
  const locations = fs.readdirSync(directory);
  return locations.map((fileName) => fileName.replace(/\.json$/, ""));
};

export const getBySlug = async (slug: string): Promise<LocationData> => {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(directory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
