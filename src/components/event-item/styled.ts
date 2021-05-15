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
  background: #ffffff;
  border-radius: 0px 16px;
  padding: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #ef4723;
`;

export const styledEventImage = css`
  border-radius: 16px 0 0 16px;
`;

export const styledEventInfo = css`
  position: relative;
  padding: 24px 16px;
  background-color: #ffffff;
  border-radius: 0 16px 16px 0;
`;

export const styledEventItemButton = css`
  position: absolute;
  bottom: 0;
  right: 0;
  width: max-content;
  justify-self: center;
  padding: 16px 24px;
  cursor: pointer;
  background: #ef4723;
  border-radius: 8px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: grid;
  letter-spacing: -0.002em;
  color: #ffffff;
  border: none;
  border-radius: 16px 0px;

  &:hover,
  &:focus {
    background: #f06749;
  }

  &:active {
    background: #e62f07;
  }
`;
