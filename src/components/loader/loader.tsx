import React from 'react';
import { styledLoader, styledLoaderContainer } from './styled';

const Loader = () => {
  return (
    <div className={styledLoaderContainer}>
      <div className={styledLoader}></div>
    </div>
  );
};

export default Loader;
