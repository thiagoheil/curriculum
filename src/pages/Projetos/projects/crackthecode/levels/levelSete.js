import React from "react";

import { useState } from "react";

import Congrats from "../components/congrats";
import NextLevelButton from "../components/nextlevelbutton";
import Seventh from "../components/seventh";

import { toast, Toaster } from "react-hot-toast";

const LevelSete = () => {
  document.title = "Crack The Code | 7";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "aliens") {
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
              nextlevelhistory={"/projetos/crack-the-code/level-8"}
            />
          </div>
        ) : (
          <Seventh
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

export default LevelSete;
