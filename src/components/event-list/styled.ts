import { css } from '@emotion/css';

export const styles = {
  list: css`
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(3, 384px);
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  button: css`
    justify-self: center;
    width: max-content;
    padding: 20px 32px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ef4723;
    letter-spacing: -0.002em;
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
