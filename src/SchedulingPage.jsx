import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import FooterBar from './FooterBar';
import Calendar from './Calendar/Calendar';

const styles = theme => ({
    root: {
        flexShrink: '1'
    },
    content: {
        flexShrink: '1',
        marginBottom: '48px'
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
        height: '30px',
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
    },
    calendarSelector: {
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            marginTop: '30px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'lightgrey'
        }
    },
    calendarWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
    },
    selector: {
        minHeight: '0px',
        minWidth: '0px',
        paddingTop: '4px',
        paddingBottom: '4px',
        fontSize: '10px',
        fontWeight: 'bold',
        color: 'grey',
        borderRadius: '0',
        [theme.breakpoints.up('md')]: {
            border: '1px solid grey',
            backgroundColor: 'lightgrey',
            boxShadow: '1px 2px 3px'
        }
    }
});

class SchedulingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            yearView: false,
            monthView: true,
            weekView: false
        };

        this.setYearView = this.setYearView.bind(this);
        this.setMonthView = this.setMonthView.bind(this);
        this.setWeekView = this.setWeekView.bind(this);
    }

    setYearView() {
        if (!this.state.yearView) {
            this.setState({
                yearView: true,
                monthView: false,
                weekView: false
            });
        }
    }

    setMonthView() {
        if (!this.state.monthView) {
            this.setState({
                yearView: false,
                monthView: true,
                weekView: false
            });
        }
    }

    setWeekView() {
        if (!this.state.weekView) {
            this.setState({
                yearView: false,
                monthView: false,
                weekView: true
            });
        }
    }

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={ classes.middleContent }>
                        <div className={ classes.calendarWrapper }>
                            <div className={ classes.calendarSelector }>
                                <Button className={ classes.selector } style={{ marginRight: '3px', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} onClick={ this.setYearView }>
                                    Year
                                </Button>
                                <Button className={ classes.selector } style={{ borderRadius: '3px' }} onClick={ this.setMonthView }>
                                    Month
                                </Button>
                                <Button className={ classes.selector } style={{ marginLeft: '3px', borderTopRightRadius: '25px', borderBottomRightRadius: '25px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} onClick={ this.setWeekView }>
                                    Week
                                </Button>
                            </div>
                            {
                                this.state.yearView ? (<Calendar view={0} />) :
                                (this.state.monthView ? (<Calendar view={1} />) : (<Calendar view={2} />))                               
                            }
                        </div>
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

