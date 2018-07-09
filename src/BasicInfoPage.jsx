import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    body: {
        marginTop: '10px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '700px'
        }
    },
    flex: {
        flex: 1
    },
    root: {
        flexGrow: 1,
    },
    titleBar: {
        justifyContent: 'center'
    },
    editButton: {
        fontSize: '14px',
        color: 'white',
        position: 'absolute',
        right: '20px',
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.down('sm')]: {
            right: '0px'
        }
    },
    backButton: {
        position: 'absolute',
        left: '20px',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            left: '0px'
        }
    },
    infoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center'
    },
    infoLeftText: {
        flexGrow: '1', 
        textAlign: 'left',
        marginLeft: '30px'
    }
});

class BasicInfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (event, value) => {
        this.setState({
            value: value
        });
    }

    render(){
        const { classes } = this.props;

        const { value } = this.state;
       
        return(
            <div className={ classes.root }>
                <div className={ classes.headerLayout }>
                    <AppBar position="static">
                        <Toolbar className={ classes.titleBar }>
                            <Button className={ classes.backButton } component={ Link } to="/reminder">
                                <ArrowBackIcon />
                            </Button>
                            <Typography variant="title" color="inherit" align="center" className={ classes.flex }>
                                Seminar Name
                            </Typography>
                            <Button className={ classes.editButton }>
                                Edit
                            </Button>
                        </Toolbar>
                        <Tabs value={ value } scrollable scrollButtons="auto" fullWidth onChange={ this.handleChange }>
                            <Tab label="Basic Info" />
                            <Tab label="Event Ppt" />
                            <Tab label="Class Materials" />
                            <Tab label="Account Mgt" />
                        </Tabs>
                    </AppBar>
                </div>
                <div className={ classes.body }>
                    <div className={ classes.infoWrapper }>
                        <p className={ classes.infoLeftText }>Name</p>
                        <p style={{ width: '80%' }}>Seminar Name</p>
                    </div>
                    <div className= { classes.infoWrapper }>
                        <p className={ classes.infoLeftText }>Date</p>
                        <p style={{ width: '80%' }}>2018-6-01</p>
                    </div>
                    <div className= { classes.infoWrapper }>
                        <p className={ classes.infoLeftText }>Location</p>
                        <p style={{ width: '80%' }}>北京</p>
                    </div>
                    <div className= { classes.infoWrapper }>
                        <p className={ classes.infoLeftText }>Type</p>
                        <p style={{ width: '80%' }}>Seminar</p>
                    </div>
                    <div className= { classes.infoWrapper }>
                        <p className={ classes.infoLeftText }>Teacher</p>
                        <div style={{ width: '80%' }}>
                            <p>Peter Man</p>
                            <p>Mary Lee</p>
                            <p>John Wong</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BasicInfoPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BasicInfoPage);

