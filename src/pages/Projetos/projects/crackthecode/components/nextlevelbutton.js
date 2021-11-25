import React from "react";

import { useHistory } from "react-router-dom";

const NextLevelButton = ({ nextlevelhistory }) => {
  let history = useHistory();

  function nextLevel() {
    let level = nextlevelhistory;
    history.push(level);
  }

  return (
    <>
      <button onClick={nextLevel}>NEXT LEVEL</button>
    </>
  );
};

export default NextLevelButton;
