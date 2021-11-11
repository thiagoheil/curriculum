import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

const LevelDoisHint = () => {
  const hiddenButton = () => {
    toast("both are awesome :)");
    toast("NONE");
  };

  let history = useHistory();

  const returnToPreviusPage = () => {
    history.push("/projetos/crack-the-code/level-2");
  };

  return (
    <>
      <div className="backgroundCrack">
        <button className="returnButton" onClick={returnToPreviusPage}>
          RETURN
        </button>
        <h1>Which one is better?</h1>
        <select>
          <option value="Playstation">Playstation</option>
          <option value="Xbox">Xbox</option>
          <option value="Computer">Computer</option>
        </select>
        <button className="invisibleButton" onClick={hiddenButton}>
          CLICK ME
        </button>
        <Toaster />
      </div>
    </>
  );
};

export default LevelDoisHint;
