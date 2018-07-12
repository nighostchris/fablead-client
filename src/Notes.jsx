import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import HeaderBar from './HeaderBar';

const styles = theme => ({
  textareaWrapper: {
    textAlign: 'center',
    marginTop: '30px'
  },
  textarea: {
    width: '800px',
    height: '450px',
    resize: 'none',
    [theme.breakpoints.down('md')]: {
      width: '80%'
    }
  }
});

class Notes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "This is Notes This is Notes\nThis is Notes This is Notes\n"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render(){
    const { classes } = this.props;

    const { value } = this.state;

    return(
      <div className={ classes.root }>
        <div className={ classes.headerLayout }>
          <AppBar position="static">
            <HeaderBar />
          </AppBar>
        </div>
        <div className={ classes.textareaWrapper }>
          <textarea className={ classes.textarea } value={ value } onChange={ this.handleChange }></textarea>
        </div>
      </div>
    );
  }
}

Notes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notes);

