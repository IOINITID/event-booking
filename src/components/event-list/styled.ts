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
  `,
};
