import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  titleBar: {
    justifyContent: 'center'
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
  },
  headerLayoutNew: {
    boxShadow: '0px 0px 0px'
  },
  backButton: {
    position: 'absolute',
    left: '20px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      left: '0px'
    }
  }
});

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;

    const backButtonArray = ["/addseminar", "/basicinfo", "/eventppt", "/classmaterial", "/accountmgt", "/notestaking", "/notes", "/carparkpass", "/payment", "/invoice", "/tenancy"];
    
    const editButtonArray = ["/teacher", "/reminder", "/basicinfo", "/eventppt", "/classmaterial", "/accountmgt", "/notestaking", "/notes"];

    const accountMGTArray = ["/carparkpass", "/payment", "/invoice", "/tenancy"];

    const headerMapping = {
      "/dashboard": "Seminar",
      "/addseminar": "New Seminar",
      "/scheduling": "Scheduling",
      "/teacher": "Teacher",
      "/library": "Library",
      "/reminder": "Reminder",
      "/basicinfo": "Seminar Name",
      "/eventppt": "Seminar Name",
      "/classmaterial": "Seminar Name",
      "/accountmgt": "Seminar Name",
      "/notestaking": "Notes Taking",
      "/notes": "Notes Taking",
      "/carparkpass": "Car Park Pass",
      "/payment": "Payment Attachment",
      "/invoice": "Invoice Attachment",
      "/tenancy": "Tenancy Agreement"
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" className={ backButtonArray.includes(this.props.location.pathname) ? classes.headerLayoutNew : undefined }>
          <Toolbar className={classes.titleBar}>
            <div className={ classes.headerLayout }>
              {
                backButtonArray.includes(this.props.location.pathname) ?
                  ( 
                    <Button className={ classes.backButton } component={ Link } to={ this.props.location.pathname == "/notes" ? "/notestaking" :
                      (this.props.location.pathname == "/addseminar" ? "/dashboard" : 
                        (accountMGTArray.includes(this.props.location.pathname) ? "/accountmgt" : "/reminder")) }>
                      <ArrowBackIcon />
                    </Button>
                  )
                  : undefined
              }
              <Typography variant="title" color="inherit" align="center" className={ classes.flex }>
                { headerMapping[this.props.location.pathname] }
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
                  ) :
                  (editButtonArray.includes(this.props.location.pathname) ? <Button className={ classes.editButton }>Edit</Button> : undefined)
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
