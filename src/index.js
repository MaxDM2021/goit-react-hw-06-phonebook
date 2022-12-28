import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
// import { theme } from './constants/theme';
// import { ThemeProvider } from '@emotion/react';
import './index.css';
import 'modern-normalize/modern-normalize.css';

import './styles/base.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
