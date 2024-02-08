import { SyntheticEvent, useState } from "react";
import { Box, Grid, } from '@mui/material';
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardRightSide from "./DashboardRightSide";

function Dashboard() {


    const [value, setValue] = useState('one');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            {/* Body */}
            <Box sx={{width: '100%'}}>
                <Grid container>
                    {/* Left side of the dashboard */}
                    <DashboardLeftSide></DashboardLeftSide>

                    {/* Right side of the dashboard */}
                    <DashboardRightSide></DashboardRightSide>
                </Grid>
            </Box>
        </>
    );
}

export default Dashboard;