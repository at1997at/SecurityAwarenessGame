import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { CircularProgressProps } from "@mui/material/CircularProgress";

interface ProgressWithLabelProps extends CircularProgressProps {
    value: number;
}

function ProgressWithLabel(props: ProgressWithLabelProps) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                color="secondary"
                variant="determinate"
                size={50} // Increase the size here
                thickness={3} // Optional: Adjust the thickness of the circle
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="subtitle1" // Update the variant for a larger size
                    component="div"
                    color="text.secondary"
                >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default ProgressWithLabel;