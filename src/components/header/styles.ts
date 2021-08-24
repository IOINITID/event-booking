import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(2, max-content);
    max-width: 1360px;
    margin: 0 auto;
    padding: 40px 72px;
  `,
};
