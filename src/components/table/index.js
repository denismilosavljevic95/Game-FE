import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const statusID = {
    1: "Ready",
    2: "In Progress",
    3: "Finished"
}

export default function SimpleTable({ data, handleOpen, handleReset, handleAttack, handleEdit }) {
  const classes = useStyles();

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Battle #</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{statusID[row.statusID]}</TableCell>
                  <TableCell align="right">
                    <Button aria-label="log" onClick={() => handleAttack(row.id)} disabled={row.statusID == 3 ? true : false}>
                      Battle
                    </Button>
                    <Button aria-label="log" onClick={() => handleOpen(row.id)} disabled={row.statusID == 1 ? true : false}>
                      Log
                    </Button>
                    <Button aria-label="edit" onClick={() => handleEdit(row.id)} disabled={row.statusID == 1 ? false : true}>
                      Edit
                    </Button>
                    <Button aria-label="reset" onClick={() => handleReset(row.id)} disabled={row.statusID == 1 ? true : false}>
                      Reset
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}
