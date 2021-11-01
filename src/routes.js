import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projetos from "./pages/Projetos";
import Main from "./pages/Main";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/projetos" exact render={() => <Projetos />} />
        <Route path="/" exact render={() => <Main />} />
      </Switch>
    </Router>
  );
}

export default Routes;
