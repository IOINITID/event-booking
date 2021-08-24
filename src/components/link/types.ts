import { MouseEvent, ReactNode } from 'react';

type LinkVariant = 'text' | 'outlined' | 'contained';

export type LinkProps = {
  /** Link classname */
  className?: string;
  /** Variants for link */
  variant?: LinkVariant;
  /** Path to link */
  to: string;
  /** Link content */
  children: ReactNode;
  /** Handle for link click */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};
