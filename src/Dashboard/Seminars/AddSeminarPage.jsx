import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Divider, FormControl, IconButton, Input, List, ListItem, ListItemText, MenuItem, Select,
  Typography,
} from '@material-ui/core';
import {
  Add as AddIcon, DateRange as DateRangeIcon,
} from '@material-ui/icons';
import { addSeminar } from '../../Redux/Action/seminarAction';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  addButton: {
    backgroundColor: theme.palette.secondary.main,
    width: '26px',
    height: '26px',
  },
  addIcon: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'white',
  },
  addText: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '16px',
    marginLeft: '10px',
  },
  createButton: {
    [theme.breakpoints.up('md')]: {
      borderRadius: '10px',
      display: 'block',
      marginTop: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '200px',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      fontWeight: 'bold',
      position: 'fixed',
      bottom: '0px',
      width: '100%',
      height: '60px',
      fontSize: '20px',
    },
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  divider: {
    height: '2px',
    marginLeft: '36px',
  },
  listItemRight: {
    marginRight: '50px',
    fontSize: '18px',
    minWidth: 120,
  },
  list: {
    backgroundColor: 'white',
    paddingTop: '0px',
  },
});

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers,
});

const mapDispatchToProps = dispatch => ({
  addS: (seminarType, name, teacher, location, date, countdown) => {
    dispatch(addSeminar(seminarType, name, teacher, location, date, countdown));
  },
});

class AddSeminarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      seminarType: '',
      teacher: [''],
      date: [''],
      location: '',
    };

    this.addTeacher = this.addTeacher.bind(this);
    this.addDate = this.addDate.bind(this);
  }

  handleTeacherChange = index => (event) => {
    const { teacher } = this.state;
    const newTeacher = teacher;
    newTeacher[index] = event.target.value;
    this.setState({ teacher: newTeacher });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCreate() {
    const {
      name, seminarType, teacher, location,
    } = this.state;
    const { addS, history } = this.props;
    addS(seminarType, name, teacher[0], location, '8月10日', 20);
    history.push('/dashboard');
  }

  addTeacher() {
    const { teacher } = this.state;
    teacher.push('');
    this.forceUpdate();
  }

  addDate() {
    const { date } = this.state;
    date.push('');
    this.forceUpdate();
  }

  render() {
    const { classes, teachers } = this.props;

    const {
      name, seminarType, teacher, location, date,
    } = this.state;

    return (
      <div className={classes.root}>
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary="Name" />
            <Input
              placeholder="Please enter"
              disableUnderline
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem>
            <ListItemText primary="Type" />
            <FormControl className={classes.listItemRight}>
              <Select
                value={seminarType}
                onChange={this.handleChange}
                displayEmpty
                name="seminarType"
              >
                <MenuItem value="">
                  <em>
                    Please select
                  </em>
                </MenuItem>
                <MenuItem value="Seminar">
                  Seminar
                </MenuItem>
                <MenuItem value="Training">
                  Training
                </MenuItem>
                <MenuItem value="Consulting">
                  Consulting
                </MenuItem>
                <MenuItem value="Fablead">
                  Fablead
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          {
            teacher.map((data, i) => (
              <ListItem key={i}>
                <ListItemText primary={`Teacher #${i + 1}`} />
                <FormControl className={classes.listItemRight}>
                  <Select
                    value={teacher[i]}
                    onChange={this.handleTeacherChange(i)}
                    displayEmpty
                    name="teacher"
                  >
                    <MenuItem value="">
                      <em>
                        Please select
                      </em>
                    </MenuItem>
                    {
                      teachers.map((d, i) => (
                        <MenuItem value={d.name}>
                          {d.name}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </ListItem>
            ))
          }
          <ListItem style={{ paddingTop: '5px', paddingBottom: '5px' }}>
            <IconButton className={classes.addButton} variant="fab" onClick={this.addTeacher}>
              <AddIcon className={classes.addIcon} />
            </IconButton>
            <Typography className={classes.addText}>
              Add Teacher
            </Typography>
          </ListItem>
        </List>
        <List className={classes.list} style={{ marginTop: '40px' }}>
          {
            date.map((data, i) => (
              <ListItem>
                <ListItemText primary={`Date #${i + 1}`} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <ListItemText primary="2018-6-01, 14:00 - 16:00" style={{ padding: '0px' }} />
                  <IconButton>
                    <DateRangeIcon />
                  </IconButton>
                </div>
              </ListItem>
            ))
          }
          <ListItem style={{ paddingTop: '5px', paddingBottom: '10px' }}>
            <IconButton className={classes.addButton} variant="fab" onClick={this.addDate}>
              <AddIcon className={classes.addIcon} />
            </IconButton>
            <Typography className={classes.addText}>
              Add Date
            </Typography>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem>
            <ListItemText primary="Location" />
            <FormControl className={classes.listItemRight}>
              <Select
                value={location}
                onChange={this.handleChange}
                displayEmpty
                name="location"
              >
                <MenuItem value="">
                  <em>
                    Please select
                  </em>
                </MenuItem>
                <MenuItem value="北京">
                  北京
                </MenuItem>
                <MenuItem value="上海">
                  上海
                </MenuItem>
                <MenuItem value="香港">
                  香港
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <Button
          className={classes.createButton}
          onClick={() => this.handleCreate()}
        >
            Create
        </Button>
      </div>
    );
  }
}

AddSeminarPage.propTypes = {
  classes: PropTypes.object.isRequired,
  addS: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  teachers: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(AddSeminarPage));
