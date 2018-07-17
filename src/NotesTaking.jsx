import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AddIcon from '@material-ui/icons/Add';
import Mail from '@material-ui/icons/MailOutline';
import Download from '@material-ui/icons/GetApp';
import TrashCan from '@material-ui/icons/Delete';

import { Link } from 'react-router-dom';

const styles = theme => ({
  basicInfo: {
    marginTop: '20px',
    alignItems: 'center',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  leftColumn: {
    flexGrow: '1',
    marginLeft: '50px',
  },
  rightColumn: {
    flexGrow: '7',
    textAlign: 'center',
  },
  seperateBar: {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'darkgrey',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '40px',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '0',
    [theme.breakpoints.up('md')]: {
      width: '600px',
    },
  },
  document: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'gainsboro',
    [theme.breakpoints.up('md')]: {
      width: '600px',
      borderRadius: '20px',
    },
  },
  documentMargin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    backgroundColor: 'gainsboro',
    [theme.breakpoints.up('md')]: {
      width: '600px',
      borderRadius: '20px',
    },
  },
  documentInfo: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '3',
  },
  createButton: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    marginBottom: '30px',
    marginTop: '30px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '10px',
      float: 'right',
      right: '300px',
      width: '120px',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  addButton: {
    position: 'absolute',
    bottom: '72px',
    right: '32px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  editBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'right',
    marginBottom: '10px',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      width: '600px',
      borderRadius: '15px',
    },
  },
  label: {
    flexDirection: 'column',
  },
});

class NotesTaking extends React.Component {
  constructor(props) {
    super(props);
    const array = new Array(2);
    for (let i = 0; i < array.length; i++) array[i] = false;
    this.state = {
      expandControl: array,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const array = this.state.expandControl;
    array[key] = !array[key];
    this.setState({
      expandControl: array,
    });
  }

  render() {
    const { classes } = this.props;

    const document = [];

    for (let i = 0; i < 2; i++) {
      document.push(
        <div>
          <div key={i} className={this.state.expandControl[i] == true ? classes.document : classes.documentMargin} onClick={() => { this.handleClick(i); }}>
            <div style={{ flexGrow: '1', textAlign: 'center' }}>
              <img src="https://www.zamzar.com/images/filetypes/jpg.png" width="42px" height="42px" />
            </div>
            <div className={classes.documentInfo}>
              <p>
123.jpg
              </p>
              <p>
2.1MB
              </p>
            </div>
            <div style={{ flexGrow: '1' }}>
              <p>
6月18日
              </p>
            </div>
          </div>
          {
            this.state.expandControl[i] == true
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
        </div>,
      );
    }

    const elements = document.map((document, i) => (
      <div key={i} className={classes.documentWrapper}>
        {document}
      </div>
    ));

    return (
      <div className={classes.root}>
        <div className={classes.basicInfo}>
          <div className={classes.infoWrapper}>
            <p className={classes.leftColumn}>
Name
            </p>
            <p className={classes.rightColumn}>
Seminar 1
            </p>
          </div>
          <div className={classes.infoWrapper}>
            <p className={classes.leftColumn}>
Type
            </p>
            <p style={{ flexGrow: '1', textAlign: 'center' }}>
Seminar
            </p>
            <Button style={{ width: '20%' }}>
              <KeyboardArrowRight className={classes.rightArrow} />
            </Button>
          </div>
          <div className={classes.infoWrapper}>
            <p className={classes.leftColumn}>
Teacher
            </p>
            <div className={classes.rightColumn}>
              <p>
Peter Man
              </p>
              <p>
Mary Lee
              </p>
              <p>
John Wong
              </p>
            </div>
          </div>
          <div className={classes.seperateBar}>
            <p style={{ marginLeft: '20px' }}>
Notes
            </p>
          </div>
          <div className={classes.card}>
            <Card className={classes.cardWrapper}>
              <p style={{ flexGrow: '3', textAlign: 'center' }}>
Note 1
              </p>
              <Button component={Link} to="/notes" style={{ flexGrow: '1' }}>
                <KeyboardArrowRight className={classes.rightArrow} />
              </Button>
            </Card>
            <Card className={classes.cardWrapper}>
              <p style={{ flexGrow: '3', textAlign: 'center' }}>
Note 2
              </p>
              <Button component={Link} to="/notes" style={{ flexGrow: '1' }}>
                <KeyboardArrowRight className={classes.rightArrow} />
              </Button>
            </Card>
          </div>
          <div className={classes.seperateBar}>
            <p style={{ marginLeft: '20px' }}>
Document
            </p>
          </div>
          <div className={classes.documentWrapper}>
            { elements }
          </div>
          <Button className={classes.createButton}>
            Create
          </Button>
          <Button color="secondary" className={classes.addButton} variant="fab" aria-label="help" component={Link} to="/addseminar">
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}

NotesTaking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotesTaking);
