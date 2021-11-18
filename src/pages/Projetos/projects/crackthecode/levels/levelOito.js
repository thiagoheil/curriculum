import React from "react";

import { useState } from "react";

import Congrats from "../components/congrats";
import NextLevelButton from "../components/nextlevelbutton";
import Eighth from "../components/eighth";

import { toast, Toaster } from "react-hot-toast";

const LevelOito = () => {
  document.title = "Crack The Code | 8";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "2012") {
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
              nextlevelhistory={"/projetos/crack-the-code/level-9"}
            />
          </div>
        ) : (
          <Eighth
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

export default LevelOito;
