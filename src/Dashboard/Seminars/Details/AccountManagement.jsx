import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, IconButton, List, ListItem,
  Typography,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon, Check, Close,
} from '@material-ui/icons';

const styles = theme => ({
  expansionWrapper: {
  },
  expansionPanel: {
    margin: '0px',
  },
  expansionPanelDetails: {
    alignItems: 'center',
    padding: '0px',
  },
  heading: {
    fontSize: '18px',
    marginLeft: '15px',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'unset',
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.33)',
    },
  },
  studentHeader: {
    float: 'left',
    marginLeft: '30px',
    fontSize: '16px',
  },
  lowerBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '18px',
  },
  checkButton: {
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  closeButton: {
    borderRadius: '50%',
    backgroundColor: 'red',
    color: 'white',
  },
  carpark: {
    width: '40%',
    textAlign: 'right',
  },
});

class AccountManagement extends React.Component {
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

    const data = [['Chan Tai Man (EHE)', true, 500, true, true],
      ['Sze Sze (EHE)', false, 500, false, true],
      ['Wong Ka Man (EHE)', true, 500, true, false]];

    return (
      <div className={classes.expansionWrapper}>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          className={classes.expansionPanel}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expansionPanelSummary}
          >
            <Typography className={classes.heading}>EHE(2/3)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionPanelDetails}>
            <List style={{ width: '100%', padding: '0px' }}>
              {
                data.map(d => (
                  <ListItem className={classes.listItem}>
                    <Typography className={classes.studentHeader}>
                      {d[0]}
                    </Typography>
                    <div className={classes.lowerBar}>
                      <IconButton>
                        <Check className={classes.checkButton} />
                      </IconButton>
                      <Typography>
                        {`$${d[2]}已繳交`}
                      </Typography>
                      <IconButton>
                        {
                          d[3] === true ? <Check className={classes.checkButton} />
                            : <Close className={classes.closeButton} />
                        }
                      </IconButton>
                      <Typography>
                        {
                          d[3] === true ? '已簽到' : '未簽到'
                        }
                      </Typography>
                      <Typography className={classes.carpark}>
                        { d[4] === true ? '需要停車證' : undefined }
                      </Typography>
                    </div>
                  </ListItem>
                ))
              }
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>MsShe(0/5)</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>V-MEN(0/2)</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>ZUEE(0/3)</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    );
  }
}

AccountManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountManagement);
