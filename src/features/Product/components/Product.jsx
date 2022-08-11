import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box, Grid, Skeleton } from "@mui/material";
import textt from "./text.png";
import "./stylesp.css";
import Sosao from "./Sosao.jsx";
import Zoom from "react-img-zoom";
import { Link, useNavigate } from "react-router-dom";
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useNavigate();
  const handleClick = () => {
    history(`/products/${product.id}`);
  };

  return (
    <Box className="b1" minHeight="331.24px" onClick={handleClick}>
      <Grid
        style={{
          border: "1px solid #f0f0f0",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          {" "}
          <Zoom img={textt} zoomScale={1.5} height={305} width="100%" />
        </Box>
        <Typography
          padding={1}
          variant="body2"
          color="#333"
          fontSize="13px"
          noWrap
        >
          {product.name}
        </Typography>

        <Typography padding={1} variant="body2">
          <Sosao />
        </Typography>

        <Typography variant="body2">
          <Box
            padding={1}
            component="span"
            fontSize="16px"
            fontWeight="bold"
            color="#ABD373"
          >
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
        </Typography>
      </Grid>
    </Box>
  );
}

export default Product;
