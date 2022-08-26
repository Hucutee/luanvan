import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";
import { Grid, Box, Paper, Typography } from "@mui/material";

ProductSort.propTypes = {
  currenSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Box>
      <Grid
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          marginBottom: "10px",
        }}
      >
        Sắp sếp giá
      </Grid>
      <Tabs
        variant="Box"
        orientation="vertical"
        value={currentSort}
        indicatorColor="none"
        textColor="none"
        onChange={handleSortChange}
        sx={{ padding: "1px 1px", color: "#00000099" }}
      >
        <Tab
          sx={{
            width: "100%",
            padding: "8px",
            minHeight: "18px",
            alignItems: "flex-start",
            "&:hover": { color: "#339900" },
          }}
          label="Giá thấp tới cao"
          value="salePrice:ASC"
        ></Tab>
        <Tab
          sx={{
            width: "100%",
            padding: "8px",
            minHeight: "18px",
            alignItems: "flex-start",
            "&:hover": { color: "#339900" },
          }}
          label="Giá cao tới thấp"
          value="salePrice:DESC"
        ></Tab>
      </Tabs>
    </Box>
  );
}

export default ProductSort;
