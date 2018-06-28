import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import * as Colors from '@material-ui/core/colors';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

const theme = createMuiTheme({
  palette: {
    primary: Colors.blue,
    secondary: Colors.pink,
    error: Colors.red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
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
