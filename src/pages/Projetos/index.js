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
                <button className="projectButton">PROJETO 3</button>
                <button className="projectButton">PROJETO 4</button>
                <button className="projectButton">PROJETO 5</button>
                <button className="projectButton">PROJETO 6</button>
                <button className="projectButton">PROJETO 7</button>
                <button className="projectButton">PROJETO 8</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projetos;
