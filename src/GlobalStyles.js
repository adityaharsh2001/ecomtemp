import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* colors */
  --blue-background: #caf0f8;
  --ocean-blue: #48cae4;
  --dark-blue: #03045e;
  --light-blue: #304a58;
  --red: #f94144;
  --blue: #0466c8;
  --background: white;
  --card-color: rgb(241, 240, 240);
  --card-color2: white;
  --svg-color: black;

  /* transition effects */
  --transition: 0.3s ease-in-out;

  /* box shadows */
  --fixed-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  --elevated-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

[data-theme="dark"] {
  --background: black;
  --dark-blue: #8eecf5;
  --light-blue: #4895ef;
  --ocean-blue: #48cae4;
  --blue-background: #12131d;
  --card-color: #12131d;
  --card-color2: #12131d;
  --red: #12131d;
  --svg-color: #8eecf5;

  /* box shadows */
  --elevated-shadow: rgba(32, 29, 233, 0.637) 0px 25px 50px -12px;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, .app {
    /* overflow: hidden; */
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Nunito', sans-serif;   
  }

  .app {
    background-color: var(--background);
    transition: var(--transition);
  }

  ul {
    list-style-type: none;
  }

  .mx-3 {
    margin: 0 1.5rem;
  }

  .py-3 {
    padding: 3rem 0;
  }

  ::-webkit-scrollbar {
  background-color: white;
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background-color: #48cae4;
}

@media only screen and (min-device-width: 280px) and (max-device-width: 1080px) {
  html,
  body,
  .app {
    max-width: 100vw;
    overflow-x: hidden;
  }

  .app::-webkit-scrollbar {
    display: none;
  }
}

@media only screen and (min-device-width: 1200px) {
  .mx-3 {
    margin: 0 5rem;
  }
}
`;

export default GlobalStyle;
