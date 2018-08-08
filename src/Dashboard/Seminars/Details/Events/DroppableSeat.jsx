import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class DroppableSeat extends React.Component {

}

DroppableSeat.propTypes = {
  classes: PropTypes.object.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DropTarget('student', seatTarget, collect)(withStyles(styles)(DroppableSeat));
