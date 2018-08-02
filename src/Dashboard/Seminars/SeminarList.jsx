import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableFooter, TablePagination, TableRow,
  Button, Card, CardContent, Grid, InputAdornment, NativeSelect, Paper, TextField,
  List, ListItem, Typography,
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

    [theme.breakpoints.down('sm')]: {
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
    height: '80px',
    width: '100px',
    borderRadius: '0px',
    textAlign: 'center',
    '& > h3': {
      color: 'white',
      fontWeight: '300',
      '&:first-child': {
        marginBottom: '5px',
        fontSize: '18px',
      },
      '&:last-child': {
        marginTop: '5px',
        fontSize: '14px',
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
    height: '80px',
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightColumnTypography: {
    marginRight: '30px',
    color: 'darkgrey',
    fontSize: '18px',
    fontWeight: '100',
  },
});

function createData(type, seminarName, teacherName, Location, Date, Countdown) {
  return {
    type, seminarName, teacherName, Location, Date, Countdown,
  };
}

const data = [
  createData('Seminar', 'Semiar Name', 'Chan Li Li', '北京', '6月20日', '剩下: 10天'),
  createData('Training', 'Semiar Name', 'Yuen Ka Yan', '香港', '6月15日', '剩下: 5天'),
  createData('Consulting', 'Semiar Name', 'Wong Man Man', '上海', '6月10日', '已完成'),
  createData('Fablead', 'Semiar Name', 'Sze Lai Yu', '香港', '6月1日', '已完成'),
];

class SeminarList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (d) => {
    localStorage.setItem('seminarDetail', JSON.stringify(d));
  }

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
                {data.map((n, i) => (
                  <TableRow className={classes.tableRow} key={i}>
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
            <List style={{ padding: '0px' }}>
              {data.map((n, i) => (
                <ListItem
                  key={i}
                  style={{ display: 'flex', flexDirection: 'row', padding: '0px' }}
                  component={Link}
                  to="/basicinfo"
                  onClick={() => this.handleClick(n)}
                >
                  <Card className={classes.frontCard}>
                    <Typography
                      variant="subheading"
                      className={classes.frontCardTypography}
                    >
                      Seminar
                    </Typography>
                    <Typography
                      variant="subheading"
                      className={classes.frontCardTypography}
                    >
                      {n.Countdown}
                    </Typography>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent style={{ paddingBottom: '0px', paddingTop: '0px' }}>
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
                            className={classes.rightColumnTypography}
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
                            className={classes.rightColumnTypography}
                          >
                            {n.Location}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
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
