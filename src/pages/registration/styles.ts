import { css } from '@emotion/css';
import ticketsImage from '../../assets/images/tickets@1x.png';
import ticketsImageRetina from '../../assets/images/tickets@2x.png';
import { Retina } from '../../theme';

export const styles = {
  form: css`
    display: grid;
    grid-template-columns: 624px 592px;
    max-width: 1360px;
    min-height: 580px;
  `,
  formInfo: css`
    position: relative;
    display: grid;
    padding: 64px 104px 40px 104px;
    background-color: #282828;
    background-image: url(${ticketsImage});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 499px;
    border-radius: 32px 0 0 32px;
    row-gap: 40px;

    @media (min-resolution: ${Retina.Dppx}dppx), (min-resolution: ${Retina.Dpi}dpi) {
      background-image: url(${ticketsImageRetina});
    }
  `,
  formImage: css`
    position: absolute;
    right: 0;
    bottom: 0;
  `,
  formInfoTitle: css`
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 39px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ffffff;
    letter-spacing: 0.02em;
  `,
  formFieldsTitle: css`
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  formFieldsInfo: css`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  formFieldsInfoLink: css`
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
  `,
  formFields: css`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    padding: 64px 104px;
    background: #ffffff;
    border-radius: 0 32px 32px 0;
    row-gap: 24px;
  `,
  formFieldsHeader: css`
    display: grid;
    row-gap: 16px;
  `,
  formFieldsFieldset: css`
    display: grid;
    row-gap: 24px;
  `,
  label: css`
    display: grid;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  input: css`
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
  `,
  formContainer: css`
    display: grid;
    row-gap: 40px;
  `,
  formField: css`
    display: grid;
    row-gap: 16px;
  `,
  formFieldsPolicy: css`
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  formFieldsPolicyLink: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
  button: css`
    justify-self: center;
  `,
};
