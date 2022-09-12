import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { connect} from "react-redux";
import { useEffect, useState } from 'react';
import { selectCategory } from '../../store/catogoriseReducer';
import Products from "../Products/products"


function TabPanel(props) {
    const { children, value, index } = props;
   
    return (
        <div>
            {value === index && (
                <h1>{children}</h1>
            )}
        </div>
    );
}

const Categoriess = props => {
    
    // const dispatchData=useDispatch();

    const selectCategory = props.selectCategory;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    useEffect(() => {
        // dispatchData(getRemoteProduct())
        selectCategory(value + 1);

    }, [value,selectCategory]);

    return (
        <>
        <div >
            <h1>Browse Our Categories</h1>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Electronics" />
                    <Tab label="Food" />
                    <Tab label="Fashion" />
                </Tabs>
            </Box>
            {
               props.categories.categories.map((category, indx) => {
                    return (
                        <div class="center">
                            <TabPanel value={value} index={indx}>
                                <h4 text-align="center">{category.dispalyName}</h4>
                                <h5>{category.description}</h5>
                            </TabPanel>
                        </div>
                    )
                })
            }
            {/* {
                <div className=' bg-white shadow-md shadow-black flex flex-col h-auto p-4 rounded-md'>
                    <h1 className='font-bold'>{activeCategory?.displayName}</h1>
                    <p>{activeCategory?.description}</p>
                </div>

            } */}

        </div>
        <Products /> 
        </>
    )
}

const mapStateToProps = (state) => ({
    categories:state.categoryReducer
});

const mapDispatchToProps = { selectCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Categoriess)