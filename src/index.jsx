import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#21a9c9',
      light: '#67dbfc',
      dark: '#007a98',
      contrastText: '#fff'
    },
    secondary: {
      main: '#02de72',
      light: '#64ffa2',
      dark: '#00ab44',
      contrastText: '#fff'
    }
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainPage />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
