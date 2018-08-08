import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

const seatTarget = {
  drop(props) {
    console.log('dropped');
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class DroppableSeat extends React.Component {
  componentWillMount() {
    console.log("Seat mounting");
  }

  render() {
    const {
      connectDropTarget, isOver, isEnd, name,
    } = this.props;

    return (
      <Typography
        variant="body1"
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          border: '1px solid black',
          padding: '10px 35px',
          borderRight: isEnd ? '1px solid black' : '0px',
        }}
        ref={instance => connectDropTarget(findDOMNode(instance))}
      >
        {name}
      </Typography>
    );
  }
}

DroppableSeat.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DropTarget('student', seatTarget, collect)(DroppableSeat);
