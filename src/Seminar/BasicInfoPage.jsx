import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  headerLayout: {
    flexGrow: '1',
  },
  body: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '700px',
    },
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '48px',
  },
  divider: {
    height: '2px',
  },
  list: {
    backgroundColor: 'white',
  },
  listItemLeft: {
    marginLeft: '30px',
    fontSize: '18px',
  },
  listItemRight: {
    textAlign: 'right',
    marginRight: '30px',
    fontSize: '18px',
  },
});

class BasicInfoPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.body}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary="Name" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="Seminar Name" classes={{ primary: classes.listItemRight }} />
            </ListItem>
            <Divider inset component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Type" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="Seminar" classes={{ primary: classes.listItemRight }} />
            </ListItem>
            <Divider inset component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Teacher #1" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="Peter Chan" classes={{ primary: classes.listItemRight }} />
            </ListItem>
            <Divider inset component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Teacher #2" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="Mary Lee" classes={{ primary: classes.listItemRight }} />
            </ListItem>
          </List>
          <List className={classes.list} style={{ marginTop: '50px' }}>
            <ListItem>
              <ListItemText primary="Date #1" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="2018-6-01, 14:00 - 16:00" classes={{ primary: classes.listItemRight }} />
            </ListItem>
            <Divider inset component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Date #2" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="2018-6-10, 15:00 - 17:00" classes={{ primary: classes.listItemRight }} />
            </ListItem>
            <Divider inset component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Location" classes={{ primary: classes.listItemLeft }} />
              <ListItemText primary="Hong Kong" classes={{ primary: classes.listItemRight }} />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

BasicInfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicInfoPage);
