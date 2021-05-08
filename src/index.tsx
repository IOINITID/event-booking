import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/app/app';

store.subscribe(() => {
  localStorage.setItem('theme', store.getState().theme.value);
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('.root'));
