import React from "react";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Third from "../components/third";
import NextLevelButton from "../components/nextlevelbutton";
import Congrats from "../components/congrats";

const LevelTres = () => {
  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "123") {
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
            <NextLevelButton nextlevelhistory={"/"} />
          </div>
        ) : (
          <Third
            placeholder={"Password"}
            setPassword={setPassword}
            checkPassword={checkPassword}
          />
        )}
      </div>
      <Toaster />
    </>
  );
};

export default LevelTres;
