import React from 'react'
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Popover, Box } from '@mui/material';
import { addToCart } from '../../store/cartReducer';

import { decrementProductQuantity, getRemoteProduct } from '../../store/productReducer';
function ProductDetails(props) {
    const { id } = useParams()

    //   const dispatchData = useDispatch();
    //   useEffect(() =>{ 
    //   dispatchData(setActiveProd(id))
    //   }, [id])
    return (
       
        <div>
            {
                props.products.map((product, index) => {
                    return (
                        <>
                            {product.id == id ?
                                <div>
                                    <div key={index}>
                                        < Card key={index} sx={{ maxWidth: 345 }} className="card">
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={product.image}
                                                alt="product image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h3" component="div">
                                                    {product.displayName}
                                                </Typography>
                                                <Typography variant="h5" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.price + '$'}
                                                    <Typography variant="h6" color="text.secondary">
                                                        quantity is:{product.inventoryCount}
                                                    </Typography>
                                                </Typography>
                                                <Button variant="outlined" onClick={() => { props.addToCart(product); props.decrementProductQuantity(product.id) }} size="small">Add To Cart</Button>
                                            </CardContent>
                                        </Card>


                                    </div>

                                </div>
                                : <div></div>
                            }
                        </>
                    )
                })
            }
        </div>
    )

}
const mapStateToProps = (state) => ({
    products: state.productReducer.products
});
const mapDispatchToProps = { getRemoteProduct, decrementProductQuantity, addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
