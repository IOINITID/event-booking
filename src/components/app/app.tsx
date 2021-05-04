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
import { selectToken } from '../../features/user/userSlice';

const App = () => {
  const theme = useSelectorTyped(selectTheme);
  const token = useSelectorTyped(selectToken);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Normalize />
      <GlobalStyles />
      <HashRouter>
        <Navigation />
        <main className={styledMain}>
          <Switch>
            {token && <Redirect from="/" to="/events" exact />}
            {token && <Redirect from="/auth" to="/events" exact />}
            {!token && <Route path="/auth" component={Auth} />}
            <Route path="/events" component={Events} />
            {token && <Route path="/bookings" component={Bookings} />}
            {!token && <Redirect to="/auth" exact />}
          </Switch>
        </main>
      </HashRouter>
    </ThemeProvider>
  );
};

export default memo(App);
