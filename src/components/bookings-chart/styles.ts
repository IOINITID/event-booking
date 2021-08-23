import { css } from '@emotion/css';

export const styles = {
  container: css`
    display: grid;
    grid-template-columns: 469px 1fr;
    padding: 56px;
    column-gap: 183px;
    background-color: #ffffff;
    border-radius: 16px;
  `,
  info: css`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 32px;
  `,
  heading: css`
    margin: 0;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
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
  item: css`
    display: grid;
    align-items: center;
    grid-template-columns: 8px max-content;
    column-gap: 8px;
  `,
  itemIndicator: css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `,
  itemDescription: css`
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
};
