import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

const App = (): ReactElement => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <div>
      <h1>Hello World</h1>
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
