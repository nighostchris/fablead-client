import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Divider, FormControl, IconButton, Input, List, ListItem, ListItemText, MenuItem, Select,
  Typography,
} from '@material-ui/core';
import {
  Add as AddIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  addButton: {
    backgroundColor: theme.palette.secondary.main,
    width: '26px',
    height: '26px',
  },
  addIcon: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'white',
  },
  addText: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '16px',
    marginLeft: '10px',
  },
  createButton: {
    [theme.breakpoints.up('md')]: {
      borderRadius: '10px',
      display: 'block',
      marginTop: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '200px',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      fontWeight: 'bold',
      position: 'fixed',
      bottom: '0px',
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
  divider: {
    height: '2px',
    marginLeft: '36px',
  },
  listItemRight: {
    marginRight: '50px',
    fontSize: '18px',
    minWidth: 120,
  },
  list: {
    backgroundColor: 'white',
    paddingTop: '0px',
  },
});

class AddLibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      editor: [''],
    };

    this.addEditor = this.addEditor.bind(this);
  }

  handleSeminarChange = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  handleChange = index => (event) => {
    const newEditor = this.state.editor;
    newEditor[index] = event.target.value;
    this.setState({ editor: newEditor });
  };

  addEditor() {
    const newEditor = this.state.editor;
    newEditor.push('');
    this.setState({
      editor: newEditor,
    });
  }

  render() {
    const { classes } = this.props;

    const { type, editor } = this.state;

    return (
      <div className={classes.root}>
        <List className={classes.list} style={{ paddingBottom: '0px' }}>
          <ListItem>
            <ListItemText primary="Name" />
            <Input
              placeholder="Please enter"
              disableUnderline
            />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem>
            <ListItemText primary="Seminar Specific (optional)" />
            <FormControl className={classes.listItemRight}>
              <Select
                value={type}
                onChange={this.handleSeminarChange}
                displayEmpty
                name="seminar"
              >
                <MenuItem value="">
                  <em>
                    Seminar
                  </em>
                </MenuItem>
                <MenuItem value={10}>
                  Training
                </MenuItem>
                <MenuItem value={20}>
                  Consulting
                </MenuItem>
                <MenuItem value={30}>
                  Fablead
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <List className={classes.list} style={{ marginTop: '40px' }}>
          {
            editor.map((data, i) => (
              <ListItem>
                <ListItemText primary={`Editor #${i + 1}`} />
                <FormControl className={classes.listItemRight}>
                  <Select
                    value={editor[i]}
                    onChange={this.handleChange(i)}
                    displayEmpty
                    name="editor"
                  >
                    <MenuItem value="">
                      <em>
                        Please select
                      </em>
                    </MenuItem>
                    <MenuItem value={10}>
                      Chan Li Li
                    </MenuItem>
                    <MenuItem value={20}>
                      Wong Man Man
                    </MenuItem>
                    <MenuItem value={30}>
                      Chan Li Li
                    </MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            ))
          }
          <ListItem style={{ paddingTop: '5px', paddingBottom: '5px' }}>
            <IconButton className={classes.addButton} variant="fab" onClick={this.addEditor}>
              <AddIcon className={classes.addIcon} />
            </IconButton>
            <Typography className={classes.addText}>
              Add User
            </Typography>
          </ListItem>
        </List>
        <Button className={classes.createButton}>
            Create
        </Button>
      </div>
    );
  }
}

AddLibraryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddLibraryPage);
