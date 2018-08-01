import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  wrapper: {
    flexGrow: '1',
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
    color: 'grey',
  },
  emptySlot: {
    borderSpacing: '0',
    paddingLeft: '5px',
    textAlign: 'center',
    height: '28px',
    width: '80px',
  },
  currentDay: {
    lineHeight: '28px',
    width: '80px',
    color: 'white',
  },
  normalDay: {
    lineHeight: '24px',
    width: '80px',
  },
  calendarHeader: {
    borderSpacing: '0',
    paddingLeft: '5px',
  },
  calendarBody: {
    textAlign: 'center',
    fontSize: '14px',
  },
  dayDecorateDigits: {
    backgroundColor: theme.palette.secondary.main,
    padding: '5px 10px 5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  dayDecorateTens: {
    backgroundColor: theme.palette.secondary.main,
    padding: '5px 7px 5px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  monthLabel: {
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  yearLabel: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  yearEditor: {
    maxWidth: '3.6em',
  },
  monthNav: {
    textAlign: 'center',
    fontSize: '0.6em',
  },
});

class MonthCalendar extends React.Component {
  weekdaysShort = moment.weekdaysShort();

  months = moment.months();

  constructor(props) {
    super(props);
    const { dContext } = this.props;
    this.state = {
      dateContext: dContext,
      selectedDay: null,
    };
  }

  onDaySelected(e, day) {
    const { dateContext } = this.state;
    const selectedDate = new Date(
      this.getYear(dateContext),
      this.months.indexOf(this.getMonth(dateContext)),
      day,
    );
    this.setState({
      selectedDay: selectedDate,
    });
  }

  static getYear(dateContext) { return dateContext.format('Y'); }

  static getMonth(dateContext) { return dateContext.format('MMMM'); }

  static getDaysInMonth(dateContext) { return dateContext.daysInMonth(); }

  static getFirstDayOfMonth(dateContext) { return dateContext.startOf('month').format('d'); }

  prevMonth(dc) {
    let dateContext = Object.assign({}, dc);
    dateContext = moment(dateContext).subtract(1, 'month');
    this.setState({
      dateContext,
    });
  }

  nextMonth(dc) {
    let dateContext = Object.assign({}, dc);
    dateContext = moment(dateContext).add(1, 'month');
    this.setState({
      dateContext,
    });
  }

  render() {
    const { classes } = this.props;

    const { dateContext } = this.state;

    const seminarDays = [5, 10, 20, 12, 19, 26];

    const weekdays = this.weekdaysShort.map(day => (
      <td key={day} className={classes.weekday}>
        { day }
      </td>
    ));

    const days = [];
    for (let i = 0; i < MonthCalendar.getFirstDayOfMonth(dateContext); i += 1) {
      days.push(
        <td key={i * 80} className={classes.emptySlot}>
          {''}
        </td>,
      );
    }

    for (let i = 1; i <= MonthCalendar.getDaysInMonth(dateContext); i += 1) {
      const className = (seminarDays.includes(i) ? classes.currentDay : classes.normalDay);
      days.push(
        <td key={i} className={className}>
          {
            className === classes.currentDay ? (
              <span
                className={(i < 10 ? classes.dayDecorateDigits : classes.dayDecorateTens)}
                onClick={(e) => { this.onDaySelected(e, i); }}
              >
                {i}
              </span>
            ) : (
              <span>
                {i}
              </span>
            )
          }
        </td>,
      );
    }

    const rows = [];
    let cells = [];

    days.forEach((day, i) => {
      if ((i % 7) !== 0) cells.push(day);
      else {
        const newRow = cells.slice();
        rows.push(newRow);
        cells = [];
        cells.push(day);
      }
      if (i === days.length - 1) {
        const newRow = cells.slice();
        rows.push(newRow);
      }
    });

    const elements = rows.map((d, i) => (
      <tr key={i * 100}>
        {d}
      </tr>
    ));

    return (
      <div className={classes.wrapper}>
        <table className={classes.calendar}>
          <thead>
            <tr className={classes.calendarHeader}>
              {
                <td colSpan="2" className={classes.monthNav}>
                  <IconButton onClick={() => { this.prevMonth(dateContext); }}>
                    <KeyboardArrowLeft />
                  </IconButton>
                </td>
              }
              <td colSpan={3} style={{ textAlign: 'center' }}>
                <span className={classes.monthLabel}>
                  { MonthCalendar.getMonth(dateContext) }
                </span>
                {' '}
                <span className={classes.yearLabel}>
                  { MonthCalendar.getYear(dateContext) }
                </span>
              </td>
              {
                <td colSpan="2" className={classes.monthNav}>
                  <IconButton onClick={() => { this.nextMonth(dateContext); }}>
                    <KeyboardArrowRight />
                  </IconButton>
                </td>
              }
            </tr>
          </thead>
          <tbody className={classes.calendarBody}>
            <tr>
              { weekdays }
            </tr>
            { elements }
          </tbody>
        </table>
      </div>
    );
  }
}

MonthCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
  dContext: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthCalendar);
