import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Dropdown.css"

const Dropdown = ({ allcompanies }) => {

    const [selectedProducts, setSelectedProducts] = React.useState('');
    const [selectedProductState, setSelectedProductState] = useState('');
    const [selectedProductCity, setSelectedProductCity] = useState('');
    console.log(allcompanies)


    // ----------uniqifying-------------
    // console.log(allcompanies)
    const products = [...new Set(allcompanies.map(item => item.product_name))];



    const handleProductChange = (event) => {
        setSelectedProducts(event.target.value);
    };
    const handleStateChange = (event) => {
        setSelectedProductState(event.target.value);
    };
    const handleCityChange = (event) => {
        setSelectedProductCity(event.target.value);
    };
    // console.log(selectedProductState.address.state)
    const selectedProductStateList = allcompanies.filter(selected => selected.product_name === selectedProducts)
    const selectedProductCityList = allcompanies.filter(selected => selected.address.state === selectedProductState?.address?.state)
    console.log(selectedProductStateList)
    return (
        <div style={{}}>
            <Typography variant='h6' component="div" sx={{ borderBottom: "1px solid #cbcbcb", textAlign: "left", pb: "11px", mb: "20px", color: "#a5a5a5" }}>Filters</Typography>
            <div>

                <FormControl fullWidth sx={{ mb: "20px", backgroundColor: "#232323", borderRadius: "5px" }} >
                    <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>Products</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedProducts}
                        label="Products"
                        onChange={handleProductChange}
                        sx={{ color: 'white' }}


                    >

                        {
                            products.map(product => <MenuItem value={product}>{product}</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth fullWidth sx={{ mb: "20px", backgroundColor: "#232323", borderRadius: "5px" }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>State</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedProductState}
                        label="State"
                        onChange={handleStateChange}
                        sx={{ color: 'white' }}
                    >

                        {
                            selectedProductStateList.length !== 0 ? selectedProductStateList.map(product => <MenuItem value={product}>{product.address.state}</MenuItem>) :
                                allcompanies.map(product => <MenuItem value={product}>{product.address.state}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth fullWidth sx={{ mb: "20px", backgroundColor: "#232323", borderRadius: "5px" }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedProductCity}
                        label="City"
                        onChange={handleCityChange}
                        sx={{ color: 'white' }}
                    >

                        {
                            selectedProductCityList.length !== 0 ? selectedProductCityList.map(product => <MenuItem value={product}>{product.address.city}</MenuItem>) :
                                allcompanies.map(product => <MenuItem value={product}>{product.address.city}</MenuItem>)
                        }
                    </Select>
                </FormControl>

            </div>

        </div>
    );
};

export default Dropdown;