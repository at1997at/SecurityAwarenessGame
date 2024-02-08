import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

interface LevelUnfinishedModalProps {
  isOpened: boolean;
  onConfirm: () => void;
}

function LevelUnfinishedModal({
  isOpened,
  onConfirm,
}: LevelUnfinishedModalProps) {
  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={onConfirm}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title">Level</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="message-confirm-text">
            <Box sx={{ textAlign: "center" }}>
              <img src="congratulation_01.jpg" alt="" width={250}></img>
            </Box>
            <Typography variant="h6" mb={5}>
              Sie haben das Level noch nicht abgeschlossen.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            id="button-confirm-logout"
            color="primary"
            variant="contained"
            onClick={onConfirm}
          >
            Bestätigen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LevelUnfinishedModal;
