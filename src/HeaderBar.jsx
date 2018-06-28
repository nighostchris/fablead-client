import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="title" color="inherit" align="center" className={classes.flex}>
              Seminar
            </Typography>
            <div>
              <IconButton
                aria-owns='menu-appbar'
                aria-haspopup="true"
                color="inherit"
              >
                <i className="fas fa-search" />
              </IconButton>
            </div>
          </Toolbar>
          <Tabs value={0} scrollable scrollButtons="auto" fullWidth>
            <Tab label="ALL" />
            <Tab label="Seminar" />
            <Tab label="Training" />
            <Tab label="Consulting" />
            <Tab label="Fablead" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);
