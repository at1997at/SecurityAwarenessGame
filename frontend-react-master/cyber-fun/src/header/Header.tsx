import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import HelpIcon from "@mui/icons-material/Help";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();
    const handleOnClickHome = () => {
        navigate('/');
        setDrawerOpen(false);
    };
    const handleOnClickWiki = () => {
        navigate('/wiki');
        setDrawerOpen(false);
    }
    const handleOnClickHelp = () => {
        navigate('/help');
        setDrawerOpen(false);
    };

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar color={"inherit"} enableColorOnDark={true} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <Button href="#text-buttons" color="inherit" onClick={handleOnClickHome}>Cyberfun</Button>
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                            <Typography variant="subtitle1" sx={{margin: '0 20px 0 0'}}>
                                Max Müller
                            </Typography>
                            <Button variant="outlined">Logout</Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                >
                    <List>
                        <ListItemButton onClick={handleOnClickHome} key="Home">
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleOnClickWiki} key="Wiki">
                            <ListItemIcon>
                                <ImportContactsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Wiki"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleOnClickHelp} key="Hilfe">
                            <ListItemIcon>
                                <HelpIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Hilfe"/>
                        </ListItemButton>
                    </List>
                </Drawer>
            </Box>
        </>
    );
}
