import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    background-color: #edf2f9;
    color: #000;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: normal;
    user-select: none;
  }

  #root{
    height: 100%;
    width: 100%;
  }
`;
