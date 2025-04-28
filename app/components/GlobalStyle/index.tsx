import { createGlobalStyle } from "styled-components"



export const GlobalStyle = createGlobalStyle`

  /* FONTES */

  @font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Medium.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}


  @font-face {
    font-family: 'GothamHTF';
    src: url('/fonts/gotham/GothamHTF-Bold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }


  /* RESET CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'GothamHTF', sans-serif;
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }


`