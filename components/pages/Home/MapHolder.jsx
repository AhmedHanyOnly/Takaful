"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// أيقونة الدبوس
const customIcon = new L.Icon({
  iconUrl: "/logo.jpg",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
  // shadowUrl: "/logo.jpg",
  shadowSize: [45, 45],
});

export const MapHolder = () => {
  const locations = [
    { lat: 30.0444, lng: 31.2357, name: "Cairo" },
    { lat: 31.2001, lng: 29.9187, name: "Alexandria" },
  ];

  return (
    <div
      className="max-w-4xl mx-auto my-8 overflow-hidden rounded-3xl border-4 border-[var(--primary-color)] shadow-xl"
      style={{
        background: "#000",
        borderColor: "#c32126" // خلفية خفيفة للخريطة
      }}
    >
      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={6}
        style={{ height: "550px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]} icon={customIcon}>
            <Popup>
              <span className="font-semibold text-lg">{loc.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
