import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderBar from '../HeaderBar';

const styles = theme => ({
  title: {
    paddingTop: '10px',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  seatmapWrapper: {
    textAlign: 'center',
    backgroundColor: 'white',
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
    border: '1px solid black',
    borderRight: '0px',
    padding: '5px 20px',
  },
  seatEnd: {
    border: '1px solid black',
    padding: '5px 20px',
  },
  expansionWrapper: {
    marginTop: '10px',
  },
  heading: {
    fontSize: '18px',
    marginLeft: '15px',
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
          <Typography variant="body1" style={{ marginRight: '10px', marginBottom: '5px' }}>
            {i}
          </Typography>
          {pairs}
          <Typography variant="body1" style={{ marginLeft: '10px', marginBottom: '5px' }}>
            {i}
          </Typography>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <HeaderBar />
        <div className={classes.seatmapWrapper}>
          <Typography variant="body1" className={classes.title}>1+2號廳 三投2人 座位圖 (143人)</Typography>
          <div className={classes.seatmap}>
            {row}
          </div>
        </div>
        <div className={classes.expansionWrapper}>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>EHE(3)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>MsShe(5)</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>V-MEN(2)</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>ZUEE(3)</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

SeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeatMap);
