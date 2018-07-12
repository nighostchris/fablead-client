import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import AddSeminarPage from './Dashboard/AddSeminarPage';

import BasicInfoPage from './Seminar/BasicInfoPage';
import EventPreparation from './Seminar/EventPreparation';
import ClassMaterial from './Seminar/ClassMaterial';
import AccountManagement from './Seminar/AccountManagement';

import NotesTaking from './NotesTaking';
import Notes from './Notes';

import CarparkPass from './Seminar/CarparkPass';
import Payment from './Seminar/Payment';
import Invoice from './Seminar/Invoice';
import Tenancy from './Seminar/Tenancy';

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
          <Route exact path="/" component={ LoginPage } />
          <Route path="/addseminar" component={ AddSeminarPage } />
          <Route path="/basicinfo" component={ BasicInfoPage } />
          <Route path="/eventppt" component={ EventPreparation } />
          <Route path="/classmaterial" component={ ClassMaterial } />
          <Route path="/accountmgt" component={ AccountManagement } />
          <Route path="/notestaking" component={ NotesTaking } />
          <Route path="/notes" component={ Notes } />
          <Route path="/carparkpass" component={CarparkPass} />
          <Route path="/payment" component={ Payment } />
          <Route path="/invoice" component={ Invoice } />
          <Route path="/tenancy" component={ Tenancy } />
          <MainPage />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
