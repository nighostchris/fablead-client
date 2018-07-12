import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import HeaderBar from '../HeaderBar';

const styles = theme => ({
});

class Invoice extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
        <div className={ classes.headerLayout }>
          <AppBar position="static">
            <HeaderBar />
          </AppBar>
        </div>
      </div>
    );
  }
}

Invoice.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Invoice);