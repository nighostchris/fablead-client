import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Typography,
} from '@material-ui/core';

import DroppableSeat from './DroppableSeat';

const styles = ({
  seatBoard: {
    flex: '1',
    flexGrow: '23',
    borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  seatingPlanHeading: {
    marginTop: '15px',
    marginBottom: '15px',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  pairs: {
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SeatBoard extends React.Component {
  render() {
    const {
      rowNumber, columnNumber, distribution, classes,
    } = this.props;

    let pairs = [];
    const row = [];
    const alphabetList = [];
    for (let i = 'A'.charCodeAt(0), j = 0; j <= columnNumber - 1; i += 1, j += 1) {
      alphabetList.push(String.fromCharCode(i));
    }

    let id = 0;
    for (let i = rowNumber; i > 0; i -= 1) {
      let counter = 0;
      for (let j = 0; j < distribution.length; j += 1) {
        const dummy = [];
        for (let k = 0; k < distribution[j]; k += 1) {
          dummy.push(
            <DroppableSeat
              isEnd={k === distribution[0] - 1}
              name={alphabetList[counter]}
              id={id}
            />,
          );
          counter += 1;
          id += 1;
        }
        pairs.push(
          <div className={classes.pairs}>
            {dummy}
          </div>,
        );
      }

      row.push(
        <div
          key={i}
          className={classes.rows}
        >
          <Typography
            variant="body1"
            style={{ marginRight: '30px', marginBottom: '5px' }}
          >
            {i}
          </Typography>
          {pairs}
          <Typography
            variant="body1"
            style={{ marginLeft: '20px', marginBottom: '5px' }}
          >
            {i}
          </Typography>
        </div>,
      );

      counter = 0;
      pairs = [];
    }

    return (
      <div className={classes.seatBoard}>
        <Typography
          variant="body1"
          className={classes.seatingPlanHeading}
        >
          1+2號廳 三投2人 座位圖 (143人)
        </Typography>
        {row}
      </div>
    );
  }
}

SeatBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  rowNumber: PropTypes.number.isRequired,
  columnNumber: PropTypes.number.isRequired,
  distribution: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default withStyles(styles)(SeatBoard);
