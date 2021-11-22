import eu from "./img/eu.jpg";
import paipe from "./img/paipe.jfif";
import next from "./img/next.png";
import "./main.css";
import { useHistory } from "react-router-dom";

const Main = () => {
  function instagram() {
    window.open("https://www.instagram.com/thiagoheil/", "_blank");
  }

  function youtube() {
    window.open(
      "https://www.youtube.com/channel/UCLmj9Y-YTTftS9vdxZhuy3Q",
      "_blank"
    );
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/thiago-heilmann/", "_blank");
  }

  let history = useHistory();

  function meusprojetos() {
    history.push("/projetos");
  }

  return (
    <body>
      <header></header>

      <main>
        <div className="background2">
          <div className="background1">
            <div className="cardThiago"></div>
            <div className="divheader">
              <img
                className="imgThiago"
                src={eu}
                alt="thiago rafael heilmann"
              ></img>
              <div className="textnome">
                <h2 className="h2Thiago">Thiago Rafael Heilmann</h2>
                <h2 className="jobthiago">Desenvolvedor Front-End/QA</h2>
              </div>
            </div>
          </div>

          <div className="div-botoes">
            <button onClick={instagram} className="instagram">
              INSTAGRAM
            </button>
            <button onClick={youtube} className="youtube">
              YOUTUBE
            </button>
            <button onClick={linkedin} className="linkedin">
              LINKEDIN
            </button>
            <button onClick={meusprojetos} className="meusprojetosbutton">
              MEUS PROJETOS
            </button>
          </div>

          <div className="quemsou">
            <div className="div-quemsou">
              <h1>Quem sou?</h1>
              <p>
                Me chamo Thiago, tenho 20 anos e atualmente estou cursando
                Análise e Desenvolvimento de Sistemas. No momento estou
                trabalhando como QA na Paipe | Tecnologia e Informação.
              </p>
              <p>
                Sou uma pessoa que gosta muito do "novo", estou sempre
                procurando coisas novas para satisfazer minha curiosidade sobre
                o mundo que me cerca. O desconhecido é algo que me atrai.
              </p>
              <p>
                Sou uma pessoa que gosta bastante de se aventurar, um dos meus
                esportes favoritos é o ciclismo, eu amo pegar minha bike e sair
                sem rumo em busca de um lugar novo para conhecer.
              </p>
            </div>
          </div>

          <section className="exp">
            <div classname="exp-background">
              <h1>Experiência Profissional</h1>
            </div>

            <div className="paipe">
              <img src={paipe} alt="Logo da paipe" className="img-paipe"></img>
              <div className="paipe-text">
                <h2>Paipe | Tecnologia e Informação</h2>
                <h3>Agosto de 2021/Atuante</h3>
                <h3>Desenvolvedor Front-End</h3>
              </div>
            </div>

            <div className="next">
              <img src={next} alt="logo da next" className="img-next"></img>
              <div className="next-text">
                <h2>Next Brazil</h2>
                <h3>Julho de 2020/Agosto de 2021</h3>
                <h3>Operador de Corte a Laser</h3>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer></footer>
    </body>
  );
};

export default Main;
