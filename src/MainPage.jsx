import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

import SeminarList from './SeminarList';
import SchedulingPage from './SchedulingPage';
import TeacherPage from './TeacherPage';
import LibraryPage from './LibraryPage';
import ReminderPage from './ReminderPage';

const styles = {
  root: {
    flexShrink: 1
  },
  content: {
    flexShrink: 1,
    marginBottom: '48px'
  }
};

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0
    };
  }

  changePage(page){
    this.setState({ page: page });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <HeaderBar page={ this.state.page } />
          {
            this.state.page == 0 ? <SeminarList />
            : (this.state.page == 1 ? <SchedulingPage />
              : (this.state.page == 2 ? <TeacherPage />
                : (this.state.page == 3 ? <LibraryPage />
                  : <ReminderPage />
                  )
                )
              )
          }
        </div>
        <FooterBar handleChangePage={ this.changePage.bind(this) } page={ this.state.page } />
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainPage);
