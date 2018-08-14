import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, CardMedia, Input, Typography,
} from '@material-ui/core';
import { addMessage } from '../../../Redux/Action/messageAction';
import { withCallback } from '../../../Context/BaseContext';

const styles = theme => ({
  nameWrapperLeft: {
    float: 'left',
    width: '100%',
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

const mapStateToProps = state => ({
  messages: state.messageReducer.messages,
});

const mapDispatchToProps = dispatch => ({
  addM: text => dispatch(addMessage(text)),
});

class ItineraryManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
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

  handleClick(input) {
    const { addM } = this.props;
    if (input !== '') {
      addM(input);
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
    const { classes, messages } = this.props;

    const { input } = this.state;

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
            messages.map((d, i) => (
              d.owner === 0
                ? (
                  <div key={i} className={classes.nameWrapperLeft}>
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
                        {d.text}
                      </Typography>
                    </div>
                  </div>
                )
                : (
                  <div key={i} className={classes.nameWrapperRight}>
                    <div className={classes.message}>
                      <Typography
                        variant="subheading"
                        className={classes.messageContentRight}
                      >
                        {d.text}
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
          <Button className={classes.sendButton} onClick={() => this.handleClick(input)}>
            Send
          </Button>
        </div>
      </div>
    );
  }
}

ItineraryManagement.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addM: PropTypes.func.isRequired,
};

const Comp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ItineraryManagement));

export default withCallback(Comp);
