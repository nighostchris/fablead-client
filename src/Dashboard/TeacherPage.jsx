import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  teacherWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px'
  },
  teacherCard: {
    width: '700px',
    textAlign: 'center',
    height: '50px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  createButton: {
    float: 'right',
    marginTop: '40px',
    marginRight: '20%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  addButton: {
    position: 'absolute',
    bottom: '72px',
    right: '32px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class TeacherPage extends React.Component{
  render(){
    const { classes } = this.props;

    const data = ["Chan Li Li", "Yuen Ka Yan", "Wong Man Man", "Sze Lai Yu"];

    return(
      <div>
        <div className={ classes.teacherWrapper }>
          <List component="nav">
            {
              data.map((data, i) => {
                return (
                  <ListItem key={i} button className={ classes.teacherCard }>
                    <ListItemText primary={ data } />
                  </ListItem>
                );
              })
            }
          </List>
        </div>
        <Button className={ classes.createButton } variant="contained" color="secondary">
                    Create
        </Button>
        <Button color="secondary" className={ classes.addButton } variant="fab" aria-label="help">
          <AddIcon />
        </Button>
      </div>
    );
  }
}

TeacherPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeacherPage);

