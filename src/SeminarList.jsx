import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SeminarListTablePagination extends React.Component {
  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

SeminarListTablePagination.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,

    [theme.breakpoints.down('xs')]: {
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
  tableView: {
    root: {
    },
    row: {
    },
    cell: {
    },
    pagination: {
      display: 'flex'
    },
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },

  card: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'inline',
    },
  }
});

const tablePaginationActionStyle = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

const SeminarListTablePaginationWrapped = withStyles(tablePaginationActionStyle, { withTheme: true })(
  SeminarListTablePagination,
);

let id = 0;

function createData(type, seminarName, teacherName, Location, Date) {
  id += 1;
  return { type, seminarName, teacherName, Location, Date};
}

const data = [
  createData('Seminar', 'Semiar 0', 'Teacher 0', 'Beijing', '2018-06-20'),
  createData('Training', 'Semiar 1', 'Teacher 1', 'Hong Kong', '2018-06-15'),
  createData('Consulting', 'Semiar 2', 'Teacher 2', 'Shanghai', '2018-06-10'),
  createData('Fablead', 'Semiar 3', 'Teacher 3', 'Hong Kong', '2018-06-01')
];

class SeminarList extends React.Component {
  tableView(classes) {
    return (
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Seminar Name</TableCell>
            <TableCell numeric>Teacher Name</TableCell>
            <TableCell numeric>Location</TableCell>
            <TableCell numeric>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow className={classes.row} key={n.seminarName}>
              <TableCell numeric>{n.seminarName}</TableCell>
              <TableCell numeric>{n.teacherName}</TableCell>
              <TableCell numeric>{n.Location}</TableCell>
              <TableCell numeric>{n.Date}</TableCell>
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
              ActionsComponent={SeminarListTablePaginationWrapped}
            />
          </TableRow>
        </TableFooter>
      </Table>
    );
  }

  controlBar(classes) {
    return (
      <div className={classes}>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <Button className="create-button" variant="contained" style={{ backgroundColor: 'mediumseagreen', color: 'white' }}>
              + Create
            </Button>
          </Grid>
          <Grid item xs={7} />
          <Grid item xs={2} justify-content="flex-end">
            <TextField
              fullWidth={true}
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
            <NativeSelect fullWidth={true}>
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Grid>
        </Grid>
      </div>
    );
  }

  Cards(classes) {
    return (
      <div className={classes}>
        {data.map(n => (
          <Card className={classes.card} key={n.seminarName}>
            <CardContent>
              <Grid container={24}>
                <Grid item xs={8}>
                  <Typography>
                    {n.seminarName}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    {n.Date}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>
                    {n.teacherName}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    {n.Location}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.controlBar(classes.controlBar)}

        <Paper elevation={1} className={classes.tableContainer}>
          {this.tableView(classes.tableView)}
        </Paper>
        <div className={classes.card}>
          {this.Cards(classes.card)}
        </div>
      </div>
    );
  }
}

SeminarList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeminarList);
