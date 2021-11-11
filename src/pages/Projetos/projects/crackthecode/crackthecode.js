import React from "react";
import "./crackthecode.css";

import { useState } from "react";

import First from "./components/first";
import Congrats from "./components/congrats";
import NextLevelButton from "./components/nextlevelbutton";

import { Toaster, toast } from "react-hot-toast";

const CrackTheCode = () => {
  const [password, setPassword] = useState("");
  const [validaSenha, setValidaSenha] = useState(false);

  const checkPassword = () => {
    if (password === "1234") {
      setValidaSenha(true);
      toast.success("Congrats");
    } else {
      toast.error("Wrong password");
    }
  };

  return (
    <>
      <div className="backgroundCrack">
        {validaSenha ? (
          <>
            <div className="nextLevelScreen">
              <Congrats />
              <NextLevelButton
                nextlevelhistory={"/projetos/crack-the-code/level-2"}
              />
            </div>
          </>
        ) : (
          <First
            placeholder={"Password"}
            setPassword={setPassword}
            checkPassword={checkPassword}
          />
        )}
        <Toaster position="bottom-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default CrackTheCode;
