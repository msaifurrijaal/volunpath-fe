'use client';
import { Roboto } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#604CC3', 
    },
    secondary: {
      main: '#80C4E9', 
    },
    background: {
      default: '#dae9f2', 
    },
    text: {
      primary: '#000000', 
      secondary: '#EEEEEE', 
    },
  },
});

export default theme;
