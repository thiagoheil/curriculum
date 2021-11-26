import React from "react";

import { useState } from "react";

import { DataAtual, verificaDataTypeDate } from "../utils/utils";

const ModalAddClient = ({ fechaCliente, salvaCliente }) => {
  //VALUES INPUT CLIENTE
  const [nomeCliente, setNomeCliente] = useState("");
  const [nascimentoCliente, setNascimentoCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [celularCliente, setCelularCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");

  const adicionarCliente = () => {
    salvaCliente(
      nomeCliente,
      nascimentoCliente,
      cpfCliente,
      celularCliente,
      enderecoCliente
    );
    fechaCliente();
  };

  return (
    <>
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
                type="date"
                min="1900-01-01"
                max={DataAtual()}
                placeholder="Nascimento"
                onChange={(e) => setNascimentoCliente(e.target.value)}
                onBlur={() =>
                  verificaDataTypeDate(
                    "date",
                    nascimentoCliente,
                    setNascimentoCliente
                  )
                }
              ></input>
              <input
                value={cpfCliente}
                type="text"
                placeholder="CPF"
                onChange={(e) =>
                  e.target.value.length <= 11 && setCpfCliente(e.target.value)
                }
              ></input>
              <input
                value={celularCliente}
                type="text"
                placeholder="Celular"
                onChange={(e) =>
                  e.target.value.length <= 9 &&
                  setCelularCliente(e.target.value)
                }
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
            <button onClick={adicionarCliente}>SALVAR</button>
            <button onClick={fechaCliente}>CANCELAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddClient;
