import MapGL, {
  Popup,
  NavigationControl,
  ScaleControl,
  WebMercatorViewport,
} from "react-map-gl";
import MapListPopup from "./MapListPopup";
import ListMapPins from "./ListMapPins";
import { useEffect, useState } from "react";
import { LocationData } from "../lib/locations";
import { Filter } from "../lib/filters";
import { ActiveFilters } from "../pages/map";

const TOKEN =
  "pk.eyJ1IjoiYWRyaWFuaHVtcGhyZXlzIiwiYSI6ImNpbTM4bnkzbTAwNTF4MmtzemNwZHVrd2MifQ.j-yU65Xvny046C0MuXL56g";

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const getLocationsToShow = (
  activeFilters: ActiveFilters,
  locations: Array<LocationData>
) => {
  if (activeFilters.length <= 0) {
    return locations;
  }

  let results = [] as Array<LocationData>;

  locations.forEach((location) => {
    activeFilters.forEach((filter) => {
      if (location.categories.includes(filter.id)) {
        results.push(location);
      }
    });
  });

  return results;
};

const ListMap = ({
  activeFilters,
  locations,
}: {
  activeFilters: ActiveFilters;
  locations: Array<LocationData>;
}) => {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState<LocationData | null>(null);

  const locationsToShow = getLocationsToShow(activeFilters, locations);
  const bounds: any = locationsToShow.map((l) => [l.longitude, l.latitude]);

  useEffect(() => {
    if (bounds.length <= 0) return;

    console.log(bounds);

    setViewport(
      new WebMercatorViewport({ width: 800, height: 600 }).fitBounds(bounds, {
        padding: 50,
      })
    );
  }, []);

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <ListMapPins data={locationsToShow} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <MapListPopup {...popupInfo} />
          </Popup>
        )}

        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </>
  );
};

export default ListMap;
