import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterBar from './FooterBar';

const styles = theme => ({
    topBar: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: 'bold'
    },
});

class LibraryPage extends React.Component{
   render(){
        const { classes } = this.props;    

        return(
            <div>
                <div className={ classes.topBar }>
                    Library
                </div>
                <FooterBar bottomValue = {3} />
            </div>
        );
    }
}

LibraryPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LibraryPage);

