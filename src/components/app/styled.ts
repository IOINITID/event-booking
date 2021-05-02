import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: '';
    font-display: swap;
    src: url() format('woff2'),
      url() format('woff'),
      url() format('truetype');
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
    font-weight: 400;
    font-family: 'Roboto', 'Arial', sans-serif;
    scroll-behavior: smooth;
  }

  .root {
    width: 100%;
    height: 100%;
  }
`;
