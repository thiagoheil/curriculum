import React from "react";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Fourth from "../components/fourth";
import NextLevelButton from "../components/nextlevelbutton";
import Congrats from "../components/congrats";

const LevelQuatro = () => {
  document.title = "Crack The Code | 4";

  const [password, setPassword] = useState("");
  const [validaPassword, setValidaPassword] = useState(false);

  const checkPassword = () => {
    if (password === "ghost") {
      toast.success("Congrats");
      setValidaPassword(true);
    } else {
      toast.error("Invalid Password");
    }
  };

  return (
    <>
      <div className="backgroundCrack">
        <p className="invisibleText">ghost</p>
        {validaPassword ? (
          <div className="nextLevelScreen">
            <Congrats />
            <NextLevelButton
              nextlevelhistory={"/projetos/crack-the-code/level-5"}
            />
          </div>
        ) : (
          <Fourth
            setPassword={setPassword}
            checkPassword={checkPassword}
            placeholder={"Password"}
          />
        )}
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default LevelQuatro;
