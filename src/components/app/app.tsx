import { memo } from 'react';

// Components
import { Authorization } from '../../pages/authorization';
import { Registration } from '../../pages/registration';
import { Events } from '../../pages/events';
import { Bookings } from '../../pages/bookings';

// GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

// Store
import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../routes';

// Constants
import { REQUEST_URL } from '../../utils/constants';

// Additional
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Styles
import { styles } from './styles';
import { Header } from '../header';

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
        <Header />
        <main className={styles.container}>
          <Switch>
            {token && <Redirect from={Routes.Main} to={Routes.Events} exact />}
            {token && <Redirect from={Routes.Authorization} to={Routes.Events} exact />}
            {!token && <Route path={Routes.Authorization} component={Authorization} />}
            {!token && <Route path={Routes.Registration} component={Registration} />}
            <Route path={Routes.Events} component={Events} />
            {token && <Route path={Routes.Bookings} component={Bookings} />}
            {!token && <Redirect to={Routes.Authorization} exact />}
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer />
    </ApolloProvider>
  );
};

export default memo(App);
