import React, { useState } from "react";

import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../images/logotipo.svg";

import "../styles/global.css";
import "../styles/pages/forgotpassword.css";

function ForgotPassword() {
  const [emailPreenchido, setEmailPreenchido] = useState(true);

  function handleTest() {
    setEmailPreenchido(!emailPreenchido);
  }

  return (
    <div id="container">
      {emailPreenchido ? (
        <>
          <div id="page-login">
            <div className="content-wrapper">
              <img src={logoImg} alt="Logo Happy" />

              <div className="local">
                <strong>Mossoró</strong>
                <span>Rio Grande do Norte</span>
              </div>
            </div>
          </div>
          <div id="forgot-wrapper">
            <Link to="forgot" className="back-home" onClick={handleTest}>
              <FiArrowLeft size={48} color="#15C3D6" />
            </Link>

            <h1>Redefinição de senha</h1>
            <span>
              Escolha uma nova senha para você acessar o dashboard do Happy
            </span>
            <p>Nova senha</p>
            <input type="password" />

            <p>Repetir senha</p>
            <input type="password" />
            <button onClick={handleTest}>Entrar</button>
          </div>
        </>
      ) : (
        <>
          <div id="page-login">
            <div className="content-wrapper">
              <img src={logoImg} alt="Logo Happy" />

              <div className="local">
                <strong>Mossoró</strong>
                <span>Rio Grande do Norte</span>
              </div>
            </div>
          </div>
          <div id="forgot-wrapper">
            <Link to="/login" className="back-home">
              <FiArrowLeft size={48} color="#15C3D6" />
            </Link>

            <h1>Esqueci a senha</h1>
            <span>
              Sua redefinição de senha será enviada para o e-mail cadastrado
            </span>
            <p>E-mail</p>
            <input type="text" />
            <button onClick={handleTest}>Entrar</button>
          </div>
        </>
      )}
    </div>
  );
}
export default ForgotPassword;
