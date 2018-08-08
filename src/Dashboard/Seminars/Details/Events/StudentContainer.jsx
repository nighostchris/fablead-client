import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, List, ListItem, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DraggableStudent from './DraggableStudent';

const styles = ({
  expansionPanel: {
    boxShadow: 'unset',
    '&:nthOfType(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  panelTitle: {
    fontSize: '18px',
    marginLeft: '15px',
  },
  zeroPadding: {
    padding: '0px',
  },
  listItem: {
    padding: '0px',
    marginLeft: '40px',
    marginBottom: '10px',
  },
});

class StudentContainer extends React.Component {
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
      <div>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.panelTitle}>
              EHE(3)
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.zeroPadding}>
            <List className={classes.zeroPadding}>
              <ListItem className={classes.listItem}>
                <DraggableStudent
                  name="EHE #1"
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

StudentContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentContainer);
