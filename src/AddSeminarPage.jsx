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
        height: '8%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main
    },
    backButton: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    },
    topBarInfo: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '80px'
    },
    seminarInfo: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px',
        paddingBottom: '30px',
        justifyContent: 'center'
    },
    schedulingInfo:{
        paddingBottom: '30px',
        paddingLeft: '100px'
    },
    textFieldStyle:{
        display: 'flex',
        alignItems: 'center'
    },
    inputField: {
        width: '60%',
        borderTop: '1px solid darkgray',
        borderLeft: '1px solid darkgray',
        borderRight: '1px solid darkgray'
    },
    createButton: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '10px',
        color: 'white',
        marginLeft: '140px',
        width: '120px',
        fontWeight: 'bold',
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
                <div className={ classes.topBar }>
                    <Button className={ classes.backButton }>
                        <KeyboardArrowLeft style={{ fontSize: '15px', marginRight: '5px', color: 'white' }} />
                            Back
                    </Button>
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
                <p style={{ marginLeft: '100px', marginTop: '30px', fontSize: '24px', fontWeight: 'bold' }}>Scheduling</p>
                <div className={ classes.schedulingInfo }>
                    <div className={ classes.textFieldStyle }>
                        <p style={{ marginRight: '55px' }}>Date</p>
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