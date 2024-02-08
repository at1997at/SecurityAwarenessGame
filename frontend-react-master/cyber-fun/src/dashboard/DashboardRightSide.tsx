import { Box, Card, CardContent, Grid, LinearProgress, List, ListItem, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

function DashboardRightSide() {


    const [learning_progress, setLearning_Progress] = useState(0);
    const levels = useSelector((state: RootState) => state.counter.levels);

    useEffect(() => {


        // for schleife die bis 4 zählt. schaut an wie viele findings es gibt und überträgt es in firestart und in idDesk etc.

        let tmp = 0;
        let state: RootState;

        levels.forEach(item => {

            if (item.finding0 === true) {
                tmp += 1;
            }
            if (item.finding1 === true) {
                tmp += 1;
            }
            if (item.finding2 === true) {
                tmp += 1;
            }
            if (item.finding3 === true) {
                tmp += 1;
            }
        })

        tmp = (tmp / 12) * 100;
        var tmp2 = tmp.toFixed(2)

        setLearning_Progress(parseInt(tmp2));

    }, []); // Das leere Abhängigkeitsarray stellt sicher, dass die Funktion nur einmalig aufgerufen wird


    return (
        <>
            {/*  Status section  */}
            <Grid item xs={4} sx={{paddingTop: 2, paddingRight: 4}}>
                <Grid item xs={12} sx={{paddingBottom: 2}}>
                    <Typography variant="h5">Status</Typography>
                </Grid>

                <Grid container spacing={2} sx={{paddingTop: 2}} direction="column">
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Progress</Typography>
                                <LinearProgress variant="determinate" value={learning_progress}
                                                sx={{margin: '20px 0'}}/>
                                <Typography variant="body1">{learning_progress}% erledigt</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Rank</Typography>
                                <Box sx={{padding: '10px'}}>
                                    <List>
                                        <ListItem>1. Max</ListItem>
                                        <ListItem>2. Georg</ListItem>
                                        <ListItem>3. Timo</ListItem>
                                    </List>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Paper elevation={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">Team Rank</Typography>
                                    <Box sx={{padding: '10px'}}>
                                        <List>
                                            <ListItem>Team A - 150pts</ListItem>
                                            <ListItem>Team B - 100pts</ListItem>
                                            <ListItem>Team Z - 5pts</ListItem>
                                        </List>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default DashboardRightSide;