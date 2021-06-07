import { css } from '@emotion/css';

export const styles = {
  default: css`
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
  primary: css`
    padding: 20px 59px;
    color: #ffffff;
    background: #ef4723;
    border: none;
  `,
  outline: css`
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
};
