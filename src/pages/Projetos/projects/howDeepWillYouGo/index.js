import React, { useEffect, useState } from "react";
import Button from "./components/atoms/button";

import {
  ButtonContainer,
  Card,
  CardLogo,
  CardMapper,
  Frame,
  MainContainer,
  Question,
  Title,
} from "./styles";

import sgurdLogo from "../../../../assets/img/sgurd-logo.jpg";

const HowDeepWillYouGo = () => {
  const [stage, setStage] = useState(0);
  const [selectedIdCard, setSelectedIdCard] = useState(0);

  useEffect(() => {
    console.log("stage", stage);
  }, [stage]);

  const perguntas = [
    {
      pergunta: "O que você gosta de fazer quando tem 1 hora livre?",
      id: 0,
      level: 1,
    },
    {
      pergunta: "Qual super poder você gostaria de ter? Por quê?",
      id: 1,
      level: 1,
    },
    {
      pergunta: "Qual seu artista favorito de todos os tempos?",
      id: 2,
      level: 1,
    },
    {
      pergunta: "Se você pudesse escolher um lugar para viajar, qual seria?",
      id: 3,
      level: 1,
    },
    {
      pergunta: "Qual sua comida favorita?",
      id: 4,
      level: 1,
    },
    {
      pergunta: "Você tem algum apelido?",
      id: 5,
      level: 1,
    },
    {
      pergunta: "Qual seu emprego dos sonhos?",
      id: 6,
      level: 1,
    },
    {
      pergunta: "Qual sua estação do ano favorita?",
      id: 7,
      level: 1,
    },
    {
      pergunta: "Você tem algum hobby?",
      id: 8,
      level: 1,
    },
    {
      pergunta: "Você é a pessoa que cozinha ou a que lava a louça?",
      id: 9,
      level: 1,
    },
    {
      pergunta: "Qual sua atividade diária menos divertida?",
      id: 10,
      level: 1,
    },
    {
      pergunta: "Você se lembra a ultima vez que brincou de esconde-esconde?",
      id: 11,
      level: 1,
    },
    {
      pergunta: "O que te faz feliz?",
      id: 12,
      level: 1,
    },
    {
      pergunta:
        "Você ficou preso em uma ilha, liste 5 items para levar e justifique.",
      id: 13,
      level: 1,
    },
    {
      pergunta: "Qual foi a maior aventura que você já fez?",
      id: 14,
      level: 1,
    },
    {
      pergunta: "Qual sua primeira memória que você se recorda?",
      id: 15,
      level: 2,
    },
    {
      pergunta: "Conte uma história vergonhosa pela qual você já passou",
      id: 16,
      level: 2,
    },
    {
      pergunta:
        "Qual é uma oportunidade pela qual você é grato ter aproveitado",
      id: 17,
      level: 2,
    },
    {
      pergunta: "O que você faria todos os dias sem reclamar?",
      id: 18,
      level: 2,
    },
    {
      pergunta:
        "Cite um evento da sua história que você gostaria de ter mudado.",
      id: 19,
      level: 2,
    },
    {
      pergunta: "Qual sua memória de infância favorita?",
      id: 20,
      level: 2,
    },
    {
      pergunta: "O que as pessoas sempre confudem sobre você?",
      id: 21,
      level: 2,
    },
    {
      pergunta: "Qual sua melhor característica?",
      id: 22,
      level: 2,
    },
    {
      pergunta: "Qual seu maior princípio?",
      id: 23,
      level: 2,
    },
    {
      pergunta: "Qual a sensação que você mais gosta no mundo?",
      id: 24,
      level: 2,
    },
    {
      pergunta: "",
      id: 25,
      level: 2,
    },
    {
      pergunta: "O que você tem medo de passar para suas crianças?",
      id: 26,
      level: 3,
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFontColor, setSelectedFontColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    const selectedCard = perguntas.find(
      (pergunta) => pergunta.id === selectedIdCard
    );
    setSelectedCard(selectedCard);

    if (selectedCard.level === 1) {
      setSelectedColor("#f8f9fa");
      setSelectedFontColor("black");
      setBackgroundColor("#e0e1dd");
    }
    if (selectedCard.level === 2) {
      setSelectedColor("#415A77");
      setBackgroundColor("#415A77");
      setSelectedFontColor("white");
    }
    if (selectedCard.level === 3) {
      setBackgroundColor("#0D1B2A");
      setSelectedColor("#0D1B2A");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdCard]);

  return (
    <>
      <MainContainer color={backgroundColor}>
        {stage === 0 && (
          <Frame>
            <Title>O quão fundo você vai?</Title>
            <Button
              title={"Começar"}
              onClick={() => {
                setStage(1);
              }}
            />
          </Frame>
        )}
        {stage === 1 && selectedCard && (
          <Card bgColor={selectedColor} color={selectedFontColor}>
            <CardLogo src={sgurdLogo} />
            <Question color={selectedFontColor}>
              {selectedCard.pergunta}{" "}
            </Question>

            <ButtonContainer>
              <Button
                color={selectedFontColor}
                bgColor={selectedColor}
                title={"Anterior"}
                onClick={() => {
                  setSelectedIdCard(selectedIdCard - 1);
                }}
              />
              <Button
                color={selectedFontColor}
                bgColor={selectedColor}
                title={"Próximo"}
                onClick={() => {
                  setSelectedIdCard(selectedIdCard + 1);
                }}
              />
            </ButtonContainer>
          </Card>
        )}
      </MainContainer>
    </>
  );
};

export default HowDeepWillYouGo;
