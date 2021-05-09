import { css } from '@emotion/css';

export const styledBookingsControl = css`
  padding: 0.5rem;
  text-align: center;
`;

export const styledBookingsControlButton = css`
  font: inherit;
  border: none;
  background: transparent;
  color: #000000;
  padding: 0.25rem 1rem;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: #01d1d1;
    color: #01d1d1;
  }
`;
