import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


function LocationMarker() {
  const defaultPosition = [41.0685, 29.2153];
  const [position, setPosition] = useState(defaultPosition)
  const map = useMapEvents({
    click(e) {
      map.locate()
      console.log(e.latlng)
      setPosition(e?.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
    // locationfound(e) {
    //   map.locate()
    //   setPosition(e.latlng)
    //   map.flyTo(e.latlng, map.getZoom())
    // },
  })

  const selectedPin = new L.Icon({
    iconUrl: "/pin.png",
    iconSize: [36, 48],
    //iconAnchor: [36, 0],
    // popupAnchor: [-3, -40],
  });

  

  return position === null ? null : (
    <Marker
        position={position}
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
  )
}


const LeafletMap = () => {

 
  
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
      <LocationMarker />
    </MapContainer>
  );
};

export default LeafletMap;
