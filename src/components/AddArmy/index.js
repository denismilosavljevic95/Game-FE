import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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

export default function AddArmy({ open, handleClose, handleConfirm }) {
  const [name, handleName] = useState("");
  const [units, handleUnits] = useState(0);
  const [strategyID, handleStrategyID] = useState(1);

  useEffect(() => {
    handleName("");
    handleUnits(0);
    handleStrategyID(1);
  }, [open]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Army!
          </Typography>
          <div style={{ marginTop: "30px" }}>
            <TextField
              label="Name"
              id="outlined-size-small"
              size="small"
              value={name}
              fullWidth
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <TextField
              label="Units"
              id="outlined-size-small"
              size="small"
              value={units}
              fullWidth
              onChange={(e) => handleUnits(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Strategy</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={strategyID}
                  label="Strategy"
                  fullWidth
                  onChange={(e) => handleStrategyID(e.target.value)}
                >
                  <MenuItem value={1}>Random</MenuItem>
                  <MenuItem value={2}>Weakest</MenuItem>
                  <MenuItem value={3}>Strongest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <Typography sx={{ mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => handleConfirm({ name, units, strategyID })}
              style={{ marginRight: "5px" }}
              disabled={!!name && !!units && !!strategyID ? false : true}
            >
              Save
            </Button>
            <Button variant="contained" onClick={() => handleClose()}>
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
