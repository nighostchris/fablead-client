import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton, Typography,
} from '@material-ui/core';
import {
  PlayArrow,
} from '@material-ui/icons';

const styles = theme => ({
  wrapper: {
    flexGrow: '1',
  },
  calendar: {
    width: '100%',
    paddingBottom: '10px',
    backgroundColor: 'white',
  },
  weekday: {
    textAlign: 'center',
    fontSize: '15px',
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    backgroundColor: 'white',
  },
  calendarBody: {
    textAlign: 'center',
    fontSize: '14px',
  },
  dayDecorateDigits: {
    backgroundColor: theme.palette.secondary.main,
    padding: '4px 2px 4px 2px',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '25px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dayDecorateTens: {
    backgroundColor: theme.palette.secondary.main,
    padding: '5px 7px 5px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  monthLabel: {
    fontSize: '16px',
    fontWeight: '400',
    paddingTop: '2px',
    marginLeft: '5px',
  },
  yearLabel: {
    fontSize: '18px',
    fontWeight: '400',
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

    const seminarDays = [1, 10, 11, 15, 20];

    const monthMapping = {
      January: '一月',
      February: '二月',
      March: '三月',
      April: '四月',
      May: '五月',
      June: '六月',
      July: '七月',
      August: '八月',
      September: '九月',
      October: '十月',
      November: '十一月',
      December: '十二月',
    };

    const weekdays = this.weekdaysShort.map(day => (
      <td key={day}>
        <Typography className={classes.weekday}>
          { day }
        </Typography>
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
              <Typography
                className={(i < 10 ? classes.dayDecorateDigits : classes.dayDecorateTens)}
                onClick={(e) => { this.onDaySelected(e, i); }}
              >
                {i}
              </Typography>
            ) : (
              <Typography>
                {i}
              </Typography>
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
    rows.shift();

    const elements = rows.map((d, i) => (
      <tr key={i * 100} style={{ height: '36px' }}>
        {d}
      </tr>
    ));

    return (
      <div className={classes.wrapper}>
        <div className={classes.calendarHeader}>
          <IconButton onClick={() => { this.prevMonth(dateContext); }}>
            <PlayArrow style={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <Typography className={classes.yearLabel}>
            { MonthCalendar.getYear(dateContext) }
          </Typography>
          {' '}
          <Typography className={classes.monthLabel}>
            { monthMapping[MonthCalendar.getMonth(dateContext)] }
          </Typography>
          <IconButton onClick={() => { this.nextMonth(dateContext); }}>
            <PlayArrow />
          </IconButton>
        </div>
        <table className={classes.calendar}>
          <tbody className={classes.calendarBody}>
            <tr valign="middle" style={{ height: '36px' }}>
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
