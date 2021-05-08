import { css } from '@emotion/css';

export const styledEventItemButton = css`
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
