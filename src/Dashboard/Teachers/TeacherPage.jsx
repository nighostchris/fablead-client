import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, Typography,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    height: 'inherit',
  },
  teacherWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    paddingTop: '0',
    paddingBottom: '0',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '700px',
    },
  },
  listText: {
    flex: '1',
    flexGrow: '3',
    '& > span': {
      fontSize: '18px',
    },
    '& > p': {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '30px',
    },
  },
  teacherCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '20px 0px',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  alphabet: {
    height: 'calc(100% - 120px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: '15px',
    zIndex: '1',
    justifyContent: 'center',
  },
  letter: {
    height: 'calc((100% - 40px) / 26)',
  },
});

class TeacherPage extends React.Component {
  render() {
    const { classes } = this.props;

    const data = [['Chan Li Li', 3, 5], ['Sze Lai Yu', 0, 0], ['Wong Man Man', 0, 12], ['Yuen Ka Yan', 8, 0],
      ['Chan Li Li', 3, 5], ['Sze Lai Yu', 0, 0], ['Wong Man Man', 0, 12], ['Yuen Ka Yan', 8, 0]];

    const alphabetList = [];
    for (let i = 'A'.charCodeAt(0), j = 'Z'.charCodeAt(0); i <= j; i += 1) {
      alphabetList.push(String.fromCharCode(i));
    }
    alphabetList.push('#');

    return (
      <div className={classes.root}>
        <div className={classes.alphabet}>
          {
            alphabetList.map((letter, i) => (
              <Typography key={i} variant="body1" className={classes.letter}>
                {letter}
              </Typography>
            ))
          }
        </div>
        <div className={classes.teacherWrapper}>
          <List className={classes.list}>
            {
              data.map((d, i) => (
                <ListItem key={i} button className={classes.teacherCard}>
                  <Typography style={{ width: '70%', marginBottom: '5px', fontSize: '18px' }}>
                    {d[0]}
                  </Typography>
                  <div
                    style={{
                      display: 'flex', flexDirection: 'row', width: '70%', marginTop: '5px',
                    }}
                  >
                    <Typography
                      style={{
                        flex: '1', flexGrow: '4', fontSize: '18px', color: 'rgba(0, 0, 0, 0.54)',
                      }}
                    >
                      {`${d[1]} Upcoming`}
                    </Typography>
                    <Typography style={{ flex: '1', flexGrow: '3', fontSize: '18px' }}>
                      {`${d[2]} Completed`}
                    </Typography>
                  </div>
                </ListItem>
              ))
            }
          </List>
        </div>
      </div>
    );
  }
}

TeacherPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherPage);
