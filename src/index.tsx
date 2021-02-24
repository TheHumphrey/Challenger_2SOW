import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { SemanticToastContainer } from "react-semantic-toasts";

import { store } from "./store";

import Routes from "./routes";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import "semantic-ui-css/semantic.min.css";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const App = (): ReactElement => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <SemanticToastContainer />
      <GlobalStyle />
      <Routes />
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
