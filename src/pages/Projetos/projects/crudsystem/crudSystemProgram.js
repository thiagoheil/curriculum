import React from "react";

import "./crud.css";

import { useState } from "react";

import CrudClients from "./components/clientes";
import CrudProduts from "./components/produtos";

const CrudSystemProgram = () => {
  const [content, setContent] = useState("");
  const [sobreActive, setSobreActive] = useState(false);
  const [addCliente, setAddCliente] = useState(false);
  const [addProduto, setAddProduto] = useState(false);

  //VALUES INPUT CLIENTE
  const [nomeCliente, setNomeCliente] = useState("");
  const [nascimentoCliente, setNascimentoCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [celularCliente, setCelularCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");

  //VALUES INPUT PRODUTO
  const [nomeProduto, setNomeProduto] = useState("");
  const [fabricacaoProduto, setFabricacaoProduto] = useState("");
  const [quantidadeProduto, setQuantidadeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");

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
          <div className="modalBackground" onClick={sobreFalse}>
            <div className="modalSobrePanel">
              <h1>CRUD SYSTEM</h1>
              <label>by Thiago Rafael Heilmann</label>
            </div>
          </div>
        )}

        {addProduto && (
          <div className="modalBackground">
            <div className="modalAddProdutoPanel">
              <h2>ADICIONAR PRODUTO</h2>
              <div>
                <form className="addProdutoForm">
                  <input type="text" placeholder="Produto"></input>
                  <input type="text" placeholder="Fabricação"></input>
                  <input type="text" placeholder="Quantidade"></input>
                  <input type="text" placeholder="Valor"></input>
                </form>
                <div className="botoesAddCrud">
                  <button>SALVAR</button>
                  <button onClick={fechaProduto}>CANCELAR</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {addCliente && (
          <div className="modalBackground">
            <div className="modalAddClientePanel">
              <h2>ADICIONAR CLIENTE</h2>
              <div>
                <form className="addClienteForm">
                  <input
                    value={nomeCliente}
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setNomeCliente(e.target.value)}
                  ></input>
                  <input
                    value={nascimentoCliente}
                    type="text"
                    placeholder="Nascimento"
                    onChange={(e) => setNascimentoCliente(e.target.value)}
                  ></input>
                  <input
                    value={cpfCliente}
                    type="text"
                    placeholder="CPF"
                    onChange={(e) => setCpfCliente(e.target.value)}
                  ></input>
                  <input
                    value={celularCliente}
                    type="text"
                    placeholder="Celular"
                    onChange={(e) => setCelularCliente(e.target.value)}
                  ></input>
                  <input
                    value={enderecoCliente}
                    type="text"
                    placeholder="Endereço"
                    onChange={(e) => setEnderecoCliente(e.target.value)}
                  ></input>
                </form>
              </div>
              <div className="botoesAddCrud">
                <button>SALVAR</button>
                <button onClick={fechaCliente}>CANCELAR</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CrudSystemProgram;
