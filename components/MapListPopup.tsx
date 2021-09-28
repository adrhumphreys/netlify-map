import { LocationData } from "../lib/locations";

const MapListPopup = (props: LocationData) => {
  return (
    <div>
      <p>heyo</p>
      <p>{props.address}</p>
    </div>
  );
};

export default MapListPopup;
