import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

import SeminarList from './SeminarList'

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
          <SeminarList />
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
