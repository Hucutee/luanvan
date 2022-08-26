import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name } = product;
  return (
    <Box>
      <Typography></Typography>
    </Box>
  );
}

export default ProductInfo;
