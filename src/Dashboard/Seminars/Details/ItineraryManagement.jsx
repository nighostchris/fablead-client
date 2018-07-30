import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, CardMedia, Input, Typography,
} from '@material-ui/core';

const styles = theme => ({
  root: {
  },
  nameWrapperLeft: {
    float: 'left',
    marginLeft: '20px',
    marginBottom: '15px',
  },
  nameWrapperRight: {
    float: 'right',
    marginRight: '20px',
    marginBottom: '15px',
  },
  messenger: {
    height: 'calc(100vh - 160px)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContentLeft: {
    marginLeft: '10px',
    padding: '5px 0px 5px 15px',
    backgroundColor: 'lightgrey',
    borderRadius: '20px',
    width: '185px',
    wordBreak: 'break-all',
  },
  messageContentRight: {
    marginRight: '10px',
    padding: '5px 15px',
    backgroundColor: '#306EFF',
    color: 'white',
    borderRadius: '20px',
    width: '185px',
    wordBreak: 'break-all',
  },
  nametag: {
    marginLeft: '60px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '12px',
  },
  avatar: {
    height: '36px',
    width: '36px',
    borderRadius: '50%',
  },
  topTimeBar: {
    textAlign: 'center',
    marginTop: '15px',
    marginBottom: '15px',
    color: 'rgba(0, 0, 0, 0.28)',
  },
  bottomBarWrapper: {
    position: 'fixed',
    bottom: '0px',
    height: '47px',
    borderTop: '1px solid rgba(0, 0, 0, 0.28)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  bottomInputBar: {
    width: '80%',
    height: '47px',
    marginLeft: '20px',
  },
  sendButton: {
    width: '20%',
    color: 'rgba(0, 0, 0, 0.28)',
    textTransform: 'none',
    fontSize: '16px',
  },
});

class ItineraryManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: [[0, "火車訂票"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"],
        [1, "請問酒店怎麼樣?"], [1, "Testinggggggggggggggggggggggggggggggggggggggggggggggggggg"],
        [0, "火車訂票"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"]],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleClick() {
    const { input, data } = this.state;
    if (input !== '') {
      const dummy = [1];
      dummy.push(input);
      data.push(dummy);
      this.setState({
        input: '',
      });
    }
  }

  scrollToBottom() {
    const { scrollHeight } = this.messageList;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    if (maxScrollTop > 0) {
      this.messageList.scrollTop = maxScrollTop;
    }
  }

  render() {
    const { classes } = this.props;

    const { data, input } = this.state;

    return (
      <div className={classes.root}>
        <div
          className={classes.messenger}
          ref={(div) => {
            this.messageList = div;
          }}
        >
          <Typography variant="body1" className={classes.topTimeBar}>
            Today at 9:30 AM
          </Typography>
          {
            data.map((d, i) => (
              d[0] === 0
                ? (
                  <div className={classes.nameWrapperLeft}>
                    <Typography className={classes.nametag}>
                      課程管理人員
                    </Typography>
                    <div className={classes.message}>
                      <CardMedia
                        className={classes.avatar}
                        image="https://www.w3schools.com/howto/img_avatar.png"
                      />
                      <Typography
                        variant="subheading"
                        className={classes.messageContentLeft}
                      >
                        {d[1]}
                      </Typography>
                    </div>
                  </div>
                )
                : (
                  <div className={classes.nameWrapperRight}>
                    <div className={classes.message}>
                      <Typography
                        variant="subheading"
                        className={classes.messageContentRight}
                      >
                        {d[1]}
                      </Typography>
                      <CardMedia
                        className={classes.avatar}
                        image="https://www.w3schools.com/howto/img_avatar.png"
                      />
                    </div>
                  </div>
                )
            ))
          }
        </div>
        <div className={classes.bottomBarWrapper}>
          <Input
            placeholder="Type a message..."
            disableUnderline
            value={input}
            className={classes.bottomInputBar}
            onChange={this.handleInput}
          />
          <Button className={classes.sendButton} onClick={this.handleClick}>
            Send
          </Button>
        </div>
      </div>
    );
  }
}

ItineraryManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItineraryManagement);
