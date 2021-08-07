import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    grid-template-columns: 176px 208px;
  `,
  preview: css`
    position: relative;
    height: 176px;
    background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
      radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.52) 74.11%);
    border-radius: 16px 0 0 16px;
  `,
  price: css`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ef4723;
    letter-spacing: 0.02em;
    background: #ffffff;
    border-radius: 0 16px;
  `,
  image: css`
    width: 176px;
    height: 176px;
    border-radius: 16px 0 0 16px;
    object-fit: cover;
  `,
  info: css`
    position: relative;
    height: 176px;
    padding: 24px 16px;
    background-color: #ffffff;
    border-radius: 0 16px 16px 0;
  `,
  title: css`
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  date: css`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  button: css`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 16px 24px; /* Size type for button */
  `,
};
