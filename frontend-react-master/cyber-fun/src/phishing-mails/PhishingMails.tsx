import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, Typography, } from "@mui/material";

interface PhishingMailsModalProps {
    isOpened: boolean;
    onConfirm: (result: number) => void;
}

const images = ["phishing00.png", "phishing01.png", "phishing02.png", "phishing03.png"];

function PhishingMailsModal({
                                isOpened,
                                onConfirm,
                            }: PhishingMailsModalProps) {
    const [imageNumber, setImageNumber] = useState(0);

    const handleButtonClick = (isPhishing: boolean) => {
        if ((isPhishing && imageNumber === 0) || (isPhishing && imageNumber === 1) || (!isPhishing && imageNumber === 2) ||
            (isPhishing && imageNumber === 3)) {
            // Der Nutzer hat die richtige Antwort gegeben
            if (imageNumber === 3) {
                // Das Spiel ist beendet (wenn imageNumber auf 2 ist, da es bei 0 beginnt)
                onConfirm(1);
            } else {
                // Zum nächsten Bild wechseln
                setImageNumber((prevNumber) => prevNumber + 1);
            }
        } else {
            // Der Nutzer hat eine falsche Antwort gegeben
            // Das Spiel startet von Neuem mit dem Bild "phishing00.png"

            setImageNumber(0);
        }
    };

    return (
        <Dialog
            open={isOpened}
            onClose={onConfirm}
            aria-labelledby="customized-dialog-title"
            sx={{
                width: "160%",
                maxWidth: "lg",
                "& .MuiDialog-paperWidthSm": {
                    maxWidth: "160%",
                },
                "& .MuiDialog-paperScrollPaper": {
                    maxHeight: "160%",
                },
            }}
        >
            <DialogTitle id="customized-dialog-title">Phishing Mails erkennen</DialogTitle>
            <DialogContent dividers>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        m: "auto",
                    }}
                >
                    <img
                        src={images[imageNumber]}
                        alt="Dein Bild"
                        style={{width: "100%"}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleButtonClick(true)}
                        sx={{mt: 2}}
                    >
                        Phishing
                    </Button>
                    <Typography variant="h6" mb={5}></Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleButtonClick(false)}
                        sx={{mt: 2}}
                    >
                        Echt
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default PhishingMailsModal;