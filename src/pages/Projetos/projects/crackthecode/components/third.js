import React from "react";
import toast from "react-hot-toast";

const Third = ({ checkPassword, placeholder, setPassword }) => {
  const hint = () => {
    toast.success("Three eyes, always watching");
  };
  return (
    <>
      <div className="enterPassword">
        <h2>LEVEL 3</h2>
        <label>Enter Password:</label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
        ></input>
        <div className="crackButtons">
          <button onClick={checkPassword}>SUBMIT</button>
          <button onClick={hint}>HINT</button>
        </div>
      </div>
    </>
  );
};

export default Third;
