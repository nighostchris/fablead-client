import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

import { updateDraggable } from '../../../../Redux/Action/studentContainerAction';

const studentSource = {
  beginDrag(props) {
    const { name, bColor } = props;
    return {
      color: bColor,
      studentName: name,
    };
  },

  canDrag(props) {
    const { draggable } = props;
    return draggable;
  },

  endDrag(props, monitor) {
    const { name, updateDrag } = props;
    updateDrag(
      name.substr(0, name.indexOf(' ')),
      parseInt(name.substr(name.length - 1), 10) - 1,
      !monitor.didDrop(),
    );
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const mapDispatchToProps = dispatch => ({
  updateDrag: (name, id, drag) => dispatch(updateDraggable(name, id, drag)),
});

class DraggableStudent extends React.Component {
  render() {
    const {
      connectDragSource, isDragging, name, bColor,
    } = this.props;

    return (
      <Typography
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: '13px 17px',
          backgroundColor: bColor,
          border: '1px solid black',
        }}
        ref={instance => connectDragSource(findDOMNode(instance))}
      >
        {name}
      </Typography>
    );
  }
}

DraggableStudent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  bColor: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(
  DragSource('student', studentSource, collect)(DraggableStudent)
);
