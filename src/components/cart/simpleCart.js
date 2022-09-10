import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Popover, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { connect } from "react-redux";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { removeFromCart } from "../../store/cartReducer";
import { increaseQuantity, decreaseQuantity, clearCart } from "../../store/cartReducer"
import { decrementProductQuantity, incrementProductQuantity } from "../../store/productReducer"

import './simpleCart.css';

function SimpleCart(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const productsInCart = () => (props.cart.cartItems.map((product, idx) => {

        return (

            <Grid item xs={2} sm={4} md={4}>
                < Card key={idx} sx={{
                    maxWidth: 345
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="product image"
                        style={{
                            width: 350,
                            height: 200
                        }} />

                    <CardContent >
                        <Typography gutterBottom variant="h5" component="">
                            {product.displayName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            price: {product.price * product.quantity + '$'}
                        </Typography>
                       
                        <Button variant="contained" color="success" onClick={() => { props.increaseQuantity(product); props.decrementProductQuantity(product.id) }}>+</Button>
                        <Button >{product.quantity}</Button>
                        <Button variant="contained" onClick={() => { props.decreaseQuantity(product); props.incrementProductQuantity(product.id) }}>-</Button>
                      

                    </CardContent>

                    <CardActions>
                        <Button
                            variant="outlined" color="error"
                            size="small"
                            onClick={() => {
                                props.removeFromCart(product);
                                handleClose();
                            }}>DELETE</Button>
                    </CardActions>


                </Card>
            </Grid>



        )
    }))


    return (
        <div>

            <ShoppingCartIcon
                className='cart'
                fontSize="large"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}><h1>{props.cart.cartItemsCount} items Total Price Is:{props.cart.totalPrice + '$'}</h1>
                {props.cart.cartItemsCount > 0 ? (
                    <Button size="small" variant="outlined" color="error" onClick={() => props.clearCart()}>EMPTY CART</Button>) : (
                    // <p style={{fontSize: 23, }}> Your Card is Empty </p>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHNj9PK7N9WLGXRF5FDbA7XdtjH6caLiwnBW2__PWC3crRyS_XiocBVKnP9GONqvVp9A&usqp=CAU'
                    />
                )}
                <Typography sx={{ p: 3 }}>{productsInCart()}</Typography>

            </Popover>

        </div>
    );

}
const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
}
const mapDispatchToProps = {
    removeFromCart, decreaseQuantity, increaseQuantity, clearCart, decrementProductQuantity, incrementProductQuantity
}
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);