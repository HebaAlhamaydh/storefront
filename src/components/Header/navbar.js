import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleCart from "../cart/simpleCart"



function ButtonAppBar(prop) {
 
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6"  sx={{ textDecoration: "none", flexGrow: 1  }} component={Link} to="/">
         OUR STORE
       </Typography>
       
       <SimpleCart/>
 
          <h2>({prop.cart.cartItemsCount})</h2>
          
        </Toolbar>
      </AppBar>
     
    </Box>
    </>
  );
}
const mapStateToProps = (state) => ({
  cart:state.cartReducer
});

export default connect(mapStateToProps)(ButtonAppBar)