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
import React from "react";
import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";

interface LevelCongratulationModalProps {
    isOpened: boolean;
    onConfirm: () => void;
}

function LevelCongratulationModal({
                                      isOpened,
                                      onConfirm,
                                  }: LevelCongratulationModalProps) {

    const navigate = useNavigate();
    const handleHomepage = () => navigate('/');

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
                        <Box sx={{textAlign: "center"}}>
                            <img src="congratulation_00.jpg" alt="" width={250}></img>
                        </Box>
                        <Typography variant="h6" mb={5}>
                            Sie haben das Level erfolgreich abgeschlossen.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between' }}>
                    <Button variant="contained" startIcon={<HomeIcon />} onClick={handleHomepage}>Homepage</Button>
                    <Button
                        id="button-confirm-logout"
                        color="primary"
                        variant="contained"
                        onClick={onConfirm}
                        endIcon={<SendIcon />}
                    >
                        Bestätigen
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LevelCongratulationModal;
