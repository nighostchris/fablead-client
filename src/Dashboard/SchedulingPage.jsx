import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Calendar from '../Calendar/Calendar';

const styles = theme => ({
  root: {
    flexShrink: '1',
  },
  content: {
    flexShrink: '1',
    marginBottom: '48px',
  },
  middleContent: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '50px',
      paddingRight: '50px',
    },
  },
  seminarTag: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    height: '30px',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '17px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  wrapper: {
    lineHeight: '1px',
    [theme.breakpoints.up('md')]: {
      flex: '1',
      flexGrow: '1',
      lineHeight: '30px',
      marginLeft: '30px'
    },
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5px',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
  },
  dateDetails: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    flexGrow: '8'
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
  },
  type: {
    display: 'flex',
    flexDirection: 'row',
  },
  teacher: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftColumn: {
    marginLeft: '30px',
    flex: '1',
    flexGrow: '1'
  },
  rightColumn: {
    flex: '1', 
    flexGrow: '4',
    textAlign: 'center'
  },
  thirdColumn: {
    position: 'absolute', 
    right: '50px',
    [theme.breakpoints.down('sm')]: {
      right: '30px'
    }
  },
  calendarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    flexGrow: '1'
  },
  calendarTabSelector: {
    marginTop: '20px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      marginBottom: '0px',
      backgroundColor: 'lightgrey'
    }
  },
  calendarTabs: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '0px',
      float: 'right',
    }
  },
  calendarTab: {
    textTransform: 'none',
    minHeight: '12px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: 'dimgrey'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'grey',
      color: 'white'
    }
  },
  calendarTabActive: {
    textTransform: 'none',
    minHeight: '12px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: 'white'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'lightgrey',
      color: 'grey'
    }
  }
});

class SchedulingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      value: 1
    };
  }

  handleChange = (event, value) => {
    this.setState({
      value: value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <div className={classes.calendarWrapper}>
              <div className={classes.calendarTabSelector}>
                <Tabs
                  className={classes.calendarTabs}
                  indicatorColor=""
                  value={this.state.value}
                  onChange={this.handleChange}
                  scrollButtons="auto"
                  fullWidth
                  centered
                >
                  <Tab label="Year" className={this.state.value == 0 ? classes.calendarTabActive : classes.calendarTab} />
                  <Tab label="Month" className={this.state.value == 1 ? classes.calendarTabActive : classes.calendarTab} />
                  <Tab label="Week" className={this.state.value == 2 ? classes.calendarTabActive : classes.calendarTab} />
                </Tabs>
              </div>
              {
                this.state.value == 0 ? (<Calendar view={0} />)
                  : (this.state.value == 1 ? (<Calendar view={1} />) : (<Calendar view={2} />))
              }
            </div>
            <div className={classes.wrapper}>
              <div className={classes.seminarTag}>
                <p style={{ marginLeft: '30px' }}>
                  Seminar
                </p>
              </div>
              <div className={classes.name}>
                <p className={classes.leftColumn}>
                  Name
                </p>
                <p className={classes.rightColumn}>
                  Seminar Name
                </p>
              </div>
              <div className={classes.date}>
                <p className={classes.leftColumn}>
                  Date
                </p>
                <p className={classes.rightColumn}>
                  2018-6-20
                </p>
                <p className={classes.thirdColumn}>
                  10 days
                </p>
              </div>
              <div className={classes.location}>
                <p className={classes.leftColumn}>
                  Location
                </p>
                <p className={classes.rightColumn}>
                  Beijing
                </p>
              </div>
              <div className={classes.type}>
                <p className={classes.leftColumn}>
                  Type
                </p>
                <p className={classes.rightColumn}>
                  Seminar
                </p>
              </div>
              <div className={classes.teacher}>
                <p className={classes.leftColumn}>
                  Teacher
                </p>
                <div className={classes.rightColumn}>
                  <p>
                    Peter Man
                  </p>
                  <p>
                    Mary Lee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SchedulingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchedulingPage);
