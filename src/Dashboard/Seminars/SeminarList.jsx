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
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  frontCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'darkgrey',
    width: '80px',
    borderRadius: '0px',
    textAlign: 'center',
    '& > h3': {
      color: 'white',
      fontWeight: 'unset',
      '&:first-child': {
        marginBottom: '5px',
      },
      '&:last-child': {
        marginTop: '5px',
      },
    },
  },
  card: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default,
    },
    flex: '1',
    flexGrow: '1',
    borderRadius: '0px',
    textDecoration: 'none',
    boxShadow: '0px 0px 0px',
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

function createData(type, seminarName, teacherName, Location, Date, Countdown) {
  return {
    type, seminarName, teacherName, Location, Date, Countdown,
  };
}

const data = [
  createData('Seminar', 'Semiar Name', 'Chan Li Li', '北京', '6月20日', '10 days'),
  createData('Training', 'Semiar Name', 'Yuen Ka Yan', '香港', '6月15日', '5 days'),
  createData('Consulting', 'Semiar Name', 'Wong Man Man', '上海', '6月10日', '0 days'),
  createData('Fablead', 'Semiar Name', 'Sze Lai Yu', '香港', '6月1日', 'Expired'),
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
          <div className={classes.cardWrapper}>
            {data.map((n, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                <Card className={classes.frontCard} key={i * 80}>
                  <Typography variant="subheading">
                    Seminar
                  </Typography>
                  <Typography variant="subheading">
                    {n.Countdown}
                  </Typography>
                </Card>
                <Card className={classes.card} key={n.seminarName}>
                  <CardContent style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className={classes.rowWrapper}>
                      <div className={classes.row} style={{ marginBottom: '2px', alignItems: 'center' }}>
                        <Typography
                          variant="subheading"
                          style={{ marginLeft: '30px' }}
                        >
                          {n.seminarName}
                        </Typography>
                        <Typography
                          variant="subheading"
                          style={{ marginRight: '30px', color: 'darkgrey', fontSize: '20px' }}
                        >
                          {n.Date}
                        </Typography>
                      </div>
                      <div className={classes.row} style={{ marginTop: '2px', alignItems: 'center' }}>
                        <Typography
                          variant="subheading"
                          style={{ marginLeft: '30px' }}
                        >
                          {n.teacherName}
                        </Typography>
                        <Typography
                          variant="subheading"
                          style={{ marginRight: '30px', color: 'darkgrey', fontSize: '20px' }}
                        >
                          {n.Location}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
