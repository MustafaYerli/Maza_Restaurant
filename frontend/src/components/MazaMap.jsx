import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const POSITION = [48.2450656, 16.3620371];

// Interaktive Karte im Brand-Stil (dunkle CartoDB-Tiles, grün getönt, goldener Pin).
export const MazaMap = () => {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: POSITION,
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(map);

    const pin = L.divIcon({
      className: "maza-pin",
      html: `
        <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 0C7.6 0 0 7.6 0 17c0 12.2 17 29 17 29s17-16.8 17-29C34 7.6 26.4 0 17 0z" fill="#B19963"/>
          <circle cx="17" cy="17" r="6.5" fill="#071E19"/>
        </svg>`,
      iconSize: [34, 46],
      iconAnchor: [17, 46],
      popupAnchor: [0, -42],
    });

    L.marker(POSITION, { icon: pin })
      .addTo(map)
      .bindPopup(
        '<div class="maza-popup"><strong>MAZA Vienna</strong><br/>Gunoldstraße 1 / Heiligenstädterstraße 78<br/>1190 Wien</div>'
      );

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="maza-map absolute inset-0" data-testid="maza-map" />;
};

export default MazaMap;
