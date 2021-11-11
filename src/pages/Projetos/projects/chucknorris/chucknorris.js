import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./chucknorris.css";

const ChuckNorris = () => {
  const [piada, setPiada] = useState();
  const [update, setUpdate] = useState(false);

  let history = useHistory("");

  useEffect(() => {
    let didCancel = false;

    async function fetchJoke() {
      if (!didCancel) {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        let data = await response.json();
        setPiada(data);
      }
    }

    fetchJoke();

    return () => {
      didCancel = true;
    };
  }, [update]);

  function botaoVoltar() {
    history.push("/projetos");
  }

  return (
    <div className="chuckNorrisBackground">
      <div className="chuckMainPanel">
        {piada && (
          <div className="chuckDiv">
            <img id="chuckIcon" src={piada.icon_url} alt={piada.id} />
            <div id="chuckPiada">
              <h1>{piada.value}</h1>
            </div>
          </div>
        )}
        <div className="chuckButtonsDiv">
          <button
            id="chuckNewJokeButton"
            onClick={() => {
              setUpdate((prevState) => !prevState);
            }}
          >
            NEW JOKE
          </button>
          <button onClick={botaoVoltar} className="calculadoraVoltar">
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChuckNorris;
