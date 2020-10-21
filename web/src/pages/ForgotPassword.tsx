import React from "react";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../images/logotipo.svg";

import "../styles/global.css";
import "../styles/pages/forgotpassword.css";

function ForgotPassword() {
  return (
    <div id="container">
      <div id="page-login">
        <div className="content-wrapper">
          <img src={logoImg} alt="Logo Happy" />

          <div className="local">
            <strong>Mossoró</strong>
            <span>Rio Grande do Norte</span>
          </div>
        </div>
      </div>
      <div id="login-wrapper">
        <Link to="/" className="back-home">
          <FiArrowLeft size={48} color="#15C3D6" />
        </Link>

        <h1>Redefinição de senha</h1>
        <span>Sua redefinição de senha será enviada para o e-mail cadastrado</span>
        <p>E-mail</p>
        <input type="text" />
        <button>Entrar</button>
      </div>
    </div>
  );
}
export default ForgotPassword;
