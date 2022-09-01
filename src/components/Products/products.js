import { connect } from "react-redux";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Products(props) {
    
    return (
        <div >
            {
                props.products.map((product, index) => {
              
                    if (product.categoryId === props.categories?.id) {
                        return (
                            <div >
                               
                            <Card  key={index} sx={{ maxWidth: 500 }} >
                            <CardMedia
                              component="img"
                              height="140"
                              image={product.image}
                              alt="green iguana"
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
                              <Button size="small">ADD TO CART</Button>
                              <Button size="small">VIEW DETAILS</Button>
                            </CardActions>
                          </Card>
                          <br/>
                          <br/>
                          </div>
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

export default connect(mapStateToProps)(Products);