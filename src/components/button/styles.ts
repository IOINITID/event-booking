// Additional imports
import { css } from '@emotion/css';

export const styles = {
  root: css`
    width: max-content;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    border-radius: 8px;
    cursor: pointer;

    &:hover,
    &:focus {
      background: #f06749;
    }

    &:active {
      background: #e62f07;
    }
  `,
  text: css`
    padding: 19px 32px;
    color: #000000;
    background: #ffffff;
    border: none;

    &:hover,
    &:focus {
      background: #ffffff;
    }

    &:active {
      background: #ffffff;
    }
  `,
  outlined: css`
    padding: 19px 32px;
    color: #ef4723;
    background: transparent;
    border: 1px solid #ef4723;

    &:hover,
    &:focus {
      color: #ffffff;
    }

    &:active {
      color: #ffffff;
    }
  `,
  contained: css`
    padding: 19px 32px;
    color: #ffffff;
    background: #ef4723;
    border: none;
  `,
};
