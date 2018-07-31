import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, Typography,
} from '@material-ui/core';

const styles = theme => ({
  list: {
    padding: '0px',
  },
  listItem: {
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  listItemText: {
    marginLeft: '20px',
  },
  typography: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '20px',
  },
});

class Calendar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.notesWrapper}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary="Note 1"
              secondary="Teacher Name"
              className={classes.listItemText}
            />
            <Typography className={classes.typography}>
              6月20日
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary="Note 2"
              secondary="Teacher Name"
              className={classes.listItemText}
            />
            <Typography className={classes.typography}>
              6月15日
            </Typography>
          </ListItem>
        </List>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
