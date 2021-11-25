import React from "react";

import "./crud.css";
import { useHistory } from "react-router-dom";

const CrudSystem = () => {
  let history = useHistory();

  const start = () => {
    history.push("/projetos/crud-system/start");
  };

  return (
    <>
      <div className="mainCrudSystem">
        <h1 className="welcomeMessageCrud">CRUD SYSTEM</h1>
        <button onClick={start} className="startButton">
          START
        </button>
      </div>
    </>
  );
};

export default CrudSystem;
