import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import hotro from "./hotro.png";
import baomat from "./baomat.png";
import { useState } from "react";
import { useEffect } from "react";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Zoom from "react-img-zoom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import Sptt from "./sptt";
import Checksl from "./checksl";
import Binhluan from "./binhluan";
import Snackbar from "@mui/material/Snackbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../app/cartSlide";
import { addquaylai } from "../../app/quaylai";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {  width: "540px",  height: "600px",  padding: 2,},
  right: {   padding: "20px",   border: "1px solid #ededed",   width: "600px", },
}));
function Chitietsp() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [countt, setCountt] = useState(0);
  const [counttt, setCounttt] = useState(0);
  const params = useLocation();
  const productId = params.pathname.slice(10);
  const [data, setData] = useState([]);
  const [datasp, setDatasp] = useState([]);
  const [makt, setMakt] = useState("");
  const [mactsp, setMactsp] = useState("");
  const [tenkt, setTenkt] = useState("");
  const [soluong, setSoluong] = useState(0);
  const [soluongnhap, setSoluongnhap] = useState(1);
  const [giaban, setGiaban] = useState("");
  const [hinhanh, setHinhanh] = useState("");
  const [km, setKm] = useState([]);
  const Alert = React.forwardRef(function Alert(props, ref) {return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
  const [openchecksl, setOpenchecksl] = React.useState(false);
  const handleClosechecksl = () => {setOpenchecksl(false); };
  const [opencheckgio, setOpencheckgio] = React.useState(false);
  const handleClosecheckgio = () => {setOpencheckgio(false); };
  const [opencheckkt, setOpencheckkt] = React.useState(false);
  const handleClosecheckkt = () => {setOpencheckkt(false); };
  const [opencheckslcl, setOpencheckslcl] = React.useState(false);
  const handleClosecheckslcl = () => {setOpencheckslcl(false); };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {  setOpen(false); };
  const handleCloseTop = () => {  setOpen(false); goToTop(); dispatch(addquaylai({link: params.pathname}))  };
  const handleTruyenn = (aaa,hinhanh) =>{   console.log(aaa);setHinhanh(hinhanh);    setCount((e) => e + 1); }
  const handleTruyensl = (aaa) =>{ setSoluongnhap(aaa);  setCount((e) => e + 1);} 
  const handleChangeha = (mactsp,ha,makt,tenkt,sl,gb) => {
    setMactsp(mactsp);  setMakt(makt); setTenkt(tenkt); setSoluong(sl); setGiaban(gb);  setHinhanh(ha); setCount((e) => e + 1);  
  };
const handleaddcart = () =>{
  const check=0;
  if(makt){
    if(soluongnhap > 0){
      if(soluongnhap <= soluong){
        console.log(dataUser);
        if(dataUser.length > 0){
          dispatch(
            addtoCart({
              ma_ctsp: mactsp,
              ma_sp: datasp[0].ma_sp,
              ten_sp: datasp[0].ten_sp,
              ten_kt: tenkt,
              so_luong: soluongnhap,
              hinh_anh: hinhanh,
              gia_ban: giaban,
              type: "cart",
            })); setOpencheckgio(true);
        }else{ setOpen(true)}
      }else{
        setOpencheckslcl(true);}
    }else{
      setOpenchecksl(true); }
  }else{
    setOpencheckkt(true); } 
     setCount((e) => e + 1)
}
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  useEffect(() => {
    (async () => {
      try {
        const dataa = await chitietsanphamApi.getsp(productId);
        const dataaa = await chitietsanphamApi.getsp1(productId);
        const kmm = await khuyenmaiAPI.getkm(productId); setKm(kmm);
        setData(dataa);
        setDatasp(dataaa); 
       
      } catch (error) {
        console.log("loi", error);
      }
    })(); 
  }, [count]);

  return (
    <Box className={classes.root} >
      
      <Container>
        <Paper elevation={0}>
          <div
            role="presentation"
            style={{
              borderTop: "1px solid #ededed",
              borderBottom: "1px solid #ededed",
              marginBottom: "40px",
            }}
          >
            <Breadcrumbs
              separator="&ensp; › &ensp;"
              aria-label="breadcrumb"
              style={{
                fontSize: "13px",
                lineHeight: "40px",
              }}
            >
              <Link underline="hover" color="inherit" to="/app">
                Trang chủ
              </Link>
              <Link underline="hover" color="inherit" to="/products">
                Sản phẩm
              </Link>
              <Link to="" underline="hover" style={{color:"#339900"}}>
                Chi tiết sản phẩm
              </Link>
            </Breadcrumbs>
          </div>
          <Grid container>
            <Grid item  className={classes.left}>
            <Typography>

              {hinhanh =="" ? (
                  datasp.map((aa)=>( <div style={{ float: "left", marginBottom: "10px" , marginLeft: "8px" }}> <Zoom
                    img={require("../../../images/" + aa.hinhanh )}
                    zoomScale={2}
                    height={600}
                    width={500}
                  /></div>))
                 ): (
                  data.map((aa)=>(
                    hinhanh == aa.hinhanh ?  <div style={{marginBottom: "10px" , marginLeft: "8px" }}> <Zoom
                    img={require("../../../images/" + hinhanh )}
                    zoomScale={2}
                    height={600}
                    width={500}
                  /></div> : <p></p>
                  ))
                 )}
              </Typography> 
              <Typography>
                { data.map((aa)=>(
                      <Button  color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}> <Zoom
                    img={require("../../../images/" + aa.hinhanh )}
                    height={100}
                    width={100}
                   onClick={(e) => setHinhanh(aa.hinhanh)}
                  /></Button>
                  ))}
                </Typography> </Grid>
            <Grid item className={classes.right}>
              <Typography
                component="h1"
                variant="h3"
                style={{
                  fontSize: "30px",
                  fontWeight: "300",
                  lineHeight: "50px",
                  color: "#333",
                }}
              >
                {datasp.map((aa) => aa.ten_sp)}
              </Typography>
              <Typography>
                {" "}
                <Rating
                  style={{ marginTop: "10px" }}
                  size="small"
                  name="half-rating-read" defaultValue={2.6} precision={0.1}
                  
                  readOnly
                />
              </Typography>
              <Typography
               
              >
                {giaban =="" ? (
                 km.length ? (
                  km.map((aaa)=>(
                    datasp.map((aa)=>(<p><span style={{fontSize:"20px", color:"#333", fontWeight:"300", textDecoration: "line-through"
                  }}>{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(aa.giaban)}</span>&ensp; &ensp;
                     <span  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
                }}>{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(aa.giaban-aa.giaban*aaa.phantram_km/100)}</span></p>)
                   )
                  ))
                 ):( datasp.map((aa)=>(<p  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
                }}> {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(aa.giaban)}</p>)
               ))): (km.length ? (
                km.map((aaa)=>(
                  <p><span style={{fontSize:"20px", color:"#333", fontWeight:"300", textDecoration: "line-through"
                }}>{new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(giaban)}</span>&ensp; &ensp;
                   <span  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
              }}>{new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(giaban-giaban*aaa.phantram_km/100)}</span></p>)
                 )
                
               ):(<p  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
              }}> {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(giaban)}</p>)
             )}
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  lineHeight: "30px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                 {tenkt =="" ? (
                  datasp.map((aa)=>(<p>Số lượng: {aa.soluong ? <span style={{color:"#339900", fontWeight:"400"}}>&ensp; &ensp; </span> : <span style={{color:"RED"}}> </span>}&ensp; &ensp;, &ensp; &ensp; kích thước: <span style={{color:"#339900", fontWeight:"400"}}> </span></p>))
                 ): (<p>Số lượng: {soluong ? <span style={{color:"#339900",fontWeight:"400"}}>{soluong}</span> : <span style={{color:"red"}}>hết hàng</span>}, &ensp; &ensp; kích thước: <span style={{color:"#339900", fontWeight:"400"}}>{tenkt}</span>,  &ensp; &ensp; đã bán: <span style={{color:"#339900", fontWeight:"400"}}>{datasp.map((aaa)=>(aaa.da_ban))}</span></p>)}
              </Typography>
             
              <Typography
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  padding: "23px",
                  color: "#333",
                  borderTop: "1px solid #f0f0f0",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "20px",
                }}
              >
                Trái ngược với việc sử dụng 'Nội dung ở đây, nội dung ở đây',
                làm cho nó giống như tiếng Anh có thể đọc được. Nhiều gói xuất
                bản trên máy tính để bàn và trình chỉnh sửa trang web hiện sử
                dụng Lorem Ipsum làm văn bản mô hình mặc định của họ và tìm kiếm
                ...
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  paddingTop: "23px",
                  color: "#333",
                }}
              >
                {" "}
                <Stack direction="row" spacing={2} style={{ height: "50px" }}>
                  <p style={{ marginTop: "10px" }}>Kích thước: </p>

                  {data.map((aa) => (
                    aa.soluong ? <Button variant="contained" color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}>
                    {aa.ten_kt}
                  </Button> :  <Button variant="outlined" color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}>
                    {aa.ten_kt}
                  </Button>
                  ))}
                </Stack>
              </Typography>
              <Stack
                style={{ height: "50px" }}
                direction="row"
                spacing={2}
                marginTop="30px"
                marginBottom="30px"
              >
                <p style={{marginTop:"10px"}}>Số lượng: </p>
               
                <Checksl data={soluong} handleTruyensl={handleTruyensl}/>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "20px", backgroundColor: "#ABD373", height: "55px" }}
                  onClick={handleaddcart}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Stack>

              <Button
              
                variant="contained"
                color="success"
                sx={{
                  marginLeft: "20px",
                  width: "90%",
                  height: "50px",
                  backgroundColor: "#ABD373",
                }}
              >
                Mua ngay
              </Button>
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
                    width: "50%",
                    float: "left",
                  }}
                >
                  <Typography style={{ float: "left" }}>
                    {" "}
                    <img src={hotro} width="50px" />
                  </Typography>{" "}
                  <Typography
                    style={{
                      width: "200px",
                      fontSize: "16px",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Hỗ trợ khách hàng tận tâm 24/7
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    width: "50%",
                    float: "left",
                  }}
                >
                  <Typography style={{ float: "left" }}>
                    {" "}
                    <img src={baomat} width="50px" />
                  </Typography>{" "}
                  <Typography
                    style={{
                      width: "200px",
                      fontSize: "16px",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Phương thức thanh toán an toàn
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Binhluan/>
          <Box>
            <Paper elevation={0}>
              <Grid id="hau"
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "70px",
                  lineHeight: "50px", 
                }}
              >
                Sản Phẩm tương tự
                <Grid
                  style={{
                    borderBottom: "3px solid #339900",
                    width: "60px",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                ></Grid>
              </Grid>
              {datasp.map((aa)=>(
                <span onClick={goToTop}><Sptt data={aa} handleTruyenn={handleTruyenn}/></span>
              ))}
            </Paper>
          </Box>
        </Paper>
      </Container>
      <Snackbar  open={openchecksl} autoHideDuration={6000} onClose={handleClosechecksl} >
        <Alert  onClose={handleClosechecksl}  severity="error"  sx={{ width: "100%" }}>  Hãy nhập số lượng trước khi mua hàng!</Alert>
      </Snackbar>
      <Snackbar  open={opencheckslcl} autoHideDuration={6000} onClose={handleClosecheckslcl} >
        <Alert  onClose={handleClosecheckslcl}  severity="error"  sx={{ width: "100%" }}> Số lượng hàng còn lại không đủ!</Alert>
      </Snackbar>
      <Snackbar  open={opencheckkt} autoHideDuration={6000} onClose={handleClosecheckkt} >
        <Alert  onClose={handleClosecheckkt}  severity="error"  sx={{ width: "100%" }}>  Hãy chọn kích thước trước khi mua hàng!</Alert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn chưa đăng nhập!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn cần phải đăng nhập trước khi mua hàng <br/> và thêm hàng hàng giỏ! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>Quay lại</Button>
          <Button variant="contained" color="success" onClick={handleCloseTop} autoFocus> <Link to="/products/dangnhap">Đăng nhập</Link></Button>
        </DialogActions>
      </Dialog>
      <Snackbar  open={opencheckgio} autoHideDuration={6000} onClose={handleClosecheckgio} >
        <Alert  onClose={handleClosecheckgio}  severity="success"  sx={{ width: "100%" }}>  Sản phẩm đã được thêm vào giỏ hàng!</Alert>
      </Snackbar>
    </Box>
  );
}

export default Chitietsp;
