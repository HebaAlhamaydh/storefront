import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DevicesIcon from '@mui/icons-material/Devices';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useEffect, useState } from 'react';
import { selectCategory } from '../../store/catogoriseReducer';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

function ButtonAppBar(props) {

  const selectCategory = props.selectCategory;
  const [value, setValue] = useState(0);

  useEffect(() => {
    selectCategory(value + 1);
  }, [value,selectCategory]);

  return (
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          
            <BottomNavigation
            color="default"
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
           >

              <BottomNavigationAction label='Electronics'icon={<DevicesIcon />} />
              <BottomNavigationAction label='Food' icon={<FastfoodIcon />} />
              <BottomNavigationAction label='Fashion' icon={<CheckroomIcon />} />
            </BottomNavigation>
         
          <Button color="inherit">CART(0)</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)