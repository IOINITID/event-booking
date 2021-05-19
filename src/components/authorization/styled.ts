import { css } from '@emotion/css';

export const styledForm = css`
  display: grid;
  grid-template-columns: 624px 592px;
  max-width: 1360px;
  min-height: 580px;
`;

export const styledFormInfo = css`
  position: relative;
  display: grid;
  padding: 64px 104px 40px 104px;
  background: #282828;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px 0 0 32px;
  row-gap: 40px;
`;

export const styledFormImage = css`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const styledFormInfoTitle = css`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 39px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #ffffff;
  letter-spacing: 0.02em;
`;

export const styledFormFieldsTitle = css`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #282828;
`;

export const styledFormFieldsInfo = css`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #282828;
`;

export const styledFormFieldsInfoLink = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #557aff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const styledFormFields = css`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  padding: 64px 104px 56px 104px;
  background: #ffffff;
  border-radius: 0 32px 32px 0;
  row-gap: 24px;
`;

export const styledFormFieldsHeader = css`
  display: grid;
  row-gap: 16px;
`;

export const styledFormContainer = css`
  display: grid;
  row-gap: 48px;
`;

export const styledFormFieldsFieldset = css`
  display: grid;
  row-gap: 24px;
`;

export const styledLabel = css`
  display: grid;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #282828;
`;

export const styledInput = css`
  width: 100%;
  padding: 19px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  color: #282828;
  border: 1px solid #282828;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #bfc4c7;
  }
`;

export const styledFormField = css`
  display: grid;
  row-gap: 16px;
`;

export const styledButton = css`
  display: grid;
  justify-self: center;
  width: max-content;
  padding: 20px 32px;
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
