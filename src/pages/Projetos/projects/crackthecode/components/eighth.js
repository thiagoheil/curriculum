import React from "react";
import toast from "react-hot-toast";

const Eighth = ({ placeholder, checkPassword, setPassword }) => {
  const hint = () => {
    toast.success("Which year the world ended?");
  };

  return (
    <>
      <div className="enterPasswordMedium">
        <h2>LEVEL 8</h2>
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

export default Eighth;
