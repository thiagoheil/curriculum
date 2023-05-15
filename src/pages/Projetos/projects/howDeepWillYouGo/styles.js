import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  border: 8px solid #212529;
  background-color: #f8f9fa;
  border-radius: 18px;
  width: 35%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0px 0px 16px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  margin-bottom: 24px;
  font-size: 42px;
  font-weight: 700;
`;

export const Card = styled.div`
  width: 400px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 8px solid ${({ color }) => color};
  border-radius: 18px;
  box-shadow: 0px 0px 16px 8px rgba(0, 0, 0, 0.2);

  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : "#f8f9fa")};
`;

export const Question = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 100px;
  padding: 16px;

  color: ${({ color }) => (color ? `${color}` : "black")};
`;

export const ButtonContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  gap: 12px;
`;

export const CardLogo = styled.img`
  width: 25%;
  border-radius: 50%;
  border: 1px solid #212529;
  margin-top: 32px;
`;
