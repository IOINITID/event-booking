import { memo } from 'react';

// Components
import { Authorization } from '../../pages/authorization';
import { Registration } from '../../pages/registration';
import { Events } from '../../pages/events';
import { Bookings } from '../../pages/bookings';
import { Navigation } from '../navigation';

// GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

// Store
import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { REQUEST_URL, ROUTES } from '../../utils/constants';

// Additional
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Styles
import { styles } from './styles';

const App = () => {
  const token = useSelector(userTokenSelector);

  const client = new ApolloClient({
    link: createHttpLink({
      uri: REQUEST_URL,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Navigation />
        <main className={styles.container}>
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
    </ApolloProvider>
  );
};

export default memo(App);
