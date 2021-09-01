import React from 'react';
import { AppBar,Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/606greens.jpg';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position='fixed' classname={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant="h6" className={classes.title} color='inherit'>
                    <img src={logo} alt='commerce.js' height='25px' className={classes.image}/>
                    606 MicroGreens
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color='inherit'>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar