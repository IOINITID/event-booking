import { css } from '@emotion/css';

export const styledModal = css`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 808px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 16px;
  transform: translate(-50%, -50%);
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
  padding: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ef4723;
  letter-spacing: 0.02em;
  background: #ffffff;
  border-radius: 0 16px;
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
  justify-content: center;
  align-items: start;
  grid-template-columns: repeat(2, max-content);
  column-gap: 16px;
`;

export const styledButton = css`
  display: grid;
  align-items: center;
  width: max-content;
  padding: 20px 59px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ffffff;
  background: #ef4723;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #f06749;
  }

  &:active {
    background: #e62f07;
  }
`;

export const styledButtonCancel = css`
  align-items: center;
  width: max-content;
  padding: 19px 32px;
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
