import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  titleBar: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.titleBar}>
            <Typography variant="title" color="inherit" align="center" className={classes.flex}>
              Seminar
            </Typography>
            <div>
              <IconButton
                aria-owns='menu-appbar'
                aria-haspopup="true"
                color="inherit"
              >
                <SearchIcon />
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
