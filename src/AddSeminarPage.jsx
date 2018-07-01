import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import DateRangeIcon from '@material-ui/icons/dateRange';

const styles = theme => ({
    topBar: {
        height: '60px',
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
    backButton: {
        position: 'absolute',
        height: '60px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    },
    topBarInfo: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: 'white',
        [theme.breakpoints.up('md')]: {
            marginLeft: '170px',
        }
    },
    seminarInfo: {
        paddingTop: '30px',
        paddingBottom: '30px'
    },
    schedulingInfo:{
        paddingBottom: '30px'
    },
    textFieldStyle:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        width: '60%',
        [theme.breakpoints.up('md')]: {
            borderTop: '1px solid darkgray',
            borderLeft: '1px solid darkgray',
            borderRight: '1px solid darkgray'
        }
    },
    createButton: {
        [theme.breakpoints.up('md')]: {
            borderRadius: '10px',
            marginLeft: '140px',
            width: '120px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
            fontWeight: 'bold',
            bottom: '0px',
            position: 'absolute',
            width: '100%',
            height: '60px',
            fontSize: '20px'
        },
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    }
});

class AddSeminarPage extends React.Component{
    render(){
        const { classes } = this.props;

        return(
            <div>
                <Button className={ classes.backButton }>
                    <KeyboardArrowLeft style={{ fontSize: '15px', marginRight: '5px', color: 'white' }} />
                        Back
                </Button>
                <div className={ classes.topBar }>
                    <p className={ classes.topBarInfo }>
                        Create > New Seminar
                    </p>
                </div>
                <div className={ classes.seminarInfo }>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginRight: '50px' }}>Name</p>
                        <TextField
                            margin="normal"
                            className={ classes.inputField }
                        />
                    </div>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginRight: '55px' }}>Type</p>
                        <NativeSelect style={{ width: '60%'}}>
                            <option value=""></option>
                            <option value={10}>Seminar 1</option>
                            <option value={20}>Seminar 2</option>
                            <option value={30}>Seminar 3</option>
                        </NativeSelect>
                    </div>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginRight: '36px' }}>Teacher</p>
                        <TextField
                            margin="normal"
                            className={ classes.inputField }
                        />
                    </div>
                </div>
                <hr style={{ width: '90%', color: 'darkgrey' }} />
                <p style={{ position: 'relative', left: '10%', marginTop: '30px', fontSize: '24px', fontWeight: 'bold' }}>Scheduling</p>
                <div className={ classes.schedulingInfo }>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginLeft: '48px', marginRight: '55px' }}>Date</p>
                        <TextField
                            margin="normal"
                            className={ classes.inputField }
                        />
                        <IconButton>
                            <DateRangeIcon/>
                        </IconButton>
                    </div>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginRight: '28px' }}>Location</p>
                        <TextField
                            margin="normal"
                            className={ classes.inputField }
                        />
                    </div>
                </div>
                <Button className={ classes.createButton }>
                    Create
                </Button>
            </div>
        );
    };
}

AddSeminarPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(AddSeminarPage);