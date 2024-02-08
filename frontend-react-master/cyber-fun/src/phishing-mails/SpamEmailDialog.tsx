import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {Typography} from "@mui/material";


interface SpamEmailDialogProps {
    isOpened: boolean;
    onConfirm: (isCorrect: boolean, isPhishing: number) => void;}
const SpamEmailDialogContainer: React.FC<SpamEmailDialogProps> = ({ isOpened, onConfirm }) => {
    const [currentEmailIndex, setCurrentEmailIndex] = useState(0);


    const emails = [
        {
            description:
                'Die Verwendung der Schreibweise "Vorname-Nachname" mit einem Bindestrich in der Anrede ist verdächtig, da diese Art der Personalisierung oft auf automatisierte Generierung aus der E-Mail selbst hinweist. Legitime Organisationen neigen dazu, korrekte und formelle Anreden zu verwenden, anstatt ungewöhnliche oder maschinengenerierte Formate. In Phishing-E-Mails wird häufig auf solche automatisierten Prozesse zurückgegriffen, um eine breite Zielgruppe anzusprechen. Das Auftreten von "Vorname-Nachname" könnte darauf hinweisen, dass die Informationen in der E-Mail nicht von einer vertrauenswürdigen Quelle stammen, und sollte daher als Warnsignal für einen möglichen Phishing-Versuch betrachtet werden.',
            from: 'DHL@noreplay.de',
            to: 'max.mueller@aol.com',
            content: '\nHallo max.mueller,\n\n'  +
                'Sie sind ausgewählt, an einer umfrage zu ihrem einkaufsverhalten mitmachen.\n' +
                'Sie haben eine chance auf gewinnen ein neues IPhone. KLICKEN SIE JETZT HIER[hier als Link].\n\n' +
                'Viele Grüße,\n' +
                'Usabi1ity Team\n',
            question: 'Welches Auftreten könnte ein Warnisngal für ein Phishing-Versuch sein?',
            answer: 'vorname-nachname'
        },
        {
            description:'Vorsicht vor Phishing! Manchmal sehen die E-Mails unverdächtig aus, aber der Teufel steckt im Detail. Achte auf ähnliche Domains wie "@c0mpany.com" anstelle von "@company.com". Der Unterschied ist leicht zu übersehen, also immer auf die Absender-Domain achten, um nicht auf betrügerische Mails reinzufallen.',
            from: 'frida.fridolina@a0l.com',
            to: 'max.mueller@aol.com',
            content:                'Hey,\n\n' +
                'ich wollte dir noch wie besprochen die Unterlagen zu dem Meeting von vergangener Woche schicken.\n' +
                'Da die Dateien zu groß sind für E-Mail, habe ich sie auf unserem Sharepoint abgelegt: [Link]\n\n' +
                'VG',
            question: 'Welches möglicherweise echten Mail Adresse ähnelt die Adresse dieser Mail?',
            answer: 'frida.fridolina@aol.com'
        },
        {
            description: 'Es ist wichtig zu verstehen, dass das Nicht-Laden von Bildern in einer E-Mail nicht zwangsläufig auf Phishing hinweist. Oftmals sind E-Mail-Clients so konfiguriert, dass sie externe Inhalte wie Bilder aus Sicherheitsgründen standardmäßig blockieren. Dies dient dazu, die Privatsphäre der Empfänger zu schützen und potenzielle Gefahren, wie das Nachladen von schadhaften Inhalten von externen Servern, zu minimieren.\n' +
                'Wenn andere Faktoren wie die Absender-Domain und der Inhalt der E-Mail vertrauenswürdig erscheinen und keine verdächtigen Auffälligkeiten vorhanden sind, kann das Nicht-Laden von Bildern allein kein Indiz für Phishing sein. ',
            from: 'diana.drexler@company.com',
            to: 'max.mueller@aol.com',
            content:
                'Liebes Team,\n\n' +
                'ich wollte die Gelegenheit nutzen, um mich bei Ihnen allen für das vergangene Jahr zu bedanken. Wir haben gemeinsam viel geleistet und erreicht.\n' +
                'Vielen Dank auch für die wunderbare Weihnachtsfeier, die uns allen hoffentlich in bester Erinnerung bleiben wird.\n' +
                'Ich habe mir erlaubt, ein paar Highlights der Feier in Form von Bildern festzuhalten. Bitte nur für privaten Gebrauch verwenden.\n' +

                'Herzlichst,\n\n'+
                'Diana',
            question: 'Können nicht geladene Bilder eine Gefahr darstellen?',
            answer: 'Nein'
        },
        {
            description:
                'Das Überprüfen von URLs beim Hovern über den Link hilft dabei, Phishing zu erkennen, da es ermöglicht, die tatsächliche Ziel-URL zu sehen. Phishing-Links können sich als legitime Websites tarnen, aber durch das Hovern können Abweichungen in der URL auffallen, wie zum Beispiel falsche Darstellungen, verschleierte Links oder Unregelmäßigkeiten in der Schreibweise. Dieser einfache Schritt ermöglicht eine erste Einschätzung der Echtheit und hilft, potenziell schädliche Links zu identifizieren, bevor man darauf klickt.',
            from: 'externer@apfk.com',
            to: 'max.mueller@aol.com',
            content: 'Lieber Max,\n' +
                'ich habe jetzt die Dokumente entsprechend deiner Vorgaben angepasst. Bitte sieh dir das mal an und gib mir Feedback, ob das so in Ordnung ist.\n' +
                '05_05_21_Report[Link]',
            question: 'Ist eine URL, die aus zufälligen Zeichen (bspw.: youtu.be/ebU3j82M) besteht zwangsläufig gefährlich?',
            answer: 'nein'
        },
        // Add more emails as needed
    ];





    const handleConfirm = (isCorrect: boolean,  isPhishing: number) => {


        if ((currentEmailIndex === emails.length- 1 ) && isPhishing !== -1) {
            // Das Spiel ist beendet
            onConfirm(true, 1);
        }


        if ((isCorrect && isPhishing === 1 && currentEmailIndex === 0) ||
            (isCorrect && isPhishing === 1 && currentEmailIndex === 1) ||
            (isCorrect && isPhishing === 0 && currentEmailIndex === 2) ||
            (isCorrect && isPhishing === 1 && currentEmailIndex === 3)) {

            setCurrentEmailIndex((prevIndex) => prevIndex + 1);
        }
    };


    return (
        <Dialog open={isOpened} onClose={(event, reason) => onConfirm(false, -1)} fullWidth maxWidth="md">
            {currentEmailIndex < emails.length && (
                <SpamEmailDialog
                    description={emails[currentEmailIndex].description}
                    from={emails[currentEmailIndex].from}
                    to={emails[currentEmailIndex].to}
                    content={emails[currentEmailIndex].content}
                    question={emails[currentEmailIndex].question}
                    answer={emails[currentEmailIndex].answer}
                    onConfirm={handleConfirm}
                />
            )}
        </Dialog>
    );
};
interface SingleEmailProps {
    description: string;
    from: string;
    to: string;
    content: string;
    question: string;
    answer: string;
    onConfirm: (isCorrect: boolean, isPhishing: number) => void;
}

const SpamEmailDialog: React.FC<SingleEmailProps> = ({
                                                                                   description,
                                                         from,
                                                         to,
                                                         content,
                                                         question,
                                                         answer,
                                                         onConfirm,
                                                     }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [emailNumber, setEmailNumber] = useState(0);
    const [snackbarOpenSuccess, setSnackbarOpenSuccess] = useState(false);
    const [snackbarMessageSuccess, setSnackbarMessageSuccess] = useState('');
    const [snackbarOpenWarning, setSnackbarOpenWarning] = useState(false);
    const [snackbarMessageWarning, setSnackbarMessageWarning] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpenWarning(false);
        setSnackbarOpenSuccess(false);
    };


    const [isPhishing, setIsPhishing] = useState(-1);
    const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase();

    useEffect(() => {
        // This effect will run when isPhishing changes
        handleButtonClick();
    }, [isPhishing]); // Run the effect only when isPhishing changes




//isPhishing: -1 -> user doesnt made a choice
//isPhishing: 0 -> user click 'echt'
//isPhishing: 1 -> user click 'phishing'
    const handleButtonClick = () => {

        if (userAnswer === '' && isPhishing === -1)
        {
            console.log("")
        }
        else if ((isPhishing === 1 && emailNumber === 0) ||
            (isPhishing === 1 && emailNumber === 1) ||
            (isPhishing === 0 && emailNumber === 2) ||
            (isPhishing === 1 && emailNumber === 3)) {

            console.log(emailNumber)
            // Der Nutzer hat alle richtig gelöst
            if (emailNumber === 3) {
                setSnackbarMessageSuccess('11111111111111111111111111111111Korrekte Antwort auf wiedersehen!');

                setSnackbarOpenSuccess(true);
                onConfirm(true, 1); // Das Spiel ist beendet
            } else {

                if (isCorrect ){

                    // Der nutzer hat die Antwort korrekt aufgesagt und konnte die mail unterscheiden zwischen echt und phishing
                //onConfirm(isCorrect, isPhishing);

                    setSnackbarMessageSuccess('Korrekte Antwort auf Echtheit!');
                    setSnackbarOpenSuccess(true);
                    setIsButtonVisible(false);
                    setIsPhishing(-1)
                    setEmailNumber((prevNumber) => prevNumber + 1);
                }
                else
                {   // Der Nutzer konnte nicht korrekt zwischen Echt und Phishing unterscheiden
                    setSnackbarMessageWarning('Falsche Antwort der Frage!');
                    setSnackbarOpenWarning(true);
                }
            }
        } else {

            // Der Nutzer hat eine richtige Antwort gegeben
            // Bug: richtige Antowrt aber falsche isPhishing

             if (isCorrect && isPhishing === -1)
             {
                 setIsButtonVisible(true);
                 setSnackbarMessageSuccess('Korrekte Antwort auf die Frage!');
                 setSnackbarOpenSuccess(true);
             }
             else if (isCorrect && isPhishing !== -1)
             {
                 setSnackbarMessageWarning('Falsche Antwort auf die Echtheit!');
                 setSnackbarOpenWarning(true);
             }
             else if (isCorrect)
             {
                 setSnackbarMessageWarning('Korrekte Antwort, konzentrier dich auf die Beantwortung der Echtheit!');
                 setSnackbarOpenWarning(true);
             }
            // Der Nutzer hat eine falsche Antwort gegeben
            else {
                setSnackbarMessageWarning('Falsche Antwort!');
                setSnackbarOpenWarning(true);
            }
        }


        onConfirm(isCorrect, isPhishing);


        //setUserAnswer('');  // Clear the user answer
        //setIsPhishing(false);


    };

    return (
        <>
            <DialogTitle>{"Spam Email erkennen"}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    {/* Description Section */}
                    <Grid item xs={12} md={6}>
                        <DialogContentText>{description}</DialogContentText>
                        {/* Display the question */}
                        <strong>Question:</strong> {question}
                    </Grid>
                    {/* Email Details Section */}

                    <Grid item xs={12} md={6}>

                        <DialogContentText component="div">
                            <Typography style={{whiteSpace: 'pre-line'}}>
                                <strong>From:</strong> {from}
                                <br/>
                                <strong>To:</strong> {to}
                                <br/>
                                <strong>Content:</strong> <code>{content}</code>
                                <br/>
                                <br/>
                            </Typography>
                        </DialogContentText>
                        <DialogContentText></DialogContentText>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                {isButtonVisible &&  <Button
                    onClick={() => {
                        setIsPhishing(0);
                        handleButtonClick();
                    }}
                    color="primary" >
                    Echt
                </Button>}
                {isButtonVisible && <Button
                    onClick={() => {
                        setIsPhishing(1);
                        handleButtonClick();
                    }}
                    color="primary">
                    Phishing
                </Button>}
            </DialogActions>
            {/* Input for user's answer */}
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        <label htmlFor="answer">Ihre Antwort:</label>
                        <input
                            type="text"
                            id="answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <Button   onClick={handleButtonClick} color="primary">
                            check
                        </Button>


                        {/* Snackbar */}
                        <Snackbar open={snackbarOpenSuccess} autoHideDuration={3000} onClose={handleSnackbarClose}>
                            <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
                                {snackbarMessageSuccess}
                            </MuiAlert>
                        </Snackbar>

                        <Snackbar open={snackbarOpenWarning} autoHideDuration={3000} onClose={handleSnackbarClose}>
                            <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="warning">
                                {snackbarMessageWarning}
                            </MuiAlert>
                        </Snackbar>
                    </Grid>

                </Grid>




            </DialogContent>


        </>
    );
};


export default SpamEmailDialogContainer;
