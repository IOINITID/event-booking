import { css } from '@emotion/css';

export const styles = {
  control: css`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    padding: 32px;
    column-gap: 32px;
    background: #ffffff;
    border-radius: 16px;
  `,
  button: css`
    padding: 16px 24px;
    color: #282828;
    background-color: #ffffff;
    border: 1px solid #ef4723;
    border-radius: 32px;

    &:hover,
    &:focus {
      color: #ffffff;
    }

    &.active {
      color: #ffffff;
      background: #ef4723;
    }
  `,
};
