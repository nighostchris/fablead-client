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
import {
  KeyboardArrowRight, Sort as SortIcon,
} from '@material-ui/icons';

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
    minWidth: 'calc(100% / 4)',
  },
});

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      dashboardValue: 0,
    };
  }

  handleChangeDashboard = (event, value) => {
    this.setState({
      dashboardValue: value,
    });
  }

  reset = () => {
    this.setState({
      value: 0,
      dashboardValue: 0,
    });
  }

  render() {
    const { classes, location } = this.props;

    const { pathname } = location;

    const { value, dashboardValue } = this.state;

    const settingButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

    const searchButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library'];

    const addButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/eventppt', '/classmaterial',
      '/accountmgt', '/librarydetails'];

    const backButtonArray = ['/addseminar', '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt',
      '/notestaking', '/notes', '/carparkpass', '/payment', '/invoice', '/tenancy', '/addseatingplan', '/seatmap',
      '/addteacher', '/setting', '/addlibrary', '/librarydetails', '/itinerarymgt'];

    const editButtonArray = ['/teacher', '/reminder', '/accountmgt', '/notestaking', '/notes'];

    const seminarArray = ['/basicinfo', '/eventppt', '/classmaterial', '/accountmgt', '/itinerarymgt'];

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
      '/notestaking': 'Notes Taking',
      '/notes': 'Notes Taking',
      '/carparkpass': 'Car Park Pass',
      '/payment': 'Payment Attachment',
      '/invoice': 'Invoice Attachment',
      '/tenancy': 'Tenancy Agreement',
      '/addseatingplan': '學員座位表生成',
      '/seatmap': '學員座位表生成 #1',
      '/addteacher': 'New Teacher',
      '/setting': 'Setting',
      '/addlibrary': 'New Library',
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
    };

    const addButtonMapping = {
      '/dashboard': '/addseminar',
      '/scheduling': '/addseminar',
      '/teacher': '/addteacher',
      '/library': '/addlibrary',
      '/eventppt': '/addseminar',
      '/classmaterial': '/addseminar',
      '/librarydetails': '/library',
    };

    const seminarMapping = {
      '/basicinfo': 0,
      '/eventppt': 1,
      '/classmaterial': 2,
      '/accountmgt': 3,
      '/itinerarymgt': 4,
      '/notetaking': 5,
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
                      onClick={() => this.reset()}
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
                {
                  pathname === ('/librarydetails')
                    ? (
                      localStorage.getItem('libraryName')
                    ) : undefined
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
                    <Button className={classes.rightTopButton} style={{ fontSize: '12px' }}>
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
                  <Tab label="Note Taking" component={Link} to="/notetaking" className={classes.tabFormat} />
                  <Tab label="Time Mgt" component={Link} to="/onsitetimemgt" className={classes.tabFormat} />
                </Tabs>
              )
              : undefined
          }
          {
            pathname === '/dashboard'
              ? (
                <div>
                  <Tabs value={dashboardValue} scrollButtons="auto" fullWidth onChange={this.handleChangeDashboard} centered>
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
};

export default withStyles(styles)(withRouter(HeaderBar));
