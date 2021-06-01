import { css } from '@emotion/css';

export const styledEvent = css`
  display: grid;
  grid-template-columns: 176px 208px;
`;

export const styledEventImageContainer = css`
  position: relative;
`;

export const styledEventPrice = css`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ef4723;
  letter-spacing: 0.02em;
  background: #ffffff;
  border-radius: 0 16px;
`;

export const styledEventImage = css`
  width: 176px;
  height: 176px;
  border-radius: 16px 0 0 16px;
  object-fit: cover;
`;

export const styledEventInfo = css`
  position: relative;
  padding: 24px 16px;
  background-color: #ffffff;
  border-radius: 0 16px 16px 0;
`;

export const styledEventItemButton = css`
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  justify-self: center;
  width: max-content;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ffffff;
  letter-spacing: -0.002em;
  background: #ef4723;
  border: none;
  border-radius: 16px 0;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #f06749;
  }

  &:active {
    background: #e62f07;
  }
`;
