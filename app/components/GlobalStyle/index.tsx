import { createGlobalStyle } from "styled-components"



export const GlobalStyle = createGlobalStyle`

  /* FONTES */
  @font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Black.otf') format('opentype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Book.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Light.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Thin.otf') format('opentype');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-Ultra.otf') format('opentype');
  font-weight: 1000;
  font-style: normal;
}

@font-face {
  font-family: 'GothamHTF';
  src: url('/fonts/gotham/GothamHTF-XLight.otf') format('opentype');
  font-weight: 200;
  font-style: normal;
}


@font-face {
  font-family: 'Roboto';
  src: url('/fonts/roboto/roboto-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

::-moz-selection { /* Code for Firefox */
  color: white;
  background: ${({ theme }) => theme.colors.magenta};
}

::selection {
  color: white;
  background: ${({ theme }) => theme.colors.magenta};
}


 /* width */
 ::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e1b4c3;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.magenta};
  border-radius: 10px;
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
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
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


  /* MEDIA QUERIES*/

  @media (max-width: 768px) {
    html{
      font-size: 8px;
    }
  }

`