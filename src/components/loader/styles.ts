// Additional imports
import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    justify-content: center;
    align-items: center;
  `,
  loader: css`
    --loader-color: #ef4723;
    --loader-animation-duration: 1.2s;

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
      border: 6px solid var(--loader-color);
      border-color: var(--loader-color) transparent var(--loader-color) transparent;
      border-radius: 50%;
      animation: rotate var(--loader-animation-duration) linear infinite;
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
