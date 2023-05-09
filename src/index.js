import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
