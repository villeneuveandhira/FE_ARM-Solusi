/* import(s) */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import Home from './pages/home';
import Category from './pages/category';
import Detail from './pages/detail';

/* Global Color & Typography */
const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy, sans-serif',
  },
  palette: {
    primary: {
      main: '#003459', // Dark Blue
    },
    secondary: {
      main: '#F7DBA7', // Mon Yellow
    },
    state: {
      main: '#FF564F', // Pink Red
      secondary: '#34C759', // Green Light
      third: '#FF912C', // Orange Shine
      fourth: '#00A7E7', // Blue Sea
    },
    neutral: {
      main: '#00171F', // 100
      n80: '#242B33', // 80
      n60: '#667469', // 60
      n40: '#99A2A5', // 40
      n20: '#CCD1D2', // 20
      n10: '#EBEEEF', // 10
      n00: '#FDFDFD', // 00
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category"} element={<Category />} />
          <Route path={"/detail"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
