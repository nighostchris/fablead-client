import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider, FormControl, IconButton, Input, List, ListItem, ListItemText, MenuItem, Select,
} from '@material-ui/core';
import {
  KeyboardArrowRight, Check,
} from '@material-ui/icons';

const styles = theme => ({
  divider: {
    height: '2px',
  },
  list: {
    paddingTop: '0px',
    paddingBottom: '0px',
    backgroundColor: 'white',
  },
  listItem: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  listItemWithButton: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  listItemLeft: {
    marginLeft: '30px',
    fontSize: '18px',
  },
  listItemPhone: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '30px',
  },
  listItemRight: {
    textAlign: 'right',
    marginRight: '30px',
    fontSize: '18px',
  },
  checkButton: {
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  biggerFont: {
    fontSize: '18px',
  },
});

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: 100,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    const { discount } = this.state;

    return (
      <div>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemText primary="姓名*" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="Chan Tai Man" classes={{ primary: classes.listItemRight }} />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="公司*" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="EHE 有限公司" classes={{ primary: classes.listItemRight }} />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="品牌*" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="EHE" classes={{ primary: classes.listItemRight }} />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="联络电话#1*" classes={{ primary: classes.listItemLeft }} />
            <div className={classes.listItemPhone}>
              <ListItemText primary="公司" classes={{ primary: classes.biggerFont }} />
              <KeyboardArrowRight style={{ fontSize: '30px' }} />
              <ListItemText primary="1234 5678" classes={{ primary: classes.biggerFont }} />
            </div>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="电邮*" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="chantaiman@email.com" classes={{ primary: classes.listItemRight }} />
          </ListItem>
        </List>
        <List className={classes.list} style={{ marginTop: '30px' }}>
          <ListItem className={classes.listItem}>
            <ListItemText primary="费用金额" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="$1000" classes={{ primary: classes.listItemRight }} />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="折扣" classes={{ primary: classes.listItemLeft }} />
            <FormControl className={classes.listItemRight}>
              <Select
                value={discount}
                onChange={this.handleChange}
                displayEmpty
                name="discount"
                IconComponent={KeyboardArrowRight}
                input={<Input disableUnderline />}
              >
                <MenuItem value={100}>
                  1人原價
                </MenuItem>
                <MenuItem value={95}>
                  2人95折
                </MenuItem>
                <MenuItem value={90}>
                  3人9折
                </MenuItem>
                <MenuItem value={85}>
                  4人85折
                </MenuItem>
                <MenuItem value={80}>
                  5人及以上8折
                </MenuItem>
                <MenuItem value={70}>
                  项目客户7折
                </MenuItem>
                <MenuItem value={0}>
                  自定折扣
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="最後应缴交费用" classes={{ primary: classes.listItemLeft }} />
            <ListItemText primary="$700" classes={{ primary: classes.listItemRight }} />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItemWithButton}>
            <ListItemText primary="是否已缴交" classes={{ primary: classes.listItemLeft }} />
            <IconButton className={classes.listItemRight}>
              <Check className={classes.checkButton} />
            </IconButton>
          </ListItem>
        </List>
        <List className={classes.list} style={{ marginTop: '30px' }}>
          <ListItem className={classes.listItemWithButton}>
            <ListItemText primary="需要停车证" classes={{ primary: classes.listItemLeft }} />
            <IconButton className={classes.listItemRight}>
              <Check className={classes.checkButton} />
            </IconButton>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem className={classes.listItemWithButton}>
            <ListItemText primary="签到" classes={{ primary: classes.listItemLeft }} />
            <IconButton className={classes.listItemRight}>
              <Check className={classes.checkButton} />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  }
}

AccountDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetails);
