import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, List, ListItem, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DraggableStudent from './DraggableStudent';
import SeatBoard from './SeatBoard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 64px)',
  },
  expansionPanel: {
    boxShadow: 'unset',
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  heading: {
    fontSize: '18px',
    marginLeft: '15px',
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
  dragStudent: {
    padding: '13px 17px',
    backgroundColor: 'yellow',
    border: '1px solid black',
  },
  dragList: {
    padding: '0px',
  },
  dragItem: {
    padding: '0px',
    marginLeft: '40px',
    marginBottom: '10px',
  },
  expansionPanelDetails: {
    padding: '0px',
  },
});

class SeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.leftColumn}>
          <div className={classes.expansionWrapper}>
            <ExpansionPanel
              expanded={expanded === 'panel1'}
              onChange={this.handleChange('panel1')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>EHE(3)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <List className={classes.dragList}>
                  <ListItem className={classes.dragItem}>
                    <DraggableStudent name="EHE #1" />
                  </ListItem>
                  <ListItem className={classes.dragItem}>
                    <DraggableStudent name="EHE #2" />
                  </ListItem>
                  <ListItem className={classes.dragItem}>
                    <DraggableStudent name="EHE #3" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={this.handleChange('panel2')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>MsShe(5)</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={this.handleChange('panel3')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>V-MEN(2)</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={this.handleChange('panel4')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>ZUEE(3)</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </div>
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
          rowNumber={9}
          distribution={[2, 2, 2, 2]}
        />
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeatMap);
