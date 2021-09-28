import fs from "fs";
import { join } from "path";

export type Filter = {
  id: string;
  title: string;
};

export type FilterSet = {
  name: string;
  filters: Array<Filter>;
};

export const getAllFilters = async (): Promise<Array<FilterSet>> => {
  const fullPath = join(process.cwd(), "content/settings/filter_sets.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const results = JSON.parse(fileContents);
  return results["filter_sets"];
};
