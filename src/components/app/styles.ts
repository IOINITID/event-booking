import { css, injectGlobal } from '@emotion/css';
import fontBoldWoff2 from '../../assets/fonts/GrandisExtended-Bold.woff2';
import fontBoldWoff from '../../assets/fonts/GrandisExtended-Bold.woff';
import fontBoldTtf from '../../assets/fonts/GrandisExtended-Bold.ttf';
import fontMediumWoff2 from '../../assets/fonts/GrandisExtended-Medium.woff2';
import fontMediumWoff from '../../assets/fonts/GrandisExtended-Medium.woff';
import fontMediumTtf from '../../assets/fonts/GrandisExtended-Medium.ttf';
import fontRegularWoff2 from '../../assets/fonts/GrandisExtended-Regular.woff2';
import fontRegularWoff from '../../assets/fonts/GrandisExtended-Regular.woff';
import fontRegularTtf from '../../assets/fonts/GrandisExtended-Regular.ttf';

export const styles = {
  container: css`
    display: grid;
    row-gap: 40px;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 72px 64px 72px;
  `,
};

injectGlobal`
  @font-face {
    font-weight: 400;
    font-family: 'Grandis Extended';
    font-display: swap;
    src: url(${fontRegularWoff2}) format('woff2'),
      url(${fontRegularWoff}) format('woff'),
      url(${fontRegularTtf}) format('truetype');
  }

  @font-face {
    font-weight: 500;
    font-family: 'Grandis Extended';
    font-display: swap;
    src: url(${fontMediumWoff2}) format('woff2'),
      url(${fontMediumWoff}) format('woff'),
      url(${fontMediumTtf}) format('truetype');
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
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    scroll-behavior: smooth;
    background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%), radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.52) 74.11%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
