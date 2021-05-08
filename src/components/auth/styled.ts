import { css } from '@emotion/css';

export const styledForm = css`
  width: 25rem;
  max-width: 80%;
  margin: 5rem auto;
`;

export const styledLabel = css`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const styledInput = css`
  display: block;
  width: 100%;
`;

export const styledFormField = css`
  margin-bottom: 1rem;
`;

export const styledFormActions = css`
  @media (max-width: 768px) {
    display: grid;
    row-gap: 16px;
  }
`;

export const styledButton = css`
  margin-right: 1rem;
  padding: 0.25rem 1rem;
  font: inherit;
  color: #ffffff;
  background: #01d1d1;
  border: 1px solid #01d1d1;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 0.25);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: #01a7a7;
    border-color: #01a7a7;
  }
`;
