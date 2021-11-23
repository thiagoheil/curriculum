import React from "react";

const CrudProduts = () => {
  return (
    <>
      <div>
        <table className="crudTable">
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Fabricação</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vinho</td>
            <td>Italia</td>
            <td>3</td>
            <td>35,99</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default CrudProduts;
