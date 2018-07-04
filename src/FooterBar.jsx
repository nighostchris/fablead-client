import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Redirect } from 'react-router-dom';

import ReminderIcon from '@material-ui/icons/Notifications';
import SeminarsIcon from '@material-ui/icons/SpeakerNotes';
import TeachersIcon from '@material-ui/icons/School';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import ScheduleIcon from '@material-ui/icons/Today';

const styles = {
  root: {
    position: 'absolute',
    bottom: '0px',
    width: '100%'
  }
};

class SimpleBottomNavigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.bottomValue,
      redirect: -1
    };
  };

  handleClick = (event, value) => {
    if (value !== this.state.value){
      this.setState({ value: value });
      this.setState({ redirect: value});
    }
  };

  render() {
    const { classes } = this.props;

    const { value } = this.state;

    switch(this.state.redirect){
      case 0:
        this.setState({ redirect: -1 });
        return <Redirect to='/dashboard' />;
      case 1:
        this.setState({ redirect: -1 });
        return <Redirect to='/scheduling' />;
      case 2:
        this.setState({ redirect: -1 });
        return <Redirect to='/teacher' />;
      case 3:
        this.setState({ redirect: -1 });
        return <Redirect to='/library' />;
      case 4:
        this.setState({ redirect: -1 });
        return <Redirect to='/reminder' />;
    } 

    return (
      <BottomNavigation showLabels className={classes.root} value={ value } onChange={ this.handleClick }>
        <BottomNavigationAction label="Seminars" icon={<SeminarsIcon />} />
        <BottomNavigationAction label="Schedule" icon={<ScheduleIcon />} />
        <BottomNavigationAction label="Teachers" icon={<TeachersIcon />} />
        <BottomNavigationAction label="Library" icon={<LibraryIcon />} />
        <BottomNavigationAction label="Reminder" icon={<ReminderIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
