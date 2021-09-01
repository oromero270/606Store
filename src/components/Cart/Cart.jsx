import React from 'react'
import {Container, Typogrophy, Button, Grid, Typography} from '@material-ui/core';
import useStyles from './styles';
const Cart = ({cart}) => {
    const classes=useStyles();
    const isEmpty= !cart.line_items.length;

    const EmptyCart =() =>(
        <Typography varient='subtitle1'>No Items!</Typography>
    );

    const FilledCart= () =>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>
                            {item.name}
                        </div>
                    </Grid>
                ))}

            </Grid> 
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal:{cart.subtotal.formatted_with_symbol}
                </Typography>

            </div>
        </>
    );
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} carient='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
