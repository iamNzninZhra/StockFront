/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './LogIn';
import { useState } from 'react';
import SideBar from './SideBar';

export default function DenseAppBar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                        <SideBar open={sidebarOpen} onClose={toggleSidebar} />
                        <Typography variant="h6" color="inherit" component="div">
                            Stock Owner Login
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Typography variant="h1" sx={{ fontSize: "30px", marginTop: "40px", marginLeft: "35px", fontFamily: "Yekan" }}>
                Stock Owner Login
            </Typography> */}
            <LogIn style={{ fontFamily: "Yekan" }} />
        </>

    );
}
