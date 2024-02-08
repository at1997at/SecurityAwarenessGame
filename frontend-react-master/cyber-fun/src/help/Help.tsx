import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Link,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Help() {
    return (
        <Container maxWidth="xl" sx={{mt: 4}}>
            <Paper sx={{p: 3}}>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><LiveHelpIcon/> Hilfe und Anleitung für CyberFun</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText primary="Herzlich willkommen, Sicherheitsagent!"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    secondary="In diesem Level liegt es an Ihnen und Ihrem Team, mögliche Sicherheitsrisiken in unserer virtuellen Umgebung aufzudecken und zu beheben."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    secondary="Ihre Aufgabe besteht darin, durch geschicktes Navigieren und aufmerksames Beobachten mögliche Schwachstellen zu identifizieren."/>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><DashboardIcon/> Dashboard</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Process Tracker"
                                    secondary="Der Process Tracker zeigt den aktuellen Fortschritt im Spiel an. Hier können Sie sehen, welches Level Sie gerade spielen und wie viele mögliche Sicherheitsrisiken noch zu finden sind."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Team-Ranking"
                                    secondary="Im Team-Ranking können Sie die Punktestände aller Teams einsehen. Teams mit den höchsten Punktzahlen werden ganz oben angezeigt."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Level-Übersicht"
                                    secondary="Die Level-Übersicht bietet eine kurze Beschreibung jedes Levels. Klicken Sie auf ein Level, um es zu starten. Achten Sie darauf, alle möglichen Sicherheitsrisiken zu finden, um Punkte zu sammeln."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><AccountCircleIcon/> Spielerprofil</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Profilinformationen"
                                    secondary="Hier sehen Sie Ihre persönlichen Informationen. Stellen Sie sicher, dass Ihr Profil vollständig ist, um am Team-Ranking teilzunehmen."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Punktestand"
                                    secondary="Ihr Punktestand wird hier angezeigt. Sammeln Sie Punkte, indem Sie mögliche Sicherheitsrisiken in den Levels finden. Je mehr Sie finden, desto höher wird Ihr Punktestand sein."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><LibraryBooksIcon/> Wiki: Richtlinien und Best Practices</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Wiki Zugang"
                                    secondary={
                                        <>
                                            Besuchen Sie das
                                            {' '}
                                            <Link href="/wiki">Wiki</Link>
                                            {' '}um wichtige Richtlinien und Best Practices für die IT-Sicherheit zu
                                            finden. Erfahren Sie, wie Sie sicher durch die Levels navigieren und Ihre
                                            Teams optimal unterstützen können.
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5"><ExitToAppIcon/> Log-Out</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Abmelden"
                                    secondary="Wenn Sie das Spiel verlassen möchten, klicken Sie einfach auf 'Abmelden'. Stellen Sie sicher, dass Sie sich ausloggen, wenn Sie das Spiel auf einem gemeinsam genutzten Computer spielen."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Container>
    );
}