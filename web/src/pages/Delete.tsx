import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoDelete from "../images/logoDelete.svg";

import "../styles/pages/delete.css";

export default function Delete() {
  return (
    <div className="container">
      <div id="page-success">
        <div className="content-wrapper">
          <main>
            <h1>Excluir!</h1>
            <p>Você tem certeza que quer excluir Orf. Esperança?</p>
          </main>

          <div className="location-container">
            <Link to="/app" className="access-map">
              Voltar para o mapa
            </Link>
          </div>
        </div>

        <img src={logoDelete} alt="Logo Sucesso" />
      </div>
    </div>
  );
}
