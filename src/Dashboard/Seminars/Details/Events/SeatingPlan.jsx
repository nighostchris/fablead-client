import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';

import SeatBoard from './SeatBoard';
import StudentContainer from './StudentContainer';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 64px)',
  },
  bottomButton: {
    width: '50%',
    height: '56px',
    borderRadius: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderTop: '2px solid rgba(0, 0, 0, 0.2)',
    borderRight: '2px solid rgba(0, 0, 0, 0.2)',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    flexGrow: '11',
    justifyContent: 'space-between',
  },
});

class SeatMap extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.leftColumn}>
          <StudentContainer />
          <div className={classes.bottomBar}>
            <Button className={classes.bottomButton}>
              重置排列
            </Button>
            <Button
              className={classes.bottomButton}
              style={{ borderRight: 'unset' }}
            >
              自動排列
            </Button>
          </div>
        </div>
        <SeatBoard
          rowNumber={3}
          columnNumber={8}
          distribution={[2, 2, 2, 2]}
        />
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DragDropContext(HTML5Backend)(withStyles(styles)(SeatMap));
