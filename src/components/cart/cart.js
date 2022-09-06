import React from 'react'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/cartReducer"
import { Grid, Card } from '@mui/material';
import { CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

function Cart(props) {
    return (
        <div>

            <Grid container spacing={1} direction='row' justifyContent='space-evenly' alignItems='center' >

                {
                    props.cart.cartItems.map((item, index) => {

                        return (
                            <Card key={index} elevation={3} style={{ marginTop: '100px', marginBottom: '100px' }}>
                                <CardMedia image={item.image} height="250" width="400" component='img' />
                                <CardContent>

                                    <Typography >{item.name}</Typography>
                                    <Typography >{item.description}</Typography>
                                    <Typography>{item.price}</Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" onClick={() => removeFromCart(item)}>DELET</Button>
                                </CardActions>
                            </Card>
                        )
                    })

                }
            </Grid>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
}
const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart)