import React from 'react';
import Typography from '@mui/material/Typography';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./Company.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';
import { Grid } from '@mui/material';

// install Swiper modules
SwiperCore.use([Navigation]);

const Company = (props) => {
    const { result, name } = props;
    const filteredProducts = result[name]
    // console.log(filteredProducts)

    return (
        <div>
            <h2 style={{ color: "white", fontSize: "20px", fontWeight: 400, borderBottom: "1px solid rgba(203, 203, 203, 0.5)", paddingBottom: "8px" }}>{name}</h2>


            <div className='section'>
                <Swiper slidesPerView={4} spaceBetween={20} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}

                    navigation={true} className="mySwiper "

                >

                    {
                        filteredProducts.map(singleProduct => <SwiperSlide className='customSwiper'
                        >

                            <Grid container sx={{ backgroundColor: "#232323", color: "white" }} >
                                <Grid item md={5} >
                                    <div style={{ width: "70px", height: "70px", borderRadius: "5px", display: "block", backgroundColor: "white", padding: "2px" }}>
                                        <img
                                            src={singleProduct.image}
                                            alt="green iguana"

                                        />
                                    </div>
                                    <Typography variant='p' component='div' sx={{ mt: "9px", textAlign: "left", fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", lineHeight: "15px" }}>{singleProduct.address.city}, <br />{singleProduct.address.state}</Typography>
                                </Grid>
                                <Grid item md={7} sx={{ textAlign: "left" }}>
                                    <Typography variant='p' component='div' sx={{ fontSize: "15px" }}>{singleProduct.product_name}</Typography>
                                    <Typography variant='p' component='div' sx={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", my: "10px" }}>{singleProduct.brand_name}</Typography>
                                    <Typography variant='p' component='div' sx={{ fontSize: "13px" }}>$ {singleProduct.price}</Typography>
                                    <Typography variant='p' component='div' sx={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", mt: "13px" }}>Date: {new Date(singleProduct.date).toLocaleDateString().replaceAll("/", ":")}</Typography>

                                </Grid>
                                <Grid item md={12}>
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", mt: "10px" }} >
                                        {singleProduct.discription}
                                    </Typography>

                                </Grid>
                            </Grid>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>


        </div >
    );
};

export default Company;