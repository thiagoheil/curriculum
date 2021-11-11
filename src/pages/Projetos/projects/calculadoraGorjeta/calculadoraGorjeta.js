import "./calculadoraGorjeta.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function CalculadoraGorjeta() {
  let [valor, setValor] = useState(0);
  let [resultado, setResultado] = useState(0);
  let [custom, setCustom] = useState(0);
  let [people, setPeople] = useState(0);

  let history = useHistory("");

  function addPeople(e) {
    setPeople(e.target.value);
    console.log(people);
  }

  function addCustom(e) {
    setCustom(e.target.value);
  }

  function addValor(e) {
    setValor(e.target.value);
  }

  function addResultado(valor) {
    setResultado(valor);
  }

  function valorCustom() {
    addResultado((valor * custom) / 100);
    console.log(custom);
  }

  let total = valor / people;

  console.log(total);

  function cinco() {
    addResultado((total * 5) / 100);
  }
  function dez() {
    addResultado((total * 10) / 100);
  }
  function quinze() {
    addResultado((total * 15) / 100);
  }
  function vintecinco() {
    addResultado((total * 25) / 100);
  }
  function cinquenta() {
    addResultado((total * 50) / 100);
  }

  function reset() {
    addResultado(0);
    total = 0;
    console.log(total);
    window.location.reload();
  }

  function botaoVoltar() {
    history.push("/projetos");
  }

  return (
    <div className="fundo">
      <button onClick={botaoVoltar} className="calculadoraVoltar">
        VOLTAR
      </button>
      <div className="fundo-caixa">
        <div className="caixa1">
          <div className="input-valor">
            <h4>Bill</h4>
            <input
              className="input-1"
              type="number"
              id="inputvalor"
              onChange={addValor}
            ></input>
          </div>
          <div>
            <h4>Select tip %</h4>
            <div className="botoesPorcentagem">
              <button onClick={cinco}>5%</button>
              <button onClick={dez}>10%</button>
              <button onClick={quinze}>15%</button>
              <button onClick={vintecinco}>25%</button>
              <button onClick={cinquenta}>50%</button>
              <input
                name="inputvalor"
                className="input-custom"
                type="number"
                placeholder="Custom"
                onChange={addCustom}
                onClick={valorCustom}
              ></input>
            </div>
          </div>
          <div>
            <h4>Number of people</h4>
            <input
              className="input"
              type="number"
              placeholder="Number of people"
              onChange={addPeople}
            ></input>
          </div>
        </div>
        <div className="caixa2">
          <div className="totais">
            <div className="tip-amount">
              <div id="percent">
                <h4>Tip Amount</h4>
                <small>/ person</small>
              </div>
              <div>
                <h1 id="total-tip">R${resultado}</h1>
              </div>
            </div>
            <div className="total">
              <div>
                <h4>Total</h4>
                <small>/ person</small>
              </div>
              <div>
                <h1 id="total-tip-person">R${total + resultado}</h1>
              </div>
            </div>
          </div>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default CalculadoraGorjeta;
