import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

const styles = theme => ({
  qrreader: {
    '& > section': {
      '& > div': {
        height: '730px !important',
        borderTop: '160px solid rgba(0, 0, 0, 0.3) !important',
        borderBottom: '225px solid rgba(0, 0, 0, 0.3) !important',
      },
      '& > video': {
        height: '730px !important',
      },
    },
  },
  resultText: {
    position: 'relative',
    left: 'calc((100% - 275px)/2)',
    zIndex: '1',
    fontSize: '30px',
    color: 'white',
    marginTop: '90px',
  },
});

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Waiting for QR Code',
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });
    }
  }

  handleError(err) {
    console.log(err);
  }

  render() {
    const { classes } = this.props;

    const { result } = this.state;

    return (
      <div>
        <QrReader
          delay={500}
          onError={this.handleError}
          onScan={this.handleScan}
          className={classes.qrreader}
        />
        <Typography className={classes.resultText}>
          {result}
        </Typography>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
