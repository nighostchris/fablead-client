import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import SettingsIcon from '@material-ui/icons/Settings';
import AlertsIcon from '@material-ui/icons/Notifications';
import SeminarsIcon from '@material-ui/icons/SpeakerNotes'
import TeachersIcon from '@material-ui/icons/School'

const styles = {
  root: {
    bottom: '0px'
  },
  icon: {
    fontSize: '115%',
    verticalAlign: 'text-top'
  }
};

class SimpleBottomNavigation extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation showLabels className={classes.root} value={0}>
        <BottomNavigationAction label="Seminars" icon={<SeminarsIcon />} />
        <BottomNavigationAction label="Teachers" icon={<TeachersIcon />} />
        <BottomNavigationAction label="Alerts" icon={<AlertsIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
