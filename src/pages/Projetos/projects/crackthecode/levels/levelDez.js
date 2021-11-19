import React, { useEffect } from "react";
import "../components/hard.css";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

import Congrats from "../components/congrats";
import Tenth from "../components/tenth";

const LevelDez = () => {
  document.title = "Crack The Code | 10";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  let history = useHistory();

  const finish = () => {
    history.push("/");
  };

  const checkPassword = () => {
    if (password === "terminator") {
      toast("Congrats!", {
        icon: "🎂",
      });
      setValidaPassword(true);
    } else {
      toast.error("Invalid Password");
    }
  };

  return (
    <>
      <div className="backgroundCrackHard">
        {validaPassword ? (
          <div className="nextLevelScreen">
            <Congrats />
            <button onClick={finish}>FINISH</button>
          </div>
        ) : (
          <Tenth
            placeholder={"Password"}
            checkPassword={checkPassword}
            setPassword={setPassword}
          />
        )}
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default LevelDez;
