import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoutes from "./hocs/PrivateRoutes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Routes = (): ReactElement => (
  <Router>
    <Switch>
      <PrivateRoutes path="/" exact>
        <Home />
      </PrivateRoutes>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  </Router>
);

export default Routes;
