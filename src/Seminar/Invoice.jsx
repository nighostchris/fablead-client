import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import HeaderBar from '../HeaderBar';

const styles = theme => ({
  documentMargin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '600px',
      borderRadius: '20px',
      marginBottom: '10px'
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default
    }
  },
  documentInfo: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '3'
  },
  documentWrapper: {
    [theme.breakpoints.up('md')]: {
      marginTop: '20px'
    }
  },
  addButton: {
    position: 'absolute',
    bottom: '72px',
    right: '32px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
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
        <div className={ classes.documentWrapper }>
          <div className={ classes.documentMargin }>
            <div style={{ flexGrow: '1', textAlign: 'center' }}>
              <img src="https://www.zamzar.com/images/filetypes/jpg.png" width="42px" height="42px"/>
            </div>
            <div className={ classes.documentInfo }>
              <p>invoice2018_0622.pdf</p>
              <p>35KB</p>
            </div>
            <div style={{ flexGrow: '1' }}>
              <p>6月20日</p>
            </div>
          </div>
          <div className={ classes.documentMargin }>
            <div style={{ flexGrow: '1', textAlign: 'center' }}>
              <img src="https://www.zamzar.com/images/filetypes/jpg.png" width="42px" height="42px"/>
            </div>
            <div className={ classes.documentInfo }>
              <p>payment2018_0501.jpg</p>
              <p>2.1MB</p>
            </div>
            <div style={{ flexGrow: '1' }}>
              <p>6月18日</p>
            </div>
          </div>
        </div>
        <Button color="secondary" className={classes.addButton} variant="fab" aria-label="help" >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

Invoice.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Invoice);