import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DragSource } from 'react-dnd';
import {
  Typography,
} from '@material-ui/core';

const styles = theme => ({
  dragStudent: {
    padding: '13px 17px',
    backgroundColor: 'yellow',
    border: '1px solid black',
  },
});

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
  render() {
    const {
      connectDragSource, isDragging, classes, name,
    } = this.props;

    return connectDragSource(
      <Typography
        className={classes.dragStudent}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {name}
      </Typography>,
    );
  }
}

DraggableStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DragSource('student', studentSource, collect)(withStyles(styles)(DraggableStudent));
