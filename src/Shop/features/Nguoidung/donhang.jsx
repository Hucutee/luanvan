import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";
import nguoidungApi from "../../../Manage/api/nguoidungApi";
import { propsToClassKey } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoUser, login, logout } from "../../app/userSlice";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Menucanhan from "./nenu";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import donhangAPI from "../../../Manage/api/donhangApi";
import Zoom from "react-img-zoom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from "@mui/material/Rating";
import binhluanApi from "../../../Manage/api/binhluanApi";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

Donhang.propTypes = {};
function Donhang() {
  const dataUser = useSelector((state) => state?.user?.current);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [mactdh, setMactdh] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [datadh, setDatadh] = React.useState([]);
  const [datactgh, setDatactgh] = React.useState([]);

  const [datactdh, setDatactdh] = React.useState([]);
  const [loc, setLoc] = React.useState('07');
  const [trangthai, setTrangthai] = React.useState(0);
  const [file, setFile] = React.useState();
  const [noidung, setNoidung] = React.useState("");
  const [sosao, setSosao] = React.useState(5);
  const [chua, setChua] = React.useState(0);
  const [da, setDa] = React.useState(0);
  const [dang, setDang] = React.useState(0);


const handlehuy = async(madh) => {
  await donhangAPI.huydonnd(madh);
  setCount((e) => e + 1);
};

  useEffect(() => {
    (async () => {
      try {
        console.log(noidung);
        const dh = await donhangAPI.getdhkh(dataUser[0].ma_nd,loc.slice(0,1),loc.slice(1));
        const dhsl = await donhangAPI.getdhkh(dataUser[0].ma_nd,0,9);

        const ctdh = await donhangAPI.getctdhkh(dataUser[0].ma_nd);
        const ctgh = await donhangAPI.getctgh(dataUser[0].ma_nd);
        console.log(ctgh);setDatactgh(ctgh);
        setDatadh(dh); console.log(ctdh);
        setDatactdh(ctdh);

        let chuaa = 0;         let daa = 0; let dangg =0;
        if (dhsl.length !== 0) {
          for (let i = 0; i < dhsl.length; i++) {
            if(dhsl[i].trang_thai==0){
              chuaa = chuaa + 1;
            }
            if(dhsl[i].trang_thai==1 || dhsl[i].trang_thai==2){
              daa = daa + 1;
            }
            if(dhsl[i].trang_thai==3){
              dangg = dangg + 1;
            }
            
          } setChua(chuaa); setDa(daa); setDang(dangg);
          
        }

      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);

  const handleChangeloc = (event,value) => {
    setLoc(value); setCount((e) => e + 1);
  };
  const handledg = (ma) => {
    setMactdh(ma);    setOpen(true);
    setCount((e) => e + 1);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false); setFile();setSosao(5); setNoidung("");setMactdh("");
  };
  const send = async () => {
    const data = new FormData();
    data.append("file",file);
    data.append("sosao", sosao);
    data.append("noidung", noidung);
    data.append("mactdh", mactdh);
    data.append("makh", dataUser[0].ma_nd);

 console.log(noidung);
    if( noidung != ""){
      await binhluanApi.danhgia(data);
      await binhluanApi.settrangthaictdh(mactdh);
      setOpen(false);  setFile();setSosao(5); setNoidung("");setMactdh("");
    }
    setCount((e) => e + 1);
  
  };
  return (
    <Box>
      <div
        role="presentation"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
          marginBottom: "40px",height: "42px" 
        }}
      >
        <Breadcrumbs
          id="123"
          separator="&ensp; › &ensp; "
          aria-label="breadcrumb"
          style={{ marginLeft: "13%", fontSize: "13px", lineHeight: "40px",float: "left" }}
        >
          <Link underline="hover" color="inherit" to="/app">
            {" "}
            Trang chủ{" "}
          </Link>
          <Link to="#" underline="hover" value="1">
            {" "}
            Tài khoản{" "}
          </Link>
          <Link to="#" underline="hover" style={{ color: "#339900" }} value="1">
            {" "}
            Đơn hàng{" "}
          </Link>
         
        </Breadcrumbs>
      
      </div>
      <Grid className="w-[76%] ml-[12%] ">

        <Grid sx={{width:"16%",float:"left",paddingLeft:1, backgroundColor:"#f8f8f8"}}>
        <TabContext value={loc}  >
        <Box  sx={{  }}>
          <TabList  orientation="vertical"
        variant="scrollable" onChange={handleChangeloc} aria-label="lab API tabs example">
            <Tab sx={{alignItems: "flex-start"}} label="Tất cả đơn hàng" value="07" />
            <Tab sx={{alignItems: "flex-start"}} label={"Chưa xác nhận    " + chua} value="00" />
            <Tab sx={{alignItems: "flex-start"}} label={"Đã xác nhận   "+da} value="12" />
            <Tab sx={{alignItems: "flex-start"}} label={"Đang giao " +dang} value="33" />
            <Tab sx={{alignItems: "flex-start"}} label="Đã giao" value="44" />
            <Tab sx={{alignItems: "flex-start"}} label="Đơn bị hủy" value="55" />
            <Tab sx={{alignItems: "flex-start"}} label="Đơn bị hoàn hàng" value="66" />

          </TabList>
        </Box>
      </TabContext>
 
        </Grid>
        <Grid sx={{width:"84%",float:"right"}} >
          {datadh.length > 0 ? (
            datadh.map((aa) => (
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2, pl: 6,pt:0 }}>
                  <Grid sx={{}}>
                    <table className=" w-[100%] rounded-lg border-1	 	">
                      <tbody className="">
                        <tr>
                        <td  className="font-medium h-14 bg-gray-100	" colSpan={4}> &ensp;&ensp; Mã đơn: {aa.ma_dh} &ensp;&ensp;&ensp;&ensp;&ensp; Tổng: {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(aa.tong_tien)}  &ensp;&ensp;&ensp;&ensp;&ensp; Ngày đặt hàng: {aa.ngay_dat_hang.slice(0,10)} &ensp;&ensp;&ensp;&ensp;&ensp;  {aa.hinh_thuc_thanh_toan == 1 ? <span >Thanh toán khi nhận hàng</span> :<span>Thanh toán online</span> }</td>
                        </tr>
                        <tr><td className="h-4"></td></tr>
                        <tr className="">
                          
                          <td className="w-[40%] font-medium	"
                            colSpan={3}
                          >
                            
                          </td>
                          
                          <td
                            rowSpan={3}
                            className="border-[1px] 	border-gray-300			 border-solid w-[60%] "
                          >
                            {aa.trang_thai <4 ?
                            <Stepper
                            sx={{ width: "100%" }}
                            color="success"
                            activeStep={aa.trang_thai}
                            alternativeLabel
                          >
                            <Step key="aaa" >
                              <StepLabel>Chờ xác nhận <br/>
                              {aa.trang_thai == 0 ? <Button onClick={(e)=>handlehuy(aa.ma_dh)} sx={{marginTop:"10px"}}variant="outlined" size="small" color="error">Hủy đơn</Button>:false}
                              </StepLabel>
                            </Step>
                            <Step key="aaa">
                              <StepLabel>Chờ lấy hàng</StepLabel>
                            </Step>
                            <Step key="aaa">
                              <StepLabel>Đang giao</StepLabel>
                            </Step>
                            <Step key="aaa">
                              <StepLabel>Đã giao</StepLabel>
                            </Step>
                          </Stepper>
                          : 
                          aa.trang_thai == 4?
                          <Stepper
                              sx={{ width: "100%" }}
                              success
                              activeStep={4}
                              alternativeLabel
                            >
                              <Step key="aaa">
                                <StepLabel>Chờ xác nhận
                                </StepLabel>
                              </Step>
                            
                              <Step key="aaa">
                                <StepLabel>Đang giao</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel><Button  variant="contained" size="small" >Đã giao <br/>
                                {datactgh.map((gh)=>(gh.ma_dh ==  aa.ma_dh && gh.trang_thai==4 ) ? gh.ngay_gh.slice(0,10):false)}
                                </Button></StepLabel>
                              </Step>
                            </Stepper>
                            :
                            aa.trang_thai == 5 ?
                            <Stepper
                              sx={{ width: "100%" }}
                              success
                              activeStep={0}
                              alternativeLabel
                            >
                              <Step key="aaa">
                                <StepLabel><Button  variant="contained" size="small" color="warning">Đã bị hủy </Button>
                                </StepLabel>
                              </Step>
                             
                              <Step key="aaa">
                                <StepLabel>Đang giao</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Đã giao</StepLabel>
                              </Step>
                            </Stepper>
                            : aa.trang_thai == 6 ?
                            <Stepper
                              sx={{ width: "100%" }}
                              success
                              activeStep={4}
                              alternativeLabel
                            >
                              <Step key="aaa">
                                <StepLabel>Chờ xác nhận
                                </StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Tìm người giao hàng</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Đang giao</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Đã giao</StepLabel><Button  variant="contained" size="small" sx={{fontSize:"12px"}} color="error">Không nhận hàng<br/>
                                {datactgh.map((gh)=>(gh.ma_dh ==  aa.ma_dh && gh.trang_thai==6 ) ? gh.ngay_gh.slice(0,10):false)}

                                </Button>
                              </Step>
                            </Stepper> : false
                          }
                          </td>
                        </tr>

                        {datactdh?.map((aaa) =>
                          aaa.ma_dh == aa.ma_dh ? (
                            <tr className="h-10 ">
                              <td className=" w-[8%] p-2 ">
                                <Zoom
                                  img={require("../../../images/" +
                                    aaa.hinhanh)}
                                  height={50} width={50}
                                />
                              </td>
                              <td className="text-base">{aaa.ten_sp} <p className="text-xs">Giá: {aaa.gia} x{aaa.so_luong}</p></td>
                              <td className="text-base ">{new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(aaa.so_luong*aaa.gia)} {aa.trang_thai == 4 && aaa.trang_thai == 0 ? (<span> <br/> <Button onClick={(e)=>handledg(aaa.ma_ctdh)} size="small" variant="outlined" color="secondary" sx={{fontSize:"12px"}}>Đánh giá</Button></span>):false}
                                                        {aa.trang_thai == 4 && aaa.trang_thai == 1 ? (<span> <br/> <Button size="small" variant="contained" color="secondary" sx={{fontSize:"12px"}}>Đã đánh giá</Button></span>):false}</td>
                            </tr>
                          ) : (
                            false
                          )
                        )}
                        <tr><td ></td></tr>
                        <tr><td className="h-14"></td></tr>
                      </tbody>
                    </table>
                  </Grid>
                </Grid>
              </Box>
            ))
          ) : (
            <Typography sx={{
              mx: 2,my:4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px",  fontWeight: "500",}}>Mục bạn chọn hiện đang trống!</Typography>
          )}
        </Grid>
      </Grid>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cảm nhận của bạn về sản phẩm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <form action="#">
                            <div class="form-group"> Hình ảnh: &ensp;
                              <input color="success"
                                type="file"
                                id="file"
                                name="file"
                                accept=".jpg"
                                onChange={(event) => {
                                  const file = event.target.files[0];
                                  setFile(file);
                                }}
                              />
                              <Typography sx={{lineHeight:"80px"}} ><Typography sx={{float:"left", marginTop:"22px"}}>Số sao: </Typography>&ensp;&ensp; <Rating 
                        style={{  marginTop: "10px" }}
                        size="big"
                        name="sosao" id="sosao"
                        defaultValue={sosao} onChange={(e)=>setSosao(e.target.value)}
                      
                      /></Typography>
                                   <TextField fullWidth color="success" label="Cảm nhận của bạn" variant="outlined" onChange={(e)=>setNoidung(e.target.value)} />

                            </div>
                          </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success" variant="contained" onClick={handleClose}>Quay lại</Button>
          <Button color="success" variant="contained" onClick={send} autoFocus>
            Đánh giá
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Donhang;
