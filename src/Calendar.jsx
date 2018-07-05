import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    wrapper: {
        border: '2px solid skyblue'
    },
    calendar: {
        borderSpacing: '0',
        borderCollapse: 'collapse',
        width: '100%'
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
        height: '40px'
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
    }
});

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false
        }
    }

    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    getYear() { return moment().format("Y"); }

    getMonth() { return moment().format("MMMM"); }

    getDaysInMonth() { return moment().daysInMonth(); }

    getCurrentDate() { return moment().get("date"); }

    getCurrentDay() { return moment().format("D"); }

    getFirstDayOfMonth() { return moment().startOf('month').format('d'); }

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

        for (let i = 1; i <= this.getDaysInMonth(); i++){
            let className = (seminarDays.includes(i) ? classes.currentDay : classes.normalDay);
            //let className = (i == this.getCurrentDay() ? classes.currentDay : classes.normalDay);
            days.push(
                <td key={i} className={ className }>
                {
                    className === classes.currentDay ? (
                        <span className={  (i < 10 ? classes.dayDecorateDigits : classes.dayDecorateTens)}>
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

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Calendar);