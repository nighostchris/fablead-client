import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton, List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  enterButton: {
    backgroundColor: theme.palette.secondary.main,
  },
  enterButtonHidden: {
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

class LibraryPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.libraryWrapper}>
        <List style={{ paddingTop: '0px' }}>
          <ListItem button className={classes.libraryCard}>
            <ListItemText className={classes.libraryText} primary="General 課程教材" />
            <Typography variant="subheading">
              3
            </Typography>
            <IconButton style={{ width: '30px', height: '30px' }}>
              <KeyboardArrowRight className={classes.enterButtonHidden} />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.libraryCard}>
            <ListItemText className={classes.libraryText} primary="演講資料" secondary="Seminar Name" />
            <Typography variant="subheading">
              5
            </Typography>
            <IconButton style={{ width: '30px', height: '30px' }}>
              <KeyboardArrowRight className={classes.enterButtonHidden} />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  }
}

LibraryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryPage);
