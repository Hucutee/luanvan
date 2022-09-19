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


function Binhluan(){
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
                  <Tab label="Mô tả" value="1" style={{ fontSize: "20px" }} />
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
              <TabPanel
                value="1"
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  padding: "23px",
                  color: "rgb(128,128,128)",
                  borderTop: "1px solid #f0f0f0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat. In a free hour, when
                our power of choice is untrammelled and when nothing prevents
                our being able to do what we like best, every pleasure is to be
                welcomed and every pain avoided. But in certain circumstances
                and owing to the claims of duty or the obligations of business
                it will frequently occur that pleasures have to be repudiated
                and annoyances accepted. The wise man therefore always holds in
                these matters to this principle of selection: he rejects
                pleasures to secure other greater pleasures, or else he endures
                pains to avoid worse pains.
              </TabPanel>
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
                  <Grid>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating size="big" name="read-only" value={5} readOnly />{" "}
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
                        Được thêm bởi <b> hậu </b>{" "}
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
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung bình luận
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
                  <Grid>
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
                        Được thêm bởi <b> hậu </b>{" "}
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
            </TabContext>
          </Box>
    );
}

export default Binhluan;