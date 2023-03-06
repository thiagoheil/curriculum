import profilePicture from "../../assets/img/thiagoProfile.jpeg";
import { useHistory } from "react-router-dom";

import {
  Background,
  Container,
  Profile,
  Image,
  Description,
  Text,
  HorizontalLine,
  Buttons,
  Button,
  ProfileDescription,
  Paragraph,
  Characteristics,
  Qualitys,
  Defects,
  ProfissionalExperience,
  KnowMe,
} from "./styles";

const Main = () => {
  function instagram() {}

  function youtube() {}

  function linkedin() {}

  let history = useHistory();

  function meusprojetos() {
    history.push("/projetos");
  }

  const handleLinkButton = (type) => {
    if (type === "instagram") {
      window.open("https://www.instagram.com/thiagoheil/", "_blank");
    }
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/thiago-heilmann/", "_blank");
    }
    if (type === "youtube") {
      window.open(
        "https://www.youtube.com/channel/UCLmj9Y-YTTftS9vdxZhuy3Q",
        "_blank"
      );
    }
    if (type === "sgurd") {
      window.open("https://sgurd-b66a5.web.app/", "_blank");
    }
    if (type === "github") {
      window.open("https://github.com/thiagoheil", "_blank");
    }
  };

  return (
    <>
      <Background>
        <Container>
          <Profile>
            <Image src={profilePicture} />
            <Description>
              <Text fontSize={64} color={"#e0e1dd"}>
                Thiago Rafael Heilmann
              </Text>
              <HorizontalLine
                color={"#e0e1dd"}
                width={"100%"}
                marginTop={4}
                marginBottom={2}
              />
              <Text fontSize={32} color={"#e0e1dd"}>
                Desenvolvedor Fullstack
              </Text>
              <Buttons>
                <Button onClick={() => handleLinkButton("sgurd")}>sgurd</Button>
                <Button onClick={() => handleLinkButton("linkedin")}>
                  linkedin
                </Button>
                <Button onClick={() => handleLinkButton("youtube")}>
                  youtube
                </Button>
                <Button onClick={() => handleLinkButton("instagram")}>
                  instagram
                </Button>
              </Buttons>
            </Description>
          </Profile>

          <ProfileDescription>
            <Text
              fontSize={48}
              color={"#e0e1dd"}
              marginLeft={32}
              marginTop={32}
            >
              Quem sou?
            </Text>
            <Paragraph>
              <Text
                fontSize={20}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={32}
              >
                Me chamo Thiago, atualmente tenho 21 anos e estou cursando
                Análise e Desenvolvimento de Sistemas.
              </Text>
              <Text
                fontSize={20}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={12}
              >
                Sou uma pessoa simples que adora a complexidade da vida, tenho
                vários interesses, e a cada dia que passa eu acabo descobrindo
                mais um.
              </Text>
              <Text
                fontSize={20}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={12}
              >
                Sou fanático por exercício físico, entre os que eu pratico
                estão: boxe, muay thai, ciclismo e musculação. São eles que
                fazem eu sentir que meu dia está completo, a cereja do bolo.
              </Text>
              <Text
                fontSize={20}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={12}
              >
                Tenho interesse profundo no mundo da programação, tendo em vista
                a infinidade de possibilidades que se pode fazer com um
                computador. Sua complexidão me atraí.
              </Text>
              <Text
                fontSize={20}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={12}
              >
                Determinado e focado, estou sempre em busca de me tornar melhor
                do que eu fui ontem, o progresso é presente em meu futuro.
              </Text>
            </Paragraph>
          </ProfileDescription>

          <Characteristics>
            <Qualitys>
              <Text
                fontSize={48}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={32}
              >
                Qualidades
              </Text>
            </Qualitys>
            <Defects>
              <Text
                fontSize={48}
                color={"#e0e1dd"}
                marginLeft={32}
                marginTop={32}
              >
                Defeitos
              </Text>
            </Defects>
          </Characteristics>

          <KnowMe>
            <Text
              fontSize={48}
              color={"#e0e1dd"}
              marginLeft={32}
              marginTop={32}
            >
              Me conheça melhor:
            </Text>
            <Button
              onClick={() => history.push("/projetos")}
              height={96}
              width={192}
              marginLeft={32}
              marginTop={16}
              fontSize={16}
            >
              meus projetos
            </Button>
            <Button
              onClick={() => handleLinkButton("github")}
              height={96}
              width={192}
              marginLeft={32}
              marginTop={16}
              fontSize={16}
            >
              github
            </Button>
          </KnowMe>

          <ProfissionalExperience>
            <Text
              fontSize={48}
              color={"#e0e1dd"}
              marginLeft={32}
              marginTop={32}
            >
              Experiência Profissional
            </Text>
          </ProfissionalExperience>
        </Container>
      </Background>
    </>
  );
};

export default Main;
