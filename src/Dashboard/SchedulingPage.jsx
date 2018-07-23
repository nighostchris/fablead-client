import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Calendar from '../Calendar/Calendar';

const styles = theme => ({
  root: {
    flexShrink: '1',
  },
  content: {
    flexShrink: '1',
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
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginTop: '10px',
      alignItems: 'center',
    },
  },
  frontCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'darkgrey',
    width: '80px',
    borderRadius: '0px',
    textAlign: 'center',
    '& > h3': {
      color: 'white',
      fontWeight: 'unset',
      '&:first-child': {
        marginBottom: '5px',
      },
      '&:last-child': {
        marginTop: '5px',
      },
    },
  },
  card: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default,
    },
    flex: '1',
    flexGrow: '1',
    borderRadius: '0px',
    textDecoration: 'none',
    boxShadow: '0px 0px 0px',
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    flexGrow: '1',
  },
  calendarTabSelector: {
    marginTop: '20px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      marginBottom: '0px',
      backgroundColor: 'lightgrey',
    },
  },
  calendarTabs: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '0px',
      float: 'right',
    },
  },
  calendarTab: {
    textTransform: 'none',
    minHeight: '12px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: 'dimgrey',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
  calendarTabActive: {
    textTransform: 'none',
    minHeight: '12px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: 'white',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'lightgrey',
      color: 'grey',
    },
  },
});

function createData(type, seminarName, teacherName, Location, Date, Countdown) {
  return {
    type, seminarName, teacherName, Location, Date, Countdown,
  };
}

const data = [
  createData('Seminar', 'Semiar Name', 'Chan Li Li', '北京', '6月20日', '10 days'),
  createData('Training', 'Semiar Name', 'Yuen Ka Yan', '香港', '6月15日', '5 days'),
  createData('Consulting', 'Semiar Name', 'Wong Man Man', '上海', '6月10日', '0 days'),
  createData('Fablead', 'Semiar Name', 'Sze Lai Yu', '香港', '6月1日', 'Expired'),
];

class SchedulingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, value) => {
    this.setState({
      value,
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
                  <Tab label="Year" className={this.state.value === 0 ? classes.calendarTabActive : classes.calendarTab} />
                  <Tab label="Month" className={this.state.value === 1 ? classes.calendarTabActive : classes.calendarTab} />
                  <Tab label="Week" className={this.state.value === 2 ? classes.calendarTabActive : classes.calendarTab} />
                </Tabs>
              </div>
              {
                this.state.value === 0 ? (<Calendar view={0} />)
                  : (this.state.value === 1 ? (<Calendar view={1} />) : (<Calendar view={2} />))
              }
            </div>
            <div className={classes.wrapper}>
              <div className={classes.seminarTag}>
                <p style={{ marginLeft: '30px' }}>
                  Seminar
                </p>
              </div>
              <div className={classes.cardWrapper}>
                {data.map((n, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card className={classes.frontCard} key={i * 80}>
                      <Typography variant="subheading">
                        Seminar
                      </Typography>
                      <Typography variant="subheading">
                        {n.Countdown}
                      </Typography>
                    </Card>
                    <Card className={classes.card} key={n.seminarName}>
                      <CardContent style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                        <div className={classes.rowWrapper}>
                          <div className={classes.row} style={{ marginBottom: '2px', alignItems: 'center' }}>
                            <Typography
                              variant="subheading"
                              style={{ marginLeft: '30px' }}
                            >
                              {n.seminarName}
                            </Typography>
                            <Typography
                              variant="subheading"
                              style={{ marginRight: '30px', color: 'darkgrey', fontSize: '20px' }}
                            >
                              {n.Date}
                            </Typography>
                          </div>
                          <div className={classes.row} style={{ marginTop: '2px', alignItems: 'center' }}>
                            <Typography
                              variant="subheading"
                              style={{ marginLeft: '30px' }}
                            >
                              {n.teacherName}
                            </Typography>
                            <Typography
                              variant="subheading"
                              style={{ marginRight: '30px', color: 'darkgrey', fontSize: '20px' }}
                            >
                              {n.Location}
                            </Typography>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
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
