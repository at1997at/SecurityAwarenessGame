import React from 'react';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import PasswordIcon from '@mui/icons-material/Password';
import AutoRenewIcon from '@mui/icons-material/Autorenew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StorageIcon from '@mui/icons-material/Storage';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function Wiki() {
    return (
        <Container maxWidth="xl" sx={{mt: 4}}>
            <Paper sx={{p: 3}}>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><VpnKeyIcon/> Richtlinie: Passwörter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Passwörter als erster Sicherheitsmechanismus"
                                    secondary="Passwörter sind der erste Sicherheitsmechanismus, wenn es darum geht, Daten oder Zugänge zu schützen. Erst nach korrekter Eingabe von Benutzername und Passwort ist der Zugriff auf vertrauliche Inhalte möglich."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Bedeutung sicherer Passwörter"
                                    secondary="Es ist umso wichtiger, ein sicheres Passwort zu wählen und entsprechend damit umzugehen. Die Sicherheit jedes individuellen Kontos und somit ganzer Netzwerke hängt maßgeblich von der Stärke und Klugheit der gewählten Passwörter ab."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Ziel der Passwortrichtlinie"
                                    secondary="Diese Passwortrichtlinie wurde entwickelt, um einen umfassenden Leitfaden für den sicheren Umgang mit Passwörtern bereitzustellen. Dabei werden nicht nur potenzielle Bedrohungen beleuchtet, sondern es werden auch bewährte Praktiken und Empfehlungen vorgestellt, um die digitale Sicherheit zu stärken."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><WarningIcon/> Welche Gefahren lauern für Passwörter?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Brute-Force-Angriffe"
                                    secondary="Angreifer versuchen, ein Passwort durch systematisches Ausprobieren aller möglichen Kombinationen von Buchstaben, Zahlen und Symbolen zu erraten."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="Phishing"
                                    secondary="Betrüger versuchen, Passwörter durch Täuschung zu stehlen, indem sie gefälschte Websites oder E-Mails verwenden, die authentisch aussehen, um die Opfer zur Preisgabe ihrer Anmeldeinformationen zu verleiten."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="Social Engineering"
                                    secondary="Angreifer nutzen menschliche Interaktionen, um Informationen zu sammeln, die zur Umgehung von Passwörtern verwendet werden können. Dies kann durch Manipulation oder Irreführung erfolgen."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="Wiederverwendete Passwörter"
                                    secondary="Die Verwendung desselben Passworts für mehrere Konten macht es einfacher für Angreifer, Zugang zu verschiedenen Diensten zu erlangen, wenn ein Passwort kompromittiert wird."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="Shoulder Surfing"
                                    secondary="Diese physische Bedrohung tritt auf, wenn Angreifer Passwörter beobachten, indem sie über die Schulter des Benutzers schauen."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><PasswordIcon/> Wie wähle ich mein sicheres Passwort aus?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText primary="Länge ist entscheidend"
                                              secondary="Ein gutes Passwort sollte mindestens acht Zeichen lang sein."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Vielfalt der Zeichen"
                                              secondary="Nutzen Sie alle verfügbaren Zeichen, einschließlich Groß- und Kleinbuchstaben, Ziffern sowie Sonderzeichen. Beachten Sie eventuelle technische Vorgaben von Dienstanbietern."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Vermeiden Sie Vorhersehbarkeit"
                                              secondary="Verwenden Sie keine naheliegenden Informationen wie Namen, Geburtsdaten oder einfache Muster wie '1234abcd'. Meiden Sie auch gängige Sonderzeichen- oder Ziffernfolgen."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Blacklist-Prüfung"
                                              secondary="Einige Dienstanbieter prüfen Passwörter gegen 'Blacklists'. Vermeiden Sie Passwörter, die auf solchen Listen als unsicher gelten."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Keine simplen Ergänzungen"
                                              secondary="Hängen Sie keine einfachen Ziffern ans Ende oder gängige Sonderzeichen an den Anfang oder Ende eines ansonsten simplen Passworts an."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Verzicht auf lokale Zeichen"
                                              secondary="Vermeiden Sie besonders in unserer Sprache gebräuchliche Zeichen und Umlaute, da sie möglicherweise nicht auf allen Tastaturen verfügbar sind oder anders kodiert werden."/>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><AutoRenewIcon/> Wie oft soll ich ein Passwort ändern?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Passwortänderung bei Verdacht auf unbefugten Zugriff"
                                    secondary="Ein Passwort sollte unverzüglich geändert werden, wenn es Anzeichen dafür gibt, dass unbefugte Dritte darauf zugegriffen haben könnten. Dies kann durch direkte Aufforderungen von Diensteanbietern, den Diebstahl von Passwörtern eines Dienstleisters oder sogar durch Spam- oder Phishing-Mails erfolgen, in denen korrekte persönliche Daten verwendet werden."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Passwortänderung bei Befall durch Schadsoftware"
                                    secondary="Zusätzlich ist eine Passwortänderung ratsam, wenn Ihr Gerät von Schadsoftware befallen ist, da einige Varianten Zugangsdaten aufzeichnen und weitergeben können. Nach der Bereinigung des Geräts sollten Passwörter geändert werden, um die Sicherheit des Kontos zu gewährleisten."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><StorageIcon/> Wie soll ich mein Passwort
                            speichern/merken?</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Ein Passwortmanager als sicherer Speicher"
                                    secondary="Ein Passwortmanager ist eine Software, die entwickelt wurde, um Passwörter zu generieren, zu speichern und zu organisieren. Er bietet eine verschlüsselte Datenbank, in der Benutzer ihre Anmeldedaten sicher ablegen können. Ein bekannter Passwortmanager ist zum Beispiel LastPass."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><TipsAndUpdatesIcon/> Allgemeine Verhaltensweisen zu
                            Passwörtern</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Individuelle Passwörter verwenden"
                                    secondary="Vermeiden Sie die Verwendung einheitlicher Passwörter für verschiedene Konten. Besonders wichtige Passwörter wie für E-Mail-Konten sollten individuell und stark sein, da sie oft als Schlüssel für andere Konten dienen."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Voreingestellte Passwörter ändern"
                                    secondary="Bei der Installation von Softwareprodukten sollten voreingestellte oder leere Passwörter geändert werden. Hacker nutzen oft bekannte Passwörter, die bei der Auslieferung verwendet werden."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Bildschirmschoner mit Kennwort nutzen"
                                    secondary="Aktivieren Sie die Funktion, Tastatur und Bildschirm nach einer gewissen Wartezeit zu sperren. Die Entsperrung sollte nur durch Eingabe eines korrekten Passworts erfolgen, um unbefugten Zugang zu verhindern."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Keine Passwörter per E-Mail versenden"
                                    secondary="Vermeiden Sie das Versenden von Passwörtern per E-Mail, da E-Mails unverschlüsselt sein können und von Dritten mitgelesen werden können. Die Kontrolle über das Passwort geht verloren, wenn es an Dritte weitergegeben wird."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Nicht auf Zettel schreiben"
                                    secondary="Vermeiden Sie das Aufschreiben von Passwörtern auf physischen Zetteln oder Notizen, da diese leicht verloren gehen können und unbefugten Personen Zugang zu Ihren Accounts ermöglichen."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Nicht unverschlüsselt auf dem PC speichern"
                                    secondary="Vermeiden Sie die unverschlüsselte Speicherung von Passwörtern auf Ihrem Computer, da dies ein potenzielles Sicherheitsrisiko darstellt. Nutzen Sie stattdessen verschlüsselte Passwortmanager, um Ihre Anmeldedaten sicher zu verwalten."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </Container>
    )
}

export default Wiki;

