import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box, Grid, Skeleton } from "@mui/material";
import textt from "./text.png";
import "./stylesp.css";
import Zoom from "react-img-zoom";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Sosao from "./Sosao";
import Fab from '@mui/material/Fab';
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import sanphamAPI from "../../../Manage/api/sanphamApi";
import Product from "./Product";
import { Link } from "react-router-dom";

Sptt.propTypes = {
  product: PropTypes.object,
  
};

function Sptt(product) {

    const [count, setCount] = useState(0);

  const [data, setData] = useState([]);
  const [set, setSet] = useState("");
  const handleTruyen = (aaa,hinhanh) =>{
    setSet(aaa); setCount((e) => e + 1);
    product.handleTruyenn(aaa,hinhanh);

  }

  useEffect(() => {
    (async () => {
      try {
        
        const splq = await sanphamAPI.getlq(product.data.ma_sp)
        const listlq = await sanphamAPI.getlistlq(splq[0].loai_sp)
        setData(listlq);
        
        
      } catch (e) {
        console.log("loi lay dl", e);
      }
    })();
  }, [count]);
  return (
    <div>
        {data.map((aa)=>(
        <div>
      <Grid  sm={4}>
                    
                   <Typography sx={{width: "25%", float:"left"}}>
                   <Link style={{textDecoration: "none"}} to={`/products/${aa.ma_sp}`} ><Product data={aa} handleTruyen={handleTruyen}  /></Link>
                   </Typography>
                   
               
          </Grid>
    </div>
    ))}
    </div>
  );
}

export default Sptt;
