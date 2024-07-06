import React from 'react';

import Image from 'next/image';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

import { MdClose } from 'react-icons/md';

import DialogCloseButton from './DialogCloseButton';

import styles from './DialogQuestion.module.scss';

import Illustration from '@/assets/images/icon/icon_ask.png';

type DialogQuestionProps = {
  sizeMaxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  title: string;
  description: string;
};

const DialogQuestion = ({
  sizeMaxWidth = 'sm',
  openDialog,
  setOpenDialog,
  onSubmit,
  title,
  description,
}: DialogQuestionProps) => {
  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      sx={{
        '& .MuiDialog-paper': { overflow: 'visible' },
      }}
      scroll="body"
      maxWidth={sizeMaxWidth}
      fullWidth={true}
    >
      <DialogCloseButton onClick={() => setOpenDialog(false)} disableRipple>
        <MdClose />
      </DialogCloseButton>

      <DialogContent className={styles.dialog__content}>
        <div className={styles.dialog__content__illustrationContainer}>
          <Image
            src={Illustration}
            alt="Illustration"
            className={
              styles.dialog__content__illustrationContainer__illustration
            }
          />
        </div>
        <Typography className={styles.dialog__content__title}>
          {title}
        </Typography>

        <Typography className={styles.dialog__content__description}>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions className={styles.dialog__actions}>
        <Button
          onClick={() => setOpenDialog(false)}
          variant="contained"
          className={styles.dialog__actions__btnCancel}
        >
          Batal
        </Button>
        <Button onClick={onSubmit} variant="contained">
          Keluar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogQuestion;
