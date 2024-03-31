import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export default function ClosedSideBar({ updateDisplay }) {
    return (
        <div className='closedsidebar'>
            <AppBar style={{ width: "4%", height: '100%', left: 0 }}>
                <Toolbar>
                    <Tooltip title="Menu">
                        <IconButton edge="start" onClick={updateDisplay} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <Toolbar>
                    <Tooltip title="Trending">
                        <IconButton edge="start" onClick={updateDisplay} aria-label="menu">
                            <TrendingUpOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <Toolbar>
                    <Tooltip title="Most Viewed">
                        <IconButton edge="start" onClick={updateDisplay} aria-label="menu">
                            <VisibilityOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <Toolbar>
                    <Tooltip title="Genre">
                        <IconButton edge="start" onClick={updateDisplay} aria-label="menu">
                            <LibraryBooksIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    )
}