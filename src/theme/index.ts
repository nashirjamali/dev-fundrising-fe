'use client';

import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import color from './color';
import button from './button';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MuiButton: button
  },
  palette: color
});

export default theme;
