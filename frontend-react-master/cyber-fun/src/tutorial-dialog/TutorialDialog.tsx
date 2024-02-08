import React, { useEffect, useState } from 'react';
import { Button, ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

interface TutorialDialogProps {
    levelName: string,
    open: boolean;
    onConfirm: () => void;
    countdown: number;
}

export default function TutorialDialog({ levelName, open, onConfirm, countdown }: TutorialDialogProps) {
    const [remainingCountdown, setRemainingCountdown] = useState(countdown);


    const handleClose = () => {
        if (remainingCountdown === 0 )
            onConfirm();
    };

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout;

        if (open && remainingCountdown > 0) {
            countdownInterval = setInterval(() => {
                setRemainingCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [open, remainingCountdown, onConfirm]);

    useEffect(() => {
        if (remainingCountdown === 0) {
            // Hier wird der Button aktiviert
        }
    }, [remainingCountdown]);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Tutorial</DialogTitle>
            <DialogContent dividers>
                <Typography id="modal-title" variant="h6" component="h2">
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    Willkommen {levelName}. Sie sehen hier eine Szene, in der sich vier verschiedene Schwachstellen verbergen. Um diese zu erkennen, klicken Sie auf ein verdächtiges Element um zu sehen, was sich dahinter verbirgt.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Typography
                    variant="caption"
                    sx={{
                        color: remainingCountdown === 0 ? 'red' : 'inherit',
                        marginRight: 2,
                        marginTop: 1,
                        fontSize: remainingCountdown === 0 ? '1.2rem' : 'inherit',
                    }}
                >
                    {remainingCountdown !== 0 && `${remainingCountdown}s`}
                </Typography>
                <Button autoFocus onClick={handleClose} disabled={remainingCountdown !== 0}>
                    Bestätigen
                </Button>
            </DialogActions>
        </Dialog>
    );
}
