import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(endpoint, method, description, action) {
  return { endpoint, method, description, action };
}

const rows = [
  createData('http://localhost', 'Post', 'to get players', 'copy'),
  createData('http://localhost', 'Post', 'to get players', 'copy'),
  createData('http://localhost', 'Get', 'to get players', 'copy'),
  createData('http://localhost', 'Post', 'to get players', 'copy'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function Tables() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h5' style={{ textAlign: 'left', margin: '20px' }}>
        EndPoints
      </Typography>
      <div style={{ margin: '20px' }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: '#222',
                  }}
                >
                  End Point
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: '#222',
                  }}
                >
                  Method
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: '#222',
                  }}
                >
                  Description
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: '#222',
                  }}
                >
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.name}
                  style={{ backgroundColor: '#fff' }}
                >
                  <StyledTableCell component='th' scope='row'>
                    {row.endpoint}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>
                      {row.method === 'Post' ? (
                        <span
                          style={{
                            backgroundColor: 'green',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            color: '#fff',
                            fontWeight: '500',
                            borderRadius: '20px',
                          }}
                        >
                          {row.method}
                        </span>
                      ) : (
                        <span
                          style={{
                            backgroundColor: 'orange',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            color: '#fff',
                            fontWeight: '500',
                            borderRadius: '20px',
                          }}
                        >
                          {row.method}
                        </span>
                      )}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>{row.description}</StyledTableCell>
                  <StyledTableCell>{row.action}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
