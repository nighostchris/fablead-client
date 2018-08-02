import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider, IconButton, Input, List, ListItem, ListItemText,
} from '@material-ui/core';
import {
  KeyboardArrowRight,
} from '@material-ui/icons';

const styles = theme => ({
  list: {
    padding: '0px',
    backgroundColor: 'white',
  },
  listItemText: {
    marginLeft: '30px',
  },
  divider: {
    height: '1px',
    marginLeft: '36px',
  },
  rightArrow: {
    fontSize: '30px',
  },
});

class Calendar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List className={classes.list}>
          <ListItem>
            <ListItemText className={classes.listItemText} primary="實際使用時數" />
            <Input
              placeholder="Please enter"
              disableUnderline
            />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem button>
            <ListItemText className={classes.listItemText} primary="交換時數申請" />
            <IconButton style={{ width: '30px', height: '30px' }}>
              <KeyboardArrowRight className={classes.rightArrow} />
            </IconButton>
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
