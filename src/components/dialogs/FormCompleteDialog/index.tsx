import { FC } from 'react';
import { Button, DialogActions, DialogContent, Divider, Typography } from '@mui/material';
import BootstrapDialogTitle from '../BootstrapDialogTitle';
import BootstrapDialog from '@components/dialogs/BootstrapDialog';

interface Props {
  onClose: () => void;
  open: boolean;
}

const FormCompleteDialog: FC<Props> = ({ onClose, open }) => {
  return (
    <BootstrapDialog onClose={onClose} aria-labelledby='customized-dialog-title' open={open}>
      <BootstrapDialogTitle id='customized-dialog-title'>Form Completed</BootstrapDialogTitle>
      <Divider />
      <DialogContent>
        <Typography gutterBottom>Thank you for completing the form! We will get back to you shortly!</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Done
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default FormCompleteDialog;
