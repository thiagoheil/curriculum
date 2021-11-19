import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projetos from "./pages/Projetos";
import Main from "./pages/Main";
import HomeSgurdWebsite from "./pages/Projetos/projects/sgurd-website/Home/Home";
import Calculadora from "./pages/Projetos/projects/calculadora/calculadora";
import CalculadoraGorjeta from "./pages/Projetos/projects/calculadoraGorjeta/calculadoraGorjeta";
import ChuckNorris from "./pages/Projetos/projects/chucknorris/chucknorris";

import CrackTheCode from "./pages/Projetos/projects/crackthecode/crackthecode";
import LevelDois from "./pages/Projetos/projects/crackthecode/levels/levelDois";
import LevelDoisHint from "./pages/Projetos/projects/crackthecode/components/levelDoisHint";
import LevelTres from "./pages/Projetos/projects/crackthecode/levels/levelTres";
import LevelQuatro from "./pages/Projetos/projects/crackthecode/levels/levelQuatro";
import LevelCinco from "./pages/Projetos/projects/crackthecode/levels/levelCinco";
import LevelSeis from "./pages/Projetos/projects/crackthecode/levels/levelSeis";
import LevelSete from "./pages/Projetos/projects/crackthecode/levels/levelSete";
import LevelOito from "./pages/Projetos/projects/crackthecode/levels/levelOito";
import LevelNove from "./pages/Projetos/projects/crackthecode/levels/levelNove";
import LevelDez from "./pages/Projetos/projects/crackthecode/levels/levelDez";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/projetos" exact render={() => <Projetos />} />
        <Route path="/" exact render={() => <Main />} />
        <Route path="/sgurd-home" exact render={() => <HomeSgurdWebsite />} />
        <Route
          path="/projetos/calculadora"
          exact
          render={() => <Calculadora />}
        />
        <Route
          path="/projetos/calculadora-gorjeta"
          exact
          render={() => <CalculadoraGorjeta />}
        />
        <Route
          path="/projetos/crack-the-code"
          exact
          render={() => <CrackTheCode />}
        />
        <Route
          path="/projetos/chucknorris"
          exact
          render={() => <ChuckNorris />}
        />
        <Route
          path="/projetos/crack-the-code/level-2"
          exact
          render={() => <LevelDois />}
        />
        <Route
          path="/projetos/crack-the-code/level-2/hint"
          exact
          render={() => <LevelDoisHint />}
        />
        <Route
          path="/projetos/crack-the-code/level-3"
          exact
          render={() => <LevelTres />}
        />
        <Route
          path="/projetos/crack-the-code/level-4"
          exact
          render={() => <LevelQuatro />}
        />
        <Route
          path="/projetos/crack-the-code/level-5"
          exact
          render={() => <LevelCinco />}
        />
        <Route
          path="/projetos/crack-the-code/level-6"
          exact
          render={() => <LevelSeis />}
        />
        <Route
          path="/projetos/crack-the-code/level-7"
          exact
          render={() => <LevelSete />}
        />
        <Route
          path="/projetos/crack-the-code/level-8"
          exact
          render={() => <LevelOito />}
        />
        <Route
          path="/projetos/crack-the-code/level-9"
          exact
          render={() => <LevelNove />}
        />
        <Route
          path="/projetos/crack-the-code/level-10"
          exact
          render={() => <LevelDez />}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
