import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Button, Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import bg from "./i1.png";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: { width: "250px", backgroundColor: "#f8f8f8", paddingLeft: "20px", paddingTop: "30px", },
  right: { flex: "1 1 0" },}));
function Listproduct() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [datalsp, setDatalsp] = useState([]);
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [counttrang, setCounttrang] = useState("");
  const [hienkhoanggia, setHienkhoanggia] = useState(false);
  const [trang, setTrang] = useState(1);
  const [locloai, setLocloai] = useState("");
  const [locloaiten, setLocloaiten] = useState("");
  const [locgianho, setLocgianho] = useState("");
  const [locgialon, setLocgialon] = useState("");
  const [locgia, setLocgia] = useState("");
  const [search, setSearch] = useState(1);
  const [reset, setReset] = useState(0);
  const goToTop = () => {  window.scrollTo({ top: 0,  behavior: 'smooth', }); };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleChangepage = (event, value) => {
    setTrang(value); setCount((e) => e + 1);
  };
  const [opencheckgia, setOpencheckgia] = React.useState(false);
  const handleClosecheckgia = () => {
    setOpencheckgia(false);
  };
  const handleSubmitgia = () => {
    if ( locgianho > 999 && locgialon > 999 && locgianho % 1 == 0 && locgialon % 1 == 0 && locgianho <= locgialon) {
      setCount((e) => e + 1); setHienkhoanggia(true);setTrangthai("1"); setTrang(1);
    } else { setLocgianho(""); setLocgialon(""); setOpencheckgia(true);
    }};
  const handleChangloai = (Value, ten) => {
    setLocloai(Value); setLocloaiten(ten);setTrangthai("1");  setCount((e) => e + 1);  setTrang(1);
  };
  const handleChangegia = (event, newValue) => {
    setLocgia(newValue); setCount((e) => e + 1);setTrangthai("1");  setTrang(1);
  };
  const handleTimkim = (aa) => {
    setTenget(aa);  setTrang(1);
    setTrangthai("");  setLocgia("");  setLocloai("");  setLocloaiten("");  setLocgianho("");
    setLocgialon("");  setHienkhoanggia(false);  setCount((e) => e + 1);
  };
  const handleTrangthai = () => {
    setTrangthai("1"); setLocloai(""); setLocgia(""); setLocgialon(""); setTrang(1);
    setLocgianho(""); setHienkhoanggia(false); setCount((e) => e + 1);
  };
  useEffect(() => {
    (async () => {
      const loaisp = await loaisanphamAPI.getCount();
      setDatalsp(loaisp);
      if (trangthai) {
        try {
          const datacount = await sanphamAPI.getListnoicount();
          const sotrang = Math.ceil(datacount.length / 15);
          setCounttrang(sotrang);
          if (locloai && !locgia && (!locgianho || !locgialon)) {
            const data = await sanphamAPI.getListnoiloai(locloai, trang);
            setData(data);
          } else if (!locloai && locgia && (!locgianho || !locgialon)) {
            const data = await sanphamAPI.getListnoigia(locgia, trang);
            setData(data);
          } else if (!locloai && !locgia && locgianho && locgialon) {
            const data = await sanphamAPI.getListnoikhoanggia(  locgianho,  locgialon,  trang);
            setData(data);
          } else if (locloai && locgia && (!locgianho || !locgialon)) {
            const data = await sanphamAPI.getListnoiloaigia(  locloai,  locgia,  trang);
            setData(data);
          } else if (locloai && !locgia && locgianho && locgialon) {
            const data = await sanphamAPI.getListnoiloaikhoanggia(  locloai,  locgianho,  locgialon,  trang);
            setData(data);
          } else if (!locloai && locgia && locgianho && locgialon) {
            const data = await sanphamAPI.getListnoigiakhoanggia( locgia,  locgianho,  locgialon,  trang);
            setData(data);
          } else if (locloai && locgia && locgianho && locgialon) {
            const data = await sanphamAPI.getListnoiloaigiakhoanggia(  locloai,  locgia,  locgianho,  locgialon,  trang);
            setData(data);
          } else {
            const data = await sanphamAPI.getListnoi(trang);
            setData(data);
          }
        } catch (e) { console.log("loi lay dl", e);
        }
      } else {
        try {
          const datacount = await sanphamAPI.getListnoicounttenget(tenget);
          const sotrang = Math.ceil(datacount.length / 15);
          setCounttrang(sotrang);
          const data = await sanphamAPI.getidnoi(tenget, trang); setData(data);
        } catch (e) { console.log("loi lay dl", e);
        }
      }
     
    })();
  }, [count]);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const handleDeletekhoanggia = () => {
    setLocgianho(""); setLocgialon(""); setHienkhoanggia(""); setCount((e) => e + 1);
  };
  const handleDeletegia = () => {
    setLocgia(""); setCount((e) => e + 1);
  };
  const handleDeleteloai = () => {
    setLocloai(""); setLocloaiten(""); setCount((e) => e + 1);
  };

  const classes = useStyles();
  const [message, setMessage] = useState('');
  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });
 
  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const stoplistenContinuously = () => {
    setSearch(0); setReset(1);
    SpeechRecognition.stopListening();
    handleTimkim(transcript); setCount((e) => e + 1);
  };
  const listenContinuously = () => {
    setSearch(0); setReset(0);
    SpeechRecognition.startListening({
      continuous: true,
      language: 'vi-VN',
    }); setCount((e) => e + 1);
  };
  const handleSearch = () => {
    setSearch(1);setReset(0); setCount((e) => e + 1);
  };
  return (
    <Box>
      <div
        role="presentation" style={{ borderTop: "1px solid #ededed",  borderBottom: "1px solid #ededed",  marginBottom: "40px", }}
      >
        <Breadcrumbs id="123"
          separator="&ensp; › &ensp; " aria-label="breadcrumb" style={{ marginLeft: "12.5%", fontSize: "13px", lineHeight: "40px" }}
        >
          <Link underline="hover" color="inherit" to="/app">
            {" "} Trang chủ{" "}
          </Link>
          <Link to="" underline="hover" style={{color:"#339900"}} value="1" onClick={handleTrangthai}>
            {" "}  Danh sách sản phẩm{" "}
          </Link>
        </Breadcrumbs>
      </div>
      <Container>
        <Grid container>
          <Grid marginRight="20px">
            <Grid item className={classes.left}>
              <Box>
                <Grid
                  sx={{  fontSize: "18px",  fontWeight: "500",  marginBottom: "10px",  marginLeft: "5px",}}
                > Loại sản phẩm
                </Grid>
                <FormControl color="success" sx={{ m: 1, minWidth: "82%" }}>
                  <InputLabel id="demo-select-small"> Chọn loại sản phẩm </InputLabel>
                  <Select
                    labelId="demo-select-small"  id="demo-select-small"  value={locloai}  label="Ageaaaaaaaaaaaaa"
                  >
                    {datalsp.map((loai) => (
                      <MenuItem value={loai.ma_lsp}>
                        <button
                          value={loai.ma_lsp} onClick={(e) =>  handleChangloai(e.target.value, loai.ten_lsp) }
                        >  {loai.ten_lsp}
                        </button>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Grid
                style={{  borderBottom: "1px solid #dcdcdc",  width: "170px",  margin: "20px",  marginTop: "35px",  marginBottom: "30px",  lineHeight: "60px",  }}
              ></Grid>
              <Box>
                <Grid
                  sx={{  fontSize: "18px",   fontWeight: "500",   marginBottom: "10px",   marginLeft: "5px", }}
                >  Sắp sếp giá
                </Grid>
                <Tabs
                  variant="Box" orientation="vertical" indicatorColor="none" textColor="none" sx={{ padding: "1px 1px", color: "#00000099" }} onChange={handleChangegia}
                >
                  <Tab
                    sx={{  width: "100%",  padding: "10px",paddingTop:"5px",     minHeight: "15px",  alignItems: "flex-start",
                      "&:hover": { color: "#339900" }, }}  label="Giá thấp tới cao"  value="ASC"
                  ></Tab>
                  <Tab
                    sx={{   width: "100%",   padding: "10px",paddingTop:"5px",   minHeight: "15px",   alignItems: "flex-start",
                      "&:hover": { color: "#339900" }, }} label="Giá cao tới thấp"  value="DESC"
                  ></Tab>
                </Tabs>
              </Box>

              <Grid
                style={{  borderBottom: "1px solid #dcdcdc",  width: "170px",  margin: "20px",
                  marginTop: "25px",  marginBottom: "30px",  lineHeight: "60px", }}
              ></Grid>
              <Box>
                <Grid
                  sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "15px", marginLeft: "5px", }}
                >  Khoảng giá (VNĐ)
                </Grid>
                <Tabs
                  variant="Box" orientation="vertical" value="A" indicatorColor="none" textColor="none" sx={{ padding: "1px 1px", color: "#00000099" }}
                >
                  <Box
                    component="form"  sx={{ "& .MuiTextField-root": { m: 1, width: "22ch" } }}
                    noValidate   autoComplete="off"
                  >
                    <div>
                      <TextField
                        color="success"  label="Từ"  value={locgianho}
                        id="outlined-size-small"  size="small"  onChange={(e) => setLocgianho(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        color="success"  label="Đến"  value={locgialon}  id="outlined-size-small"  size="small"
                        style={{ marginBottom: "15px" }}  onChange={(e) => setLocgialon(e.target.value)}
                      />
                      <div>
                        <Button
                          style={{ marginLeft: "3%", marginBottom: "20px" }}  variant="contained"
                          color="success"  onClick={handleSubmitgia}
                        >  Áp dụng
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item className={classes.right} onClick={goToTop}>
            <Grid
              className="w-[96%] h-[170px] mb-[4%] ml-[2%]" style={{ backgroundImage: `url(${bg})`,backgroundRepeat: "no-repeat",
              backgroundsize: "cover",
              backgroundPosition: "center center" 
            }}
            ><div style={{fontFamily: "papyrus "}} className=" text-[42px]  w-[100%] pt-[25px] text-center">Sản phẩm tốt nhất,<br/> mức giá rẻ nhất</div></Grid>
            <Grid
              className="w-[96%] h-[50px] mb-[4%] ml-[2%]"  style={{ border: "1px solid #f0f0f0" }}
            >
              <Stack
                direction="row"  spacing={1}  style={{ marginTop: "8px", marginLeft: "14px", float: "left" }}
              >
                <ViewComfyIcon
                  onClick={handleTrangthai}  color="action"  fontSize="medium"  className="a1 mt-[4px] mr-[10px]"
                />
                {(locloai || locgia || locgialon || locgianho || hienkhoanggia) ? (<></>
                ) : ( <Chip label="Danh sách tất cả sản phẩm" />
                )}
                {!locloai == "" ? (<Chip  label={`Loại: ` + locloaiten}  onDelete={handleDeleteloai}/>
                ) : (<span> </span>
                )}
                {locgia == "DESC" ? ( <Chip label="Giá cao tới thấp" onDelete={handleDeletegia} />) : ( <></>
                )}
                {locgia == "ASC" ? ( <Chip label="Giá thấp tới cao" onDelete={handleDeletegia} /> ) : ( <></>
                )}
                {hienkhoanggia ? ( <Chip   label={`Giá: ` + locgianho + ` - ` + locgialon}   onDelete={handleDeletekhoanggia} /> ) : (  <></>
                )}
              </Stack>

              <div className="bg-slate-200">
                <Paper
                  elevation={0}  component="form"
                  className=" h-[100%] 	border-gray-200			 border-solid hover:bg-gray-300"
                  sx={{   display: "flex",    alignItems: "center",  width: "30%",
                    float: "right",  height: "100%",  backgroundColor: " #f0f0f0",}}
                >
                  <IconButton
                    onClick={handleSearch}  type="button"  sx={{ p: 1 }}  aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  {search ? <InputBase
                    onChange={(e) => handleTimkim(e.target.value)}  sx={{ ml: 1, flex: 1, height: "50px" }}
                    placeholder="Tìm sản phẩm..."   inputProps={{ "aria-label": "search google maps" }}
                  />: <InputBase
                  onChange={(e) => handleTimkim(e.target.value)}  sx={{ ml: 1, flex: 1, height: "50px" }}
                  placeholder="Tìm giọng nói..." value={transcript}  inputProps={{ "aria-label": "search google maps" }}
                />}
                 <span>
         {listening ?  <span> 
          <IconButton type="button"    aria-label="search" onClick={stoplistenContinuously}><MicOffIcon/></IconButton></span>
 : <span>{reset ? <IconButton type="button" sx={{ p: 1 }}  aria-label="search" onClick={resetTranscript}><RestartAltIcon/></IconButton> : <></>}<IconButton type="button" sx={{ p: 1 }}  aria-label="search" onClick={listenContinuously}><MicIcon/></IconButton> </span>} 
       </span>
                </Paper>
              </div>
            </Grid>

            <Grid container>
              {data.length > 0 ? (
                data.map((product) => (
                  <Grid item key={product.ma_sp} sm={4}>
                    <Link style={{textDecoration: "none"}} to={`/products/${product.ma_sp}`}> <Product data={product} /></Link>
                           
                  </Grid>
                ))
              ) : (
                <div className="text-lg  w-[100%] pt-5 text-center	">
                  Rất tiết không có sản phẩm bạn đang tìm!
                </div>
              )}
            </Grid>
            <div className="rounded-bl-2xl rounded-br-2xl   h-[57px] pt-4">
              <Pagination
                style={{  display: "flex",  flexFlow: "row nowrap",  justifyContent: "center",}}
                color="success"  count={counttrang}  page={trang}  onChange={handleChangepage}
              ></Pagination>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={opencheckgia} autoHideDuration={6000} onClose={handleClosecheckgia}
      >
        <Alert  onClose={handleClosecheckgia}  severity="error"  sx={{ width: "100%" }}>
          Vui lòng nhập số nguyên lớn hơn hoặc bằng 1000 và gía(từ) lớn hơn  giá(đến)!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Listproduct;
