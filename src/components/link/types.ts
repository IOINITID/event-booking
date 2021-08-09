import { ReactNode } from 'react';

export type LinkProps = {
  /** Link classname */
  className?: string;
  /** Variants for link */
  variant?: 'text' | 'outlined' | 'contained';
  /** Path to link */
  to: string;
  /** Link content */
  children: ReactNode;
};
