import { css } from '@emotion/css';

export const styledEvents = css`
  margin: 0 1rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #01d1d1;
  border-radius: 8px;
`;

export const styledButton = css`
  padding: 0.5rem 1rem;
  font: inherit;
  color: #000000;
  background: #ffffff;
  border: 1px solid #01d1d1;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:active,
  &.active {
    color: #ffffff;
    background: #01d1d1;
  }
`;

export const styledTextarea = css`
  display: block;
  width: 100%;
  resize: none;
`;
