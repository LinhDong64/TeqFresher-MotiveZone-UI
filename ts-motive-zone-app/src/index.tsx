import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './App/appStore'
import rootSaga from './App/appSaga'
import { BrowserRouter } from 'react-router-dom'


store.runSaga(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
