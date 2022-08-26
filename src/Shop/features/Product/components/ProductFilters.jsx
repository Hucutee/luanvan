import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Box, Paper, Typography } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    console.log(values);
    if (onchange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <Grid
        style={{
          borderBottom: "1px solid #dcdcdc",
          width: "170px",
          margin: "20px",
          lineHeight: "50px",
        }}
      ></Grid>
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
