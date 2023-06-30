import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ThemeProvider from './redux/providers/theme-provider';
import { store } from './config/store';
import './index.styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
