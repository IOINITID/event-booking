import React from 'react';

// Styles imports
import { styles } from './styled';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
