import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Divider, FormControl, IconButton, Input, List, ListItem,
  ListItemText, MenuItem, Select, Typography,
} from '@material-ui/core';
import {
  Add as AddIcon, KeyboardArrowRight,
} from '@material-ui/icons';

const styles = theme => ({
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
});

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      brand: '',
      email: '',
      wechat: '',
      district: '',
      address: '',
      courses: '',
      phone: [{ type: 'company', number: '' }],
    };
  }

  addPhone = () => {
    const { phone } = this.state;
    phone.push({ type: 'company', number: '' });
    this.forceUpdate();
  };

  changePhone = (i, option) => (event) => {
    const { phone } = this.state;
    const newPhone = phone;
    if (option == 0) {
      newPhone[i].number = event.target.value;
    } else {
      newPhone[i].type = event.target.value;
    }
    this.setState({
      phone: newPhone,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    const {
      name, phone, company, brand, email, wechat, district, address, courses,
    } = this.state;

    const leftColumnOne = ['姓名*', '公司*', '品牌*'];
    const leftColumnTwo = ['电邮*', '微信', '省市区', '联络电话', '可上菲力已开课程(多选)'];

    const nameMapping = {
      0: 'name',
      1: 'company',
      2: 'brand',
      3: 'email',
      4: 'wechat',
      6: 'address',
    };

    return (
      <div className={classes.body}>
        <List className={classes.list}>
          {
            leftColumnOne.map((column, i) => (
              <div key={i}>
                <ListItem>
                  <ListItemText primary={column} classes={{ primary: classes.listItemLeft }} />
                  <Input
                    value={
                      i === 0 ? name : (
                        i === 1 ? company : brand
                      )}
                    placeholder="请输入"
                    disableUnderline
                    onChange={this.handleChange}
                    name={nameMapping[i]}
                  />
                </ListItem>
                <Divider inset component="li" className={classes.divider} />
              </div>
            ))
          }
          {
            phone.map((number, i) => (
              <ListItem>
                <ListItemText
                  primary={`聯絡電話#${i + 1}*`}
                  classes={{ primary: classes.listItemLeft }}
                  style={{ height: '32px' }}
                />
                <FormControl>
                  <Select
                    value={phone[i].type}
                    onChange={this.changePhone(i, 1)}
                    displayEmpty
                    IconComponent={KeyboardArrowRight}
                    input={<Input disableUnderline />}
                  >
                    <MenuItem value="company">
                      公司
                    </MenuItem>
                    <MenuItem value="home">
                      家
                    </MenuItem>
                    <MenuItem value="mobile">
                      行动
                    </MenuItem>
                  </Select>
                </FormControl>
                <Input
                  style={{ marginLeft: '30px' }}
                  placeholder="请输入"
                  disableUnderline
                  onChange={this.changePhone(i, 0)}
                />
              </ListItem>
            ))
          }
          <ListItem
            className={classes.listItemLeft}
            style={{ paddingTop: '5px', paddingBottom: '5px', marginBottom: '30px' }}
          >
            <IconButton
              className={classes.addButton}
              variant="fab"
              onClick={this.addPhone}
            >
              <AddIcon className={classes.addIcon} />
            </IconButton>
            <Typography className={classes.addText}>
              添加联络电话
            </Typography>
          </ListItem>
          {
            leftColumnTwo.map((column, i) => (
              <div key={i}>
                <ListItem>
                  <ListItemText primary={column} classes={{ primary: classes.listItemLeft }} />
                  {
                      i !== 2 && i !== 4
                        ? (
                          <Input
                            value={
                              i === 0 ? email : (
                                i === 1 ? wechat : (
                                  i === 3 ? address : undefined
                                ))}
                            placeholder="请输入"
                            disableUnderline
                            onChange={this.handleChange}
                            name={nameMapping[i + 3]}
                          />
                        )
                        : (i === 2
                          ? (
                            <FormControl className={classes.listItemRight}>
                              <Select
                                value={district}
                                onChange={this.handleChange}
                                displayEmpty
                                name="district"
                                IconComponent={KeyboardArrowRight}
                                input={<Input disableUnderline />}
                              >
                                <MenuItem value="上海">
                                  上海
                                </MenuItem>
                                <MenuItem value="北京">
                                  北京
                                </MenuItem>
                                <MenuItem value="香港">
                                  香港
                                </MenuItem>
                              </Select>
                            </FormControl>
                          )
                          : (
                            <FormControl className={classes.listItemRight}>
                              <Select
                                value={courses}
                                onChange={this.handleChange}
                                displayEmpty
                                name="courses"
                                IconComponent={KeyboardArrowRight}
                                input={<Input disableUnderline />}
                              >
                                <MenuItem value="Seminar 1">
                                  Seminar 1
                                </MenuItem>
                                <MenuItem value="Seminar 2">
                                  Seminar 2
                                </MenuItem>
                              </Select>
                            </FormControl>
                          )
                        )
                  }
                </ListItem>
                {
                  i === leftColumnTwo.length - 1 ? undefined
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

NewAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewAccount);
