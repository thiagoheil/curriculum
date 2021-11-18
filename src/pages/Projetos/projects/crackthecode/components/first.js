import React from "react";
import toast from "react-hot-toast";
import "./first.css";

const First = ({ setPassword, placeholder, checkPassword }) => {
  const hint = () => {
    console.log("Password:1234");
    toast("Check the console");
  };

  return (
    <>
      <div className="enterPassword">
        <h2>LEVEL 1</h2>
        <label>Enter the password</label>
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

export default First;
