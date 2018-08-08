import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  Typography,
} from '@material-ui/core';

import DroppableSeat from './DroppableSeat';

class SeatBoard extends React.Component {
  render() {
    const {
      rowNumber, distribution,
    } = this.props;

    const row = [];
    const pairs = [];
    const alphabetList = [];
    for (let i = 'A'.charCodeAt(0), j = 'Z'.charCodeAt(0); i <= j; i += 1) {
      alphabetList.push(String.fromCharCode(i));
    }

    let counter = 0;
    for (let j = 0; j < distribution.length; j += 1) {
      const dummy = [];
      for (let k = 0; k < distribution[j]; k += 1) {
        dummy.push(
          <DroppableSeat
            isEnd={k === distribution[0] - 1}
            name={alphabetList[counter]}
          />,
        );
        counter += 1;
      }
      pairs.push(
        <div
          style={{
            marginRight: '10px',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '5px',
          }}
        >
          {dummy}
        </div>,
      );
    }

    for (let i = rowNumber; i > 0; i -= 1) {
      row.push(
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" style={{ marginRight: '30px', marginBottom: '5px' }}>
            {i}
          </Typography>
          {pairs}
          <Typography variant="body1" style={{ marginLeft: '20px', marginBottom: '5px' }}>
            {i}
          </Typography>
        </div>,
      );
    }

    return (
      <div
        style={{
          flex: '1',
          flexGrow: '23',
          borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
          height: '100%',
          textAlign: 'center',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          style={{
            marginTop: '15px',
            marginBottom: '15px',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          1+2號廳 三投2人 座位圖 (143人)
        </Typography>
        {row}
      </div>
    );
  }
}

SeatBoard.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  distribution: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default DragDropContext(HTML5Backend)(SeatBoard);
