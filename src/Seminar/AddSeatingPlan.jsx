import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  body: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '700px',
    },
  },
  divider: {
    height: '2px',
  },
  list: {
    backgroundColor: 'white',
  },
  listItemLeft: {
    marginLeft: '30px',
    fontSize: '18px',
  },
  listItemRight: {
    textAlign: 'right',
    marginRight: '30px',
    fontSize: '18px',
  },
  createButton: {
    [theme.breakpoints.up('md')]: {
      borderRadius: '10px',
      display: 'block',
      margin: '0 auto',
      marginTop: '10px',
      marginBottom: '10px',
      width: '360px',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      bottom: '0px',
      position: 'absolute',
      width: '100%',
      height: '60px',
      fontSize: '20px',
    },
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

class AddSeatingPlan extends React.Component {
  render() {
    const { classes } = this.props;

    const leftColumn = ['總長', '投影離牆', '投影到第1排', '18排(1.05)', '投影中空', '離後牆', '總寛', '桌長1.8', '平均間距0.8'];

    const rightColumn = ['25.00', '0.60', '3.50', '18.90', '1.30', '0.70', '11.80', '7.20', '4.00', '0.60'];

    return (
      <div className={classes.body}>
        <List className={classes.list}>
          {
            rightColumn.map((column, i) => (
              <div key={i}>
                <ListItem>
                  <ListItemText primary={i === rightColumn.length - 1 ? '' : leftColumn[i]} classes={{ primary: classes.listItemLeft }} />
                  <ListItemText primary={column} classes={{ primary: classes.listItemRight }} />
                </ListItem>
                {
                  i === rightColumn.length - 1 ? undefined
                    : <Divider inset component="li" className={classes.divider} />
                }
              </div>
            ))
          }
        </List>
        <Button className={classes.createButton}>
            Create
        </Button>
      </div>
    );
  }
}

AddSeatingPlan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSeatingPlan);
