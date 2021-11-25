import React from "react";
import toast from "react-hot-toast";

const Fourth = ({ setPassword, checkPassword, placeholder }) => {
  const hint = () => {
    toast("You can't see him, but he is looking at you!");
  };

  return (
    <>
      <div className="enterPassword">
        <h2>LEVEL 4</h2>
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

export default Fourth;
