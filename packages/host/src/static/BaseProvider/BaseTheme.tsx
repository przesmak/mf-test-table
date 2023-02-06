import { createTheme } from '@mui/material';
import { colors } from '../colors';
// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from '@mui/material/styles';
import "@mui/styles"

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line 
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'Roboto', 'sans-serif'].join(','),
    fontSize: 15,
    h1: { fontSize: '6.375rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3.125rem' },
    h4: { fontSize: '2.1875rem' },
    h5: { fontSize: '1.5625rem' },
    h6: { fontSize: '1.3125rem', fontWeight: 700 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.32 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.32 },
    caption: { fontSize: '0.8125rem' },
    overline: { fontSize: '0.8125rem', textTransform: 'none', letterSpacing: 2.08 },
    subtitle1: { fontSize: '1.0625rem', lineHeight: 1.32, fontWeight: 700 },
    subtitle2: { fontSize: '0.9375rem', lineHeight: 1.32, fontWeight: 700 },
    button: { fontSize: '1.0625rem', textTransform: 'none', fontWeight: 700 },
  },
  palette: {
    primary: { main: colors.blue[500].background },
    secondary: { main: colors.purple[500].background },
    error: { main: colors.red[500].background },
    warning: { main: colors.yellow[700].background, light: colors.yellow[500].background },
    info: { main: colors.blue[500].background },
    success: { main: colors.green[600].background },
  },
});

theme.components = {
  MuiButton: {
    //Override a components default CSS globally
    styleOverrides: {
      root: {
        height: theme.spacing(4.5),
      },
      sizeSmall: {
        fontSize: '0.8125rem',
        height: theme.spacing(3.5),
      },
      sizeLarge: {
        fontSize: '1.0625rem',
        height: theme.spacing(5.5),
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      textColor: 'primary',
      indicatorColor: 'primary',
    },
  },
  MuiSwitch: {
    defaultProps: {
      color: 'primary',
    },
  },
  MuiRadio: {
    defaultProps: {
      color: 'primary',
    },
  },
  MuiIconButton: {
    defaultProps: {
      color: 'primary', 
    },
  },
};