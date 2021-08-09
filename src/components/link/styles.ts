import { css } from '@emotion/css';

export const styles = {
  root: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
  text: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
  outlined: css`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover,
    &:focus {
      text-decoration: none;
      border: 1px solid #282828;
    }

    &:active {
      color: #ffffff;
      background: #282828;
      border: 1px solid #282828;
      border-radius: 8px;
    }
  `,
  contained: css`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ffffff;
    background: #282828;
    border: 1px solid #282828;
    border-radius: 8px;

    &:hover,
    &:focus {
      text-decoration: none;
      border: 1px solid #282828;
    }

    &:active {
      color: #ffffff;
      background: #282828;
      border: 1px solid #282828;
      border-radius: 8px;
    }
  `,
};
