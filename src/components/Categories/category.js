// import { connect, useSelector, useDispatch } from "react-redux";
// import { useState, useEffect,useCallback  } from 'react'

// import{Breadcrumbs,Link} from '@mui/material'
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// import { reset, selectCategory} from '../../store/catogoriseReducer';
// import {getRemoteProduct }from '../../store/productReducer'

// const Categorises = props => {
//     let activeCategory=props.categories.selectedCategory;
//     let active=props.categories.categories.filter((element)=>element.displayName=== activeCategory)
//     const dispatchData = useDispatch();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     useEffect(() => {
//         props.selectCategory('Electronics')
//     }, []);
  
    

//     return (
//         <>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                     <Tab label="Electronics" onClick={() => {
//                         props.reset();
//                         props.selectCategory("Electronics")
                       
//                     }} ></Tab>

//                     <Tab label="Food" onClick={() => {
//                         props.reset();
//                         props.selectCategory("Food")
                      
//                     }} ></Tab>

//                     <Tab label="Fashion" onClick={() => {
//                         props.reset();
//                         props.selectCategory("Fashion")
                    

//                     }} />
//                 </Tabs>
//             </Box>
//             {/* <h2>{props.categories.selectedCategory.dispalyName}</h2>
//             <h6>{props.categories.selectedCategory.description}</h6> */}
//              {/* <h1 className='font-bold'>{activeCategory?.name}</h1>
// //         <p>{activeCategory?.description}</p> */}
 

//         </>
//     )
  
// }

// const mapStateToProps = (state) => ({
//     categories: state.categoryReducer
// });

// const mapDispatchToProps = { selectCategory, reset, getRemoteProduct};

// export default connect(mapStateToProps, mapDispatchToProps)(Categorises)




