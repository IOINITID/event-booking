import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    padding: 32px 56px;
    background-color: #ffffff;
    border-radius: 16px;
    row-gap: 32px;
  `,
  heading: css`
    max-width: 663px;
    margin: 0;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  button: css`
    display: grid;
    width: max-content;
    padding: 20px 32px;
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
};
