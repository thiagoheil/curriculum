import styled from "styled-components";

import backgroundImage from "../../assets/img/nebula.jpeg";

export const Background = styled.div`
  width: 100%;
  height: 2100px;

  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 2000px;

  background-color: #f5f7f7;

  margin-top: 128px;
  margin-bottom: 128px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Profile = styled.div`
  width: 98%;
  border-radius: 12px;
  margin-top: 16px;
  background-color: #0d1b2a;
  height: 300px;
  padding: 32px 0 32px 0;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 20%;
  border: 1px solid #e0e1dd;
`;

export const IconImage = styled.img`
  width: 58px;
  padding: 4px;
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 128px;
`;

export const Buttons = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ProfileDescription = styled.div`
  width: 98%;
  background-color: #0d1b2a;
  border-radius: 12px;
  margin-top: 32px;
  height: 500px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 32px;
  overflow-y: scroll;
  height: 220px;
  width: 80%;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #e0e1dd;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Paragraph = styled.div`
  font-family: "Noto Sans Mono", monospace;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;
  margin-top: 32px;
  height: 400px;
`;

export const Qualitys = styled.div`
  width: 49%;
  background-color: #0d1b2a;
  border-radius: 12px;
`;

export const Defects = styled.div`
  width: 49%;
  background-color: #0d1b2a;
  border-radius: 12px;
`;

export const ProfissionalExperience = styled.div`
  width: 98%;
  background-color: #0d1b2a;
  height: 500px;
  margin-top: 32px;
  border-radius: 12px;
`;

export const KnowMe = styled.div`
  width: 98%;
  height: 250px;
  background-color: #0d1b2a;
  margin-top: 32px;
  border-radius: 12px;
`;

export const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0px"};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : "0px"};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : "0px")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0px")};
  color: ${({ color }) => (color ? `${color}` : "black")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? `${fontFamily}, monospace` : ""};
`;

export const HorizontalLine = styled.hr`
  color: ${({ color }) => (color ? `${color}` : "black")};
  width: ${({ width }) => (width ? `${width}` : "black")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0px")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0px"};
`;

export const Button = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "128px")};
  height: ${({ height }) => (height ? `${height}px` : "32px")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0px")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0px"};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : "0px"};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : "0px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};

  border-radius: 8px;
  transition-duration: 0.4s;
  font-weight: 600;

  font-family: "Noto Sans Mono", monospace;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 0 #0a1724;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0px 0;
  }
`;
