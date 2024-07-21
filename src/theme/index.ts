'use client';

import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import color from './color';
import button from './button';
import typography from './typography';
import {
  MuiTextField,
  MuiInputBase,
  MuiOutlinedInput,
} from './input';

const theme = createTheme({
  typography: typography,
  components: {
    MuiButton: button,
    MuiTextField: MuiTextField,
    MuiInputBase: MuiInputBase,
    MuiOutlinedInput: MuiOutlinedInput,
  },
  palette: color
});

export default theme;
