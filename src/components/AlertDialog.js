import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { classes } from "istanbul-lib-coverage";

import FavoriteIcon from '@material-ui/icons/Favorite';
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  
  return (
    <div>
      
      <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
        mua hơmm :) !!!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báooooo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            W ! Bạn đã mua thành công chiếc cho bạn X <FavoriteIcon color="primary"></FavoriteIcon>  !
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Giao hàng
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Tặng anh khác
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}