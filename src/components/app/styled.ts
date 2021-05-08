import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { css } from '@emotion/css';

export const styledMain = css`
  margin: 4rem 2.5rem;

  @media (max-width: 768px) {
    margin: 124px 0 0 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-weight: 400;
    font-family: '';
    font-display: swap;
    src: url() format('woff2'),
      url() format('woff'),
      url() format('truetype');
  } */

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-family: 'Roboto', 'Arial', sans-serif;
    scroll-behavior: smooth;
  }
`;
