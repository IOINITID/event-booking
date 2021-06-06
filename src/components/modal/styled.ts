import { css } from '@emotion/css';

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
    width: 808px;
    overflow: hidden;
    background: #ffffff;
    border-radius: 16px;
    transform: translate(-50%, -50%);
  `,
  header: css`
    position: relative;
    height: 304px;
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
    padding: 32px;
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
    grid-template-columns: repeat(2, max-content);
    column-gap: 24px;
  `,
};
