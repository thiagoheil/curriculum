import React from "react";
import toast from "react-hot-toast";

const Nineth = ({ placeholder, setPassword, checkPassword }) => {
  const hint = () => {
    toast.success("HINT");
  };

  return (
    <>
      <div className="enterPasswordMedium">
        <h2>LEVEL 9</h2>
        <label>Enter Password:</label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
        />
        <div className="crackButtons">
          <button onClick={checkPassword}>SUBMIT</button>
          <button onClick={hint}>HINT</button>
        </div>
      </div>
    </>
  );
};

export default Nineth;
