import { css } from '@emotion/css';

export const styledBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(47 47 47 / 0.5);
  z-index: 10;
  backdrop-filter: blur(7px);
`;
