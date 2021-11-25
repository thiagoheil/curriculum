import React from "react";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Third from "../components/third";
import NextLevelButton from "../components/nextlevelbutton";
import Congrats from "../components/congrats";

const LevelTres = () => {
  document.title = "Crack The Code | 3";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "sgurd") {
      setValidaPassword(true);
      toast.success("Congrats");
    } else {
      toast.error("Invalid Password");
    }
  };

  return (
    <>
      <div className="backgroundCrack">
        {validaPassword ? (
          <div className="nextLevelScreen">
            <Congrats />
            <NextLevelButton
              nextlevelhistory={"/projetos/crack-the-code/level-4"}
            />
          </div>
        ) : (
          <Third
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

export default LevelTres;
