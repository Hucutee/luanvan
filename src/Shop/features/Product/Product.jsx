import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box, Grid, Skeleton } from "@mui/material";
import textt from "./text.png";
import "./stylesp.css";
import Zoom from "react-img-zoom";
import { Link, useNavigate } from "react-router-dom";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Sosao from "./Sosao";

Product.propTypes = {
  product: PropTypes.object,
};

function Product(product) {
  const history = useNavigate();
  const handleClick = () => {
    history(`/products/${product.data.ma_sp}`);
  };
  const [data, setData] = useState([]);
  const [gia1, setGia1] = useState([]);
  const [gia2, setGia2] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await chitietsanphamApi.getsp(product.data.ma_sp);
        setData(data);
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
      <Box className="b1" minHeight="350px">
        <Paper style={{ border: "1px solid #f0f0f0" }}>
          <Box sx={{ cursor: "pointer" }}>
            <Zoom
              img={require("../../../images/" + product.data.hinhanh)}
              zoomScale={1.5}
              height={350}
              width="100%"
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
                ? gia2.map((product) => (
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
                : gia1.map((product) => (
                    <div className="ml-4 mb-3">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.giaban)}
                    </div>
                  ))}
            </Box>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default Product;
