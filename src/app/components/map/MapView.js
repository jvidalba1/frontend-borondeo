// "use client";

// import { useEffect, useRef, useState } from "react";
// // import Map from "react-map-gl/maplibre";
// import "maplibre-gl/dist/maplibre-gl.css";
// // import { Map, Layer } from "@vis.gl/react-maplibre";
// // import type {FillLayer} from '@vis.gl/react-maplibre';
// // import { Map, MapStyle, TerrainControl } from "@vis.gl/react-maplibre";
// import { Map, Source, Layer } from "@vis.gl/react-maplibre";
// import "maplibre-gl/dist/maplibre-gl.css";

// const MAP_STYLE = {
//   version: 8,
//   sources: {
//     osm: {
//       type: "raster",
//       tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
//       tileSize: 256,
//       attribution: "&copy; OpenStreetMap Contributors",
//       maxzoom: 19,
//     },
//     terrainSource: {
//       type: "raster-dem",
//       url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
//       tileSize: 256,
//     },
//   },
//   layers: [
//     {
//       id: "osm",
//       type: "raster",
//       source: "osm",
//     },
//   ],
//   terrain: {
//     source: "terrainSource",
//     exaggeration: 1,
//   },
//   sky: {},
// };

// /**
//  * MapView Component
//  * Interactive map using MapLibre GL JS
//  * Follows Single Responsibility Principle: handles map rendering and initialization only
//  *
//  * Initial view: World map centered at [0, 20] with zoom level 2
//  * Map style: Free demo tiles from MapLibre
//  */
// export default function MapView() {
//   const [viewState, setViewState] = useState({
//     longitude: 0,
//     latitude: 0,
//     zoom: 2,
//     pitch: 0,
//     bearing: 0,
//   });

//   const geojson = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-75.5675, 6.25020015] },
//       },
//     ],
//   };

//   const layerStyle = {
//     id: "point",
//     type: "circle",
//     paint: {
//       "circle-radius": 10,
//       "circle-color": "#007cbf",
//     },
//   };

//   // return (
//   //   <Map
//   //     initialViewState={{
//   //       longitude: -122.45,
//   //       latitude: 37.78,
//   //       zoom: 14,
//   //     }}
//   //   >
//   // <Source id="my-data" type="geojson" data={geojson}>
//   //   <Layer {...layerStyle} />
//   // </Source>;
//   //   </Map>
//   // );
//   return (
//     <div className="absolute inset-0">
//       <Map
//         {...viewState}
//         onMove={(evt) => setViewState(evt.viewState)}
//         mapStyle={MAP_STYLE}
//         // mapStyle="https://demotiles.maplibre.org/style.json"
//         style={{ width: "100%", height: "100%" }}
//         attributionControl={true}
//       >
//         <Source id="my-data" type="geojson" data={geojson}>
//           <Layer {...layerStyle} />
//         </Source>
//       </Map>
//     </div>
//   );
// }

"use client";

import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
// import "./map.css";

maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const colombia = { lng: -74.297333, lat: 4.570868 };
  const zoom = 2;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "019d4acc-a263-7a3d-9589-fcb858554076",
      center: [colombia.lng, colombia.lat],
      zoom: zoom,
    });
  }, [colombia.lng, colombia.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
