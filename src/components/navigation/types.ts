import { MouseEvent } from 'react';
import { Routes } from '../../routes';

export type LinkDataType = {
  id: string;
  enable: boolean;
  title: string;
  path: Routes;
  onClick: ((event: MouseEvent<HTMLAnchorElement>) => void) | undefined;
};

export type NavigationProps = {
  pathname: string;
  linksData: LinkDataType[];
};
