import React from "react";
import logo from "./img/sgurd2.jpg";
import "./home.css";

const HomeSgurdWebsite = () => {
  return (
    <div className="App">
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo da sgurd" />
        <p class="header-p">SEJA BEM VINDO.</p>
      </header>
      <div class="main">
        <div className="oqe">
          <div className="h1oqe">
            <h1> O que é a SGURD?</h1>
          </div>
          <div className="div-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              imperdiet, erat a consectetur facilisis, felis lorem sollicitudin
              quam, ut consectetur libero nisl eget elit. Vestibulum felis ex,
              commodo ac nibh eget, finibus dignissim massa. Integer hendrerit
              lacus quis mi sagittis, nec consequat risus malesuada. Nullam et
              turpis vitae ex lacinia hendrerit. Nulla tincidunt ex a fermentum
              consectetur. Sed quis facilisis justo, id rhoncus nulla. Sed
              tristique fermentum nisi in porta. Cras rhoncus egestas nulla, ut
              auctor purus tempor eget.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              imperdiet, erat a consectetur facilisis, felis lorem sollicitudin
              quam, ut consectetur libero nisl eget elit. Vestibulum felis ex,
              commodo ac nibh eget, finibus dignissim massa. Integer hendrerit
              lacus quis mi sagittis, nec consequat risus malesuada. Nullam et
              turpis vitae ex lacinia hendrerit. Nulla tincidunt ex a fermentum
              consectetur. Sed quis facilisis justo, id rhoncus nulla. Sed
              tristique fermentum nisi in porta. Cras rhoncus egestas nulla, ut
              auctor purus tempor eget.
            </p>
          </div>
          <div className="botao-youtube">
            <a
              class="link"
              href="https://www.youtube.com/channel/UCLmj9Y-YTTftS9vdxZhuy3Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              CANAL DA SGURD
            </a>
          </div>
        </div>

        <div class="fundo-galeria">
          <a
            class="link"
            href="http://localhost:3000/galeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="galeria-arte">
              <div>
                <h2 class="h2-galeria">Conheça nossa galeria de arte!</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="footer">
        <h2>CONTATO</h2>
        <div class="div-contato">
          <h3>sgurdproductions@gmail.com</h3>
          <h3>(51) 99765-4234</h3>
        </div>
      </div>
    </div>
  );
};
export default HomeSgurdWebsite;
