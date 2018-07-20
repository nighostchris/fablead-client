import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HeaderBar from '../HeaderBar';

const styles = theme => ({
  seatmapWrapper: {
    textAlign: 'center',
  },
  seatmap: {
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatCombine: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
  },
  seat: {
    border: '1px solid black',
    borderRight: '0px',
    padding: '5px 20px',
  },
  seatEnd: {
    border: '1px solid black',
    padding: '5px 20px',
  },
});

class SeatMap extends React.Component {
  render() {
    const { classes } = this.props;

    const rowNumber = 9;
    const distribution = [2, 2, 2, 2];
    const row = [];
    const pairs = [];
    const alphabetList = [];
    for (let i = 'A'.charCodeAt(0), j = 'Z'.charCodeAt(0); i <= j; i += 1) {
      alphabetList.push(String.fromCharCode(i));
    }

    let counter = 0;
    for (let i = 0; i < distribution.length; i += 1) {
      const dummy = [];
      for (let j = 0; j < distribution[i]; j += 1) {
        dummy.push(
          <Typography variant="body1" className={j === distribution[0] - 1 ? classes.seatEnd : classes.seat}>
            {alphabetList[counter]}
          </Typography>
        );
        counter += 1;
      }
      pairs.push(
        <div className={classes.seatCombine} style={{ marginRight: '10px' }}>
          {dummy}
        </div>
      );
    }

    for (let i = rowNumber; i > 0; i -= 1) {
      row.push(
        <div key={i} className={classes.row}>
          <Typography variant="body1" style={{ marginRight: '10px', marginBottom: '5px' }}>
            {i}
          </Typography>
          {pairs}
          <Typography variant="body1" style={{ marginLeft: '10px', marginBottom: '5px' }}>
            {i}
          </Typography>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <HeaderBar />
        <div className={classes.seatmapWrapper}>
          <p>1+2號廳 三投2人 座位圖 (143人)</p>
          <div className={classes.seatmap}>
            {row}
          </div>
        </div>
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeatMap);
