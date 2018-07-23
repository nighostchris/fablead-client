import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

    const data = [['Chan Li Li', 3], ['Chan Li Li', 3], ['Chan Li Li', 3], ['Chan Li Li', 3],
      ['Chan Li Li', 3], ['Yuen Ka Yan', 0], ['Wong Man Man', 12], ['Sze Lai Yu', 8]];

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
                  <ListItemText primary={d[0]} secondary={`${d[1]} Seminars`} className={classes.listText} />
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
