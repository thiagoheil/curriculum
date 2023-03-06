import styled from "styled-components";

import backgroundImage from "./img/nebula.jpeg";

export const Background = styled.div`
  width: 100%;
  height: 2000px;

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

  margin-top: 70px;

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
  margin-top: 10px;
  /* background-color: #f5f7f7; */
  height: 300px;
`;
