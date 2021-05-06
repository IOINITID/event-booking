import { css } from '@emotion/css';

export const styledLoaderContainer = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const styledLoader = css`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 6px solid #01d1d1;
    border-color: #01d1d1 transparent #01d1d1 transparent;
    border-radius: 50%;
    animation: rotate 1.2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
