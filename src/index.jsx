import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import AddSeminarPage from './AddSeminarPage';
import SchedulingPage from './SchedulingPage';
import TeacherPage from './TeacherPage';
import LibraryPage from './LibraryPage';
import ReminderPage from './ReminderPage';
import Calendar from './Calendar';

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
      <Router>
        <Switch>
          <Route exact path='/' component={ LoginPage } />
          <Route exact path='/dashboard' component={ MainPage } />
          <Route exact path='/addseminar' component={ AddSeminarPage } />
          <Route exact path='/scheduling' component={ SchedulingPage } />
          <Route exact path='/teacher' component={ TeacherPage } />
          <Route exact path='/library' component={ LibraryPage } />
          <Route exact path='/reminder' component={ ReminderPage } />
          <Route exact path='/calendar' component={ Calendar } />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
