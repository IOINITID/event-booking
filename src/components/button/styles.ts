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
  `,
  text: css`
    padding: 19px 32px;
    color: #000000;
    background: transparent;
    border: none;
  `,
  outlined: css`
    padding: 19px 32px;
    color: #ef4723;
    background: transparent;
    border: 1px solid #ef4723;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `,
  contained: css`
    padding: 19px 32px;
    color: #ffffff;
    background: #ef4723;
    border: none;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `,
  leaf: css`
    padding: 19px 32px;
    color: #ffffff;
    background: #ef4723;
    border: none;
    border-radius: 16px 0;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `,
};
