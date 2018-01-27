import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './app/App';

import rootReducer from './app/redux/reducer';

// Create redux store and apply it to App using Provider component
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // Used to make Redux Devtools in Browser work
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
