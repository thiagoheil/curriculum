import React from "react";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Congrats from "../components/congrats";
import NextLevelButton from "../components/nextlevelbutton";
import Sixth from "../components/sixth";

const LevelSeis = () => {
  document.title = "Crack The Code | 6";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "Chlorophyll" || password === "clorofila") {
      toast.success("Congrats");
      setValidaPassword(true);
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
              nextlevelhistory={"/projetos/crack-the-code/level-7"}
            />
          </div>
        ) : (
          <Sixth
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

export default LevelSeis;
