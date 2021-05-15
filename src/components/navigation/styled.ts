import { css } from '@emotion/css';

export const styledHeader = css`
  max-width: 1360px;
  margin: 0 auto;
  padding: 40px 72px;
  display: grid;
  align-items: center;
  grid-template-columns: auto max-content max-content;
`;

export const styledHeading = css`
  margin: 0;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 135.5%;
  letter-spacing: 0.02em;
  color: #1e1e1e;
`;

export const styledNavigation = css``;

export const styledNavigationList = css`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
  list-style: none;
  column-gap: 24px;

  @media (max-width: 768px) {
    align-items: center;
    grid-template-columns: repeat(2, min-content);
    column-gap: 8px;
  }
`;

export const styledNavigationItem = css`
  margin: 0;
`;

export const styledNavigationLink = css`
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #282828;
  text-decoration: none;

  display: grid;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  font-family: 'Grandis Extended', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;

  &:hover,
  &:focus {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    border: 1px solid #282828;
    border-radius: 8px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.002em;
    color: #282828;
  }

  &.active {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    border: 1px solid #282828;
    border-radius: 8px;
    background: #282828;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.002em;
    color: #ffffff;
  }
`;
