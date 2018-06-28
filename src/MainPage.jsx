import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexShrink: 1
  },
  content: {
    flexShrink: 1
  }
};

class MainPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <HeaderBar />
          <Paper elevation={1}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </div>

        <FooterBar />
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainPage);
