import React from "react";

import "../crud.css";

const CrudClients = () => {
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
          <tr>
            <td>1</td>
            <td>Cleber Eduardo Koch</td>
            <td>25/03/1986</td>
            <td>053.385.953-20</td>
            <td>(51) 99766-4432</td>
            <td>Rua João Inácio, 135</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default CrudClients;
