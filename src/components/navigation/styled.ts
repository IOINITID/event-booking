import { css } from '@emotion/css';

export const styledHeader = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  /* grid-auto-flow: column; */
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  background: #01d1d1;
`;

export const styledHeading = css`
  margin: 0;
  font-size: 1.5rem;
`;

export const styledNavigation = css`
  margin-left: 1.5rem;
`;

export const styledNavigationList = css`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const styledNavigationItem = css`
  margin: 0 1rem;
`;

export const styledNavigationLink = css`
  color: #000000;
  text-decoration: none;

  &:hover,
  &:active,
  &.active {
    color: #fdefa0;
  }
`;
