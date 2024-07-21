import { Components, Theme } from '@mui/material';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    InputLabelProps: {
      shrink: true,
      disabled: true
    },
    variant: 'outlined'
  },
  styleOverrides: {
    root: {
      borderRadius: 8,
      height: 50,
      fontSize: 15,
      fontWeight: '400'
    }
  }
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: 1
      },
      borderRadius: 8
    }
  }
};

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    input: {
      fontSize: 15,
      fontWeight: 400
    }
  }
};
