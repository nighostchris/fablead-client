import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton, List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

import { setOpenedLibrary } from '../../Redux/Action/libraryAction';

const styles = theme => ({
  enterButton: {
    color: theme.palette.secondary.main,
    fontSize: '30px',
    fontWeight: 'bold',
  },
  libraryWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  libraryCard: {
    height: '80px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  libraryText: {
    marginLeft: '30px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
});

const mapStateToProps = state => ({
  library: state.libraryReducer.library,
});

const mapDispatchToProps = dispatch => ({
  setOpenedL: name => dispatch(setOpenedLibrary(name)),
});

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (name) => {
    const { setOpenedL } = this.props;
    setOpenedL(name);
  }

  render() {
    const { classes, library } = this.props;

    return (
      <div className={classes.libraryWrapper}>
        <List style={{ paddingTop: '0px' }}>
          {
            library.details.map((d, i) => (
              <ListItem
                key={i * 20}
                button
                className={classes.libraryCard}
                component={Link}
                to="/librarydetails"
                onClick={() => this.handleClick(d.name)}
              >
                <ListItemText
                  className={classes.libraryText}
                  primary={d.name}
                  secondary={d.seminar}
                />
                <Typography variant="subheading">
                  {d.count}
                </Typography>
                <IconButton style={{ width: '30px', height: '30px' }}>
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

LibraryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  library: PropTypes.object.isRequired,
  setOpenedL: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(LibraryPage));
