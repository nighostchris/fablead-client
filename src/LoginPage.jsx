import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    textAlign: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexFlow: 'column',
    [theme.breakpoints.up('md')]: {
      flex: 0.75,
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flex: 0.5,
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
    },
    justifyContent: 'center',
  },
  grid: {
    [theme.breakpoints.up('md')]: {
      flex: 0.25,
    },
    [theme.breakpoints.down('sm')]: {
      flex: 0.5,
    },
    minHeight: '256px',
    paddingBottom: '128px',
  },
  inputFieldsContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  inputField: {
    width: '100%',
    color: 'grey',
  },
  title: {
    color: theme.palette.primary.dark,
  },
  helpButton: {
    fontSize: '28px',
    position: 'absolute',
    right: '30px',
    marginRight: '30px',
    marginTop: '30px',
  },
  loginButton: {
    marginTop: '40px',
    fontSize: '16px',
    borderRadius: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '17em',
  },
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdValue: '',
      passwordValue: '',
      redirect: false,
    };

    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleTextFieldChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLoginButtonClick() {
    if (this.state.userIdValue !== '' && this.state.passwordValue !== '') this.setState({ redirect: true });
  }

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
      return (
        <Redirect to="/dashboard" />
      );
    }

    return (
      <div className={classes.root}>
        <Button variant="fab" color="secondary" aria-label="help" className={classes.helpButton}>
?
        </Button>
        <div className={classes.titleContainer}>
          <Typography variant="display4" gutterBottom className={classes.title}>
Fablead
          </Typography>
        </div>

        <Grid container className={classes.grid}>
          <Grid item xs={3} md={4} />
          <Grid item xs={6} md={4} className={classes.inputFieldsContainer}>
            <TextField
              id="userid"
              placeholder="User ID"
              margin="normal"
              className={classes.inputField}
              onChange={this.handleTextFieldChange('userIdValue')}
            />
            <TextField
              id="password"
              placeholder="Password"
              type="password"
              margin="normal"
              className={classes.inputField}
              onChange={this.handleTextFieldChange('passwordValue')}
            />
          </Grid>
          <Grid item xs={3} md={4} />

          <Grid item xs={12}>
            <Button color="secondary" className={classes.loginButton} variant="contained" onClick={this.handleLoginButtonClick}>
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(LoginPage);
