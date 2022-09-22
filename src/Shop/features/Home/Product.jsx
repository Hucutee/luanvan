import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box, Grid, Skeleton } from "@mui/material";
import Zoom from "react-img-zoom";
import { Link, useNavigate } from "react-router-dom";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Sosao from "../Product/Sosao";
import Fab from '@mui/material/Fab';
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import { propsToClassKey } from "@mui/styles";
import Button from '@mui/material/Button';

Product.propTypes = {
  product: PropTypes.object,
};

function Product(product) {
  const history = useNavigate();
  const handleClick = () => {

    product.handleTruyen(product.data.ma_sp,product.data.hinhanh);

  };
  const [data, setData] = useState([]);
  const [gia1, setGia1] = useState([]);
  const [gia2, setGia2] = useState([]);
  const [km, setKm] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await chitietsanphamApi.getsp(product.data.ma_sp);
        setData(data);
        const data2 = await khuyenmaiAPI.getkm(product.data.ma_sp);
        setKm(data2);
        if (data.length == 1) {
          const dataa = await chitietsanphamApi.getgia1(product.data.ma_sp);
          setGia1(dataa);
        }
        if (data.length > 1) {
          const dataaa = await chitietsanphamApi.getgia2(product.data.ma_sp);
          setGia2(dataaa);
        }
      } catch (e) {
        console.log("loi lay dl", e);
      }
    })();
  }, []);
  return (
    <div onClick={handleClick}>
      <Box className="thespm" minHeight="300px">
        <Box style={{ border: "2px solid #f0f0f0" }}>
          <Box sx={{ cursor: "pointer" }}>
          <Box sx={{ '& > :not(style)': { ml:1 ,mt: 1,width:"65px", }}}>
          {km.length ? km.map((aa)=>(<Button variant="contained" color="warning" style={{position: "absolute",zIndex:1 }}>
          -{aa.phantram_km}%
      </Button>)):<></>}
          </Box>
            <Zoom
              img={require("../../../images/" + product.data.hinhanh)}
              zoomScale={1.5}
              height={280}
              width="100%"
              position="absolute"
            />
          </Box>
          <Typography
            padding={2}
            variant="body2"
            color="#333"
            fontSize="14px"
            noWrap
          >
            {" "}
            {product.data.ten_sp}
          </Typography>
   
          <Typography variant="body2">
            <Box
            
              component="span"
              fontSize="16px"
              fontWeight="bold"
              color="#ABD373"
            >
              {data.length > 1
                ? (
                  km.length ? (
                    km.map((aa)=>(
                      gia2.map((product) => (
                        <div className="ml-4 mb-3 ">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.min-product.min*aa.phantram_km/100)}{" "}
                          -{" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.max-product.max*aa.phantram_km/100)}{" "}
                        </div>
                      ))
                    ))
                  ):(
                    gia2.map((product) => (
                      <div className="ml-4 mb-3">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.min)}{" "}
                        -{" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.max)}{" "}
                      </div>
                    ))
                  )
                )
                : (
                  km.length ? (
                    km.map((aa)=>(
                      gia1.map((product) => (
                        <div className="ml-4 mb-3">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.giaban-product.giaban*aa.phantram_km/100)}
                        </div>
                      ))
                    ))
                  ):
                  gia1.map((product) => (
                    <div className="ml-4 mb-3">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.giaban)}
                    </div>
                  ))
                )}
            </Box>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Product;
