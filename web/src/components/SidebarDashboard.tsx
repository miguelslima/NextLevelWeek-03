import React from "react";
import { FiPower, FiMapPin, FiAlertCircle } from "react-icons/fi";
import { Link, NavLink, useHistory } from "react-router-dom";
import mapMarkerImg from "../images/map-marker.svg";

import "../styles/components/SidebarDashboard.css";

export default function SidebarDashboard() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <div>
        <NavLink to="/dashboard" activeStyle={{background: "#FFD666"}}>
          <FiMapPin size={24} color="#FFF" />
        </NavLink>
        <NavLink to="/orphanage-pending" activeStyle={{background: "#FFD666"}}>
          <FiAlertCircle size={24} color="#FFF" />
        </NavLink>
      </div>

      <footer>
        <button type="button" onClick={() => {}}>
          <FiPower size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
