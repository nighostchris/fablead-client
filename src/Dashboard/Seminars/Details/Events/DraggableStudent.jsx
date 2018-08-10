import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

const studentSource = {
  beginDrag(props) {
    const { name, bColor } = props;
    return {
      color: bColor,
      studentName: name,
    };
  },

  endDrag(props, monitor, component) {
    console.log(monitor.didDrop());
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

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

export default DragSource('student', studentSource, collect)(DraggableStudent);
