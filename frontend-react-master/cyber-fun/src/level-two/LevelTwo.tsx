import React, { useEffect, useState } from "react";
import "./LevelTwo.css";
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Box, Button, Grid, Paper, Snackbar, Typography } from "@mui/material";
import LevelCongratulationModal from "../certificat-system/CongratulationDialog";
import LevelUnfinishedModal from "../certificat-system/CongratulationDialogUnfinished";
import JSON from "./mapping-levelTwo.json";
import { useDispatch, useSelector } from 'react-redux';
import { levelStart, updateLevelVariable } from '../store/counterSlice';

import ImageMapper from "react-img-mapper";
import { Alert } from "@mui/lab";
import TutorialDialog from "../tutorial-dialog/TutorialDialog";
import ProgressWithLabel from "../circular-progress/ProgressWithLabel";
import { RootState } from "../store/store";

const OFFICE2_IMG = "office2.png";
const MAP = {
    name: "my-map",
    areas: JSON
};

export default function LevelTwo() {

    let executedUSBOnce = false;
    let executedUnknownPersonOnce = false;
    let executedCleaningListenerOnce = false;
    let executedWallInfoOnce = false;
    const [idUSB, setIdUSB] = useState(false);
    const [idUknownPerson, setIdUknownPerson] = useState(false);
    const [idCleaningListener, setIdCleaningListener] = useState(false);
    const [idWallInfo, setIdWallInfo] = useState(false);

    const [onConfirmVariable, setOnConfirmVariable] = useState(0);
    const dispatch = useDispatch();
    const [showLevelCongratulation, setLevelCongratulation] = useState<boolean>(false);
    const [showLevelUnfinishedModal, setLevelUnfinishedModal] = useState<boolean>(false);
    const [showLevelPhishingMails, setLevelPhishingMailModal] = useState<boolean>(false);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const [findings, setFindings] = useState(0);
    const [textFieldValue, setTextFieldValue] = useState('Wir beginnen das Kapitel im Gang');
    const [openSuccessSnackbar, setOpenSnackbarFindingSuccess] = useState(false); // snackbar
    const [openInfoSnackbar, setOpenSnackbarFindingInfo] = useState(false); // snackbar
    const [openWarningSnackbar, setOpenSnackbarFindingWarning] = useState(false); // snackbar

    // state variables
    const findingValue0 = useSelector((state: RootState) => state.counter.levels[1]?.finding0);
    const findingValue1 = useSelector((state: RootState) => state.counter.levels[1]?.finding1);
    const findingValue2 = useSelector((state: RootState) => state.counter.levels[1]?.finding2);
    const findingValue3 = useSelector((state: RootState) => state.counter.levels[1]?.finding3);
    const levelStartVariable = useSelector((state: RootState) => state.counter.levels[1]?.hasStarted);

    // update initialize the progress bar
    const initProgressBar = (finding: number): number => {
        if (finding == 1) {
            setProgress(() => 25)
            return 1;
        } else if (finding == 2) {
            setProgress(() => 50)
            return 2;
        } else if (finding == 3) {
            setProgress(() => 75)
            return 3;
        } else if (finding == 4) {
            setProgress(() => 100)
            return 4;
        }
        return 0;
    };
    
    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbarFindingSuccess(false);
    };


    const handleCloseInfo = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbarFindingInfo(false);
    };

    const handleCloseWarning = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbarFindingWarning(false);
    };

    const updateTimer = () => {
        setProgress((prevProgress) => prevProgress == 100 ? prevProgress : prevProgress + 25);
        setFindings((prevFindings) => prevFindings + 1);
    };

    // initialize the findings values
    useEffect(() => {
        let tmp = 0;

        if (findingValue0 === true) {
            tmp += 1;
            executedUSBOnce = true;
        }
        if (findingValue1 === true) {
            tmp += 1;
            executedWallInfoOnce = true;
        }
        if (findingValue2 === true) {
            tmp += 1;
            executedCleaningListenerOnce = true;
        }
        if (findingValue3 === true) {
            tmp += 1;
            executedUnknownPersonOnce = true;
        }

        setFindings(tmp);
        initProgressBar(tmp);

        if (levelStartVariable === false) {
            setShowDialog(true);
            dispatch(levelStart({
                id: 1,
            }));
        }

    }, []);


    /**
     * 0: USB
     * 1: Sensible Daten hängen an Wänden
     * 2: Person lauscht
     * 3: Unbefugter im Raum
     */
    const handleFindingClick = (id: number) => {
        if (id === 1) {
            setTextFieldValue('• Warum es problematisch ist: USB-Sticks können leicht verloren gehen oder gestohlen werden, wodurch sensitive Daten in falsche Hände geraten können.'
                + '\n\n' +
                '• Bessere Lösung: Verwenden Sie verschlüsselte USB-Sticks und speichern Sie sensible Daten nur verschlüsselt darauf.');

            if(!executedUSBOnce){
                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedUSBOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 1,
                    finding0: true,
                }));
            } else  {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        } else if (id === 0) {
            setTextFieldValue('• Warum es problematisch ist: Das Offenlassen von sensiblen Informationen im Gang erhöht das Risiko unbefugten Zugriffs.'
                + '\n\n' +
                '• Bessere Lösung: Sorgen Sie dafür, dass sensible Informationen sicher aufbewahrt werden und nur autorisierte Personen Zugang dazu haben.');
            if (!executedWallInfoOnce) {
                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedWallInfoOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 1,
                    finding1: true,
                }));
            } else  {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        } else if (id === 2) {
            setTextFieldValue('• Warum es problematisch ist: Eine schleichende Putzfrau könnte unbemerkt auf vertrauliche Dokumente oder Informationen zugreifen.'
                + '\n\n' +
                '• Bessere Lösung: Stellen Sie sicher, dass sensitive Informationen sicher aufbewahrt sind und der Zugang zu sensiblen Bereichen kontrolliert wird.');
            if (!executedCleaningListenerOnce) {
                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedCleaningListenerOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 1,
                    finding2: true,
                }));
            } else  {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        } else if (id === 3) {
            setTextFieldValue('• Warum es problematisch ist: Durch das Lauschen an Türen können vertrauliche Gespräche abgehört und Informationen preisgegeben werden.'
                + '\n\n' +
                '• Bessere Lösung: Sensible Gespräche sollten in geschützten Räumen stattfinden, um unbefugtes Lauschen zu verhindern.');
            if (!executedUnknownPersonOnce) {
                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedUnknownPersonOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 1,
                    finding3: true,
                }));
            } else  {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        }
    };

    useEffect(() => {
        if (findings === 4) {
            setLevelCongratulation(true);
        }
    }, [findings]);

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant={"h4"}>Level Gebäude</Typography>
                </Grid>
                <Grid item>
                    <ProgressWithLabel value={progress}/>
                </Grid>

                <Grid container justifyContent="space-evenly" alignItems="center" direction="row">
                    <Grid item>
                        <ImageMapper
                            src={OFFICE2_IMG}
                            map={MAP}
                            stayMultiHighlighted={true}
                            onClick={(_, index) => handleFindingClick(index)}
                        />
                    </Grid>
                    <Grid item sx={{width: '30%'}}>
                        <Paper sx={{p: 3, maxWidth: "400px", overflowY: "auto"}}>
                            <Typography variant="h5">Beschreibung</Typography>
                            <Typography paragraph sx={{whiteSpace: 'pre-line'}}>
                                {textFieldValue}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item>

                    <Button variant="outlined" sx={{ marginRight: 2 }}
                            onClick={() => openDialog()}>
                        Anleitung
                    </Button>

                    <Button variant="outlined" sx={{
                        margin: '30px',
                        color: findings === 4 ? 'white' : 'black', // Font color
                        backgroundColor: findings === 4 ? 'green' : 'white', // Background color
                        '&:hover': {
                            backgroundColor: findings === 4 ? 'darkgreen' : 'grey', // Change background color on hover
                        },
                    }} onClick={() => {

                        if (findings === 4) {
                            setLevelCongratulation(true);
                        } else {
                            setLevelUnfinishedModal(true);
                        }
                    }}>
                        Level abschließen
                    </Button>
                </Grid>
            </Grid>

            <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccess}>
                <Alert
                    onClose={handleCloseSuccess}
                    severity="success"
                    variant="filled"
                    style={{width: '100%', height: '100%', fontSize: '1.5rem'}}>
                    Du hast ein Finding gefunden!
                </Alert>
            </Snackbar>


            <Snackbar open={openInfoSnackbar} autoHideDuration={6000} onClose={handleCloseInfo}>
                <Alert
                    onClose={handleCloseInfo}
                    severity="info"
                    variant="filled"
                    style={{width: '100%', height: '100%', fontSize: '1.5rem'}}>
                    Du hast dieses Finding schon gefunden!
                </Alert>
            </Snackbar>


            <Snackbar open={openWarningSnackbar} autoHideDuration={6000} onClose={handleCloseWarning}>
                <Alert
                    onClose={handleCloseWarning}
                    severity="warning"
                    variant="filled"
                    style={{width: '100%', height: '100%', fontSize: '1.5rem'}}>
                    Du hast die Herausforderung nicht erfolgreich abgeschlossen!
                </Alert>
            </Snackbar>

            <LevelUnfinishedModal
                isOpened={showLevelUnfinishedModal}
                onConfirm={() => setLevelUnfinishedModal(false)}
            />

            <TutorialDialog
                levelName={"im Gebäude"}
                open={showDialog}
                onConfirm={closeDialog}
                countdown={0}
            />

            <LevelCongratulationModal
                isOpened={showLevelCongratulation}
                onConfirm={() => setLevelCongratulation(false)}
            />
        </>
    );

}
