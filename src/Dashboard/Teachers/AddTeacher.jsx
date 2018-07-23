import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '../../../node_modules/@material-ui/core';

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

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

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
                            placeholder="Please enter"
                            disableUnderline={true}
                          />
                        )
                        : (
                          <FormControl className={classes.listItemRight}>
                            <Select
                              value={this.state.district}
                              onChange={this.handleChange}
                              displayEmpty
                              name="district"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
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
        <Button className={classes.createButton}>
            Create
        </Button>
      </div>
    );
  }
}

AddTeacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTeacher);
