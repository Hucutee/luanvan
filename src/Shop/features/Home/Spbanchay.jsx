import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductList from "../Product/components/ProductList";
import productApi from "../../../api/productApi";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
  },
  right: {
    flex: "1 1 0",
  },

  ba: {
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "70px",
    lineHeight: "50px",
  },
}));

function Spbanchay(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 6,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(filters);
        setProductList(data.data);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [filters]);

  return (
    <Box>
      <div
        role="presentation"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
        }}
      ></div>
      <Container>
        <Grid className={classes.ba}>
          Sản Phẩm Bán Chạy
          <Grid
            style={{
              borderBottom: "3px solid #339900",
              width: "60px",
              margin: "auto",
            }}
          ></Grid>
        </Grid>
        <Grid container marginTop="20px">
          <Grid item className="spbc"></Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductList data={productList} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Spbanchay;
