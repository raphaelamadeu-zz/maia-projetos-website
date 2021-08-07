import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat-Regular';
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Montserrat-Bold';
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  body {
    height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
