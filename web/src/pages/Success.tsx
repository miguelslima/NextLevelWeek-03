import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoSuccess from "../images/logoSuccess.svg";

import "../styles/pages/success.css";

export default function Success() {
  return (
    <div className="container">
      <div id="page-success">
        <div className="content-wrapper">
          <main>
            <h1>EBAAAA!</h1>
            <p>
              O cadastro deu certo e foi enviado ao administrador para ser
              aprovado. Agora é só esperar :).
            </p>
          </main>

          <div className="location-container">
            <Link to="/app" className="access-map">
              Voltar para o mapa
            </Link>
          </div>
        </div>

        <img src={logoSuccess} alt="Logo Sucesso" />
      </div>
    </div>
  );
}
