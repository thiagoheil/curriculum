import React from "react";

import "./crud.css";

import { useState } from "react";

import CrudClients from "./components/clientes";
import CrudProduts from "./components/produtos";

const CrudSystemProgram = () => {
  const [content, setContent] = useState("");
  const [sobreActive, setSobreActive] = useState(false);

  const sobre = () => {
    setSobreActive(true);
  };

  const sobreFalse = () => {
    setSobreActive(false);
  };

  const cliente = () => {
    setContent("clientes");
  };
  const produtos = () => {
    setContent("produtos");
  };

  return (
    <>
      <div className="mainCrudSystem">
        <div className="mainPanelCrudSystem">
          <div className="botoesCrudPanel">
            <button onClick={cliente}>CLIENTES</button>
            <button onClick={produtos}>PRODUTOS</button>
            <button onClick={sobre}>SOBRE</button>
          </div>
          <div className="crudContent">
            {content === "clientes" ? (
              <CrudClients />
            ) : <h1 className="crudWelcome">CRUD SYSTEM</h1> &&
              content === "produtos" ? (
              <CrudProduts />
            ) : (
              <h1 className="crudWelcome">CRUD SYSTEM</h1>
            )}
          </div>
        </div>

        {sobreActive && (
          <div className="modalSobre" onClick={sobreFalse}>
            <div className="modalSobrePanel">
              <h1>CRUD SYSTEM</h1>
              <label>by Thiago Rafael Heilmann</label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CrudSystemProgram;
