import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductList from "../Product/components/ProductList";
import "./Home.css";
import sanphamAPI from "../../../Manage/api/sanphamApi";
import Product from "./Product";
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "440px",
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

function Spmoi(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);



  useEffect(() => {
    (async () => {
      try {
        
        const products = await sanphamAPI.spmoi();
        setProductList(products);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, []);

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
          Sản Phẩm Mới
          <Grid
            style={{
              borderBottom: "3px solid #339900",
              width: "60px",
              margin: "auto",
            }}
          ></Grid>
        </Grid>
        <Grid container marginTop="20px">
          <Grid className={classes.left}>
            <Grid className="spbc" sx={{width: "427px"}}></Grid>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
            <Grid container>
        {productList.map((product) => (
          <Grid  sm={4} >
            <Link style={{textDecoration: "none"}} to={`/products/${product.ma_sp}`}> <Product data={product} /></Link>
          </Grid>
        ))}
      </Grid>
            
             
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Spmoi;
