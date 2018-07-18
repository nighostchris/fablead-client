import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

import MonthCalendar from './MonthCalendar';

class YearCalendar extends React.Component {
  render() {
    let dummy = [];
    const yearWrapper = [];
    let dateContext = moment().startOf('year');

    for (let i = 0; i < 12; i++) {
      dummy.push(<Grid item xs={3}>
        <MonthCalendar clickable={false} dateContext={dateContext} />
      </Grid>);
      dateContext = moment(dateContext).add(1, 'month');
      if (dummy.length === 4) {
        yearWrapper.push(<Grid container spacing={24}>
          { dummy }
                         </Grid>);
        dummy = [];
      }
    }

    return (
      <div>
        { yearWrapper }
      </div>
    );
  }
}

YearCalendar.propTypes = {
};

export default (YearCalendar);
