import React from "react";
import toast from "react-hot-toast";

import "./medium.css";

const Fifth = ({ checkPassword, setPassword, placeholder }) => {
  const hint = () => {
    toast.success(`000 000 27° 59' 17" N 86° 55' 31" E`);
  };

  return (
    <>
      <div className="enterPasswordMedium">
        <h2>LEVEL 5</h2>
        <label>Enter Password:</label>
        <input
          placeholder={placeholder}
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
          type="text"
        ></input>
        <div className="crackButtons">
          <button onClick={checkPassword}>SUBMIT</button>
          <button onClick={hint}>HINT</button>
        </div>
      </div>
    </>
  );
};

export default Fifth;
