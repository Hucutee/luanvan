import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};
function ProductList(props) {
  const { data } = props;
  console.log(data);
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} sm={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
