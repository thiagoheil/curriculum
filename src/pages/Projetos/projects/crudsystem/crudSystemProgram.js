import React from "react";

import "./crud.css";

import { useState } from "react";

import CrudClients from "./components/clientes";
import CrudProduts from "./components/produtos";
import ModalAddClient from "./components/modalAddCliente";
import ModalAddItem from "./components/modalAddItem";

import { capitalizeFirstLetter } from "./utils/utils";

const CrudSystemProgram = () => {
  const [content, setContent] = useState("");
  const [sobreActive, setSobreActive] = useState(false);
  const [addCliente, setAddCliente] = useState(false);
  const [addProduto, setAddProduto] = useState(false);

  //USESTATE DO CLIENTE E PRODUTO
  const [clientes, setClientes] = useState([]);
  const [items, setItems] = useState([]);

  //ADICIONA NOVO PRODUTO
  function salvarItem(
    nomeProduto,
    fabricacaoProduto,
    quantidadeProduto,
    valorProduto
  ) {
    const newItem = [
      ...items,
      {
        id: Math.random(999),
        nomeProduto: nomeProduto,
        fabricacaoProduto: fabricacaoProduto,
        quantidadeProduto: quantidadeProduto,
        valorProduto: valorProduto,
      },
    ];
    setItems(newItem);
  }

  //ADICIONA NOVO CLIENTE
  function salvaCliente(
    nomeCliente,
    nascimentoCliente,
    cpfCliente,
    celularCliente,
    enderecoCliente
  ) {
    const newCliente = [
      ...clientes,
      {
        id: Math.random(999),
        nomeCliente: nomeCliente,
        nascimento: nascimentoCliente,
        cpfCliente: cpfCliente,
        celularCliente: celularCliente,
        enderecoCliente: enderecoCliente,
      },
    ];

    setClientes(newCliente);
  }

  const pegaProduto = () => {
    setAddProduto(true);
  };

  const fechaProduto = () => {
    setAddProduto(false);
  };

  const pegaCliente = () => {
    setAddCliente(true);
  };

  const fechaCliente = () => {
    setAddCliente(false);
  };

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
            {content === "clientes" ? (
              <button onClick={pegaCliente}>ADICIONAR CLIENTE</button>
            ) : null}
            {content === "produtos" ? (
              <button onClick={pegaProduto}>ADICIONAR PRODUTO</button>
            ) : null}
          </div>
          <div className="crudContent">
            {content === "clientes" ? (
              <CrudClients clientes={clientes} />
            ) : <h1 className="crudWelcome">CRUD SYSTEM</h1> &&
              content === "produtos" ? (
              <CrudProduts items={items} />
            ) : (
              <h1 className="crudWelcome">CRUD SYSTEM</h1>
            )}
          </div>
        </div>

        {sobreActive && (
          <div className="modalBackground" onClick={sobreFalse}>
            <div className="modalSobrePanel">
              <h1>CRUD SYSTEM</h1>
              <label>by Thiago Rafael Heilmann</label>
            </div>
          </div>
        )}

        {addProduto && (
          <ModalAddItem salvarItem={salvarItem} fechaProduto={fechaProduto} />
        )}

        {addCliente && (
          <ModalAddClient
            fechaCliente={fechaCliente}
            salvaCliente={salvaCliente}
          />
        )}
      </div>
    </>
  );
};

export default CrudSystemProgram;
