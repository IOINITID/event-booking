import { css } from '@emotion/css';
import ticketsImageLight from '../../assets/images/tickets-background-light.png';
import ticketsImageDark from '../../assets/images/tickets-background-dark.png';

export const styles = {
  infoBanner: css`
    display: grid;
    padding: 32px 56px 40px 56px;
    background: #ffffff;
    background-color: #ffffff;
    background-image: url(${ticketsImageDark});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    border-radius: 24px;
    row-gap: 16px;
  `,
  infoBannerAuthenticated: css`
    background-color: #282828;
    row-gap: 32px;
    background-image: url(${ticketsImageLight});
  `,
  infoBannerHeading: css`
    max-width: 696px;
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #1e1e1e;
    letter-spacing: 0.02em;
  `,
  infoBannerHeadingAuthenticated: css`
    color: #ffffff;
  `,
  infoBannerText: css`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #252525;
    letter-spacing: -0.002em;
  `,
  infoBannerLink: css`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;
    letter-spacing: -0.002em;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
};
