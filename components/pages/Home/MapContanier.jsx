import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
});

const MapContanier = () => {
  const locations = [
    { id: 1, name: "مكان 1", position: [-6.2, 106.816666] },
    { id: 2, name: "مكان 2", position: [-6.914744, 107.60981] },
  ];

  return (
    <MapContainer
      center={[-6.2, 106.816666]} // مركز الخريطة
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.position} icon={customIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default MapContanier;
