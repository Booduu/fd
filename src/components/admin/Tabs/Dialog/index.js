import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { AdminLives, AdminDiscography, AdminShop } from '../../index';
import { connect } from 'react-redux';
import { closeDialog } from '../../../../store/actions';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      '& .MuiDialog-paper': {
          backgroundColor: 'black',
      },
  },

}));
const Dialogs = React.memo(({
    name,
    setOpenDialog,
    closeDialog,
    dialogIsOpen,
    editingData,
}) => {

  const handleClickOpen = () => {
    setOpenDialog();
  };

  const handleClose = () => {
    closeDialog();
  };
  console.log('dialofg');
  return (
    <div>
      <AddIcon fontSize="large" color="primary" onClick={handleClickOpen} />
        <Dialog 
          open={dialogIsOpen} 
          onClose={handleClose} 
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
              {name === 'shows' &&  <AdminLives editingData={editingData} />}
              {name === 'disco' &&  <AdminDiscography editingData={editingData}/>}
              {name === 'shop' &&  <AdminShop editingData={editingData}/>}
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              save
            </Button>
          </DialogActions> */}
        </Dialog>
    </div>
  );
});

export default connect(state => ({
  dialogIsOpen: state.dialogsReducer.dialogIsOpen,
  editingData: state.dialogsReducer.editingData,
}), {
  closeDialog,
})(Dialogs);
