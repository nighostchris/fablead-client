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
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingIcon from '@material-ui/icons/Settings';

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
  searchButton: {
    position: 'absolute',
    right: '20px',
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
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLayoutNew: {
    boxShadow: '0px 0px 0px',
  },
  backButton: {
    position: 'absolute',
    left: '20px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      left: '0px',
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

    const { value } = this.state;

    const backButtonArray = ['/addseminar', '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt',
      '/notestaking', '/notes', '/carparkpass', '/payment', '/invoice', '/tenancy', '/addseatingplan', '/seatmap',
      '/addteacher'];

    const editButtonArray = ['/teacher', '/reminder', '/basicinfo', '/eventppt', '/classmaterial', '/accountmgt', '/notestaking', '/notes'];

    const seminarArray = ['/basicinfo', '/eventppt', '/classmaterial', '/accountmgt'];

    const settingButtonArray = ['/dashboard', '/scheduling', '/teacher', '/library', '/reminder'];

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
          className={backButtonArray.includes(this.props.location.pathname) ? classes.headerLayoutNew : undefined}
          style={{ boxShadow: this.props.location.pathname === '/dashboard' ? '0 0 0' : undefined }}
        >
          <Toolbar className={classes.titleBar}>
            <div className={classes.headerLayout}>
              {
                backButtonArray.includes(this.props.location.pathname)
                  ? (
                    <Button
                      className={classes.backButton}
                      component={Link}
                      onClick={this.handleClick}
                      to={this.props.location.pathname == '/notes' ? '/notestaking'
                        : (this.props.location.pathname == '/addseminar' ? '/dashboard'
                          : (this.props.location.pathname == '/addteacher' ? '/teacher'
                            : (accountMGTArray.includes(this.props.location.pathname) ? '/accountmgt' : '/reminder')))}
                    >
                      <ArrowBackIcon />
                    </Button>
                  )
                  : (
                    settingButtonArray.includes(this.props.location.pathname)
                      ? (
                        <Button
                          className={classes.backButton}
                          component={Link}
                          onClick={this.handleClick}
                          to="/setting"
                        >
                          <SettingIcon />
                        </Button>
                      )
                      : undefined
                  )
              }
              <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                { headerMapping[this.props.location.pathname] }
              </Typography>
              {
                this.props.location.pathname == '/dashboard' || this.props.location.pathname == '/library'
                  ? (
                    <IconButton
                      aria-owns="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      className={classes.searchButton}
                    >
                      <SearchIcon />
                    </IconButton>
                  )
                  : (editButtonArray.includes(this.props.location.pathname) ? (
                    <Button className={classes.editButton}>
                      Edit
                    </Button>
                  ) : undefined)
              }
            </div>
          </Toolbar>
          {
            seminarArray.includes(this.props.location.pathname)
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
