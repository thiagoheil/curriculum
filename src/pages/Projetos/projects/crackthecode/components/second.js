import React from "react";
import toast from "react-hot-toast";

const Second = ({ setPassword, checkPassword, placeholder }) => {
  const hint = () => {
    toast("/projetos/crack-the-code/level-2/hint");
  };

  return (
    <>
      <div className="enterPassword">
        <h2>LEVEL 2</h2>
        <label>Enter Password</label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="crackButtons">
          <button onClick={checkPassword}>SUBMIT</button>
          <button onClick={hint}>HINT</button>
        </div>
      </div>
    </>
  );
};

export default Second;
