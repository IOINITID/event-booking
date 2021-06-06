import { css } from '@emotion/css';

export const styles = {
  header: css`
    display: grid;
    align-items: center;
    grid-template-columns: auto max-content max-content;
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
  navigationLink: css`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
    text-decoration: none;
    letter-spacing: -0.002em;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover,
    &:focus {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      font-family: 'Grandis Extended', 'Arial', sans-serif;
      color: #282828;
      letter-spacing: -0.002em;
      border: 1px solid #282828;
      border-radius: 8px;
    }

    &.active {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      font-family: 'Grandis Extended', 'Arial', sans-serif;
      color: #ffffff;
      letter-spacing: -0.002em;
      background: #282828;
      border: 1px solid #282828;
      border-radius: 8px;
    }
  `,
};
