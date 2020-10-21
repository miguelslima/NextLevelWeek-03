import React from "react";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../images/logotipo.svg";

import "../styles/global.css";
import "../styles/pages/login.css";

function Login() {
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

        <h1>Fazer Login</h1>
        <p>E-mail</p>
        <input type="text" />
        <p>Senha</p>
        <input type="password" />
        <div className="forgot-password">
          <input type="checkbox" name="remember" id="remember" />
          <span>Lembrar-me</span>
          <Link to="">Esqueci minha senha</Link>
        </div>
        <button>Entrar</button>
      </div>
    </div>
  );
}
export default Login;
