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

Donhang.propTypes = {};
function Donhang() {
  const dataUser = useSelector((state) => state?.user?.current);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [email, setEmail] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [datadh, setDatadh] = React.useState([]);
  const [datactdh, setDatactdh] = React.useState([]);
  const [loc, setLoc] = React.useState('07');
  const [trangthai, setTrangthai] = React.useState(0);
const handlehuy = async (madh) =>{
  await donhangAPI.huy(madh); (setCount((e) => e + 1));
}
  useEffect(() => {
    (async () => {
      try {
        const dh = await donhangAPI.getdhkh(dataUser[0].ma_nd,loc.slice(0,1),loc.slice(1));
        const ctdh = await donhangAPI.getctdhkh(dataUser[0].ma_nd);
        setDatadh(dh); console.log(ctdh);
        setDatactdh(ctdh);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);

  const handleChangeloc = (event) => {
    setLoc(event.target.value); setCount((e) => e + 1);
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
        <FormControl sx={{ minWidth: 200 , float:"right",marginRight:"15%"}} size="small" color="success">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={loc} 
        onChange={handleChangeloc}
      >
          <MenuItem value="07">Tất cả đơn hàng</MenuItem>
        <MenuItem value="00">Chưa xác nhận</MenuItem>
          <MenuItem value="11">Đã xác nhận</MenuItem>
          <MenuItem value="22">Đã có người giao</MenuItem>
          <MenuItem value="33">Đang giao</MenuItem>
          <MenuItem value="44">Đã hoàn thành</MenuItem>
          <MenuItem value="55">Đơn đã bị hủy</MenuItem>
          <MenuItem value="66">Bạn đã boom</MenuItem>

      </Select>
    </FormControl>
      </div>
      <Grid className="w-[74%] mx-[13%] ">

        <Grid sx={{ width: "20%", float: "left" }}>
          <Menucanhan />
        </Grid>
        <Grid sx={{ width: "80%", float: "left" }}>
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
                        }).format(aa.tong_tien)}  &ensp;&ensp;&ensp;&ensp;&ensp; Ngày đặt hàng: {aa.ngay_dat_hang.slice(0,9)} &ensp;&ensp;&ensp;&ensp;&ensp;  {aa.hinh_thuc_thanh_toan == 1 ? <span >Thanh toán khi nhận hàng</span> :<span>Đã thanh toán</span> }</td>
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
                            success
                            activeStep={aa.trang_thai}
                            alternativeLabel
                          >
                            <Step key="aaa">
                              <StepLabel>Chờ xác nhận <br/>
                              {aa.trang_thai == 0 ? <Button onClick={(e)=>handlehuy(aa.ma_dh)} sx={{marginTop:"10px"}}variant="outlined" size="small" color="error">Hủy đơn</Button>:false}
                              </StepLabel>
                            </Step>
                            <Step key="aaa">
                              <StepLabel>Tìm người giao hàng</StepLabel>
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
                                <StepLabel>Tìm người giao hàng</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Đang giao</StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel><Button  variant="contained" size="small" >Đã giao</Button></StepLabel>
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
                                <StepLabel><Button  variant="contained" size="small" color="warning">Đã bị hủy</Button>
                                </StepLabel>
                              </Step>
                              <Step key="aaa">
                                <StepLabel>Tìm người giao hàng</StepLabel>
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
                                <StepLabel>Đã giao</StepLabel><Button  variant="contained" size="small" color="error">Bạn đã boom</Button>
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
                        }).format(aaa.so_luong*aaa.gia)}</td>
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
    </Box>
  );
}

export default Donhang;
