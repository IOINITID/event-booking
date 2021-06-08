import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    row-gap: 24px;
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
};
