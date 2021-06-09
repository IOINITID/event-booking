import { css } from '@emotion/css';

export const styles = {
  image: css`
    width: 96px;
    height: 96px;
    border-radius: 8px;
    object-fit: cover;
  `,
  number: css`
    width: 25px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  title: css`
    width: 110px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  location: css`
    width: 180px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  date: css`
    width: 100px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  price: css`
    width: 100px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  list: css`
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    row-gap: 16px;
  `,
  listItem: css`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-auto-flow: column;
    padding: 32px;
    background-color: #ffffff;
    border-radius: 16px;
  `,
  button: css`
    padding: 16px 24px;
  `,
};
