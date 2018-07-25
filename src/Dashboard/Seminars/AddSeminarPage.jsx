import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Divider, FormControl, IconButton, Input, List, ListItem, ListItemText, MenuItem, Select,
  Typography,
} from '@material-ui/core';
import {
  Add as AddIcon, DateRange as DateRangeIcon,
} from '@material-ui/icons';

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
      marginLeft: '140px',
      width: '120px',
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

class AddSeminarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      teacher: [''],
      location: '',
      date: [''],
    };

    this.addTeacher = this.addTeacher.bind(this);
    this.addDate = this.addDate.bind(this);
  }

  handleChange = index => event => {
    const newTeacher = this.state.teacher;
    newTeacher[index] = event.target.value;
    this.setState({ teacher: newTeacher });
  };

  addTeacher() {
    const newTeacher = this.state.teacher;
    newTeacher.push('');
    this.setState({
      teacher: newTeacher,
    });
  }

  addDate() {
    const newDate = this.state.date;
    newDate.push('');
    this.setState({
      date: newDate,
    });
  }

  render() {
    const { classes } = this.props;

    const { type, teacher, location, date } = this.state;

    return (
      <div className={classes.root}>
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary="Name" />
            <Input
              placeholder="Please enter"
              disableUnderline={true}
            />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem>
            <ListItemText primary="Type" />
            <FormControl className={classes.listItemRight}>
              <Select
                value={type}
                onChange={this.handleChange}
                displayEmpty
                name="district"
              >
                <MenuItem value="">
                  <em>
                    Seminar
                  </em>
                </MenuItem>
                <MenuItem value={10}>
                  Training
                </MenuItem>
                <MenuItem value={20}>
                  Consulting
                </MenuItem>
                <MenuItem value={30}>
                  Fablead
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          {
            teacher.map((data, i) => (
              <ListItem>
                <ListItemText primary={`Teacher #${i + 1}`} />
                <FormControl className={classes.listItemRight}>
                  <Select
                    value={teacher[i]}
                    onChange={this.handleChange(i)}
                    displayEmpty
                    name="teacher"
                  >
                    <MenuItem value="">
                      <em>
                        Please select
                      </em>
                    </MenuItem>
                    <MenuItem value={10}>
                      Chan Li Li
                    </MenuItem>
                    <MenuItem value={20}>
                      Wong Man Man
                    </MenuItem>
                    <MenuItem value={30}>
                      Chan Li Li
                    </MenuItem>
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
                <MenuItem value={10}>
                  Beijing
                </MenuItem>
                <MenuItem value={20}>
                  Shanghai
                </MenuItem>
                <MenuItem value={30}>
                  Hong Kong
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <Button className={classes.createButton}>
            Create
        </Button>
      </div>
    );
  }
}

AddSeminarPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSeminarPage);
