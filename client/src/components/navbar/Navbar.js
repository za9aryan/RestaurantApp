import * as React from 'react';

// import Material UI elements
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// importing CSS styles
import './navbar.css'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ minHeight: "80px" }} variant="dense">
                    <a href="/">
                        <Typography variant="h5" color="inherit" component="div">
                            Restaurant App
                        </Typography>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}