import { css } from '@emotion/css';

export const styledModal = css`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50rem;
  max-width: 90%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.25);
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 30rem;
  }
`;

export const styledModalHeader = css`
  padding: 1rem;
  color: #ffffff;
  background: #01d1d1;
`;

export const styledModalHeading = css`
  margin: 0;
  font-size: 1.25rem;
`;

export const styledModalContent = css`
  padding: 1rem;
`;

export const styledModalActions = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
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
