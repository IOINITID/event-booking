import { css } from '@emotion/css';

export const styledBookingList = css`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  row-gap: 16px;
`;

export const styledBookingListItem = css`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const styledBookingButton = css`
  align-items: center;
  width: max-content;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ef4723;
  background: transparent;
  border: 1px solid #ef4723;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #f06749;
  }

  &:active {
    color: #ffffff;
    background: #e52f07;
  }
`;
