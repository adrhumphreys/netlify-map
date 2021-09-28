import { GetStaticProps } from "next";
import { useState } from "react";
import Filters from "../components/Filter";
import Layout from "../components/Layout";
import ListMap from "../components/ListMap";
import SidebarLayout from "../components/SidebarLayout";
import { getAllFilters, FilterSet, Filter } from "../lib/filters";
import { getAllLocations, LocationData } from "../lib/locations";

export type ActiveFilters = Array<Filter>;

const Map = ({
  locations,
  filters,
}: {
  locations: Array<LocationData>;
  filters: Array<FilterSet>;
}) => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>([]);
  const toggleFilter = (filter: Filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f.id !== filter.id));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  console.log(activeFilters);

  return (
    <Layout title="Map">
      <SidebarLayout
        sidebar={
          <Filters
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            filters={filters}
          />
        }
      >
        <div className="h-map">
          <ListMap activeFilters={activeFilters} locations={locations} />
        </div>
      </SidebarLayout>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locations = await getAllLocations();
  const filters = await getAllFilters();

  return {
    props: {
      filters,
      locations,
    },
  };
};

export default Map;
