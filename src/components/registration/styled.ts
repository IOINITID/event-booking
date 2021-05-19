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
  row-gap: 40px;
  background: #282828;
  border-radius: 32px 0 0 32px;
  padding: 64px 104px 40px 104px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const styledFormImage = css`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const styledFormInfoTitle = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

export const styledFormFieldsTitle = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #282828;
`;

export const styledFormFieldsInfo = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #282828;
`;

export const styledFormFieldsInfoLink = css`
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
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
  row-gap: 24px;
  padding: 64px 104px;
  border-radius: 0 32px 32px 0;
  background: #ffffff;
`;

export const styledFormFieldsHeader = css`
  display: grid;
  row-gap: 16px;
`;

export const styledFormFieldsFieldset = css`
  display: grid;
  row-gap: 24px;
`;

export const styledLabel = css`
  display: grid;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #282828;
`;

export const styledInput = css`
  width: 100%;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #282828;
  border: 1px solid #282828;
  border-radius: 8px;
  padding: 19px 16px;
  outline: none;

  &::placeholder {
    color: #bfc4c7;
  }
`;

export const styledFormContainer = css`
  display: grid;
  row-gap: 40px;
`;

export const styledFormField = css`
  display: grid;
  row-gap: 16px;
`;

export const styledFormActions = css``;

export const styledFormFieldsPolicy = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #282828;
`;

export const styledFormFieldsPolicyLink = css`
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #557aff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const styledButton = css`
  width: max-content;
  justify-self: center;
  padding: 20px 32px;
  cursor: pointer;
  background: #ef4723;
  border-radius: 8px;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: grid;
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
