import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { List, ListItem, ListItemText } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import FooterBar from './FooterBar';
import { CardActions } from '@material-ui/core';

const styles = theme => ({
    topBar: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    searchButton: {
        position: 'absolute',
        right: '10px',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 0px 0px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    },
    enterButton: {
        backgroundColor: theme.palette.secondary.main
    },
    enterButtonHidden:{
        color: theme.palette.secondary.main,
        fontSize:'30px',
        fontWeight: 'bold'
    },
    cardWrapper:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    card: {
        width: '200px',
        height: '250px',
        boxShadow: '1px 4px 5px',
        '&:nth-of-type(even)': {
            marginLeft: '50px'
        }
    },
    libraryWrapper: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    libraryCard: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.default
        },
    },
    libraryText: {
        marginLeft: '30px',
        fontWeight: 'bold',
        fontSize: '16px'
    },
    addButton: {
        position: 'absolute',
        bottom: '72px',
        right: '32px',
        [theme.breakpoints.up('md')]: {
          display: 'none'
        }
    },
    createButton: {
        float: 'right',
        marginTop: '80px',
        marginRight: '10%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
});

class LibraryPage extends React.Component{
   render(){
        const { classes } = this.props;    

        return(
            <div>
                <div className={ classes.topBar }>
                    Library
                    <Button color="secondary" className={ classes.searchButton } variant="fab" aria-label="help">
                        <SearchIcon />
                    </Button>
                </div>
                <div className={ classes.cardWrapper }>
                    <Card className={ classes.card }>
                        <CardContent>
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>課程教材</p>
                            <hr/>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center', marginTop: '50px' }}>
                            <Button className={ classes.enterButton } variant="fab">
                                <KeyboardArrowRight style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }} />
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={ classes.card }>
                        <CardContent>
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>演講資料</p>
                            <hr/>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center', marginTop: '50px' }}>
                            <Button className={ classes.enterButton } variant="fab">
                                <AddIcon style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }} />
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className={ classes.libraryWrapper }>
                    <List component="nav">
                        <ListItem button className={ classes.libraryCard }>
                            <ListItemText className={ classes.libraryText } primary="課程教材" />
                            <IconButton style={{ width: '30px', height: '30px' }}>
                                <KeyboardArrowRight className={ classes.enterButtonHidden } />
                            </IconButton>
                        </ListItem>
                        <ListItem button className={ classes.libraryCard }>
                            <ListItemText className={ classes.libraryText } primary="演講資料" />
                            <IconButton className={ classes.enterButton } style={{ width: '20px', height: '20px', marginRight: '5px' }}>
                                <AddIcon style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }} />
                            </IconButton>
                        </ListItem>
                    </List>
                </div>
                <Button className={ classes.createButton } variant="contained" color="secondary">
                    Create
                </Button>
                <Button color="secondary" className={ classes.addButton } variant="fab" aria-label="help">
                    <AddIcon />
                </Button>
                <FooterBar bottomValue = {3} />
            </div>
        );
    }
}

LibraryPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LibraryPage);

