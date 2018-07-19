import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  seatCombine: {
    display: 'flex',
    flexDirection: 'row',
  },
  seat: {
    padding: '5px 10px',
    border: '1px solid black',
  },
});

class SeatMap extends React.Component {
  render() {
    const { classes } = this.props;

    const rowNumber = 9;
    const row = [];

    for (let i = 9; i > 0; i -= 1) {
      row.push(
        <div className={classes.row}>
          <div className={classes.seatCombine} style={{ marginRight: '5px' }}>
            <p className={classes.seat}>
              A
            </p>
            <p className={classes.seat}>
              B
            </p>
          </div>
          <div className={classes.seatCombine} style={{ marginRight: '5px' }}>
            <p className={classes.seat}>
              C
            </p>
            <p className={classes.seat}>
              D
            </p>
          </div>
          <div className={classes.seatCombine} style={{ marginRight: '5px' }}>
            <p className={classes.seat}>
              E
            </p>
            <p className={classes.seat}>
              F
            </p>
          </div>
          <div className={classes.seatCombine} style={{ marginRight: '5px' }}>
            <p className={classes.seat}>
              G
            </p>
            <p className={classes.seat}>
              H
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {row}
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeatMap);
