import { css } from '@emotion/css';

export const styledEventList = css`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 384px);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const styledEventListButton = css`
  width: max-content;
  justify-self: center;
  padding: 20px 32px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #ef4723;
  border: 1px solid #ef4723;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #f06749;
    color: #ffffff;
  }

  &:active {
    background: #e52f07;
    color: #ffffff;
  }
`;
