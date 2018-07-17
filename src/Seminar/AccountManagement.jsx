import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
        marginTop: '20px',
        [theme.breakpoints.up('md')]: {
            marginTop: '50px',
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

        const subpage = ["學員 check-in", "停車證需求", "繳費附檔", "發票附檔", "租用合同附檔"];

        const subpageLink = ["/checkin", "/carparkpass", "/payment", "/invoice", "/tenancy"];
        
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
                    <div className={ classes.cardWrapper }>
                        {
                            subpage.map((d, i) => {
                                return(
                                    <Card key={i} className={ classes.card }>
                                        <CardContent>
                                            <div className={ classes.event }>
                                                <p style={{ flexGrow: '1', marginLeft: '30px' }}>{d}</p>
                                                <Button component={ Link } to={ subpageLink[i] }>
                                                    <KeyboardArrowRight className={ classes.rightArrow } />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

AccountManagement.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountManagement);

