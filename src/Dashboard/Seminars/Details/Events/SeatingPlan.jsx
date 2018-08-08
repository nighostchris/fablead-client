import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, List, ListItem, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DragableStudent from './DragableStudent';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 64px)',
  },
  title: {
    marginTop: '15px',
    marginBottom: '15px',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  seatmapWrapper: {
    flex: '1',
    flexGrow: '23',
    borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  seatmap: {
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatCombine: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
  },
  seat: {
    fontSize: '18px',
    fontWeight: 'bold',
    border: '1px solid black',
    borderRight: '0px',
    padding: '10px 35px',
  },
  seatEnd: {
    fontSize: '18px',
    fontWeight: 'bold',
    border: '1px solid black',
    padding: '10px 35px',
  },
  expansionWrapper: {
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
  bottomBar: {
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

    const rowNumber = 9;
    const distribution = [2, 2, 2, 2];
    const row = [];
    const pairs = [];
    const alphabetList = [];
    for (let i = 'A'.charCodeAt(0), j = 'Z'.charCodeAt(0); i <= j; i += 1) {
      alphabetList.push(String.fromCharCode(i));
    }

    let counter = 0;
    for (let i = 0; i < distribution.length; i += 1) {
      const dummy = [];
      for (let j = 0; j < distribution[i]; j += 1) {
        dummy.push(
          <Typography variant="body1" className={j === distribution[0] - 1 ? classes.seatEnd : classes.seat}>
            {alphabetList[counter]}
          </Typography>
        );
        counter += 1;
      }
      pairs.push(
        <div className={classes.seatCombine} style={{ marginRight: '10px' }}>
          {dummy}
        </div>
      );
    }

    for (let i = rowNumber; i > 0; i -= 1) {
      row.push(
        <div key={i} className={classes.row}>
          <Typography variant="body1" style={{ marginRight: '30px', marginBottom: '5px' }}>
            {i}
          </Typography>
          {pairs}
          <Typography variant="body1" style={{ marginLeft: '20px', marginBottom: '5px' }}>
            {i}
          </Typography>
        </div>
      );
    }

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
                    <DragableStudent name="EHE #1" />
                  </ListItem>
                  <ListItem className={classes.dragItem}>
                    <Typography className={classes.dragStudent}>
                      EHE #2
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.dragItem}>
                    <Typography className={classes.dragStudent}>
                      EHE #3
                    </Typography>
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
        <div className={classes.seatmapWrapper}>
          <Typography variant="body1" className={classes.title}>1+2號廳 三投2人 座位圖 (143人)</Typography>
          <div className={classes.seatmap}>
            {row}
          </div>
        </div>
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeatMap);
