// Additional imports
import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    justify-content: center;
    align-items: center;
  `,
  loader: css`
    position: fixed;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%);

    &::after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 6px solid #ef4723;
      border-color: #ef4723 transparent #ef4723 transparent;
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
  `,
};
