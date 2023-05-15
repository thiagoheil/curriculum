import React from "react";

import { StyledButton } from "./styles";

const Button = ({ title, onClick, bgColor, color }) => {
  return (
    <>
      <StyledButton onClick={onClick} bgColor={bgColor} color={color}>
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
