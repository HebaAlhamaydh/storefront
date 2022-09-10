import { connect,useDispatch } from "react-redux";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import{addToCart}from '../../store/cartReducer'
import { decrementProductQuantity,getRemoteProduct } from '../../store/productReducer';
import {useEffect} from 'react'
import {getRemoteCategorise} from '../../store/catogoriseReducer'
import "./product.css"


function Products(props) {

  const dispatchData = useDispatch();
    useEffect(() => {
        dispatchData(getRemoteProduct())
    }, [])

  return (
    <div >

      {
        props.products.map((product, index) => {
          if (product.categoryId === props.categories?.id) {
          //if i use catergory.js page
          // if (product.categoryAssociation === props.categories.selectedCategory) {
            return (
                    < Card key={index} sx={{maxWidth: 345}} className="card">
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="product image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.displayName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.price+'$'}
                          <Typography variant="h6" color="text.secondary">
                            quantity is:{product.inventoryCount}
                        </Typography>
                        </Typography>
                      </CardContent>
    
                      <CardActions>     
                        {product.inventoryCount > 0 ? (
                        <Button onClick={()=>{props.addToCart(product); props.decrementProductQuantity(product.id) }  } size="small">ADD TO CART</Button>
                        ) : (
                          <Button variant="outlined" color="error">
                          Sold out
                        </Button>
                      )}
                        
                        <Button size="small">VIEW DETAILS</Button>
                      </CardActions>
                    </Card>
               )
              } 
            })
          }
        </div>
  )
}
const mapStateToProps = (state) => ({
  categories: state.categoryReducer.selectedCategory,
  products: state.productReducer.products

});
const mapDispatchToProps = { addToCart,decrementProductQuantity,getRemoteProduct};

export default connect(mapStateToProps,mapDispatchToProps)(Products);