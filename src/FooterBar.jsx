import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = {
  root: {
  },
};

class SimpleBottomNavigation extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation showLabels className={classes.root} value={0}>
        <BottomNavigationAction label="Seminars" icon={<Icon><i className="fas fa-chalkboard" /></Icon>} />
        <BottomNavigationAction label="Teachers" icon={<Icon><i className="fas fa-bell" /></Icon>} />
        <BottomNavigationAction label="Alerts" icon={<Icon><i className="fas fa-bell" /></Icon>} />
        <BottomNavigationAction label="Settings" icon={<Icon><i className="fas fa-cog" /></Icon>} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
