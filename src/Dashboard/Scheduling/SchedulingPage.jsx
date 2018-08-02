import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';
import Calendar from './Calendar/Calendar';

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
    backgroundColor: '#E6E6FA',
    height: '40px',
    alignItems: 'center',
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
    height: '80px',
    width: '100px',
    borderRadius: '0px',
    textAlign: 'center',
    '& > h3': {
      color: 'white',
      fontWeight: '300',
      '&:first-child': {
        marginBottom: '5px',
        fontSize: '18px',
      },
      '&:last-child': {
        marginTop: '5px',
        fontSize: '14px',
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
    height: '80px',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightColumnTypography: {
    marginRight: '30px',
    color: 'darkgrey',
    fontSize: '18px',
    fontWeight: '100',
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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <Calendar view={1} />
            <div className={classes.wrapper}>
              <div className={classes.seminarTag}>
                <Typography style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>
                  Seminar
                </Typography>
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
                      <CardContent style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                        <div className={classes.rowWrapper}>
                          <div className={classes.row} style={{ marginBottom: '2px' }}>
                            <Typography
                              variant="subheading"
                              style={{ marginLeft: '30px' }}
                            >
                              {n.seminarName}
                            </Typography>
                            <Typography
                              variant="subheading"
                              className={classes.rightColumnTypography}
                            >
                              {n.Date}
                            </Typography>
                          </div>
                          <div className={classes.row} style={{ marginTop: '2px' }}>
                            <Typography
                              variant="subheading"
                              style={{ marginLeft: '30px' }}
                            >
                              {n.teacherName}
                            </Typography>
                            <Typography
                              variant="subheading"
                              className={classes.rightColumnTypography}
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
