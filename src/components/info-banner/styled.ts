import { css } from '@emotion/css';
import ticketsImageLight from '../../assets/images/tickets-background-light.png';
import ticketsImageDark from '../../assets/images/tickets-background-dark.png';

export const styledInfoBanner = css`
  display: grid;
  row-gap: 16px;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px 56px 40px 56px;
  background-color: #ffffff;
  background-image: url(${ticketsImageDark});
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;

export const styledInfoBannerAuthenticated = css`
  background-color: #282828;
  row-gap: 32px;
  background-image: url(${ticketsImageLight});
`;

export const styledInfoBannerHeading = css`
  max-width: 696px;
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #1e1e1e;
`;

export const styledInfoBannerHeadingAuthenticated = css`
  color: #ffffff;
`;

export const styledInfoBannerText = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.002em;
  color: #252525;
`;

export const styledInfoBannerLink = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.002em;
  color: #557aff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const styledInfoBannerButton = css`
  width: max-content;
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
  text-decoration: none;

  &:hover,
  &:focus {
    background: #f06749;
  }

  &:active {
    background: #e62f07;
  }
`;
