import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardContent, Typography,
} from '@material-ui/core';

import { dismissReminder } from '../../Redux/Action/reminderAction';

const styles = theme => ({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
  },
  card: {
    textDecoration: 'none',
    boxShadow: '0px 0px 0px',
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default,
    },
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  leftColumn: {
    marginLeft: '20px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '20px',
  },
  cardContent: {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: '10px',
    },
  },
  dismissButton: {
    fontSize: '12px',
    minHeight: '0px',
    padding: '0px',
    marginTop: '3px',
  },
});

const mapStateToProps = state => ({
  reminders: state.reminderReducer.reminders,
});

const mapDispatchToProps = dispatch => ({
  dismissR: index => dispatch(dismissReminder(index)),
});

class ReminderPage extends React.Component {
  handleClick = (index) => {
    const { dismissR } = this.props;
    dismissR(index);
  }

  render() {
    const { classes, reminders } = this.props;

    return (
      <div className={classes.cardWrapper}>
        {
          reminders.map((n, i) => (
            <Card className={classes.card} key={i}>
              <CardContent key={i} className={classes.cardContent}>
                <div className={classes.leftColumn}>
                  <Typography variant="subheading">
                    {n.name}
                  </Typography>
                  <Typography variant="subheading" style={{ marginTop: '3px' }}>
                    {n.event}
                  </Typography>
                  <Typography variant="body1" style={{ color: 'red', marginTop: '3px' }}>
                    {n.countdown}
                  </Typography>
                </div>
                <div className={classes.rightColumn}>
                  <Typography variant="headline" style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                    {n.date}
                  </Typography>
                  <Button onClick={() => this.handleClick(i)} className={classes.dismissButton}>
                    Dismiss
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>
    );
  }
}

ReminderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
  dismissR: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ReminderPage));
