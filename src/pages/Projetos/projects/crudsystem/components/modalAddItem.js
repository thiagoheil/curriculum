import React from "react";

import { useState } from "react";
import { capitalizeFirstLetter } from "../utils/utils";

const ModalAddItem = ({ salvarItem, fechaProduto }) => {
  //VALUES INPUT PRODUTO
  const [nomeProduto, setNomeProduto] = useState("");
  const [fabricacaoProduto, setFabricacaoProduto] = useState("");
  const [quantidadeProduto, setQuantidadeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");

  const guardarItem = () => {
    salvarItem(nomeProduto, fabricacaoProduto, quantidadeProduto, valorProduto);

    fechaProduto();
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalAddProdutoPanel">
          <h2>ADICIONAR PRODUTO</h2>
          <div>
            <form className="addProdutoForm">
              <input
                value={nomeProduto}
                onChange={(e) =>
                  setNomeProduto(capitalizeFirstLetter(e.target.value))
                }
                type="text"
                placeholder="Produto"
              ></input>
              <input
                value={fabricacaoProduto}
                onChange={(e) =>
                  setFabricacaoProduto(capitalizeFirstLetter(e.target.value))
                }
                type="text"
                placeholder="Fabricação"
              ></input>
              <input
                value={quantidadeProduto}
                onChange={(e) =>
                  e.target.value.length <= 4 &&
                  setQuantidadeProduto(e.target.value)
                }
                type="number"
                placeholder="Quantidade"
              ></input>
              <input
                value={valorProduto}
                onChange={(e) => setValorProduto(e.target.value)}
                type="text"
                placeholder="Valor"
              ></input>
            </form>
            <div className="botoesAddCrud">
              <button onClick={guardarItem}>SALVAR</button>
              <button onClick={fechaProduto}>CANCELAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddItem;
