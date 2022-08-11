import { Box, Grid, AppBar } from "@mui/material";
import * as React from "react";
import "./Home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import YouTube from "./log/logtonghop";
import Spbanchay from "./Spbanchay";

export default function Home() {
  return (
    <Box>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#fff" }}
        style={{ margin: "auto", width: "100%" }}
      >
        <Grid className="abc">
          <Grid className="chu1">#THE STONE SERIES</Grid>
          <Grid className="chu2">Cây Xinh Cây Đẹp Nè</Grid>
          <Grid className="chu3">
            Quán em có bán cà phê cà phê đen và cà phê đá. Quán em có các loai
            rau má có trà sửa chân châu đường đen
          </Grid>
          <Grid className="chu4">
            <Button variant="contained" color="success">
              Mua hàng ngay
            </Button>
          </Grid>
        </Grid>
      </AppBar>
      <Spbanchay />
      <YouTube />
    </Box>
  );
}
