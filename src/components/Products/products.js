import { connect } from "react-redux";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import{addToCart}from '../../store/cartReducer'
import {decrementProductQuantity} from "../../store/productReducer"
import "./product.css"


function Products(props) {
  
  return (
    <div >

      {
        props.products.map((product, index) => {

          if (product.categoryId === props.categories?.id) {
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
                          {product.price}
                        </Typography>
                      </CardContent>
    
                      <CardActions>
                        <Button onClick={()=>{props.addToCart(product); }  } size="small">ADD TO CART</Button>
                        
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
const mapDispatchToProps = { addToCart,decrementProductQuantity};

export default connect(mapStateToProps,mapDispatchToProps)(Products);