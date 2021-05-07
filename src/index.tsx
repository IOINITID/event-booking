import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/app/app';

store.subscribe(() => {
  localStorage.setItem('theme', store.getState().theme.value);
  localStorage.setItem('userToken', store.getState().user.token);
  localStorage.setItem('userId', store.getState().user.userId);
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('.root'));
