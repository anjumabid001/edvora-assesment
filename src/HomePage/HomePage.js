import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Product from '../Product/Product';

const HomePage = () => {
    const [allcompanies, setAllCompanies] = useState([])
    useEffect(() => {
        fetch("https://assessment-edvora.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllCompanies(data)

            })
    }, [])

    return (
        <div style={{ backgroundColor: "#232323" }}>
            <div style={{ width: "100%", margin: "auto" }} >
                <Grid container>

                    <Grid item md={2} xs={12} sx={{ mr: "35px", backgroundColor: "#131313", p: "25px", borderRadius: "15px", width: "228px", }}>
                        <Dropdown allcompanies={allcompanies}></Dropdown>
                    </Grid>
                    <Grid item md={9} xs={12} >
                        <Product allcompanies={allcompanies}></Product>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default HomePage;