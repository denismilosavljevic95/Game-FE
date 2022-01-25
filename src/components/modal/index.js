import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
table: {
    minWidth: 650,
},
});

function ModalCustom({ open, handleClose, logs }) {
    const classes = useStyles();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <p style={{textAlign: 'center'}}>Battle Log</p>
          {Array.isArray(logs) && logs.length > 0 ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Log #</TableCell>
                    <TableCell align="right">Damage</TableCell>
                    <TableCell align="right">Attacker</TableCell>
                    <TableCell align="right">Defender</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {logs.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="right">{item.damage}</TableCell>
                      <TableCell align="right">{item.attactID}</TableCell>
                      <TableCell align="right">{item.defenseID}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Box>
      </Modal>
    </>
  );
}

export default connect((state) => state)(ModalCustom);
