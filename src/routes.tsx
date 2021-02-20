import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = (): ReactElement => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </Router>
);

export default Routes;
