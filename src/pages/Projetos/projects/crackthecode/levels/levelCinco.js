import React from "react";

import { useState } from "react";

import Congrats from "../components/congrats";
import NextLevelButton from "../components/nextlevelbutton";
import Fifth from "../components/fifth";
import { toast, Toaster } from "react-hot-toast";

const LevelCinco = () => {
  document.title = "Crack The Code | 5";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "everest") {
      setValidaPassword(true);
      toast.success("Congrats");
    } else {
      toast.error("Invalid Password");
    }
  };

  return (
    <>
      <div className="backgroundCrackMedium">
        {validaPassword ? (
          <div className="nextLevelScreen">
            <Congrats />
            <NextLevelButton
              nextlevelhistory={"/projetos/crack-the-code/level-6"}
            />
          </div>
        ) : (
          <Fifth
            placeholder={"Password"}
            setPassword={setPassword}
            checkPassword={checkPassword}
          />
        )}
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default LevelCinco;
