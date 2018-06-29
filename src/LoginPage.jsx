import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
  },
};

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userIdValue: '',
      passwordValue: ''
    };
  };

  /*handleTextFieldChange = (name, event) => {
      this.setState({
        [name]: event.target.value
      });
    };
  }; */
    
  handleLoginButtonClick(){
    if (this.state.userIdValue != '' && this.state.passwordValue != '')
      return <Redirect to="/dashboard" />;
  };

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
                  style={{ width: '40%' }}
                  value={ this.state.userIdValue }
                  onChange={ /*this.handleTextFieldChange*/ e => {this.setState({userIdValue: e.target.value})} }
                />
                <TextField
                  id="password"
                  type="password"
                  placeholder="Password"
                  margin="normal"
                  style={{ width: '40%' }}
                  value = { this.state.passwordValue }
                  onChange={ /*this.handleTextFieldChange*/ e => {this.setState({passwordValue: e.target.value})} }
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
                <Button onClick={ this.handleLoginButtonClick } style={{ marginTop: '40px', fontSize: '12px', borderRadius: '30px', backgroundColor: 'limegreen', color: 'white', paddingTop: '10px', paddingBottom: '10px', width: '17em' }} variant="contained">
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
