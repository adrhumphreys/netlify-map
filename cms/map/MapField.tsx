import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRyaWFuaHVtcGhyZXlzIiwiYSI6ImNpbTM4bnkzbTAwNTF4MmtzemNwZHVrd2MifQ.j-yU65Xvny046C0MuXL56g";

const MapField = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    map.current.on("click", (event) => {
      const coordinates = event.lngLat;
      const { lat, lng } = coordinates;
      setMarker({ lat, lng });
    });
  });

  return <div ref={mapContainer} className="h-80" />;
};

export default MapField;
