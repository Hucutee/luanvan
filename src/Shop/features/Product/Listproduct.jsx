import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import sanphamAPI from "../../../Manage/api/sanphamApi";
import Product from "./Product";
import Zoom from "react-img-zoom";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
    backgroundColor: "#f8f8f8",
    paddingLeft: "20px",
    paddingTop: "30px",
  },
  right: { flex: "1 1 0" },
}));
function Listproduct(props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loaisp, setLoaisp] = useState([]);
  const [masp, setMasp] = useState("");
  const [sanphamloai, setSanphamloai] = useState("");
  const [tensp, setTensp] = useState("");
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
  const [trang, setTrang] = useState(1);

  useEffect(() => {
    (async () => {
      if (trangthai) {
        try {
          const data = await sanphamAPI.getListnoi(trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      } else {
        try {
          const data = await sanphamAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      }
      const datacount = await sanphamAPI.getCount("a");
      const sotrang = Math.ceil(datacount.length / 10);
      setCounttrang(sotrang);
    })();
  }, [count]);
  const classes = useStyles();
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
            <Grid item className={classes.left}></Grid>
          </Grid>
          <Grid item className={classes.right}>
              <Grid container>
                {data.map((product) => (
                  <Grid item key={product.ma_sp} sm={4}>
                    <Box className="b1" minHeight="250px" >
                      <Paper
                        style={{
                          border: "1px solid #f0f0f0",}} >
                        <Box sx={{ cursor: "pointer" }}>
                          {" "}
                          <Zoom
                            img={require("../../../images/" + product.hinhanh)}
                            zoomScale={1.5}
                            height={300}
                            width="100%"
                          />
                        </Box>
                        <Typography
                          padding={1}
                          variant="body2"
                          color="#333"
                          fontSize="14px"
                          noWrap
                        >
                          {product.ten_sp}
                        </Typography>
                        <Typography variant="body2">
                          <Box
                            component="span"
                            fontSize="16px"
                            fontWeight="bold"
                            color="#ABD373"
                          >
                            <Product data={product} />
                          </Box>
                          
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Listproduct;
