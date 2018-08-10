import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, List, ListItem, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DraggableStudent from './DraggableStudent';

const styles = ({
  expansionPanel: {
    width: '100%',
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
    width: '100%',
  },
  listItem: {
    padding: '0px',
    marginLeft: '40px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

const mapStateToProps = state => ({
  companies: state.studentContainerReducer.companies,
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
    const { classes, companies } = this.props;

    console.log(companies);

    const { expanded } = this.state;

    return (
      <div>
        {
          companies.map(company => (
            <ExpansionPanel
              expanded={expanded === company.name}
              onChange={this.handleChange(company.name)}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.panelTitle}>
                  {
                    `${company.name}(${company.count})`
                  }
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.zeroPadding}>
                <List className={classes.zeroPadding}>
                  {
                    company.seatno.map((student, index) => (
                      <ListItem className={classes.listItem}>
                        <DraggableStudent
                          name={`${company.name} #${index + 1}`}
                          bColor={company.color}
                        />
                        <Typography variant="subheading">
                          {student}
                        </Typography>
                      </ListItem>
                    ))
                  }
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        }
      </div>
    );
  }
}

StudentContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
)(StudentContainer));
