import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projetos from "./pages/Projetos";
import Main from "./pages/Main";
import HomeSgurdWebsite from "./pages/Projetos/projects/sgurd-website/Home/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/projetos" exact render={() => <Projetos />} />
        <Route path="/" exact render={() => <Main />} />
        <Route path="/sgurd-home" exact render={() => <HomeSgurdWebsite />} />
      </Switch>
    </Router>
  );
}

export default Routes;
