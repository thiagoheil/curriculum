import React from "react";

import toast from "react-hot-toast";

const Sixth = ({ placeholder, checkPassword, setPassword }) => {
  const hint = () => {
    toast.success("Responsible for the green color of plants is called:");
  };

  return (
    <>
      <div className="enterPasswordMedium">
        <h2>LEVEL 6</h2>
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

export default Sixth;
