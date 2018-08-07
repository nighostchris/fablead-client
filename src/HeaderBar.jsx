import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Button, Tabs, Tab, Toolbar, Typography,
} from '@material-ui/core';
import {
  Add as AddIcon, ArrowBack as ArrowBackIcon, Search as SearchIcon, Settings as SettingIcon,
  KeyboardArrowRight, Sort as SortIcon,
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

import { dismissAllReminder } from './Redux/Action/reminderAction';
import { changeTab } from './Redux/Action/seminarAction';

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
  rightTopButton: {
    fontSize: '14px',
    color: 'white',
    position: 'absolute',
    right: '0px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  filterBar: {
    height: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'gainsboro',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-end',
    },
  },
  tabFormat: {
    [theme.breakpoints.down('md')]: {
      minWidth: 'calc(100% / 4)',
    },
  },
});

const mapStateToProps = state => ({
  library: state.libraryReducer.library,
  reminders: state.reminderReducer.reminders,
  currentTab: state.seminarReducer.currentTab,
});

const mapDispatchToProps = dispatch => ({
  dismissAR: () => dispatch(dismissAllReminder),
  changeT: tabValue => dispatch(changeTab(tabValue)),
});

class HeaderBar extends React.Component {
  handleChangeDashboard = (event, value) => {
    const { changeT } = this.props;
    changeT(value);
  }

  handleDismissAll() {
    const { dismissAR } = this.props;
    dismissAR();
  }

  render() {
    const {
      classes, location, library, currentTab,
    } = this.props;

    const { pathname } = location;

    const settingButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    const searchButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library'];

    const addButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/eventppt', '/classmaterial',
      '/accountmgt', '/librarydetails', '/notestaking'];

    const backButtonArray = ['/setting', '/addseminar', '/addteacher', '/addlibrary', '/librarydetails',
      '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt', '/itinerarymgt', '/notestaking',
      '/addseatingplan', '/seatmap', '/onsitetimemgt', '/scanqrcode', '/seatingplan'];

    const editButtonArray = ['/teacher', '/reminder', '/accountmgt', '/notestaking', '/notes'];

    const seminarArray = ['/basicinfo', '/eventppt', '/classmaterial',
      '/accountmgt', '/itinerarymgt', '/notestaking', '/onsitetimemgt'];

    const headerMapping = {
      '/dashboard': 'Seminar',
      '/addseminar': 'New Seminar',
      '/scheduling': 'Scheduling',
      '/teacher': 'Teacher',
      '/library': 'Library',
      '/reminder': 'Reminders',
      '/basicinfo': 'Seminar Name',
      '/eventppt': 'Seminar Name',
      '/classmaterial': 'Seminar Name',
      '/accountmgt': 'Seminar Name',
      '/itinerarymgt': 'Seminar Name',
      '/notestaking': 'Seminar Name',
      '/onsitetimemgt': 'Seminar Name',
      '/notes': 'Notes Taking',
      '/addseatingplan': '學員座位表生成',
      '/seatmap': '學員座位表生成 #1',
      '/addteacher': 'New Teacher',
      '/setting': 'Setting',
      '/addlibrary': 'New Library',
      '/librarydetails': library.opened,
      '/scanqrcode': 'Scan Account QR Code',
      '/seatingplan': '學員座位表',
    };

    const backButtonMapping = {
      '/notes': '/notestaking',
      '/addseminar': '/dashboard',
      '/setting': '/dashboard',
      '/addteacher': '/teacher',
      '/addlibrary': '/library',
      '/librarydetails': '/library',
      '/basicinfo': '/dashboard',
      '/eventppt': '/dashboard',
      '/classmaterial': '/dashboard',
      '/accountmgt': '/dashboard',
      '/itinerarymgt': '/dashboard',
      '/notestaking': '/dashboard',
      '/onsitetimemgt': '/dashboard',
      '/scanqrcode': '/accountmgt',
      '/seatingplan': '/eventppt',
    };

    const addButtonMapping = {
      '/dashboard': '/addseminar',
      '/scheduling': '/addseminar',
      '/teacher': '/addteacher',
      '/library': '/addlibrary',
      '/eventppt': '/addseminar',
      '/classmaterial': '/addseminar',
      '/librarydetails': '/library',
      '/accountmgt': '/dashboard',
      '/notestaking': '/dashboard',
    };

    const seminarMapping = {
      '/basicinfo': 0,
      '/eventppt': 1,
      '/classmaterial': 2,
      '/accountmgt': 3,
      '/itinerarymgt': 4,
      '/notestaking': 5,
      '/onsitetimemgt': 6,
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
                      to={backButtonMapping[pathname]}
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
                {
                  headerMapping[pathname]
                }
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
                      to={addButtonMapping[pathname]}
                    >
                      <AddIcon />
                    </Button>
                  ) : undefined
              }
              {
                pathname === '/reminder'
                  ? (
                    <Button
                      className={classes.rightTopButton}
                      style={{ fontSize: '12px' }}
                      onClick={() => this.handleDismissAll()}
                    >
                      Dismiss All
                    </Button>
                  ) : undefined
              }
            </div>
          </Toolbar>
          {
            seminarArray.includes(pathname)
              ? (
                <Tabs
                  value={seminarMapping[pathname]}
                  scrollable
                  scrollButtons="off"
                  fullWidth
                  style={{ textAlign: 'center' }}
                >
                  <Tab label="Basic Info" component={Link} to="/basicinfo" className={classes.tabFormat} />
                  <Tab label="Event Ppt" component={Link} to="/eventppt" className={classes.tabFormat} />
                  <Tab label="Class Materials" component={Link} to="/classmaterial" className={classes.tabFormat} />
                  <Tab label="Account Mgt" component={Link} to="/accountmgt" className={classes.tabFormat} />
                  <Tab label="Itinerary Mgt" component={Link} to="/itinerarymgt" className={classes.tabFormat} />
                  <Tab label="Note Taking" component={Link} to="/notestaking" className={classes.tabFormat} />
                  <Tab label="Time Mgt" component={Link} to="/onsitetimemgt" className={classes.tabFormat} />
                </Tabs>
              )
              : undefined
          }
          {
            pathname === '/dashboard'
              ? (
                <div>
                  <Tabs value={currentTab} scrollButtons="auto" fullWidth onChange={this.handleChangeDashboard} centered>
                    <Tab label="ALL" />
                    <Tab label="Seminar" />
                    <Tab label="Training" />
                    <Tab label="Consulting" />
                    <Tab label="Fablead" />
                  </Tabs>
                  <div className={classes.filterBar}>
                    <Button style={{
                      fontSize: '12px', minHeight: '0px', minWidth: '0px', paddingTop: '4px', paddingBottom: '4px',
                    }}
                    >
                      <SortIcon style={{ fontSize: '12px', marginRight: '5px', color: 'green' }} />
                        Latest
                      <KeyboardArrowRight style={{ fontSize: '12px', marginLeft: '5px', color: 'green' }} />
                    </Button>
                  </div>
                </div>
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
  library: PropTypes.object.isRequired,
  currentTab: PropTypes.number.isRequired,
  changeT: PropTypes.func.isRequired,
  dismissAR: PropTypes.func.isRequired,
};

export default withStyles(styles)(withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBar)));
