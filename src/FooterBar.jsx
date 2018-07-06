import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
      value: this.props.page
    };
  }

  handleClick = (event, value) => {
    this.props.handleChangePage(value);
    this.setState({ value: value });
  }

  render() {
    const { classes } = this.props;

    const { value } = this.state;

    return (
      <BottomNavigation showLabels className={classes.root} value={ value } onChange={ this.handleClick }>
        <BottomNavigationAction label="Seminars" icon={<SeminarsIcon />} />
        <BottomNavigationAction label="Schedule" icon={<ScheduleIcon />} />
        <BottomNavigationAction label="Teachers" icon={<TeachersIcon />} />
        <BottomNavigationAction label="Library" icon={<LibraryIcon />} />
        <BottomNavigationAction label="Reminder" icon={<ReminderIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  handleChangePage: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
