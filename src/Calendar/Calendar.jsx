import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import MonthCalendar from './MonthCalendar';
import YearCalendar from './YearCalendar';

class Calendar extends React.Component {
    render(){
        const { view } = this.props;

        if (view == 0) {
            return(
                <YearCalendar />
            )
        }
        else if (view == 1) {
            return(
                <MonthCalendar clickable={ true } dateContext={ moment() }/>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

Calendar.propTypes = {
    view: PropTypes.number.isRequired
};
  
export default (Calendar);