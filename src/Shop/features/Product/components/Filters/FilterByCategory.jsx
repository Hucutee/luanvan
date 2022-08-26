import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import categoryApi from "../../../../../api/categoryApi";
import { makeStyles } from "@mui/styles";
import { Tab, Tabs } from "@mui/material";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        console.log({ list });
        setCategoryList(
          list.data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        console.log({ categoryList });
      } catch (error) {
        console.log("loi category list", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
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
        Loại sản phẩm
      </Grid>
      <Tabs
        variant="Box"
        orientation="vertical"
        indicatorColor="primary"
        textColor="primary"
      >
        {categoryList.map((category) => (
          <Tab
            sx={{
              width: "100%",
              padding: "8px",
              minHeight: "18px",
              alignItems: "flex-start",
              "&:hover": { color: "#339900" },
            }}
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            label={category.name}
          ></Tab>
        ))}
      </Tabs>
    </Box>
  );
}

export default FilterByCategory;
