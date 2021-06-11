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
import { REQUEST_URL, ROUTES } from '../../utils/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const theme = useSelectorTyped(selectTheme);
  const token = useSelectorTyped(selectToken);

  const client = new ApolloClient({
    link: createUploadLink({
      uri: REQUEST_URL,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ mode: theme }}>
        <Normalize />
        <GlobalStyles />
        <HashRouter>
          <Navigation />
          <main className={styledMain}>
            <Switch>
              {token && <Redirect from={ROUTES.MAIN} to={ROUTES.EVENTS} exact />}
              {token && <Redirect from={ROUTES.AUTHORIZATION} to={ROUTES.EVENTS} exact />}
              {!token && <Route path={ROUTES.AUTHORIZATION} component={Authorization} />}
              {!token && <Route path={ROUTES.REGISTRATION} component={Registration} />}
              <Route path={ROUTES.EVENTS} component={Events} />
              {token && <Route path={ROUTES.BOOKINGS} component={Bookings} />}
              {!token && <Redirect to={ROUTES.AUTHORIZATION} exact />}
            </Switch>
          </main>
        </HashRouter>
        <ToastContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default memo(App);
