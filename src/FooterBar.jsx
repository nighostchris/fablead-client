import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withRouter, Link } from 'react-router-dom';

import ReminderIcon from '@material-ui/icons/Notifications';
import SeminarsIcon from '@material-ui/icons/SpeakerNotes';
import TeachersIcon from '@material-ui/icons/School';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import ScheduleIcon from '@material-ui/icons/Today';

const styles = {
  root: {
    position: 'absolute',
    bottom: '0px',
    width: '100%'
  }
};

class SimpleBottomNavigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClick = (event, value) => {
    this.setState({ 'value': value });
  }

  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation showLabels className={ classes.root } 
                        value={ this.props.location.pathname == "/dashboard" ? 0 :
                                (this.props.location.pathname == "/scheduling" ? 1 :
                                (this.props.location.pathname == "/teacher" ? 2 :
                                (this.props.location.pathname == "/library" ? 3 : 4))) } 
                        onChange={ this.handleClick }>
        <BottomNavigationAction label="Seminars" icon={<SeminarsIcon />} component={ Link } to="/dashboard" />
        <BottomNavigationAction label="Schedule" icon={<ScheduleIcon />} component={ Link } to="/scheduling" />
        <BottomNavigationAction label="Teachers" icon={<TeachersIcon />} component={ Link } to="/teacher" />
        <BottomNavigationAction label="Library" icon={<LibraryIcon />} component={ Link } to="/library" />
        <BottomNavigationAction label="Reminder" icon={<ReminderIcon />} component={ Link } to="/reminder" />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));
