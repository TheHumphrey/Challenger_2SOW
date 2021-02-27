import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { SemanticToastContainer } from "react-semantic-toasts";

import { persistor, store } from "./store";

import Routes from "./routes";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import "semantic-ui-css/semantic.min.css";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const App = (): ReactElement => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SemanticToastContainer />
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
