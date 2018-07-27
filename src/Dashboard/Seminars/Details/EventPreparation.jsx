import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton, List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import {
  KeyboardArrowRight, PanoramaFishEye as Circle, Check,
} from '@material-ui/icons';

const styles = theme => ({
  eventWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  checkButton: {
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  circleButton: {
    color: theme.palette.secondary.main,
    fontSize: '30px',
  },
  enterButton: {
    color: theme.palette.secondary.main,
    fontSize: '40px',
  },
  eventCard: {
    height: '80px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  eventText: {
    marginLeft: '30px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
});

const data = [['開課場地及場地確定', '10 days remaining', '', false], ['招生收費建群', '10 days remaining', '', false],
  ['課件準備 物料採購及運輸', 'Done', '5', true], ['現場佈置及物料使用', '15 days remaining', '', false],
  ['學員座位表', '5 days remaining', '', false]];

class EventPreparation extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.eventWrapper}>
        <List style={{ paddingTop: '0px' }}>
          {
            data.map((d, i) => (
              <ListItem
                key={i * 20}
                className={classes.eventCard}
              >
                <IconButton>
                  {
                    d[3] === false
                      ? <Circle className={classes.circleButton} />
                      : <Check className={classes.checkButton} />
                  }
                </IconButton>
                <ListItemText className={classes.eventText} primary={d[0]} secondary={d[1]} />
                <Typography variant="subheading">
                  {d[2]}
                </Typography>
                <IconButton style={{ width: '40px', height: '40px' }}>
                  <KeyboardArrowRight className={classes.enterButton} />
                </IconButton>
              </ListItem>
            ))
          }
        </List>
      </div>
    );
  }
}

EventPreparation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventPreparation);
