import { css } from '@emotion/css';

export const styles = {
  header: css`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 210px max-content;
    max-width: 1360px;
    margin: 0 auto;
    padding: 40px 72px;
  `,
  heading: css`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 135.5%;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #1e1e1e;
    letter-spacing: 0.02em;
  `,
  navigationList: css`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    margin: 0;
    padding: 0;
    list-style: none;
    column-gap: 24px;

    @media (max-width: 768px) {
      align-items: center;
      grid-template-columns: repeat(2, min-content);
      column-gap: 8px;
    }
  `,
  navigationItem: css`
    margin: 0;
  `,
};
