import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { connect as conn } from 'react-redux';
import { DropTarget } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

import { updateName, updateColor } from '../../../../Redux/Action/seatMapAction';
import { updateSeatNo, updateDraggable } from '../../../../Redux/Action/studentContainerAction';

const seatTarget = {
  drop(props, monitor, component) {
    const { color, studentName } = monitor.getItem();

    const {
      updateN, updateC, updateSN, updateDrag, seats, id,
    } = component.props;

    const oldStudentName = seats[id].studentName;

    updateN(id, studentName);
    updateC(id, color);
    updateSN(
      studentName.substr(0, studentName.indexOf(' ')),
      parseInt(studentName.substr(studentName.length - 1), 10) - 1,
      id,
    );
    updateSN(
      oldStudentName.substr(0, oldStudentName.indexOf(' ')),
      parseInt(oldStudentName.substr(oldStudentName.length - 1), 10) - 1,
      '',
    );
    updateDrag(
      oldStudentName.substr(0, oldStudentName.indexOf(' ')),
      parseInt(oldStudentName.substr(oldStudentName.length - 1), 10) - 1,
      true,
    );
  },
};

const mapStateToProps = state => ({
  seats: state.seatMapReducer.seats,
});

const mapDispatchToProps = dispatch => ({
  updateN: (id, name) => dispatch(updateName(id, name)),
  updateC: (id, color) => dispatch(updateColor(id, color)),
  updateSN: (companyName, id, seatno) => dispatch(updateSeatNo(companyName, id, seatno)),
  updateDrag: (companyName, id, drag) => dispatch(updateDraggable(companyName, id, drag)),
});

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class DroppableSeat extends React.Component {
  render() {
    const {
      connectDropTarget, isEnd, seats, id,
    } = this.props;

    return (
      <div
        key={id}
        style={{ width: '80px' }}
      >
        <Typography
          variant="body1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: seats[id].studentName.length === 1 ? '18px' : '14px',
            fontWeight: seats[id].studentName.length === 1 ? 'bold' : 'unset',
            border: '1px solid black',
            height: '46px',
            backgroundColor: seats[id].color,
            borderRight: isEnd ? '1px solid black' : '0px',
          }}
          ref={instance => connectDropTarget(findDOMNode(instance))}
        >
          {seats[id].studentName}
        </Typography>
      </div>
    );
  }
}

DroppableSeat.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isEnd: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  seats: PropTypes.object.isRequired,
};

export default conn(mapStateToProps, mapDispatchToProps)(
  DropTarget('student', seatTarget, collect)(DroppableSeat),
);
