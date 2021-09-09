import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/606greens.jpg';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color='inherit'>
                        <img src={logo} alt='commerce.js' height='25px' className={classes.image} />
                        606 MicroGreens
                    </Typography>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to='/about' onClick={handleClose}>About Us</MenuItem>
                        <MenuItem onClick={handleClose}>Health Facts</MenuItem>
                        <MenuItem onClick={handleClose}>Create Account</MenuItem>
                        <MenuItem onClick={handleClose}>Log In</MenuItem>
                    </Menu>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label="show cart items" color='inherit'>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
