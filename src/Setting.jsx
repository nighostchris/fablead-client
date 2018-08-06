import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Card, CardMedia, Divider, IconButton, List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { logout } from './Redux/Action/authAction';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginTop: '30px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  settingList: {
    paddingTop: '0px',
    paddingBottom: '0px',
    backgroundColor: 'white',
  },
  libraryText: {
    marginLeft: '36px',
  },
  divider: {
    height: '2px',
    marginLeft: '36px',
  },
  topCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '0px',
    boxShadow: '0px 0px 0px',
  },
  avatar: {
    height: '84px',
    width: '84px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '48px',
    borderRadius: '50%',
  },
});

const mapDispatchToProps = dispatch => ({
  logoutP: () => dispatch(logout),
});

class Setting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { logoutP, history } = this.props;
    logoutP();
    history.push('/');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List className={classes.settingList}>
          <Card className={classes.topCard}>
            <CardMedia
              className={classes.avatar}
              image="https://www.w3schools.com/howto/img_avatar.png"
            />
            <Typography variant="subheading" style={{ marginLeft: '20px' }}>
              User Name
            </Typography>
          </Card>
          <Divider inset component="li" style={{ marginLeft: '36px' }} />
          <ListItem button className={classes.libraryCard}>
            <ListItemText className={classes.libraryText} primary="Help" />
            <IconButton style={{ width: '30px', height: '30px' }}>
              <KeyboardArrowRight className={classes.enterButtonHidden} />
            </IconButton>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem
            button
            className={classes.libraryCard}
            onClick={this.handleLogout}
          >
            <ListItemText className={classes.libraryText} primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutP: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Setting));
