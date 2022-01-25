import { Typography } from '@mui/material';
import React, { useState } from 'react';

 import "../Company/Company.css";

 import Company from '../Company/Company';


const Product = ({ allcompanies }) => {
  

    const result = allcompanies.reduce(function (r, a) {
        r[a.product_name] = r[a.product_name] || [];
        r[a.product_name].push(a);
        return r;
    }, Object.create(null));

    const individualCompany = Object.keys(result)

    // console.log(individualCompany);



    return (

        <div style={{
            textAlign: "left"
        }}>
            < Typography variant='h2' component="div" sx={{
                fontSize: "35px", color: "rgba(255, 255, 255, 0.87)", fontWeight: 700, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}> Edvora</Typography >
            <Typography variant='h4' component="div" sx={{ fontSize: "25px ", fontWeight: 500, color: "rgba(255, 255, 255, 0.5)", my: "20px" }}>Products</Typography>
            {
                individualCompany.map(company => {
                    return <Company
                        key={company}
                        name={company}
                        result={result}
                    >
                    </Company>
                })

            }

        </div >
    );
};

export default Product;
