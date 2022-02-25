import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --text: #3f3f3f;
    --highlight-1: #e5553a;
    --highlight-2: #15b99b;
    --highlight-3: #47b3df;
    --background: #f6f6f6;
    --box-background: #252a30;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;