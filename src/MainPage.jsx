import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Route } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SeminarList from './Dashboard/SeminarList';
import SchedulingPage from './Dashboard/SchedulingPage';
import TeacherPage from './Dashboard/TeacherPage';
import LibraryPage from './Dashboard/LibraryPage';
import ReminderPage from './Dashboard/ReminderPage';

const styles = {
  root: {
    flexShrink: 1
  },
  content: {
    flexShrink: 1,
    marginBottom: '72px'
  },
  loginRoot: {
    marginTop: '100px'
  }
};

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <div className={ classes.content }>
          <HeaderBar />
          <Route path="/dashboard" component={ SeminarList } />
          <Route path="/scheduling" component={ SchedulingPage } />
          <Route path="/teacher" component={ TeacherPage } />
          <Route path="/library" component={ LibraryPage } />
          <Route path="/reminder" component={ ReminderPage } />
        </div>
        <FooterBar />
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(MainPage);
