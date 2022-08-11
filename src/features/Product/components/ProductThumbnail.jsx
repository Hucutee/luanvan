import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Zoom from "react-img-zoom";
import textt from "./text.png";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  return (
    <Box sx={{ cursor: "pointer" }}>
      {" "}
      <Zoom
        img={textt}
        zoomScale={2}
        height={650}
        width={500}
        marginRight="5%"
      />
    </Box>
  );
}

export default ProductThumbnail;
