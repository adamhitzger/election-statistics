"use client"
import DeckGL from "deck.gl";
import { ColumnLayer} from "@deck.gl/layers";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"
import {
  lightingEffect,
  INITIAL_VIEW_STATE,
} from "@/lib/mapconfig";
import type {PickingInfo} from '@deck.gl/core';
import { PartyRegionResult } from "@/types";
export default function Home() {
  const layer = new ColumnLayer<PartyRegionResult>({
    id: "col-layer",
    data: [
      {
        r_name: "Vysočina",
        p_name: "SPOLU",
        gps: [15.0912436,49.3961003],
        color: [39, 112, 245, 255],
        voters: 77631
      },
      {
        r_name: "Vysočina",
        p_name: "ANO 2011",
        gps: [15.1912436,49.3961003 ],
        color: [13, 53, 126, 255],
        voters: 74113
      },
      {
        r_name: "Vysočina",
        p_name: "SPOLU",
        gps: [15.0912436,49.3961003],
        color: [39, 112, 245, 255],
        voters: 77631
      },
      {
        r_name: "Vysočina",
        p_name: "PirStan",
        gps: [15.2912436,49.3961003 ],
        color: [106, 112, 32, 255],
        voters: 37451
      },
      {
        r_name: "Vysočina",
        p_name: "SPD",
        gps: [15.3912436,49.3961003 ],
        color: [198, 130, 56, 255],
        voters: 24729
      },
      {
        r_name: "Vysočina",
        p_name: "Přísaha",
        gps: [15.4912436,49.3961003 ],
        color: [56, 86, 198, 255],
        voters: 14504
      },
      {
        r_name: "Vysočina",
        p_name: "KSČM",
        gps: [15.5912436,49.3961003 ],
        color: [217, 32, 32, 255],
        voters: 12959
      },
      {
        r_name: "Vysočina",
        p_name: "TSS",
        gps: [15.6912436,49.3961003 ],
        color: [218, 122, 170, 255],
        voters: 9907
      },
      ],
    diskResolution: 12,
    extruded: true,
    radius: 2000,
    elevationScale: 5000,
    getElevation: (r: PartyRegionResult) => r.voters / 10000,
    getFillColor: (r: PartyRegionResult) => r.color,
    getPosition: (r: PartyRegionResult) => r.gps,
    pickable: true,
  });

  return (
    <main>
        <DeckGL
          effects={[lightingEffect]}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[layer]}
          getTooltip={({object}: PickingInfo<PartyRegionResult>) => object ? `Počet voličů ${object.p_name}: ${object.voters}` : ""}
        >
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
            mapStyle="mapbox://styles/petherem/cl2hdvc6r003114n2jgmmdr24"
            initialViewState={{
              longitude: INITIAL_VIEW_STATE.longitude,
              latitude: INITIAL_VIEW_STATE.latitude,
              zoom: INITIAL_VIEW_STATE.zoom,
            }}
          >

          </Map>
        </DeckGL>
    </main>
  );
}
