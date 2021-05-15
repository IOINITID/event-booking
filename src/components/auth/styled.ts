import { css } from '@emotion/css';
import backgroundImage from '../../assets/images/form-info-background.jpg';

export const styledForm = css`
  display: grid;
  grid-template-columns: 624px 592px;
  max-width: 1360px;
`;

export const styledFormInfo = css`
  display: grid;
  row-gap: 40px;
  background: url(${backgroundImage});
  border-radius: 32px 0 0 32px;
  padding: 64px 104px 40px 104px;
`;

export const styledFormInfoTitle = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 140.5%;
  letter-spacing: 0.02em;
`;

export const styledFormFieldsTitle = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #282828;
`;

export const styledFormFieldsInfo = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #282828;
`;

export const styledFormFieldsInfoLink = css`
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #557aff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const styledFormFields = css`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 32px;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #282828;
`;

export const styledInput = css`
  display: block;
  width: 100%;
  border: 1px solid #282828;
  border-radius: 8px;
  padding: 16px 20px;
  outline: none;
`;

export const styledFormField = css`
  display: grid;
  row-gap: 12px;
`;

export const styledFormActions = css``;

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
  line-height: 24px;
  display: grid;
  letter-spacing: -0.002em;
  color: #ffffff;
  border: none;
`;
