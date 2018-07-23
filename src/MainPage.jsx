import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Route, withRouter } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SeminarList from './Dashboard/Seminars/SeminarList';
import SchedulingPage from './Dashboard/Scheduling/SchedulingPage';
import TeacherPage from './Dashboard/Teachers/TeacherPage';
import LibraryPage from './Dashboard/Library/LibraryPage';
import ReminderPage from './Dashboard/Reminder/ReminderPage';

import AddSeminarPage from './Dashboard/Seminars/AddSeminarPage';

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
import AddSeatingPlan from './Seminar/AddSeatingPlan';
import AddTeacher from './Dashboard/Teachers/AddTeacher';

const styles = {
  root: {
    height: 'inherit',
  },
  middleContent: {
    top: '64px',
    position: 'relative',
    marginBottom: '56px',
  },
};

class MainPage extends React.Component {
  render() {
    const { classes } = this.props;

    const footerBarArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    return (
      <div className={classes.root}>
        <HeaderBar />
        <div className={classes.middleContent}>
          <Route path="/dashboard" component={SeminarList} />
          <Route path="/scheduling" component={SchedulingPage} />
          <Route path="/teacher" component={TeacherPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/reminder" component={ReminderPage} />
          <Route path="/addseminar" component={AddSeminarPage} />
          <Route path="/addteacher" component={AddTeacher} />
          <Route path="/basicinfo" component={BasicInfoPage} />
          <Route path="/eventppt" component={EventPreparation} />
          <Route path="/classmaterial" component={ClassMaterial} />
          <Route path="/accountmgt" component={AccountManagement} />
          <Route path="/notestaking" component={NotesTaking} />
          <Route path="/notes" component={Notes} />
          <Route path="/carparkpass" component={CarparkPass} />
          <Route path="/payment" component={Payment} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/tenancy" component={Tenancy} />
          <Route path="/addseatingplan" component={AddSeatingPlan} />
        </div>
        { footerBarArray.includes(this.props.location.pathname) ? <FooterBar /> : undefined }
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


export default withStyles(styles)(withRouter(MainPage));
