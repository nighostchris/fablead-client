import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Divider, FormControl, Input, MenuItem, List, ListItem, ListItemText, Select,
} from '@material-ui/core';
import { addTeacher } from '../../Redux/Action/teacherAction';

const styles = theme => ({
  body: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '700px',
    },
  },
  divider: {
    height: '2px',
  },
  list: {
    backgroundColor: 'white',
  },
  listItemLeft: {
    marginLeft: '30px',
    fontSize: '18px',
  },
  listItemRight: {
    marginRight: '50px',
    fontSize: '18px',
    minWidth: 120,
  },
  createButton: {
    [theme.breakpoints.up('md')]: {
      borderRadius: '10px',
      display: 'block',
      margin: '0 auto',
      marginTop: '10px',
      marginBottom: '10px',
      width: '360px',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      bottom: '0px',
      position: 'fixed',
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
});

const mapDispatchToProps = dispatch => ({
  addT: name => dispatch(addTeacher(name)),
});

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      district: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreate = (name) => {
    const { addT, history } = this.props;
    addT(name);
    history.push('/teacher');
  };

  render() {
    const { classes } = this.props;

    const { name, district } = this.state;

    const leftColumn = ['姓名*', '聯絡電話(公司)*', '聯絡電話(家)', '聯絡電話(行動)', 'Email*', '微信', 
      '省市區', '聯絡地址', '可上菲力已開課程(多選)', '老師資歷', '小時薪資金額'];

    return (
      <div className={classes.body}>
        <List className={classes.list}>
          {
            leftColumn.map((column, i) => (
              <div key={i}>
                <ListItem>
                  <ListItemText primary={column} classes={{ primary: classes.listItemLeft }} />
                  {
                      i !== 6 && i !== 8
                        ? (
                          <Input
                            value={i === 0 ? name : undefined}
                            placeholder="Please enter"
                            disableUnderline
                            onChange={this.handleChange}
                            name="name"
                          />
                        )
                        : (
                          <FormControl className={classes.listItemRight}>
                            <Select
                              value={district}
                              onChange={this.handleChange}
                              displayEmpty
                              name="district"
                            >
                              <MenuItem value="">
                                <em>
                                  None
                                </em>
                              </MenuItem>
                              <MenuItem value={10}>
                                Ten
                              </MenuItem>
                              <MenuItem value={20}>
                                Twenty
                              </MenuItem>
                              <MenuItem value={30}>
                                Thirty
                              </MenuItem>
                            </Select>
                          </FormControl>
                        )
                  }
                </ListItem>
                {
                  i === leftColumn.length - 1 ? undefined
                    : <Divider inset component="li" className={classes.divider} />
                }
              </div>
            ))
          }
        </List>
        <Button
          className={classes.createButton}
          onClick={() => this.handleCreate(name)}
        >
            Create
        </Button>
      </div>
    );
  }
}

AddTeacher.propTypes = {
  classes: PropTypes.object.isRequired,
  addT: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddTeacher));
