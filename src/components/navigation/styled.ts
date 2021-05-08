import { css } from '@emotion/css';

export const styledHeader = css`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  background: #01d1d1;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    row-gap: 24px;
    height: auto;
    padding: 1rem;
  }
`;

export const styledHeading = css`
  margin: 0;
  font-size: 1.5rem;
`;

export const styledNavigation = css`
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const styledNavigationList = css`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
  list-style: none;
  column-gap: 16px;

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
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid #ffffff;
  border-radius: 8px;

  &:hover,
  &:active,
  &.active {
    color: #000000;
    background: #ffffff;
  }
`;

export const styledNavigationButton = css`
  padding: 0.5rem 1rem;
  font: inherit;
  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:active,
  &.active {
    color: #000000;
    background: #ffffff;
  }
`;
