import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Sidebar({ updateDisplay }) {

    return (
        <div className='sidebar'>
            <AppBar position="sticky" sx={{background:'transperant'}}>
                <Toolbar>
                    <IconButton edge="start" onClick={updateDisplay} aria-label="menu" sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" gutterBottom={true}>
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar>
                <IconButton edge="start" onClick={updateDisplay} aria-label="menu" sx={{ mr: 1 }}>
                    <TrendingUpOutlinedIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Trending
                </Typography>
            </Toolbar>
            <Toolbar>
                <IconButton edge="start" onClick={updateDisplay} aria-label="menu" sx={{ mr: 1 }}>
                    <VisibilityOutlinedIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Most Viewed
                </Typography>
            </Toolbar>
            <Toolbar>
                <IconButton edge="start" onClick={updateDisplay} aria-label="menu" sx={{ mr: 1 }}>
                    <LibraryBooksIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Genre
                </Typography>
            </Toolbar>
        </div>
    );
}