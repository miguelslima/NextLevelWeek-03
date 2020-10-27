import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import { FiEdit, FiTrash } from "react-icons/fi";

import "../styles/pages/dashboard.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import SidebarDashboard from "../components/SidebarDashboard";
import { Link, useParams } from "react-router-dom";

interface Orphanage {
  id: number;
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

interface OrphanageParams {
  id: string;
}

export default function Dashboard() {
  const params = useParams<OrphanageParams>();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [orphanage, setOrphanage] = useState<Orphanage>();

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  let countOrphanages = 0;

  orphanages.map((orphanage) => {
    if (orphanage.pending === false) {
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
              <legend>Orfanatos cadastrados</legend>
              <span>{countOrphanages} orfanatos</span>
            </div>

            {orphanages.map((orphanage) => {
              if (orphanage.pending === false) {
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

                      <Link to={`/orphanages/edit/${orphanage.id}`}>
                        <button className="edit-orphanage">
                          <FiEdit size={20} color="#15C3D6" />
                        </button>
                      </Link>

                      <Link to="delete">
                        <button className="delete-orphanage">
                          <FiTrash size={20} color="#15C3D6" />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </fieldset>
        </div>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
