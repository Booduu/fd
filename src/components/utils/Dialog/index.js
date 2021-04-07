import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { AdminLives, AdminDiscography, AdminShop } from '../../admin/index';
import { connect } from 'react-redux';
import { closeDialog } from '../../../store/actions';
import PropTypes from 'prop-types';
 import style from './Dialogs.module.scss';



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
        fontSize="large" 
        onClick={handleClickOpen} 
        className={[style.icon, style.AddIcon].join(' ')}
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

        <span  style={{ color: '#ff7675' }}>Add {message}</span>
    </div>
  );
});


Dialogs.propTypes = {
  name: PropTypes.string,
  deleteAlbum: PropTypes.func,
  closeDialog: PropTypes.func.isRequired,
  dialogIsOpen: PropTypes.bool.isRequired,
  editingData: PropTypes.object,
}

Dialogs.defaultProps = {
  editingData: { },
};

export default connect(state => ({
  dialogIsOpen: state.dialogsReducer.dialogIsOpen,
  editingData: state.dialogsReducer.editingData,
}), {
  closeDialog,
})(Dialogs);
