import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

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

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric>Seminar Name</CustomTableCell>
            <CustomTableCell numeric>Teacher Name</CustomTableCell>
            <CustomTableCell numeric>Location</CustomTableCell>
            <CustomTableCell numeric>Date</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell numeric style={{backgroundColor: 'gray', color: 'white'}}>{n.type}</CustomTableCell>
                <CustomTableCell numeric>{n.seminarName}</CustomTableCell>
                <CustomTableCell numeric>{n.teacherName}</CustomTableCell>
                <CustomTableCell numeric>{n.Location}</CustomTableCell>
                <CustomTableCell numeric>{n.Date}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);