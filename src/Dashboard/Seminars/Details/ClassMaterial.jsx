import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton, List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  enterButton: {
    color: theme.palette.secondary.main,
    fontSize: '30px',
    fontWeight: 'bold',
  },
  libraryWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  libraryCard: {
    height: '80px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  libraryText: {
    marginLeft: '30px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
});

class EventPreparation extends React.Component {
  render() {
    const { classes } = this.props;

    const data = [['General 課程教材', '', 3], ['演講資料', 'Seminar Name', 5]];

    return (
      <div className={classes.libraryWrapper}>
        <List style={{ paddingTop: '0px' }}>
          {
            data.map((d, i) => (
              <ListItem
                key={i * 20}
                button
                className={classes.libraryCard}
              >
                <ListItemText className={classes.libraryText} primary={d[0]} secondary={d[1]} />
                <Typography variant="subheading">
                  {d[2]}
                </Typography>
                <IconButton style={{ width: '30px', height: '30px' }}>
                  <KeyboardArrowRight className={classes.enterButton} />
                </IconButton>
              </ListItem>
            ))
          }
        </List>
      </div>
    );
  }
}

EventPreparation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventPreparation);
