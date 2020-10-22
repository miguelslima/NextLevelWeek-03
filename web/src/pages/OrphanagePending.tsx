import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { latLng, LeafletMouseEvent } from "leaflet";

import { FiEdit, FiTrash } from "react-icons/fi";

import "../styles/pages/dashboard.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";

export default function Dashboard() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpenongHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("instructions", instructions);
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekkends", String(open_on_weekends));

    images.forEach((image) => {
      data.append("images", image);
    });

    console.log({
      name,
      about,
      latitude,
      longitude,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await api.post("orphanages", data);

    alert("Orfanato criado com sucesso!");

    history.push("/app");
  }

  return (
    <div id="page-create-orphanage">
      <SidebarDashboard />

      <main>
        <div className="dashboard">
          <fieldset>
            <div className="title">
              <legend>Cadastros Pendentes</legend>
              <span>2 orfanatos</span>
            </div>

            <div className="card-orphanage">
              <Map
                center={[-5.1766991, -37.3705384]}
                style={{ width: 545, height: 230 }}
                zoom={15}
                onclick={handleMapClick}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>

              <div className="card-orphanage-details">
                <h2>Orfanato Esperança</h2>

                <button className="edit-orphanage">
                  <FiEdit size={20} color="#15C3D6" />
                </button>
                <button className="delete-orphanage">
                  <FiTrash size={20} color="#15C3D6" />
                </button>
              </div>
            </div>

            <div className="card-orphanage">
              <Map
                center={[-5.1766991, -37.3705384]}
                style={{ width: 545, height: 230 }}
                zoom={15}
                onclick={handleMapClick}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>

              <div className="card-orphanage-details">
                <h2>Orfanato Esperança</h2>

                <button className="edit-orphanage">
                  <FiEdit size={20} color="#15C3D6" />
                </button>
                <button className="delete-orphanage">
                  <FiTrash size={20} color="#15C3D6" />
                </button>
              </div>
            </div>

            <div className="card-orphanage">
              <Map
                center={[-5.1766991, -37.3705384]}
                style={{ width: 545, height: 230 }}
                zoom={15}
                onclick={handleMapClick}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>

              <div className="card-orphanage-details">
                <h2>Orfanato Esperança</h2>

                <button className="edit-orphanage">
                  <FiEdit size={20} color="#15C3D6" />
                </button>
                <button className="delete-orphanage">
                  <FiTrash size={20} color="#15C3D6" />
                </button>
              </div>
            </div>

            <div className="card-orphanage">
              <Map
                center={[-5.1766991, -37.3705384]}
                style={{ width: 545, height: 230 }}
                zoom={15}
                onclick={handleMapClick}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>

              <div className="card-orphanage-details">
                <h2>Orfanato Esperança</h2>

                <button className="edit-orphanage">
                  <FiEdit size={20} color="#15C3D6" />
                </button>
                <button className="delete-orphanage">
                  <FiTrash size={20} color="#15C3D6" />
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
