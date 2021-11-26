import React from "react";

import "../crud.css";

const CrudClients = ({ clientes }) => {
  return (
    <>
      <div>
        <table className="crudTable">
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>CPF</th>
            <th>Celular</th>
            <th>Endereço</th>
          </tr>
          {clientes.map((clientes) => (
            <tr>
              <td>{clientes.id}</td>
              <td>{clientes.nomeCliente}</td>
              <td>{clientes.nascimento}</td>
              <td>{clientes.cpfCliente}</td>
              <td>{clientes.celularCliente}</td>
              <td>{clientes.enderecoCliente}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default CrudClients;
