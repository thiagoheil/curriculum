import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Second from "../components/second";
import Congrats from "../components/congrats";
import NextLevelButton from "../components/nextlevelbutton";

const LevelDois = () => {
  const [password, setPassword] = useState("");
  const [validaSenha, setValidaSenha] = useState(false);

  const checkPassword = () => {
    if (password === "none" || password === "None" || password === "NONE") {
      setValidaSenha(true);
      toast.success("Congrats");
    } else {
      toast.error("Wrong password!");
    }
  };

  return (
    <>
      <div className="backgroundCrack">
        {validaSenha ? (
          <div className="nextLevelScreen">
            <Congrats />
            <NextLevelButton
              nextlevelhistory={"/projetos/crack-the-code/level-3"}
            />
          </div>
        ) : (
          <Second
            placeholder={"Password"}
            setPassword={setPassword}
            checkPassword={checkPassword}
          />
        )}
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default LevelDois;
