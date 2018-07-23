import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '0px',
    zIndex: '2',
    width: '100%',
  },
  flex: {
    flex: 1,
    fontWeight: 'unset',
  },
  titleBar: {
    height: '64px',
    justifyContent: 'center',
  },
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftButton: {
    position: 'absolute',
    left: '20px',
    padding: '0px',
    minWidth: '0px',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  searchButton: {
    position: 'absolute',
    right: '64px',
    padding: '0px',
    minWidth: '0px',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  addButton: {
    position: 'absolute',
    right: '20px',
    padding: '0px',
    minWidth: '0px',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  editButton: {
    fontSize: '14px',
    color: 'white',
    position: 'absolute',
    right: '0px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
});

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({
      value,
    });
  }

  handleClick = (event) => {
    this.setState({
      value: 0,
    });
  }

  render() {
    const { classes } = this.props;

    const { location } = this.props;
    const { pathname } = location;

    const { value } = this.state;

    const settingButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    const searchButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library'];

    const addButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/eventppt', '/classmaterial',
      '/accountmgt'];

    const backButtonArray = ['/addseminar', '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt',
      '/notestaking', '/notes', '/carparkpass', '/payment', '/invoice', '/tenancy', '/addseatingplan', '/seatmap',
      '/addteacher'];

    const editButtonArray = ['/teacher', '/reminder', '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt', '/notestaking', '/notes'];

    const seminarArray = ['/basicinfo', '/eventppt', '/classmaterial', '/accountmgt'];

    const accountMGTArray = ['/carparkpass', '/payment', '/invoice', '/tenancy'];

    const headerMapping = {
      '/dashboard': 'Seminar',
      '/addseminar': 'New Seminar',
      '/scheduling': 'Scheduling',
      '/teacher': 'Teacher',
      '/library': 'Library',
      '/reminder': 'Reminder',
      '/basicinfo': 'Seminar Name',
      '/eventppt': 'Seminar Name',
      '/classmaterial': 'Seminar Name',
      '/accountmgt': 'Seminar Name',
      '/notestaking': 'Notes Taking',
      '/notes': 'Notes Taking',
      '/carparkpass': 'Car Park Pass',
      '/payment': 'Payment Attachment',
      '/invoice': 'Invoice Attachment',
      '/tenancy': 'Tenancy Agreement',
      '/addseatingplan': '學員座位表生成',
      '/seatmap': '學員座位表生成 #1',
      '/addteacher': 'New Teacher',
    };

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ boxShadow: '0px 0px 0px' }}
        >
          <Toolbar className={classes.titleBar}>
            <div className={classes.headerLayout}>
              {
                backButtonArray.includes(pathname)
                  ? (
                    <Button
                      className={classes.topLeftButton}
                      component={Link}
                      onClick={this.handleClick}
                      to={pathname === '/notes' ? '/notestaking'
                        : (pathname === '/addseminar' ? '/dashboard'
                          : (pathname === '/addteacher' ? '/teacher'
                            : (accountMGTArray.includes(pathname) ? '/accountmgt' : '/reminder')))}
                    >
                      <ArrowBackIcon />
                    </Button>
                  )
                  : (
                    settingButtonArray.includes(pathname)
                      ? (
                        <Button
                          className={classes.topLeftButton}
                          component={Link}
                          to="/setting"
                        >
                          <SettingIcon />
                        </Button>
                      )
                      : undefined
                  )
              }
              <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                { headerMapping[pathname] }
              </Typography>
              {
                searchButtonArray.includes(pathname)
                  ? (
                    <Button className={classes.searchButton}>
                      <SearchIcon />
                    </Button>
                  ) : undefined
              }
              {
                addButtonArray.includes(pathname)
                  ? (
                    <Button
                      className={classes.addButton}
                      component={Link}
                      to={pathname === '/dashboard' ? '/addseminar'
                        : (pathname === '/scheduling' ? '/addseminar'
                          : (pathname === '/teacher' ? '/addteacher'
                            : (pathname === '/library' ? '/addlibrary' : undefined)))}
                    >
                      <AddIcon />
                    </Button>
                  ) : undefined
              }
            </div>
          </Toolbar>
          {
            seminarArray.includes(pathname)
              ? (
                <Tabs value={value} scrollButtons="auto" fullWidth onChange={this.handleChange} centered style={{ textAlign: 'center' }}>
                  <Tab label="Basic Info" component={Link} to="/basicinfo" />
                  <Tab label="Event Ppt" component={Link} to="/eventppt" />
                  <Tab label="Class Materials" component={Link} to="/classmaterial" />
                  <Tab label="Account Mgt" component={Link} to="/accountmgt" />
                </Tabs>
              )
              : undefined
          }
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(HeaderBar));
