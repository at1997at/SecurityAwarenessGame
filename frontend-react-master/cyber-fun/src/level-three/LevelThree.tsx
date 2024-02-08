import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LevelThree() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ textAlign: 'center', pt: 8, pb: 6 }}>
            <ConstructionIcon sx={{ fontSize: 80, color: 'action.active' }} />
            <Typography variant="h2" component="h1" gutterBottom>
                Wartungsarbeiten
            </Typography>
            <Typography variant="h5" gutterBottom>
                Der gewünschte Level befindet sich gerade in Wartung.
            </Typography>
            <Typography sx={{ mb: 4 }}>
                Wir arbeiten hart daran, die Dinge in Ordnung zu bringen und das Spielerlebnis zu verbessern.
                Bitte versuchen Sie es später noch einmal.
            </Typography>
            <Button startIcon={<ArrowBackIcon />} variant="contained" onClick={goBack}>Zurück gehen</Button>
        </Container>
    );
}
