import { Box, Grid, AppBar, } from "@mui/material";
import * as React from "react";
import "./Home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Spmoi from "./Spmoi";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


export default function Home() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Box>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#fff" }}
        style={{ margin: "auto", width: "100%" }}
      >
        <Grid className="abc">
          <Grid className="chu1">#CỬA HÀNG CÂY TRỒNG</Grid>
          <span className="chu2 font-bold bg-clip-text 	 text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
          Hau's  Garden
          </span>
          <Grid className="chu3">
            Cửa hàng cây trồng Hau's Garden cung cấp các loại sen đá, xương rồng, chậu tiểu cảnh,đất chuyên dụng, dụng cụ chăm sóc cây trồng,..
          </Grid>
          <Grid className="chu4">
            <Button variant="contained" color="success">
            <Link underline="hover"  color="inherit" to="/products">
                Khám phá ngay
              </Link>
              
            </Button>
          </Grid>
        </Grid>
      </AppBar>
     <span onClick={goToTop}> <Spmoi  /></span>
    </Box>
  );
}
