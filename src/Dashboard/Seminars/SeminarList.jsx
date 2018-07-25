import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableFooter, TablePagination, TableRow,
  Button, Card, CardContent, Grid, InputAdornment, NativeSelect, Paper, TextField,
  Typography,
} from '@material-ui/core';
import {
  Search as SearchIcon,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';
import SeminarListTablePagination from './SeminarListTablePagination';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
  },
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  tableContainer: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  tableView: {
  },
  cardView: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexFlow: 'column',
      position: 'relative',
      top: '30px',
    },
  },
  card: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    boxShadow: '0px 0px 0px',
  },
});

function createData(type, seminarName, teacherName, Location, Date) {
  return {
    type, seminarName, teacherName, Location, Date,
  };
}

const data = [
  createData('Seminar', 'Semiar 0', 'Teacher 0', 'Beijing', '2018-06-20'),
  createData('Training', 'Semiar 1', 'Teacher 1', 'Hong Kong', '2018-06-15'),
  createData('Consulting', 'Semiar 2', 'Teacher 2', 'Shanghai', '2018-06-10'),
  createData('Fablead', 'Semiar 3', 'Teacher 3', 'Hong Kong', '2018-06-01'),
];

class SeminarList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <div className={classes.controlBar}>
            <Grid container spacing={24} style={{ marginTop: '0px' }}>
              <Grid item xs={2}>
                <Button className="create-button" variant="contained" color="secondary" component={Link} to="/addseminar">
                  + Create
                </Button>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2} justify-content="flex-end">
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <NativeSelect fullWidth>
                  <option value="">
                    None
                  </option>
                  <option value={10}>
                    Ten
                  </option>
                  <option value={20}>
                    Twenty
                  </option>
                  <option value={30}>
                    Thirty
                  </option>
                </NativeSelect>
              </Grid>
            </Grid>
          </div>
          <Paper elevation={1} className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell numeric>
                    Seminar Name
                  </TableCell>
                  <TableCell numeric>
                    Teacher Name
                  </TableCell>
                  <TableCell numeric>
                    Location
                  </TableCell>
                  <TableCell numeric>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(n => (
                  <TableRow className={classes.tableRow} key={n.seminarName}>
                    <TableCell numeric>
                      {n.seminarName}
                    </TableCell>
                    <TableCell numeric>
                      {n.teacherName}
                    </TableCell>
                    <TableCell numeric>
                      {n.Location}
                    </TableCell>
                    <TableCell numeric>
                      {n.Date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    colSpan={4}
                    count={25}
                    rowsPerPage={5}
                    rowsPerPageOptions={[]}
                    page={0}
                    ActionsComponent={SeminarListTablePagination}
                    onChangePage={() => {}}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
          <div className={classes.cardView}>
            {data.map(n => (
              <Card className={classes.card} key={n.seminarName}>
                <CardContent>
                  <Grid container={24}>
                    <Grid item xs={8}>
                      <Typography variant="title" gutterBottom>
                        {n.seminarName}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" gutterBottom>
                        {n.Date}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="subheading" gutterBottom>
                        {n.teacherName}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" gutterBottom>
                        {n.Location}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

SeminarList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeminarList);
