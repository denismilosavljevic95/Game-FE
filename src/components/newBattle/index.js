import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewBattle({open, handleClose, handleConfirm}) {
    const [name, handleName] = useState("");

    useEffect(() => {
        handleName("");
    }, [open])
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
            Add battle name!
          </Typography>
          <div style={{marginTop: "30px"}}>
            <TextField
                label="Name"
                id="outlined-size-small"
                size="small"
                value={name}
                fullWidth
                onChange={(e) => handleName(e.target.value)}
                />
          </div>
          <Typography sx={{ mt: 4 }}>
              <Button variant="contained" onClick={() => handleConfirm(name)} style={{marginRight: "5px"}} disabled={!name ? true : false}>Save</Button>
              <Button variant="contained" onClick={() => handleClose()}>Cancel</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}