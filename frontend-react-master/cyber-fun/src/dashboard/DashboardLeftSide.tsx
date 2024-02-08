import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

function DashboardLeftSide() {

    const navigate = useNavigate();
    const handleOnClickLevelOne = () => navigate('/level-one');
    const handleOnClickLevelTwo = () => navigate('/level-two');
    const handleOnClickLevelThree = () => navigate('/level-three');


    const [learning_progress, setLearning_Progress] = useState(0);
    const levels = useSelector((state: RootState) => state.counter.levels);

    const [levelComplete1, setLevel1Complete] = useState(false);
    const [levelComplete2, setLevel2Complete] = useState(false);
    const [levelComplete3, setLevel3Complete] = useState(false);


    useEffect(() => {


        let index: number = 0;
        let levelCompleteTMP = false;

        levels.forEach(item => {
            let tmp = 0;

            if (item.finding0) tmp += 1;
            if (item.finding1) tmp += 1;
            if (item.finding2) tmp += 1;
            if (item.finding3) tmp += 1;


            levelCompleteTMP = tmp === 4;

            // set level to complete if the parameter is true
            if (index === 0) setLevel1Complete(levelCompleteTMP);
            if (index === 1) setLevel2Complete(levelCompleteTMP);
            if (index === 2) setLevel3Complete(levelCompleteTMP);

            index = index + 1;

        })


    }, []); // Das leere Abhängigkeitsarray stellt sicher, dass die Funktion nur einmalig aufgerufen wird


    return (
        <>
            {/*  Pending section  */}
            <Grid item xs={8}>
                <Grid item xs={12} sx={{padding: 2}}>
                    <Typography variant="h5">Ausstehend</Typography>
                </Grid>
                <Grid container spacing={2} sx={{padding: 2}}>
                    <Grid item>
                        <Card hidden={levelComplete1} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level1"
                                height="140"
                                image="level1.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Arbeitsplatz
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Am „Arbeitsplatz“ sind die Spieler in die Rolle von IT-Sicherheitsexperten, die die
                                    digitale Infrastruktur eines modernen Arbeitsplatzes schützen müssen. Dazu muss der
                                    Arbeitsplatz
                                    von einigen unsicheren Elementen befreit werden. Am Arbeitsplatz sind unscheinbare
                                    Fallen versteckt, die
                                    als Laie nicht sichtbar sind.
                                    Finde die Fehler und löse das Level.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelOne}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card hidden={levelComplete2} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level2"
                                height="140"
                                image="level2.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Gebäude
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Im „Gebäude“ übernehmen die Spieler die Rolle von IT-Sicherheitsexperten, die die
                                    Sicherheit eines hochmodernen Gebäudekomplexes gewährleisten müssen.
                                    Auf dem Flur im Gebäude sind mehrere verdächtige Aktivitäten und Gegenstände zu
                                    finden,
                                    die auf keinen Fall zu einem sicheren Gebäude gehören sollten. Finde die
                                    Unregelmäßigkeiten.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelTwo}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card hidden={levelComplete3} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level3"
                                height="140"
                                image="level3.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Umgebung
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Auch die äußere "Umgebung" der Firma ist nicht ohne Gefahren. Vielleicht können
                                    Angreifer
                                    auch hier wertvolle Informationen finden, die nicht für jedermanns Ohren bestimmt
                                    sind.
                                    Die Spieler müssen auch hier ihre Informationen beschützen, denn auf der Straße kann
                                    jeder
                                    eine potenzielle Gefahr darstellen. Hier schützen keinerlei Zugangskontrollen vor
                                    Bespitzelung.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelThree}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>


                {/*  Completed section  */}
                <Grid item xs={12} sx={{padding: 2}}>
                    <Typography variant="h5">Vollständig</Typography>
                </Grid>

                <Grid container spacing={2} sx={{padding: 2}}>
                    <Grid item>
                        <Card hidden={!levelComplete1} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level1"
                                height="140"
                                image="level1.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Arbeitsplatz
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Am „Arbeitsplatz“ sind die Spieler in die Rolle von IT-Sicherheitsexperten, die die
                                    digitale Infrastruktur eines modernen Arbeitsplatzes schützen müssen. Dazu muss der
                                    Arbeitsplatz
                                    von einigen unsicheren Elementen befreit werden. Am Arbeitsplatz sind unscheinbare
                                    Fallen versteckt, die
                                    als Laie nicht sichtbar sind.
                                    Finde die Fehler und löse das Level.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelOne}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                        <Card hidden={!levelComplete2} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level2"
                                height="140"
                                image="level2.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Gebäude
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Im „Gebäude“ übernehmen die Spieler die Rolle von IT-Sicherheitsexperten, die die
                                    Sicherheit eines hochmodernen Gebäudekomplexes gewährleisten müssen.
                                    Auf dem Flur im Gebäude sind mehrere verdächtige Aktivitäten und Gegenstände zu
                                    finden,
                                    die auf keinen Fall zu einem sicheren Gebäude gehören sollten. Finde die
                                    Unregelmäßigkeiten.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelTwo}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card hidden={!levelComplete3} sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                alt="level3"
                                height="140"
                                image="level3.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Level Umgebung
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Auch die äußere "Umgebung" der Firma ist nicht ohne Gefahren. Vielleicht können
                                    Angreifer
                                    auch hier wertvolle Informationen finden, die nicht für jedermanns Ohren bestimmt
                                    sind.
                                    Die Spieler müssen auch hier ihre Informationen beschützen, denn auf der Straße kann
                                    jeder
                                    eine potenzielle Gefahr darstellen. Hier schützen keinerlei Zugangskontrollen vor
                                    Bespitzelung.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" endIcon={<SendIcon/>} size="small"
                                        onClick={handleOnClickLevelThree}>Gehe zum Level</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default DashboardLeftSide;