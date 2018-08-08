import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import EventPreparation from './Dashboard/Seminars/Details/Events/EventPreparation';
import ClassMaterial from './Dashboard/Seminars/Details/ClassMaterial';
import AccountManagement from './Dashboard/Seminars/Details/AccountManagement';
import ItineraryManagement from './Dashboard/Seminars/Details/ItineraryManagement';

import NotesTaking from './Dashboard/Seminars/Details/NotesTaking';
import AddSeatingPlan from './Seminar/AddSeatingPlan';
import OnSiteTimeManagement from './Dashboard/Seminars/Details/OnSiteTimeManagement';
import ScanQRCode from './Dashboard/Seminars/Details/ScanQRCode';
import SeatingPlan from './Dashboard/Seminars/Details/Events/SeatingPlan';
import AccountDetails from './Dashboard/Seminars/Details/AccountDetails';

import store from './Redux/Store/store';
import { verifyToken } from './Redux/Action/authAction';

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

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
});

const mapDispatchToProps = dispatch => ({
  verifyT: token => dispatch(verifyToken(token)),
});

class MainPage extends React.Component {
  componentWillUpdate() {
    const { verifyT, history } = this.props;
    verifyT(localStorage.getItem('access_token'));

    if (store.getState().authReducer.auth === false) {
      history.push('/');
    }
  }

  render() {
    const {
      classes, location,
    } = this.props;

    const { pathname } = location;

    const footerBarArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];
    const seminarArray = ['/basicinfo', '/dashboard', '/eventppt', '/classmaterial', '/accountmgt',
      '/itinerarymgt', '/notestaking', '/onsitetimemgt'];

    return (
      <div className={classes.root}>
        <HeaderBar />
        <div
          className={classes.middleContent}
          style={{
            top: seminarArray.includes(pathname) ? '112px' : undefined,
            marginBottom: pathname === '/dashboard' ? '86px'
              : pathname === '/itinerarymgt' || pathname === '/seatingplan' ? '0px' : undefined,
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
          <Route path="/addseatingplan" component={AddSeatingPlan} />
          <Route path="/setting" component={Setting} />
          <Route path="/itinerarymgt" component={ItineraryManagement} />
          <Route path="/onsitetimemgt" component={OnSiteTimeManagement} />
          <Route path="/scanqrcode" component={ScanQRCode} />
          <Route path="/seatingplan" component={SeatingPlan} />
          <Route path="/accountdetails" component={AccountDetails} />
        </div>
        { footerBarArray.includes(pathname) ? <FooterBar /> : undefined }
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  verifyT: PropTypes.func.isRequired,
};

export default withStyles(styles)(withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage)));
