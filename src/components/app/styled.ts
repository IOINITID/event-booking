import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { css } from '@emotion/css';
import backgroundImage from '../../assets/images/background.jpg';
import fontBoldWoff2 from '../../assets/fonts/GrandisExtended-Bold.woff2';
import fontBoldWoff from '../../assets/fonts/GrandisExtended-Bold.woff';
import fontBoldTtf from '../../assets/fonts/GrandisExtended-Bold.ttf';
import fontRegularWoff2 from '../../assets/fonts/GrandisExtended-Regular.woff2';
import fontRegularWoff from '../../assets/fonts/GrandisExtended-Regular.woff';
import fontRegularTtf from '../../assets/fonts/GrandisExtended-Regular.ttf';

export const styledMain = css`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 72px;
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: 'Grandis Extended';
    font-display: swap;
    src: url(${fontRegularWoff2}) format('woff2'),
      url(${fontRegularWoff}) format('woff'),
      url(${fontRegularTtf}) format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Grandis Extended';
    font-display: swap;
    src: url(${fontBoldWoff2}) format('woff2'),
      url(${fontBoldWoff}) format('woff'),
      url(${fontBoldTtf}) format('truetype');
  }

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

  .root {
    width: 100%;
    height: 100vh;
    background: url(${backgroundImage});
    background-size: cover;
  }
`;
