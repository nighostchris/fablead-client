import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
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
        [theme.breakpoints.up('md')]: {
            width: '700px'
        }
    },
    event: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    panorama: {
        fontSize: '30px',
    },
    buttonCount: {
        position: 'absolute', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.palette.secondary.main
    },
    rightArrow: {
        width: '20%',
        color: theme.palette.secondary.main,
        fontSize: '40px'
    }
});

class EventPreparation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 2
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
                            <Tab label="Basic Info" component={ Link } to="/basicinfo" />
                            <Tab label="Event Ppt" component={ Link } to="/eventppt" />
                            <Tab label="Class Materials" component={ Link } to="/classmaterial" />
                            <Tab label="Account Mgt" />
                        </Tabs>
                    </AppBar>
                </div>
                <div className={ classes.body }>
                    <div className={ classes.cardWrapper }>
                        <Card className={ classes.card }>
                            <CardContent>
                                <div className={ classes.event }>
                                    <p style={{ flexGrow: '1', marginLeft: '30px' }}>課程教材 A</p>
                                    <Button style={{ position: 'relative', width: '20%' }}>
                                        <PanoramaFishEye className={ classes.panorama } />
                                        <p className={ classes.buttonCount }>3</p>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className={ classes.card }>
                            <CardContent>
                                <div className={ classes.event }>
                                    <p style={{ flexGrow: '1', marginLeft: '30px' }}>課程教材 B</p>
                                    <KeyboardArrowRight className={ classes.rightArrow } />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

EventPreparation.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPreparation);

