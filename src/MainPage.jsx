import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Route, withRouter } from 'react-router-dom';

import Setting from './Setting';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SeminarList from './Dashboard/Seminars/SeminarList';
import AddSeminarPage from './Dashboard/Seminars/AddSeminarPage';

import SchedulingPage from './Dashboard/Scheduling/SchedulingPage';

import TeacherPage from './Dashboard/Teachers/TeacherPage';
import AddTeacher from './Dashboard/Teachers/AddTeacher';

import LibraryPage from './Dashboard/Library/LibraryPage';
import AddLibrary from './Dashboard/Library/AddLibraryPage';
import LibraryDetails from './Dashboard/Library/LibraryDetails';

import ReminderPage from './Dashboard/Reminder/ReminderPage';

import BasicInfoPage from './Dashboard/Seminars/Details/BasicInfoPage';
import EventPreparation from './Dashboard/Seminars/Details/EventPreparation';
import ClassMaterial from './Seminar/ClassMaterial';
import AccountManagement from './Seminar/AccountManagement';

import NotesTaking from './NotesTaking';
import Notes from './Notes';

import CarparkPass from './Seminar/CarparkPass';
import Payment from './Seminar/Payment';
import Invoice from './Seminar/Invoice';
import Tenancy from './Seminar/Tenancy';
import AddSeatingPlan from './Seminar/AddSeatingPlan';

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
    const { classes, location } = this.props;
    const { pathname } = location;

    const footerBarArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    return (
      <div className={classes.root}>
        <HeaderBar />
        <div
          className={classes.middleContent}
          style={{
            top: pathname === '/basicinfo' || pathname === '/dashboard' ? '112px' : undefined,
            marginBottom: pathname === '/dashboard' ? '86px' : undefined,
          }}
        >
          <Route path="/dashboard" component={SeminarList} />
          <Route path="/scheduling" component={SchedulingPage} />
          <Route path="/teacher" component={TeacherPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/addlibrary" component={AddLibrary} />
          <Route path="/librarydetails" component={LibraryDetails} />
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
          <Route path="/setting" component={Setting} />
        </div>
        { footerBarArray.includes(pathname) ? <FooterBar /> : undefined }
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(MainPage));
