import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
  },
};

class LoginPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App" style={{ height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto', textAlign: 'center' }}>
          <Grid container>
            <Button variant="fab" color="primary" aria-label="help" style={{ position: 'absolute', right: '30px', marginRight:'30px', marginTop: '30px' }}>
              <HelpIcon />
            </Button>

            <Grid item xs={12}>
              <div>
                <p style={{ color: 'darkcyan', fontSize: '90px', fontWeight: 'bold'}}> Fablead</p>
              </div>
            </Grid>

            <Grid item xs={1} />

            <Grid item xs={10} md={12}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                  id="userid"
                  placeholder="User ID"
                  margin="normal"
                  style={{ width: '40%', color: 'grey' }}
                />
                <TextField
                  id="password"
                  placeholder="Password"
                  margin="normal"
                  style={{ width: '40%' }}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
                <Button style={{ marginTop: '40px', fontSize: '12px', borderRadius: '30px', backgroundColor: 'limegreen', color: 'white', paddingTop: '10px', paddingBottom: '10px', width: '17em' }} variant="contained">
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);
