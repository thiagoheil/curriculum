import styled from "styled-components";

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;

  border: 2px solid ${({ color }) => color};
  border-radius: 4px;

  cursor: pointer;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : "#f8f9fa")};
  color: ${({ color }) => (color ? `${color}` : "black")};
`;
