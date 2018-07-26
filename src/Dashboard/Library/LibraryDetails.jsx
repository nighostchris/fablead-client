import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Typography,
} from '@material-ui/core';
import {
  MailOutline as Mail, GetApp as Download, Delete as TrashCan,
} from '@material-ui/icons';

const styles = theme => ({
  documentWrapper: {
    '&:nth-child(even)': {
      backgroundColor: 'lightgrey',
    },
  },
  document: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '16px',
    paddingBottom: '16px',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  documentInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightDocumentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    flexGrow: '3',
  },
  editBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'right',
    backgroundColor: 'lightgrey',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  label: {
    flexDirection: 'column',
  },
});

class LibraryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandControl: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (key) => {
    const array = this.state.expandControl;
    array[key] = !array[key];
    this.setState({
      expandControl: array,
    });
  }

  render() {
    const { classes } = this.props;

    const data = [['課程相關的教材1.pdf', '35KB', '6月20日'], ['課程相關的教材1.jpg', '2.1MB', '6月18日'],
      ['課程相關的教材v2.jpg', '2.1MB', '6月19日'], ['課程相關的教材v3.jpg', '2.1MB', '6月20日']];

    return (
      <div>
        {
          data.map((d, i) => (
            <div className={classes.documentWrapper}>
              <div key={i} className={classes.document} onClick={() => this.handleClick(i)}>
                <div style={{ flex: '1', flexGrow: '1', textAlign: 'center' }}>
                  <img
                    src="https://www.zamzar.com/images/filetypes/jpg.png"
                    alt="document"
                    width="42px"
                    height="42px"
                  />
                </div>
                <div className={classes.rightDocumentWrapper}>
                  <Typography variant="subheading" style={{ marginBottom: '5px' }}>
                    {d[0]}
                  </Typography>
                  <div className={classes.documentInfo}>
                    <Typography variant="subheading">
                      {d[1]}
                    </Typography>
                    <Typography variant="subheading" style={{ marginRight: '30px' }}>
                      {d[2]}
                    </Typography>
                  </div>
                </div>
              </div>
              {
                this.state.expandControl[i] === true
                  ? (
                    <div className={classes.editBar}>
                      <Button style={{ color: 'white' }} classes={{ label: classes.label }}>
                        <Mail />
                        Send
                      </Button>
                      <Button style={{ color: 'white' }} classes={{ label: classes.label }}>
                        <Download />
                        Download
                      </Button>
                      <Button style={{ color: 'white' }} classes={{ label: classes.label }}>
                        <TrashCan />
                        Delete
                      </Button>
                    </div>
                  ) : undefined
              }
            </div>
          ))
        }
      </div>
    );
  }
}

LibraryDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryDetails);
