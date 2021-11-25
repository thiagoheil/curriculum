import React from "react";
import toast from "react-hot-toast";

const Seventh = ({ placeholder, checkPassword, setPassword }) => {
  const hint = () => {
    toast.success("Who built the pyramids?");
    document.title = "Aliens";
  };

  return (
    <>
      <div className="enterPasswordMedium">
        <h2>LEVEL 7</h2>
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

export default Seventh;
