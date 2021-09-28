import { NextPage } from "next";
import dynamic from "next/dynamic";
import config from "../cms/config";
import IDWidget from "../cms/id";
import MapWidget from "../cms/map";

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-gray-500 font-semibold text-xl">Loading...</p>
  </div>
);

const CMS = dynamic(
  (): any =>
    import("netlify-cms-app").then((cms: any) => {
      cms.registerWidget("id", IDWidget.Control, IDWidget.Preview);
      cms.registerWidget("mapbox", MapWidget.Control, MapWidget.Preview);
      cms.init({ config });
    }),
  { ssr: false, loading: Loading }
);

const Admin: NextPage = () => {
  return <CMS />;
};

export default Admin;
