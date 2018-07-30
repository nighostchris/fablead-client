import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  CardMedia, Typography,
} from '@material-ui/core';

const styles = theme => ({
  nameWrapperLeft: {
    marginLeft: '20px',
  },
  nameWrapperRight: {
    float: 'right',
    marginRight: '20px',
  },
  messenger: {
    position: 'relative',
    top: '10px',
    height: '300px',
    overflowY: 'auto',
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
});

class ItineraryManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [[0, "火車訂票"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"], [1, "請問酒店怎麼樣?"],
        [1, "請問酒店怎麼樣?"], [1, "Testinggggggggggggggggggggggggggggggggggggggggggggggggggg"]],
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const { scrollHeight } = this.messageList;
    const height = this.messageList.clientHeight;
    console.log(scrollHeight);
    console.log(height);
    const maxScrollTop = scrollHeight - height;
    if (maxScrollTop > 0) {
      this.messageList.scrollTop = maxScrollTop;
    }
  }

  render() {
    const { classes } = this.props;

    const { data } = this.state;

    return (
      <div
        className={classes.messenger}
        ref={(div) => {
          this.messageList = div;
        }}
      >
        <Typography variant="body1">
          Today at 9:30 AM
        </Typography>
        {
          data.map((d, i) => (
            d[0] === 0
              ? (
                <div
                  className={classes.nameWrapperLeft}
                  style={{ marginBottom: '10px' }}
                >
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
                <div
                  className={classes.nameWrapperRight}
                  style={{ marginBottom: i !== data.length - 1 ? '10px' : undefined }}
                >
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
    );
  }
}

ItineraryManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItineraryManagement);
