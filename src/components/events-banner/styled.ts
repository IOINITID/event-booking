import { css } from '@emotion/css';
import ticketsImageLight from '../../assets/images/tickets-background-light@1x.png';
import ticketsImageLightRetina from '../../assets/images/tickets-background-light@2x.png';
import ticketsImageDark from '../../assets/images/tickets-background-dark@1x.png';
import ticketsImageDarkRetina from '../../assets/images/tickets-background-dark@2x.png';
import { Retina } from '../../utils/constants';

export const styles = {
  infoBanner: css`
    display: grid;
    padding: 32px 56px 40px 56px;
    background: #ffffff;
    background-color: #ffffff;
    background-image: url(${ticketsImageDark});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 500px;
    border-radius: 24px;
    row-gap: 16px;

    @media (min-resolution: ${Retina.dppx}dppx), (min-resolution: ${Retina.dpi}dpi) {
      background-image: url(${ticketsImageDarkRetina});
    }
  `,
  infoBannerAuthenticated: css`
    background-color: #282828;
    row-gap: 32px;
    background-image: url(${ticketsImageLight});

    @media (min-resolution: ${Retina.dppx}dppx), (min-resolution: ${Retina.dpi}dpi) {
      background-image: url(${ticketsImageLightRetina});
    }
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
  `,
  infoBannerLink: css`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
};
