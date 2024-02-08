import React, { useEffect, useState } from "react";
import "./LevelOne.css";
import { Tooltip } from "react-tooltip";
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Box, Button, Grid, Paper, Snackbar, Typography } from "@mui/material";
import LevelCongratulationModal from "../certificat-system/CongratulationDialog";
import LevelUnfinishedModal from "../certificat-system/CongratulationDialogUnfinished";
import { levelStart, updateLevelVariable } from '../store/counterSlice';
import TutorialDialog from "../tutorial-dialog/TutorialDialog";
import ImageMapper from "react-img-mapper";
import JSON from "./areas.json";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/lab";
import SpamEmailDialog from "../phishing-mails/SpamEmailDialog";
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
import ProgressWithLabel from "../circular-progress/ProgressWithLabel";
import { RootState } from "../store/store";

const URL = "office.jpg";
const MAP = {
    name: "my-map",
    areas: JSON
};

export default function LevelOne() {
    let executedPostItOnce = false;
    let executedComputerOnce = false;
    const [executedDeskOnce, setExecutedDeskOnce] = useState(false);
    let executedBinOnce = false;
    const [onConfirmVariable, setOnConfirmVariable] = useState(false);
    const dispatch = useDispatch();
    const [showLevelCongratulation, setLevelCongratulation] = useState<boolean>(false);
    const [showLevelUnfinishedModal, setLevelUnfinishedModal] = useState<boolean>(false);
    const [showLevelPhishingMails, setLevelPhishingMailModal] = useState<boolean>(false);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const [findings, setFindings] = useState(0);
    const [textFieldValue, setTextFieldValue] = useState('Wir beginnen das Kapitel am Arbeitsplatz');
    const [openSuccessSnackbar, setOpenSnackbarFindingSuccess] = useState(false); // snackbar
    const [openInfoSnackbar, setOpenSnackbarFindingInfo] = useState(false); // snackbar
    const [openWarningSnackbar, setOpenSnackbarFindingWarning] = useState(false); // snackbar

    // state variables
    const findingValue0 = useSelector((state: RootState) => state.counter.levels[0]?.finding0);
    const findingValue1 = useSelector((state: RootState) => state.counter.levels[0]?.finding1);
    const findingValue2 = useSelector((state: RootState) => state.counter.levels[0]?.finding2);
    const findingValue3 = useSelector((state: RootState) => state.counter.levels[0]?.finding3);
    const levelStartVariable = useSelector((state: RootState) => state.counter.levels[0]?.hasStarted);

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
            executedPostItOnce = true;
        }
        if (findingValue1 === true) {
            tmp += 1;
            executedComputerOnce = true;
        }
        if (findingValue2 === true) {
            tmp += 1;
            setPhishingTwo(true);
        }
        if (findingValue3 === true) {
            tmp += 1;
            executedBinOnce = true;
        }

        setFindings(tmp);
        initProgressBar(tmp);

        if (levelStartVariable === false) {
            setShowDialog(true);
            dispatch(levelStart({
                id: 0,
            }));
        }

    }, []);


    /*
    0: Phishing
    1: Tastatur
    2: Eimer
    3: Post-It
     */
    const handleFindingClick = (id: number) => {
        if (id === 0) {
            setTextFieldValue('• Warum sie gefährlich sind: Phishing-Mails stellen eine ernsthafte Bedrohung dar, da sie darauf abzielen, persönliche Informationen wie Passwörter und sensible Daten zu stehlen.'
                + '\n\n' +
                '• Wie sie erkennen werden: Seien Sie misstrauisch gegenüber unerwarteten E-Mails, insbesondere von unbekannten Absendern. Phishing-Mails enthalten oft gefälschte Links und täuschend echte Anfragen.'
                + '\n\n' +
                '• Vermeiden Sie Risiken: Klicken Sie nicht blind auf Links in E-Mails. Überprüfen Sie die Echtheit, indem Sie den Absender über alternative Methoden kontaktieren.'
                + '\n\n' +
                '• Bessere Lösung: Schützen Sie sich vor Phishing-Mails, indem Sie aufmerksam sind und keine persönlichen Informationen preisgeben. Verwenden Sie zusätzliche Sicherheitsmaßnahmen wie Zwei-Faktor-Authentifizierung, um Ihr Online-Konto zu schützen.');
            setPhishingTwo(true);
        } else if (id === 1) {
            setTextFieldValue('• Warum es riskant ist: Unbefugte Personen könnten auf sensible Informationen zugreifen, wenn der Bildschirm ungeschützt bleibt.'
                + '\n\n' +
                '• Bessere Lösung: Schützen Sie Ihre Daten, indem Sie sich abmelden, wenn Sie Ihren Arbeitsplatz verlassen. Das beschränkt den Zugriff auf Ihren Computer und erhöht die Sicherheit.');
            if (!executedBinOnce) {

                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedBinOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 0,
                    finding1: true,
                }));
            } else {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        } else if (id === 2) {
            setTextFieldValue('• Warum es unsicher ist: Gelöschte Dateien können oft wiederhergestellt werden und bieten keine zuverlässige Methode zur Entfernung sensibler Informationen.'
                + '\n\n' +
                '• Bessere Lösung: Verwenden Sie sichere Löschmethoden, um sicherzustellen, dass Dateien unwiderruflich zerstört werden und nicht wiederhergestellt werden können. Damit schützen Sie Ihre sensiblen Informationen effektiv.');
            if (!executedComputerOnce) {

                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedComputerOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 0,
                    finding3: true,
                }));
            } else {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        } else if (id === 3) {
            setTextFieldValue('• Warum es problematisch ist: Klartext-Passwörter sind leicht lesbar und können von unbefugten Personen mühelos missbraucht werden.'
                + '\n\n' +
                '• Bessere Lösung: Erhöhen Sie Ihre Sicherheit, indem Sie Passwort-Manager verwenden. Diese Tools generieren und speichern sichere, verschlüsselte Passwörter für Sie');

            if (!executedPostItOnce) {

                setOpenSnackbarFindingSuccess(true); // snackbar shows succesfully finding

                executedPostItOnce = true;
                updateTimer();
                dispatch(updateLevelVariable({
                    id: 0,
                    finding0: true,
                }));
            } else {
                setOpenSnackbarFindingInfo(true); // snackbar shows info for already found
            }
        }
    };

    const [showPhishingTwo, setPhishingTwo] = useState<boolean>(false);
    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

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
                alignItems="center">
                <Grid item>
                    <Typography variant={"h4"}>Level Arbeitsplatz</Typography>
                </Grid>
                <Grid item>
                    <ProgressWithLabel value={progress}/>
                </Grid>

                <Grid container justifyContent="space-evenly" alignItems="center" direction="row">
                    <Grid item>
                        <ImageMapper
                            src={URL}
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

                    <Button startIcon={<SchoolIcon/>} variant="outlined" sx={{marginRight: 2}}
                            onClick={() => openDialog()}>
                        Anleitung
                    </Button>


                    <Button variant="outlined" sx={{
                        margin: '30px',
                        color: findings === 4 ? 'white' : 'black',
                        backgroundColor: findings === 4 ? 'green' : 'white',
                        '&:hover': {
                            backgroundColor: findings === 4 ? 'darkgreen' : 'grey',
                        },
                    }} onClick={() => {
                        if (findings === 4) {
                            setLevelCongratulation(true);
                        } else {
                            setLevelUnfinishedModal(true);
                        }
                    }} endIcon={<SendIcon/>}>
                        Level abschließen
                    </Button>
                </Grid>
            </Grid>

            <Tooltip id="clear-pw"/>
            <Tooltip id="computer"/>
            <Tooltip id="documents-desk"/>
            <Tooltip id="documents-bin"/>

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

            <SpamEmailDialog
                isOpened={showPhishingTwo}
                onConfirm={(result: boolean) => {
                  //                                                                                                                                                  setPhishingTwo(false);
                    setOnConfirmVariable(result);

                    setPhishingTwo(false)


                    if (!executedDeskOnce && result) {

                        setOpenSnackbarFindingSuccess(true);

                        setExecutedDeskOnce(true);
                        updateTimer();
                        dispatch(updateLevelVariable({
                            id: 0,
                            finding2: true,
                        }));
                    } else if (executedDeskOnce)
                        setOpenSnackbarFindingInfo(true);
                    else
                        setOpenSnackbarFindingWarning(true);
                }}></SpamEmailDialog>

            <LevelUnfinishedModal
                isOpened={showLevelUnfinishedModal}
                onConfirm={() => setLevelUnfinishedModal(false)}
            />

            <TutorialDialog
                levelName={"am Arbeitsplatz"}
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
