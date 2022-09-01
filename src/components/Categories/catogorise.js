import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import { selectCategory } from '../../store/catogoriseReducer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const Categoriess = props => {

    const categories = props.categories;
    const selectCategory = props.selectCategory;

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        selectCategory(value + 1);
    }, [value,selectCategory]);

    return (

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
                categories.map((category, indx) => {
                    return (
                        <div>
                            <TabPanel value={value} index={indx}>
                                <h1>{category.name}</h1>
                                <p>{category.description}</p>
                            </TabPanel>
                        </div>
                    )
                })}

        </div>
    )
}


const mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
});

const mapDispatchToProps = { selectCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Categoriess)