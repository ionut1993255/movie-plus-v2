import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    & {
      /* Primary colors */
      --color-primary: #6741d9;
      --color-primary-light: #7950f2;

      /* Accent colors */
      --color-red: #fa5252;
      --color-red-dark: #e03131;
      --color-star: #fcc419;

      /* Box shadow colors */
      --color-black-transparent-10: rgba(0, 0, 0, 0.1);
      --color-black-transparent-20: rgba(0, 0, 0, 0.2);
      --color-black-transparent-30: rgba(0, 0, 0, 0.3);
      --color-black-transparent-80: rgba(0, 0, 0, 0.8);
    }

    &.light-mode {
      /* Text colors */
      --color-text: #343a40;
      --color-text-dark: #495057;

      /* Background colors */
      --color-background-100: #f8f9fa;
      --color-background-500: #e9ecef;
      --color-background-900: #dee2e6;

      & .light-mode-special-nav-colors {
        --color-text: #f8f9fa;
        --color-text-dark: #c2c8cf;;
      }

      & .light-mode-special-button-colors {
        --color-text: #f8f9fa;
      }
    }  
    
    &.dark-mode {
      /* Text colors */
      --color-text: #dee2e6;
      --color-text-dark: #adb5bd;

      /* Background colors */
      --color-background-100: #343a40;
      --color-background-500: #2b3035;
      --color-background-900: #212529;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    color: var(--color-text);
    background-color: var(--color-background-900);
    padding: 2.4rem;
  }
`;

export default GlobalStyles;
