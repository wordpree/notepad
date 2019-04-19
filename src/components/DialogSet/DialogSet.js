import React from 'react';
import FormField from '../Form/FormField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogSet =(props)=> {
   let {data,open,onDialogClose,onDialogUpdate,onChange} = props;

   return (
      <div>
        <Dialog
          open={open}
          onClose={onDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Note</DialogTitle>
          <DialogContent>
            <FormField currentData={data} onChange={onChange}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={onDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onDialogUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
     </div>
   );
}

export default DialogSet;
