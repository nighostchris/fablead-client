import React from 'react';
import PropTypes from 'prop-types';
import { connect as conn } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

import { updateName, updateColor } from '../../../../Redux/Action/seatMapAction';

const seatTarget = {
  drop(props, monitor, component) {
    const { color, studentName } = monitor.getItem();
    console.log(props);
    const { updateN, updateC, id } = component.props;
    console.log(component);
    updateN(id, studentName);
    updateC(id, color);
    component.setState({
      size: '14px',
      weight: 'unset',
      pad: '13px 16.875px',
    });
  },
};

const mapStateToProps = state => ({
  seats: state.seatMapReducer.seats,
});

const mapDispatchToProps = dispatch => ({
  updateN: (id, name) => dispatch(updateName(id, name)),
  updateC: (id, color) => dispatch(updateColor(id, color)),
});

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class DroppableSeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '18px',
      weight: 'bold',
      pad: '10px 35px',
    };
  }

  render() {
    const {
      connectDropTarget, isOver, isEnd, seats, id,
    } = this.props;

    console.log(this.props);

    const {
      size, weight, pad,
    } = this.state;

    return (
      <Typography
        variant="body1"
        style={{
          fontSize: size,
          fontWeight: weight,
          border: '1px solid black',
          padding: pad,
          backgroundColor: seats[id].color,
          borderRight: isEnd ? '1px solid black' : '0px',
        }}
        ref={instance => connectDropTarget(findDOMNode(instance))}
      >
        {seats[id].studentName}
      </Typography>
    );
  }
}

DroppableSeat.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  updateN: PropTypes.func.isRequired,
  updateC: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  seats: PropTypes.array.isRequired,
};

export default conn(mapStateToProps, mapDispatchToProps)(
  DropTarget('student', seatTarget, collect)(DroppableSeat),
);
