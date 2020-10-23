import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import { FiEdit, FiTrash } from "react-icons/fi";

import "../styles/pages/dashboard.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import SidebarDashboard from "../components/SidebarDashboard";

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  pending: boolean;
  images: Array<{
    id: string;
    url: string;
  }>;
}

export default function Dashboard() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  let countOrphanages = 0;

  orphanages.map((orphanage) => {
    if (orphanage.pending === true) {
      countOrphanages += 1;
    }
  });

  return (
    <div id="page-create-orphanage">
      <SidebarDashboard />

      <main>
        <div className="dashboard">
          <fieldset>
            <div className="title">
              <legend>Cadastros Pendentes</legend>
              <span>
                {countOrphanages === 0 ? "" : countOrphanages + " Orfanatos"}
              </span>
            </div>

            {orphanages.map((orphanage) => {
              if (orphanage.pending === true) {
                return (
                  <div className="card-orphanage">
                    <Map
                      center={[orphanage.latitude, orphanage.longitude]}
                      style={{ width: 545, height: 230 }}
                      zoom={15}
                    >
                      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                      />
                    </Map>

                    <div className="card-orphanage-details">
                      <h2>{orphanage.name}</h2>

                      <button className="edit-orphanage">
                        <FiEdit size={20} color="#15C3D6" />
                      </button>
                      <button className="delete-orphanage">
                        <FiTrash size={20} color="#15C3D6" />
                      </button>
                    </div>
                  </div>
                );
              }
            })}
            {/* {console.log(orphanages.length)}
            {orphanages.length > 0 ? (
              <h1>Teste</h1>
            ) : (
              <h2>Teste 2</h2>
            ) } */}
          </fieldset>
        </div>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
