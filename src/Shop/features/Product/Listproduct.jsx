import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Button, Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import sanphamAPI from "../../../Manage/api/sanphamApi";
import loaisanphamAPI from "../../../Manage/api/loaisanphamApi";
import Product from "./Product";
import Zoom from "react-img-zoom";
import Pagination from "@mui/material/Pagination";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
  const [datalsp, setDatalsp] = useState([]);
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [counttrang, setCounttrang] = useState("");
  const [trang, setTrang] = useState(1);
  const [locloai, setLocloai] = useState("");
  const [locgianho, setLocgianho] = useState("");
  const [locgialon, setLocgialon] = useState("");
  const [locgia, setLocgia] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1);
  };
  const [opencheckgia, setOpencheckgia] = React.useState(false);
  const handleClosecheckgia = () => {
    setOpencheckgia(false);
  };
  const handleSubmitgia = () => {
    if (
      locgianho > 999 &&
      locgialon > 999 &&
      locgianho % 1 == 0 &&
      locgialon % 1 == 0 &&
      locgianho < locgialon
    ) {
      setCount((e) => e + 1);
    } else {
      setLocgianho("");
      setLocgialon("");
      setOpencheckgia(true);
    }
  };

  const handleChangegia = (event, newValue) => {
    setLocgia(newValue);
    setCount((e) => e + 1);
  };
  const handleTimkim = () => {
    setTrangthai("");
    setCount((e) => e + 1);
  };
  const handleTrangthai = () => {
    setTrangthai("1");
    setLocloai("");
    setLocgia("");
    setLocgialon("");
    setLocgianho("");
    setCount((e) => e + 1);
  };
  useEffect(() => {
    (async () => {
      console.log(locgialon, locgianho);
      const loaisp = await loaisanphamAPI.getCount();
      setDatalsp(loaisp);
      if (trangthai) {
        try {
          if (locloai && !locgia && (!locgianho || !locgialon)) {
            const data = await sanphamAPI.getListnoiloai(locloai, trang);
            setData(data);
          } else if (!locloai && locgia && (!locgianho || !locgialon)) {
            const data = await sanphamAPI.getListnoigia(locgia, trang);
            setData(data);
          } else if (!locloai && !locgia && locgianho && locgialon) {
            const data = await sanphamAPI.getListnoikhoanggia(
              locgianho,
              locgialon,
              trang
            );
            setData(data);
          }else if(locloai && locgia && (!locgianho || !locgialon)){
            const data = await sanphamAPI.getListnoiloaigia(locloai,locgia, trang);
            setData(data);
          }else if(locloai && !locgia && (locgianho && locgialon)){
            const data = await sanphamAPI.getListnoiloaikhoanggia(locloai,locgianho,locgialon, trang);
            setData(data);
          } else {
            const data = await sanphamAPI.getListnoi(trang);
            setData(data);
          }
        } catch (e) {
          console.log("loi lay dl", e);
        }
      } else {
        try {
          const data = await sanphamAPI.getidnoi(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      }
      const datacount = await sanphamAPI.getListnoicount();
      const sotrang = Math.ceil(datacount.length / 15);
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
          separator="&ensp; › &ensp; "
          aria-label="breadcrumb"
          style={{ marginLeft: "12.5%", fontSize: "13px", lineHeight: "40px" }}
        >
          <Link underline="hover" color="inherit" href="/app">
            {" "}
            Trang chủ{" "}
          </Link>
          <Link
            underline="hover"
            color="#339900"
            value="1"
            onClick={handleTrangthai}
          >
            {" "}
            Danh sách sản phẩm{" "}
          </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0}
            component="form"
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            sx={{
              p: "0px 4px",
              display: "flex",
              alignItems: "center",
              width: "15%",
              float: "left",
              marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",
            }}
          >
            <InputBase
              onChange={(e) => setTenget(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm sản phẩm"
              inputProps={{ "aria-label": "search google maps" }}
            />

            <IconButton
              onClick={handleTimkim}
              type="button"
              sx={{ p: 1 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <Container>
        <Grid container>
          <Grid marginRight="20px">
            <Grid item className={classes.left}>
              <Box>
                <Grid
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "10px",
                    marginLeft: "5px",
                  }}
                >
                  Loại sản phẩm
                </Grid>
                <FormControl color="success" sx={{ m: 1, minWidth: "82%" }}>
                  <InputLabel id="demo-select-small">
                    Chọn loại sản phẩm
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={locloai}

                    label="Ageaaaaaaaaaaaaa"
                    onChange={(e) => setCount((e) => e + 1)}
                  >
                    <MenuItem value="">
                      <button
                        value=""
                        onClick={(e) => setLocloai(e.target.value)}
                      >
                        Bỏ chọn
                      </button>{" "}
                    </MenuItem>

                    {datalsp.map((loai) => (
                      <MenuItem value={loai.ma_lsp}>
                        <button
                          value={loai.ma_lsp}
                          onClick={(e) => setLocloai(e.target.value)}
                        >
                          {loai.ten_lsp}
                        </button>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Grid
                style={{
                  borderBottom: "1px solid #dcdcdc",
                  width: "170px",
                  margin: "20px",
                  marginTop: "35px",
                  marginBottom: "25px",
                  lineHeight: "60px",
                }}
              ></Grid>
              <Box>
                <Grid
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "12px",
                    marginLeft: "5px",
                  }}
                >
                  Sắp sếp giá
                </Grid>
                <Tabs
                  variant="Box"
                  orientation="vertical"
                  indicatorColor="none"
                  textColor="none"
                  sx={{ padding: "1px 1px", color: "#00000099" }}
                  onChange={handleChangegia}
                >
                  <Tab
                    sx={{
                      width: "100%",
                      padding: "10px",
                      minHeight: "18px",
                      alignItems: "flex-start",
                      "&:hover": { color: "#339900" },
                    }}
                    label="Giá thấp tới cao"
                    value="ASC"
                  ></Tab>
                  <Tab
                    sx={{
                      width: "100%",
                      padding: "10px",
                      minHeight: "18px",
                      alignItems: "flex-start",
                      "&:hover": { color: "#339900" },
                    }}
                    label="Giá cao tới thấp"
                    value="DESC"
                  ></Tab>
                </Tabs>
              </Box>

              <Grid
                style={{
                  borderBottom: "1px solid #dcdcdc",
                  width: "170px",
                  margin: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  lineHeight: "60px",
                }}
              ></Grid>
              <Box>
                <Grid
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "15px",
                    marginLeft: "5px",
                  }}
                >
                  Khoảng giá (VNĐ)
                </Grid>
                <Tabs
                  variant="Box"
                  orientation="vertical"
                  value="A"
                  indicatorColor="none"
                  textColor="none"
                  sx={{ padding: "1px 1px", color: "#00000099" }}
                >
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "22ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        color="success"
                        label="Từ"
                        value={locgianho}
                        id="outlined-size-small"
                        size="small"
                        onChange={(e) => setLocgianho(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        color="success"
                        label="Đến"
                        value={locgialon}

                        id="outlined-size-small"
                        size="small"
                        style={{ marginBottom: "15px" }}
                        onChange={(e) => setLocgialon(e.target.value)}
                      />
                      <div>
                        <Button
                          style={{ marginLeft: "3%", marginBottom: "20px" }}
                          variant="contained"
                          color="success"
                          onClick={handleSubmitgia}
                        >
                          Áp dụng
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item className={classes.right}>
            <Grid container>
              {data.length > 0 ? (
                data.map((product) => (
                  <Grid item key={product.ma_sp} sm={4}>
                    <Box className="b1" minHeight="350px">
                      <Paper
                        style={{
                          border: "1px solid #f0f0f0",
                        }}
                      >
                        <Box sx={{ cursor: "pointer" }}>
                          <Zoom
                            img={require("../../../images/" + product.hinhanh)}
                            zoomScale={1.5}
                            height={350}
                            width="100%"
                          />
                        </Box>
                        <Typography
                          padding={2}
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
                ))
              ) : (
                <div className="  h-[57px] pt-4">
                  {" "}
                  Không tìm thấy sản phẩm bạn đang tìm!{" "}
                </div>
              )}
            </Grid>
            <div className="rounded-bl-2xl rounded-br-2xl   h-[57px] pt-4">
              <Pagination
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: "center",
                }}
                color="success"
                count={counttrang}
                page={trang}
                onChange={handleChangepage}
              ></Pagination>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={opencheckgia}
        autoHideDuration={6000}
        onClose={handleClosecheckgia}
      >
        <Alert
          onClose={handleClosecheckgia}
          severity="error"
          sx={{ width: "100%" }}
        >
          Vui lòng nhập số nguyên lớn hơn hoặc bằng 1000 và gía(từ) lớn hơn
          giá(đến)!{" "}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Listproduct;
