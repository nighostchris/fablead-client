import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
});

class Notes extends React.Component{
    render(){
        const { classes } = this.props;

        return(
            <div className={ classes.root }>
                <div className={ classes.headerLayout }>
                    <AppBar position="static">
                        <Toolbar className={ classes.titleBar }>
                            <Button className={ classes.backButton } component={ Link } to="/notestaking">
                                <ArrowBackIcon />
                            </Button>
                            <Typography variant="title" color="inherit" align="center" className={ classes.flex }>
                                Notes Taking
                            </Typography>
                            <Button className={ classes.editButton }>
                                Edit
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
       );
   }
}

Notes.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notes);

