import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
  
    Popover
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { removeFromCart } from "../../store/cartReducer";
import './simpleCart.css';

function SimpleCart (prop){
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      const productsInCart = () => (prop.cart.map((product, idx) => {
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
            }}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="">
                    {product.displayName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        prop.removeFromCart(product);
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
            onClick={handleClick}/>
          
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
        }}>
            <Typography sx={{
                p: 3
            }}>{productsInCart()?productsInCart():null}</Typography>
        </Popover>
    </div>
);
}
const mapStateToProps = state => {
    return {
        cart: state.cartReducer.cartItems
    };
}
const mapDispatchToProps = {
    removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);