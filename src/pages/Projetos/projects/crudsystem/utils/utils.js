import React from "react";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const DataAtual = () => {
  let date = new Date();

  let hoje = date.getDate();
  let mes = date.getMonth() + 1;
  let ano = date.getFullYear();

  let dataAtual = ano + "-" + mes + "-" + hoje;

  return dataAtual;
};

export function verificaDataTypeDate(
  tipo,
  nascimentoCliente,
  setNascimentoCliente
) {
  if (tipo === "date") {
    if (nascimentoCliente < "1901-01-01") {
      setNascimentoCliente("1901-01-01");
    } else if (nascimentoCliente > DataAtual()) {
      setNascimentoCliente(DataAtual());
    }
  }
}
