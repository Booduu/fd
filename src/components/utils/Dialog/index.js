import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { AdminLives, AdminDiscography, AdminShop } from '../../admin/index';
import { connect } from 'react-redux';
import { closeDialog } from '../../../store/actions';


const Dialogs = React.memo(({
    name,
    setOpenDialog,
    closeDialog,
    dialogIsOpen,
    editingData,
    message,
}) => {

  const handleClickOpen = () => {
    setOpenDialog();
  };

  const handleClose = () => {
    closeDialog();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <AddIcon 
        style={{ color: '#ff7675' }} 
        fontSize="large" 
        onClick={handleClickOpen} 
      />
        <Dialog 
          open={dialogIsOpen} 
          onClose={handleClose} 
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{editingData ? 'Edit' : 'Add'}{' '}{message}</DialogTitle>
          <DialogContent>
              {name === 'shows' &&  <AdminLives editingData={editingData} />}
              {name === 'disco' &&  <AdminDiscography editingData={editingData}/>}
              {name === 'shop' &&  <AdminShop editingData={editingData}/>}
          </DialogContent>
        </Dialog>

        <span  style={{ color: '#ff7675' }} >Add {message}</span>
    </div>
  );
});

export default connect(state => ({
  dialogIsOpen: state.dialogsReducer.dialogIsOpen,
  editingData: state.dialogsReducer.editingData,
}), {
  closeDialog,
})(Dialogs);
