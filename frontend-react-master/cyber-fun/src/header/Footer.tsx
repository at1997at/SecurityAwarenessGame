import { Box, Container, Divider, Typography } from "@mui/material";


export default function Footer() {
    return (
        <>
            <Box component="footer" sx={{bgcolor: 'background.paper', py: 6}}>
                <Divider/>
                <Container maxWidth="lg">
                    <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                        Cyberfun 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'SPIELERISCH SICHER'}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
