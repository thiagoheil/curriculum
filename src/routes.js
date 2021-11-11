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
      </Switch>
    </Router>
  );
}

export default Routes;
