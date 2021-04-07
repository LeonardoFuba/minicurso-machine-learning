import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :root {
    --color-background: #F0F0F7;
    --color-primary: #00a2ff;
    --color-primary-dark: #2e87fb;
    --color-secundary: #ff946a;
    --color-secundary-dark: #ff7842;
    --color-text-base: #404040;
    --color-content-background: #FFFFFF;

    font-size: 100%;
  }

  .container {
    width: 90vw;
    max-width: 1300px;
  }

  /*shimmer skeleton 1*/
  .panel {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  /*shimmer skeleton 2*/
  .panel-no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }

  /* MAJOR BREAKS */

  @media (min-width: 1920px) { /* wide desktops */
    .container { max-width: 1080px; }
  }

  @media (max-width: 1023px) { /* tablets */
    :root { font-size: 93.75%; }
  }

  @media (max-width: 767px) { /* smartphones */
    :root { font-size: 87.5%; }
  }

  /* MINOR BREAKS
  * 900
  * 720
  * 480
  * 320
  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
  }

  html, body {
    height: 100vh;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem Roboto;
    color: var(--color-text-base);
  }

  p {
    font: 400 1rem Roboto;
    margin: 1.6rem;
  }

  h1,h2,h3,h4,h5,h6 {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width:100%;
  }
`;
