import React, { memo } from 'react';

// Components imports
import Authorization from '../authorization';
import Registration from '../registration';
import Events from '../events';
import Bookings from '../bookings';
import Navigation from '../navigation';

// GraphQL imports
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

// Store imports
import { useSelectorTyped } from '../../hooks';
import { selectToken } from '../../features/user/userSlice';
import { selectTheme } from '../../features/theme/themeSlice';

// Router imports
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { REQUEST_URL, ROUTES } from '../../utils/constants';

// Styles imports
import { GlobalStyles, styledMain } from './styled';

// Additional imports
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  // Store values
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
