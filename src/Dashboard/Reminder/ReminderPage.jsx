import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardContent, Typography,
} from '@material-ui/core';

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

function createData(type, eventName, Date, Countdown) {
  return {
    type, eventName, Date, Countdown,
  };
}

const data = [
  createData('Seminar A Name', '開課計劃及場地確定', '6月20日', '10 days remaining'),
  createData('Training B Name', '招生收費建群', '6月15日', '5 days remaining'),
  createData('Training B Name', '開課計劃及場地確定', '6月10日', '5 days remaining'),
];

class ReminderPage extends React.Component {
  constructor(props) {
    super(props);

    const array = [];
    let { size } = data;
    while (size > 0) {
      size -= 1;
      array.push(true);
    }

    this.state = {
      show: array,
    };
  }

  handleClick = (index) => {
    const array = this.state.show;
    array[index] = false;
    this.setState({
      show: array,
    });
  }

  render() {
    const { classes } = this.props;

    const { show } = this.state;

    return (
      <div className={classes.cardWrapper}>
        {data.map((n, i) => (
          <Card className={classes.card} key={n.seminarName} style={{ display: show[i] === false ? 'none' : undefined }}>
            <CardContent className={classes.cardContent}>
              <div className={classes.leftColumn}>
                <Typography variant="subheading">
                  {n.type}
                </Typography>
                <Typography variant="subheading" style={{ marginTop: '3px' }}>
                  {n.eventName}
                </Typography>
                <Typography variant="body1" style={{ color: 'red', marginTop: '3px' }}>
                  {n.Countdown}
                </Typography>
              </div>
              <div className={classes.rightColumn}>
                <Typography variant="headline" style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                  {n.Date}
                </Typography>
                <Button onClick={() => this.handleClick(i)} className={classes.dismissButton}>
                  Dismiss
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

ReminderPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReminderPage);
