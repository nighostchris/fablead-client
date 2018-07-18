import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';

import HeaderBar from '../HeaderBar';

const styles = theme => ({
  body: {
    marginTop: '10px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '700px',
    },
  },
  flex: {
    flex: 1,
  },
  root: {
    flexGrow: 1,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  infoLeftText: {
    flex: '1',
    flexGrow: '1',
    textAlign: 'left',
    marginLeft: '30px',
  },
  infoRightText: {
    flex: '1',
    flexGrow: '4',
    textAlign: 'center'
  }
});

class BasicInfoPage extends React.Component {
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

    render() {
      const { classes } = this.props;

      const { value } = this.state;

      return (
        <div className={classes.root}>
          <div className={classes.headerLayout}>
            <AppBar position="static">
              <HeaderBar />
              <Tabs value={value} scrollButtons="auto" fullWidth onChange={this.handleChange} centered>
                <Tab label="Basic Info" component={Link} to="/basicinfo" />
                <Tab label="Event Ppt" component={Link} to="/eventppt" />
                <Tab label="Class Materials" component={Link} to="/classmaterial" />
                <Tab label="Account Mgt" component={Link} to="/accountmgt" />
              </Tabs>
            </AppBar>
          </div>
          <div className={classes.body}>
            <div className={classes.infoWrapper}>
              <p className={classes.infoLeftText}>
                Name
              </p>
              <p className={classes.infoRightText}>
                Seminar Name
              </p>
            </div>
            <div className={classes.infoWrapper}>
              <p className={classes.infoLeftText}>
                Date
              </p>
              <p className={classes.infoRightText}>
                2018-6-01
              </p>
            </div>
            <div className={classes.infoWrapper}>
              <p className={classes.infoLeftText}>
                Location
              </p>
              <p className={classes.infoRightText}>
                北京
              </p>
            </div>
            <div className={classes.infoWrapper}>
              <p className={classes.infoLeftText}>
                Type
              </p>
              <p className={classes.infoRightText}>
                Seminar
              </p>
            </div>
            <div className={classes.infoWrapper}>
              <p className={classes.infoLeftText}>
                Teacher
              </p>
              <div className={classes.infoRightText}>
                <p>
                  Peter Man
                </p>
                <p>
                  Mary Lee
                </p>
                <p>
                  John Wong
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

BasicInfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicInfoPage);
