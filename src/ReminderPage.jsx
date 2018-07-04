import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterBar from './FooterBar';

const styles = theme => ({
});

class ReminderPage extends React.Component{
   render(){
       return(
           <div>
               <FooterBar bottomValue = {4} />
           </div>
       );
   }
}

ReminderPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReminderPage);

