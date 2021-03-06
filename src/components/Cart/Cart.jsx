import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
    cart,
    handleEmptyCart,
    handleRemoveFromCart,
    handleUpdateCartQty,
}) => {
    const classes = useStyles();

    const EmptyCart = () => (
    <Typography variant="subtitle1">
        No Items
        <Link to="/" className={classes.link}>
        Add Items
        </Link>
        !
    </Typography>
    );
    const FilledCart = () => (
    <>
        <Grid container spacing={3}>
        {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
            <div>
                <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
            />
            </div>
        </Grid>
        ))}
        </Grid>
        <div className={classes.CardDetails}>
        <Typography variant="h4">
            Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
            <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
            >
            {" "}
            Empty Cart!
            </Button>
            <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            >
            {" "}
            Checkout
            </Button>
        </div>
        </div>
    </>
    );
    if (!cart.line_items) return "...";

    return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} varieant="h3" gutterBottom>
        Your Shopping cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
    );
};

export default Cart;
