import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import "semantic-ui-css/semantic.min.css";

const App = (): ReactElement => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
