import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "../../../../api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
    backgroundColor: "#f8f8f8",
    paddingLeft: "20px",
    paddingTop: "30px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "10px",
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 9,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log("loi", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box>
      <div
        role="presentation"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
          marginBottom: "40px",
        }}
      >
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          style={{
            marginLeft: "12.5%",
            fontSize: "13px",
            lineHeight: "40px",
          }}
        >
          <Link underline="hover" color="inherit" href="/app">
            Trang chủ
          </Link>
          <Link underline="hover" color="#339900">
            Danh sách sản phẩm
          </Link>
        </Breadcrumbs>
      </div>
      <Container>
        <Grid container>
          <Grid marginRight="20px">
            <Grid item className={classes.left}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              <Grid
                style={{
                  borderBottom: "1px solid #dcdcdc",
                  width: "170px",
                  margin: "20px",
                  lineHeight: "50px",
                }}
              ></Grid>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                {loading ? (
                  <p> </p>
                ) : (
                  <Pagination
                    color="primary"
                    count={14}
                    page={pagination.page}
                    onChange={handlePageChange}
                  ></Pagination>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
