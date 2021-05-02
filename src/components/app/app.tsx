import React, { memo } from 'react';
import { selectTheme } from '../../features/theme/themeSlice';
import { useSelectorTyped } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styled';

const App = () => {
  const theme = useSelectorTyped(selectTheme);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Normalize />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default memo(App);
