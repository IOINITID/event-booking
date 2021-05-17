import { css } from '@emotion/css';

export const styledModal = css`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 808px;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
`;

export const styledModalHeader = css`
  position: relative;
  height: 304px;
  /* background: linear-gradient(99.19deg, #9ae048 15.01%, #79ff76 95.29%); */
`;

export const styledModalImage = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const styledModalPrice = css`
  position: absolute;
  top: 0;
  right: 0;
  background: #ffffff;
  border-radius: 0px 16px;
  padding: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ef4723;
`;

export const styledModalHeading = css`
  margin: 0;
  font-size: 1.25rem;
`;

export const styledModalContent = css`
  padding: 32px 40px 48px 40px;
  background: #ffffff;
`;

export const styledModalActions = css`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 16px;
  justify-content: center;
`;

export const styledButton = css`
  width: max-content;
  justify-self: center;
  padding: 20px 59px;
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

  &:hover,
  &:focus {
    background: #f06749;
  }

  &:active {
    background: #e62f07;
  }
`;
