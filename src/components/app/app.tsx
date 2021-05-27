import React, { memo } from 'react';
import { selectTheme } from '../../features/theme/themeSlice';
import { useSelectorTyped } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, styledMain } from './styled';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Authorization from '../authorization';
import Events from '../events';
import Bookings from '../bookings';
import Navigation from '../navigation';
import { selectToken } from '../../features/user/userSlice';
import Registration from '../registration';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { REQUEST_URL } from '../../utils/constants';

const client = new ApolloClient({
  link: createUploadLink({
    uri: REQUEST_URL,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  const theme = useSelectorTyped(selectTheme);
  const token = useSelectorTyped(selectToken);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ mode: theme }}>
        <Normalize />
        <GlobalStyles />
        <HashRouter>
          <Navigation />
          <main className={styledMain}>
            <Switch>
              {token && <Redirect from="/" to="/events" exact />}
              {token && <Redirect from="/authorization" to="/events" exact />}
              {!token && <Route path="/authorization" component={Authorization} />}
              {!token && <Route path="/registration" component={Registration} />}
              <Route path="/events" component={Events} />
              {token && <Route path="/bookings" component={Bookings} />}
              {!token && <Redirect to="/authorization" exact />}
            </Switch>
          </main>
        </HashRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default memo(App);
