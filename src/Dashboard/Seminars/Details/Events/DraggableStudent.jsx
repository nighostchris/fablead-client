import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

const studentSource = {
  beginDrag(props) {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class DraggableStudent extends React.Component {
  componentWillMount() {
    console.log('mounting');
  }

  render() {
    const {
      connectDragSource, isDragging, name,
    } = this.props;

    return connectDragSource(
      <Typography
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: '13px 17px',
          backgroundColor: 'yellow',
          border: '1px solid black',
        }}
      >
        {name}
      </Typography>,
    );
  }
}

DraggableStudent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DragSource('student', studentSource, collect)(DraggableStudent);
