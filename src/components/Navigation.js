import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const menuBarStyle = {
    "backgroundColor": "#009688",
    "marginBottom": "4em",
    "color": "#ffffff"
}

const navLinkStyle = {
    textDecoration: "none",
    color: "white"
}

const Navigation = () => {
    return (
        <AppBar style={menuBarStyle} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    ATX Small Business App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link style={navLinkStyle} to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login" style={navLinkStyle}>LOGOUT</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation