import React from "react";
import { FiPower, FiMapPin, FiAlertCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import mapMarkerImg from "../images/map-marker.svg";

import "../styles/components/SidebarDashboard.css";

export default function SidebarDashboard() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <div>
        <button type="button" onClick={() => {}}>
          <FiMapPin size={24} color="#FFF" />
        </button>
        <button type="button" onClick={() => {}}>
          <FiAlertCircle size={24} color="#FFF" />
        </button>
      </div>

      <footer>
        <button type="button" onClick={() => {}}>
          <FiPower size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
