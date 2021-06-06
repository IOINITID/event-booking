import { css } from '@emotion/css';

export const styles = {
  default: css`
    display: grid;
    align-items: center;
    width: max-content;
    padding: 20px 59px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ffffff;
    background: #ef4723;
    border: none;
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
  outline: css`
    align-items: center;
    width: max-content;
    padding: 19px 32px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ef4723;
    background: transparent;
    border: 1px solid #ef4723;
    border-radius: 8px;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e52f07;
    }
  `,
};
