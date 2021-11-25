import React from "react";
import toast from "react-hot-toast";

const Tenth = ({ placeholder, checkPassword, setPassword }) => {
  const hint = () => {
    toast.success("Who can save us from the machines?");
  };

  return (
    <>
      <div className="enterPasswordHard">
        <h2>LEVEL 10</h2>
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

export default Tenth;
