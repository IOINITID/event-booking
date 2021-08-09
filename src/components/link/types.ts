import { MouseEvent, ReactNode } from 'react';

export type LinkProps = {
  /** Link classname */
  className?: string;
  /** Variants for link */
  variant?: 'text' | 'outlined' | 'contained';
  /** Handle for link click */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** Path to link */
  to: string;
  /** Link content */
  children: ReactNode;
};
