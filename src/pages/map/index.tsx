import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LeafletMap = () => {
  const selectedPin = new L.Icon({
    iconUrl: "/pin.png",
    iconSize: [36, 48],
    iconAnchor: [36, 0],
    // popupAnchor: [-3, -40],
  });
  return (
    <MapContainer
      center={[41.0685, 29.2153]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-[700px] h-[400px] mt-10 mx-auto"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[41.0685, 29.2153]}
        key={123}
        icon={selectedPin}
        eventHandlers={{
          click: () => {},
        }}
        zIndexOffset={0}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
