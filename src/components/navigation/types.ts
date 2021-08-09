import { MouseEvent } from 'react';
import { ROUTES } from '../../utils/constants';

export type LinkDataType = {
  id: string;
  enable: boolean;
  title: string;
  path: ROUTES;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void | null;
};
