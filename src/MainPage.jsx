import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Route, withRouter } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SeminarList from './Dashboard/SeminarList';
import SchedulingPage from './Dashboard/SchedulingPage';
import TeacherPage from './Dashboard/TeacherPage';
import LibraryPage from './Dashboard/LibraryPage';
import ReminderPage from './Dashboard/ReminderPage';

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
import AddSeatingPlan from './Seminar/AddSeatingPlan';

const styles = {
  root: {
    height: 'inherit',
  },
};

class MainPage extends React.Component {
  render() {
    const { classes } = this.props;

    const headerBarArray = ['/basicinfo', '/eventppt', '/classmaterial', '/accountmgt'];

    const footerBarArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    return (
      <div className={classes.root}>
        { headerBarArray.includes(this.props.location.pathname) ? undefined : <HeaderBar /> }
        <Route path="/dashboard" component={SeminarList} />
        <Route path="/scheduling" component={SchedulingPage} />
        <Route path="/teacher" component={TeacherPage} />
        <Route path="/library" component={LibraryPage} />
        <Route path="/reminder" component={ReminderPage} />
        <Route path="/addseminar" component={AddSeminarPage} />
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
