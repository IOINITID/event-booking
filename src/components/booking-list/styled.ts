import { css } from '@emotion/css';

export const styles = {
  image: css`
    width: 96px;
    height: 96px;
    border-radius: 8px;
    object-fit: cover;
  `,
  number: css`
    width: 27px;
  `,
  title: css`
    width: 111px;
  `,
  location: css`
    width: 177px;
  `,
  date: css`
    width: 64px;
  `,
  price: css`
    width: 57px;
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
