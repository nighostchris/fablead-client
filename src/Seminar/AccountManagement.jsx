import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

import HeaderBar from '../HeaderBar';

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
    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            marginTop: '10px',
            alignItems: 'center'
        }
    },
    card: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.default,
        },
        textDecoration: 'none',
        boxShadow: '0px 0px 0px',
        borderRadius: '0px',
        marginTop: '50px',
        [theme.breakpoints.up('md')]: {
            width: '700px'
        }
    },
    event: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightArrow: {
        width: '20%',
        color: theme.palette.secondary.main,
        fontSize: '40px'
    },
    upperPart: {
        marginTop: '20px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '50px',
            marginRight: '50px'
        }
    },
    infoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px'
    },
    infoLeft: {
        flexGrow: '1'
    },
    inputField: {
        width: '70%'
    }
});

class AccountManagement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 3
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
                        <HeaderBar />
                        <Tabs value={ value } scrollButtons="auto" fullWidth onChange={ this.handleChange } centered>
                            <Tab label="Basic Info" component={ Link } to="/basicinfo" />
                            <Tab label="Event Ppt" component={ Link } to="/eventppt" />
                            <Tab label="Class Materials" component={ Link } to="/classmaterial" />
                            <Tab label="Account Mgt" component={ Link } to="/accountmgt" />
                        </Tabs>
                    </AppBar>
                </div>
                <div className={ classes.body }>
                    <div className={ classes.upperPart }>
                        <div className={ classes.infoWrapper }>
                            <p className={ classes.infoLeft }>Customer Name</p>
                            <TextField
                                margin="normal"
                                className={ classes.inputField }
                            />
                        </div>
                        <div className={ classes.infoWrapper }>
                            <p className={ classes.infoLeft }>Company Name</p>
                            <TextField
                                margin="normal"
                                className={ classes.inputField }
                            />
                        </div>
                        <div className={ classes.infoWrapper }>
                            <p className={ classes.infoLeft }>Brand</p>
                            <TextField
                                margin="normal"
                                className={ classes.inputField }
                            />
                        </div>
                        <div className={ classes.infoWrapper }>
                            <p className={ classes.infoLeft }>Remarks</p>
                            <TextField
                                margin="normal"
                                className={ classes.inputField }
                            />
                        </div>
                    </div>
                    <Card className={ classes.card }>
                        <CardContent>
                            <div className={ classes.event }>
                                <p style={{ flexGrow: '1', marginLeft: '30px' }}>學員 check-in</p>
                                <KeyboardArrowRight className={ classes.rightArrow } />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

AccountManagement.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountManagement);

