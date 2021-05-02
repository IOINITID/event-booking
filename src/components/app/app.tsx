import React, { memo } from 'react';
import { selectTheme } from '../../features/theme/themeSlice';
import { useSelectorTyped } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, styledMain } from './styled';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../auth';
import Events from '../events';
import Bookings from '../bookings';
import Navigation from '../navigation';

const App = () => {
  const theme = useSelectorTyped(selectTheme);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Normalize />
      <GlobalStyles />
      <HashRouter>
        <Navigation />
        <main className={styledMain}>
          <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/auth" component={Auth} />
            <Route path="/events" component={Events} />
            <Route path="/bookings" component={Bookings} />
          </Switch>
        </main>
      </HashRouter>
    </ThemeProvider>
  );
};

export default memo(App);
