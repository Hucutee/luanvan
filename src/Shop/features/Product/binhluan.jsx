import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Paper, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import hotro from "./hotro.png";
import baomat from "./baomat.png";
import { useState } from "react";
import { useEffect } from "react";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Zoom from "react-img-zoom";
import Texthinh from "./texthinh";
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import Sptt from "./sptt";
import Checksl from "./checksl";
import binhluanApi from "../../../Manage/api/binhluanApi";

Binhluan.propTypes = {
  product: PropTypes.object,
  
};
function Binhluan(product){

  const [count, setCount] = useState(0);
  const [databl, setDatabl] = useState([]);

    const [value, setValue] = React.useState("2");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
      (async () => {
        try {
          const bl = await binhluanApi.getlistblid(product.data.ma_sp); setDatabl(bl);
         
        } catch (error) {
          console.log("loi", error);
        }
      })(); 
    }, [count]);
    return (
        <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  style={{
                    marginLeft: "35%",
                  }}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="none"
                >
                  <Tab
                    label="Đánh giá"
                    value="2"
                    style={{ fontSize: "20px" }}
                  />
                  <Tab
                    label="Bình luận"
                    value="3"
                    style={{ fontSize: "20px" }}
                  />
                </TabList>
              </Box>
            
              <TabPanel value="2">
                <Grid sx={{ p: 4, border: "1px solid #ededed" }}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#333",
                      }}
                    >
                      Phản hồi của khách hàng
                      
                    </Typography>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating 
                        style={{ float: "left", marginRight: "10px" }}
                        size="big"
                        name="read-only"
                        value={4}
                        readOnly
                      />{" "}
                      <Typography
                        style={{
                          color: "#333333",
                          fontSize: "15px",
                          fontWeight: "300",
                        }}
                      >
                        2 lượt đánh giá
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  <Grid>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating size="big" name="read-only" value={3} readOnly />{" "}
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung đánh giá
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> hậu </b> ngày <b> 11-11-2022</b>
                      </i>
                    </Typography>
                  </Grid>
                 
                 
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <Grid sx={{ p: 4, border: "1px solid #ededed" }}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#333",
                      }}
                    >
                      Bình luận của khách hàng
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  {databl.map((bl)=>(
                        <Grid>
                             <Grid>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      {bl.noi_dung}
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> {bl.ten_nd} </b> ngày <b> {bl.ngay_bl.slice(0,10)}</b>
                      </i>
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                        </Grid>
                      ))}
               
                 
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
    );
}

export default Binhluan;