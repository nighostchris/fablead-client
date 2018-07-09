import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  titleBar: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  searchButton: {
    position: 'absolute',
    right: '20px'
  },
  editButton: {
    fontSize: '14px',
    color: 'white',
    position: 'absolute',
    right: '20px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.titleBar}>
            <div className={ classes.headerLayout }>
              <Typography variant="title" color="inherit" align="center" className={classes.flex}>
              {
                this.props.location.pathname == "/dashboard" ? "Seminar"
                : (this.props.location.pathname == "/scheduling" ? "Scheduling"
                  : (this.props.location.pathname == "/teacher" ? "Teacher"
                    : (this.props.location.pathname == "/library" ? "Library"
                      : (this.props.location.pathname == "/reminder" ? "Reminder"
                        : undefined 
                        )
                      )
                    )
                  )
              }
              </Typography>
              {
                this.props.location.pathname == "/dashboard" || this.props.location.pathname == "/library" ? 
                (
                  <IconButton
                    aria-owns='menu-appbar'
                    aria-haspopup="true"
                    color="inherit"
                    className={ classes.searchButton }
                  >
                    <SearchIcon />
                  </IconButton>
                )
                :
                (this.props.location.pathname == "/teacher" || this.props.location.pathname == "/reminder" ?
                  (
                    <Button className={ classes.editButton }>
                        Edit
                    </Button>
                  )
                  : undefined
                )
              }
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(HeaderBar));
