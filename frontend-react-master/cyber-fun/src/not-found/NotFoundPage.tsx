import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="md" sx={{ textAlign: 'center', pt: 8, pb: 6 }}>
            <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
            <Typography variant="h2" gutterBottom>
                404 - Seite nicht gefunden
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
                Die von Ihnen angeforderte Seite konnte nicht gefunden werden.
            </Typography>
            <Button variant="contained" onClick={goHome}>Startseite</Button>
        </Container>
    );
}