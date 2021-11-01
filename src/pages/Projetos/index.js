import React from "react";
import "./projetos.css";

const projetos = () => {
  return (
    <>
      <main>
        <div className="backMainPanel">
          <div className="mainPanel">
            <h1>Meus projetos</h1>
            <div>
              <div className="botoesProjetos">
                <button className="projectButton">PROJETO 1</button>
                <button className="projectButton">PROJETO 2</button>
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

export default projetos;
