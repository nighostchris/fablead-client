import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';

import FooterBar from './FooterBar';

const styles = theme => ({
    root: {
        flexShrink: '1'
    },
    content: {
        flexShrink: '1'
    },
    topBar: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    calendar: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
            height: '100%'
        }
    },
    middleContent: {
        height: '100%',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '50px',
            paddingRight: '50px'
        }
    },
    seminarTag: {
        display: 'flex',
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        height: '40px',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '17px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    wrapper: {
        lineHeight: '1px',
        [theme.breakpoints.up('md')]: {
            width: '50%',
            lineHeight: '30px',
            marginLeft: '30px'
        }
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5px'
    },
    date: {
        display: 'flex',
        flexDirection: 'row',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
    },
    type: {
        display: 'flex',
        flexDirection: 'row',
    },
    teacher: {
        display: 'flex',
        flexDirection: 'row',
    },
    leftColumn: {
        marginLeft: '30px'
    }
});

class SchedulingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    };

    onChange = date => {
        this.setState({ date });
    };

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={ classes.topBar }>
                        Scheduling
                    </div>

                    <div className={ classes.middleContent }>
                        <Calendar 
                            onChange={ this.onChange }
                            value = { this.state.date }
                            className={ classes.calendar }
                        />
                        <div className={ classes.wrapper }>
                            <div className={ classes.seminarTag }>
                                <p style={{ marginLeft: '30px' }}>Seminar</p>
                            </div>
                            <div className={ classes.name }>
                                <p className={ classes.leftColumn } style={{ flexGrow: '1' }}>Name</p>
                                <p style={{ width: '80%', textAlign: 'center' }}>Seminar Name</p>
                            </div>
                            <div className={ classes.date }>
                                <p className={ classes.leftColumn } style={{ flexGrow: '1' }}>Date</p>
                                <p style={{ flexGrow: '1', textAlign: 'center' }}>2018-6-20</p>
                                <p style={{ width: '20%', textAlign: 'center' }}>10 days</p>
                            </div>
                            <div className={ classes.location }>
                                <p className={ classes.leftColumn } style={{ flexGrow: '1' }}>Location</p>
                                <p style={{ width: '80%', textAlign: 'center' }}>Beijing</p>
                            </div>
                            <div className={ classes.type }>
                                <p className={ classes.leftColumn } style={{ flexGrow: '1' }}>Type</p>
                                <p style={{ width: '80%', textAlign: 'center' }}>Seminar</p>
                            </div>
                            <div className={ classes.teacher }>
                                <p className={ classes.leftColumn } style={{ flexGrow: '1' }}>Teacher</p>
                                <p style={{ width: '80%', textAlign: 'center' }}>Peter Man<p>Mary Lee</p></p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBar bottomValue = {1} />
            </div>
        );
    }
}

SchedulingPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchedulingPage);

