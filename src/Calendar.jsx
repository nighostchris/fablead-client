import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
    wrapper: {
        flexGrow: '1'
    },
    calendar: {
        borderSpacing: '0',
        borderCollapse: 'collapse',
        width: '100%',
    },
    weekday: {
        textAlign: 'center',
        height: '30px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'grey'
    },
    emptySlot: {
        borderSpacing: '0',
        paddingLeft: '5px',
        textAlign: 'center',
        height: '28px'
    },
    currentDay: {
        width: '28px',
        height: '28px',
        lineHeight: '28px',
        borderRadius: '2%',
        color: 'white'
    },
    normalDay: {
        width: '24px',
        height: '24px',
        lineHeight: '24px'
    },
    calendarHeader: {
        borderSpacing: '0',
        paddingLeft: '5px'
    },
    calendarBody: {
        textAlign: 'center',
        borderSpacing: '0',
        paddingLeft: '5px',
        fontSize: '14px',
        cursor: 'pointer'
    },
    dayDecorateDigits: {
        backgroundColor: theme.palette.secondary.main,
        padding: '5px 10px 5px 10px',
        borderRadius: '50%'
    },
    dayDecorateTens: {
        backgroundColor: theme.palette.secondary.main,
        padding: '5px 7px 5px 7px',
        borderRadius: '50%'
    },
    monthLabel: {
        position: 'relative',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    monthPopUp: {
        position: 'absolute',
        left: '-110px',
        border: '2px solid black',
        backgroundColor: 'white',
        fontSize: '14px',
        padding: '5px 10px'
    },
    yearLabel: {
        fontSize: '22px',
        fontWeight: 'bold'
    },
    yearEditor: {
        maxWidth: '3.6em'
    },
    monthNav: {
        textAlign: 'center',
        fontSize: '0.6em'
    },
    popUpRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

class MonthCalendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dateContext: moment(),
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false,
            selectedDay: null
        }
    }

    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    getYear() { return this.state.dateContext.format("Y"); }

    getMonth() { return this.state.dateContext.format("MMMM"); }

    getDaysInMonth() { return this.state.dateContext.daysInMonth(); }

    getCurrentDate() { return this.state.dateContext.get("date"); }

    getCurrentDay() { return this.state.dateContext.format("D"); }

    getFirstDayOfMonth() { return this.state.dateContext.startOf('month').format('d'); }

    setMonth(month) {
        let monthNumber = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNumber);
        this.setState({
            dateContext: dateContext
        });
    }

    setYear(year) {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        });
    }

    prevMonth() {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth() {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
    }

    onYearChange(e) {
        this.setYear(e.target.value);
    }

    onKeyUpYear(e) {
        if (e.which === 13 || e.which === 27) 
        {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            });
        }
    }

    onSelectChange(e, data) {
        this.setMonth(data);
    }

    onChangeMonth(e, month) {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    onDaySelected(e, day) {
        let selectedDate = new Date(this.getYear(), this.months.indexOf(this.getMonth()), day);
        this.setState({
            selectedDay: selectedDate
        });
    }

    showYearEditor() {
        this.setState({
            showYearNav: true
        });
    }

    render(){
        const { classes } = this.props;

        const seminarDays = [5, 10, 20, 12, 19, 26];

        let weekdays = this.weekdaysShort.map((day) => {
            return (<td key={day} className={ classes.weekday }>{ day }</td>)
        });

        let days = [];
        for(let i = 0; i < this.getFirstDayOfMonth(); i++){
            days.push(<td key={ i * 80 } className={ classes.emptySlot }>{""}</td>);
        }

        let monthPopUp = this.months.map((data) => {
            return (
                <div key={data} style={{ minWidth: '70px' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'grey' }} onClick={ e => { this.onSelectChange(e, data) } }>
                        { data }
                    </a>
                </div>
            )
        });

        let dummy = [];
        let monthPopUpWrapper = [];

        while( monthPopUp.length > 0 ) {
            dummy.push( monthPopUp.shift() );
            if ( dummy.length === 4 ) {
                monthPopUpWrapper.push(<div className={ classes.popUpRow }>{ dummy }</div>);
                dummy = [];
            }
        }

        for (let i = 1; i <= this.getDaysInMonth(); i++){
            let className = (seminarDays.includes(i) ? classes.currentDay : classes.normalDay);
            days.push(
                <td key={i} className={ className }>
                {
                    className === classes.currentDay ? (
                        <span className={ (i < 10 ? classes.dayDecorateDigits : classes.dayDecorateTens) } onClick={ e => { this.onDaySelected(e, i) } }>
                            {i}
                        </span>
                    ) : (
                        <span>
                            {i}
                        </span>
                    )
                }
                </td>
            );
        }

        let rows = [];
        let cells = [];
        
        days.forEach((day, i) => {
            if ((i % 7) !== 0)
                cells.push(day);
            else{
                let newRow = cells.slice();
                rows.push(newRow);
                cells = [];
                cells.push(day);
            }
            if (i === days.length - 1) {
                let newRow = cells.slice();
                rows.push(newRow);
            }
        });

        let elements = rows.map((d, i) => {
            return(<tr key={ i*100 }>{d}</tr>);
        })

        return(
            <div className={ classes.wrapper }>
                <table className={ classes.calendar }>
                    <thead>
                        <tr className={ classes.calendarHeader }>
                            <td colSpan="2" className={ classes.monthNav }>
                                <IconButton onClick={ e => { this.prevMonth() } }>
                                    <KeyboardArrowLeft />
                                </IconButton>
                            </td>
                            <td colSpan="3" style={{ textAlign: 'center' }}>
                                <span className={ classes.monthLabel } onClick={ e => { this.onChangeMonth(e, this.getMonth()) } }>
                                    { this.getMonth() }
                                    {
                                        this.state.showMonthPopup &&
                                        <div className={ classes.monthPopUp }>
                                            { monthPopUpWrapper }
                                        </div>
                                    }
                                </span>
                                {" "}
                                {
                                    this.state.showYearNav ?
                                    <input
                                        defaultValue = { this.getYear() }
                                        className={ classes.yearEditor }
                                        ref={ (yearInput) => { this.yearInput = yearInput} }
                                        onKeyUp= { e => this.onKeyUpYear(e) }
                                        onChange = { e => this.onYearChange(e) }
                                        type="number"
                                        placeholder="year" />
                                    :
                                    <span className={ classes.yearLabel }
                                        onDoubleClick={ e => { this.showYearEditor() } }>
                                        { this.getYear() }
                                    </span>
                                }
                            </td>
                            <td colSpan="2" className={ classes.monthNav }>
                                <IconButton onClick={ e => { this.nextMonth() } }>
                                    <KeyboardArrowRight />
                                </IconButton>
                            </td>
                        </tr>
                    </thead>
                    <tbody className= { classes.calendarBody }>
                        <tr>
                            { weekdays }
                        </tr>
                        { elements }
                    </tbody>
                </table>
            </div>
        )
    }
}

MonthCalendar.propTypes = {
    classes: PropTypes.object.isRequired
};

const MonthCalendarWrapper = withStyles(styles, { withTheme: true })(
    MonthCalendar
);

class Calendar extends React.Component {
    render(){
        const { classes } = this.props;

        const { view } = this.props;

        if (view == 0) {
            return(
                <div></div>
            )
        }
        else if (view == 1) {
            return(
                <MonthCalendarWrapper />
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}
  
export default (Calendar);