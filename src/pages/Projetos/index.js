import React from "react";
import "./projetos.css";

import { useHistory } from "react-router-dom";

const Projetos = () => {
  let history = useHistory();

  const curriculum = () => {
    history.push("/");
  };

  function sgurdWebsite() {
    window.open("https://sgurd-b66a5.web.app/", "_blank");
  }

  function calculadora() {
    history.push("/projetos/calculadora");
  }

  function calculadoraGorjeta() {
    history.push("/projetos/calculadora-gorjeta");
  }

  function codeRedirect() {
    history.push("/projetos/crack-the-code");
  }

  function chuckNorris() {
    history.push("/projetos/chucknorris");
  }

  const crudSystem = () => {
    history.push("/projetos/crud-system");
  };

  const howDeep = () => {
    history.push("/projetos/how-deep");
  };

  return (
    <>
      <main className="mainProjects">
        <div className="backMainPanel">
          <div className="mainPanel">
            <h1>Meus projetos</h1>
            <div>
              <div className="botoesProjetos">
                <button
                  onClick={curriculum}
                  className="projectButton glow-on-hover"
                >
                  CURRICULUM
                </button>
                <button
                  className="projectButton"
                  id="sgurd-website"
                  onClick={sgurdWebsite}
                >
                  SGURD WEBSITE
                </button>
                <button
                  className="projectButton"
                  id="calculadoraButton"
                  onClick={calculadora}
                >
                  CALCULADORA
                </button>
                <button
                  onClick={calculadoraGorjeta}
                  className="projectButton"
                  id="calculadoraGorjeta"
                >
                  CALCULADORA DE GORJETA
                </button>
                <button
                  onClick={codeRedirect}
                  className="projectButton"
                  id="crackTheCodeButton"
                >
                  CRACK THE CODE
                </button>
                <button
                  id="chuckNorrisButton"
                  onClick={chuckNorris}
                  className="projectButton"
                >
                  CHUCK NORRIS JOKES
                </button>
                <button
                  className="projectButton"
                  id="crudSystemButton"
                  onClick={crudSystem}
                >
                  CRUD SYSTEM
                </button>
                <button className="projectButton" onClick={howDeep}>
                  O quão fundo você vai?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projetos;
