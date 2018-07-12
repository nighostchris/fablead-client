import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import FooterBar from './FooterBar';

const styles = theme => ({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginTop: '10px',
      alignItems: 'center'
    }
  },
  card: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default,
    },
    textDecoration: 'none',
    boxShadow: '0px 0px 0px'
  },
  firstCol: {
    marginTop: '0',
    marginBottom: '0',
    width: '40%',
    textAlign: 'center'
  },
  secondCol: {
    width: '40%',
    textAlign: 'center',
    color: 'grey',
    fontSize: '18px'
  },
  thirdCol: {
    width: '20%',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  },
  colWrapper: {
    display: 'flex', 
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    }
  },
  createButton: {
    position: 'absolute',
    marginTop: '20px',
    marginLeft: '10%',
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

function createData(type, seminarName, teacherName, Location, Date, Countdown) {
  return { type, seminarName, teacherName, Location, Date, Countdown};
}
  
const data = [
  createData('Seminar', 'Semiar Name', 'Teacher Name', '北京', '6月20日', '10 days'),
  createData('Training', 'Semiar Name', 'Teacher Name', '香港', '6月15日', '5 days'),
  createData('Consulting', 'Semiar Name', 'Teacher Name', '上海', '6月10日', '0 days'),
  createData('Fablead', 'Semiar Name', 'Teacher Name', '香港', '6月1日', 'Expired')
];

class ReminderPage extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Button className={ classes.createButton } variant="contained" color="secondary">
            Create
        </Button>
        <div className={ classes.cardWrapper }>
          {data.map(n => (
            <Card className={ classes.card } key={n.seminarName} component={ Link } to="/basicinfo" >
              <CardContent>
                <div className={ classes.colWrapper }>
                  <div className={ classes.firstCol }>
                    <p style={{ marginTop: '0', marginBottom: '0' }}>{ n.seminarName }</p>
                    <p style={{ marginBottom: '0' }}>{ n.teacherName }</p>
                  </div>
                  <div className={ classes.secondCol }>
                    <p style={{ marginTop: '0', marginBottom: '0' }}>{ n.Date }</p>
                    <p style={{ marginBottom: '0' }}>{ n.Location }</p>
                  </div>
                  <div className={ classes.thirdCol }>
                    <p>{ n.Countdown }</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button color="secondary" className={ classes.addButton } variant="fab" aria-label="help">
          <AddIcon />
        </Button>
        <FooterBar bottomValue = {4} />
      </div>
    );
  }
}

ReminderPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReminderPage);

