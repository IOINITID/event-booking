import { css } from '@emotion/css';
import ticketsImageDark from '../../assets/images/tickets-background-dark@1x.png';
import ticketsImageDarkRetina from '../../assets/images/tickets-background-dark@2x.png';
import { Retina } from '../../theme';

export const styles = {
  backdrop: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgb(47 47 47 / 0.5);
    backdrop-filter: blur(7px);
  `,
  container: css`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    overflow: hidden;
    background: #ffffff;
    border-radius: 16px;
    transform: translate(-50%, -50%);
  `,
  header: css`
    position: relative;
    height: 304px;
    background: url(${ticketsImageDark}), linear-gradient(99.19deg, #9ae048 15.01%, #79ff76 95.29%);
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: contain;

    @media (min-resolution: ${Retina.dppx}dppx), (min-resolution: ${Retina.dpi}dpi) {
      background: url(${ticketsImageDarkRetina}), linear-gradient(99.19deg, #9ae048 15.01%, #79ff76 95.29%);
      background-repeat: no-repeat;
      background-position: 50% 100%;
      background-size: contain;
    }
  `,
  preview: css`
    background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
      radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.51) 74.11%);

    @media (min-resolution: ${Retina.dppx}dppx), (min-resolution: ${Retina.dpi}dpi) {
      background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
        radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.51) 74.11%);
    }
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  price: css`
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
  `,
  content: css`
    padding: 32px 32px 0 32px;
    background: #ffffff;
  `,
  title: css`
    margin: 0;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  titleSuccess: css`
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  `,
  description: css`
    margin: 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  infoContainer: css`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, max-content);
    margin-bottom: 32px;
    column-gap: 64px;
  `,
  time: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  location: css`
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,
  actions: css`
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    padding: 0 32px 32px 32px;
    column-gap: 24px;
  `,
};
