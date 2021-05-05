import { css } from '@emotion/css';

export const styledEvents = css`
  width: 30rem;
  max-width: 80%;
  margin: 2rem auto;
  padding: 3rem;
  text-align: center;
  border: 1px solid #01d1d1;
`;

export const styledButton = css`
  font: inherit;
  color: #000000;
  background: #01d1d1;
  border: none;
  cursor: pointer;

  &:hover,
  &:active,
  &.active {
    color: #fdefa0;
  }
`;

export const styledTextarea = css`
  display: block;
  width: 100%;
  resize: none;
`;
