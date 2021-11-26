import React from "react";

const CrudProduts = ({ items }) => {
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

          {items.map((items) => (
            <tr>
              <td>{items.id}</td>
              <td>{items.nomeProduto}</td>
              <td>{items.fabricacaoProduto}</td>
              <td>{items.quantidadeProduto}</td>
              <td>{items.valorProduto}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default CrudProduts;
