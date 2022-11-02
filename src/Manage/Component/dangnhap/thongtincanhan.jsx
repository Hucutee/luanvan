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
import { propsToClassKey } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link as Lin, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { green, pink } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import nguoidungApi from "../../api/nguoidungApi";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "@mui/material";
import { logoutNhanvien } from "../../../Shop/app/nhanvienSlice";
import Listmanager from "../../Pages/list";

Thongtinnhanvien.propTypes = {};
function Thongtinnhanvien() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const handledx = ()=>{
    
    dispatch(logoutNhanvien());
  }
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [opensdt, setOpensdt] = React.useState(false);
  const handleClicksdt = () => { setOpensdt(!opensdt); };
  const [opengt, setOpengt] = React.useState(false);
  const handleClickgt = () => { setOpengt(!opengt); };
  const [openns, setOpenns] = React.useState(false);
  const handleClickns = () => { setOpenns(!openns); };
  const [file, setFile] = React.useState();
  const send = async () => {
    setLoadding(true);
    const data = new FormData();
    data.append("file", file);
    console.log(file);
    data.append("mand", dataNhanvien[0].ma_nd);
    await nguoidungApi.uploadnv(data);
    setCount((e) => e + 1);
    setLoadding(false);
  };
  const [count, setCount] = React.useState(0);
  const [datand, setDatand] = React.useState([]);
  const [avt, setAvt] = React.useState("");
  const [loadding, setLoadding] = React.useState(false);
  const [openha, setOpenha] = React.useState(false);

  const handleClickOpenha = () => {
    setOpenha(true);
  };

  const handleCloseha = () => {
    setOpenha(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const avt = await nguoidungApi.getavtnv(dataNhanvien[0].ma_nd);
        if (avt.length != 0) {
          setAvt(avt[0].ten_avt);
        }
        const nd = await nguoidungApi.getttnd(dataNhanvien[0].ma_nd); 
        setDatand(nd);  console.log(nd);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);

  const [matkhau, setMatkhau] = React.useState({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false, });
  const handleChangemk = (prop) => (event) => { setSaimk(false);
    setMatkhau({ ...matkhau, [prop]: event.target.value }); console.log(event.target.value); };
  const handleClickShowPassword = () => {
    setMatkhau({  ...matkhau,  showPassword: !matkhau.showPassword, });};
    const handleMouseDownPassword = (event) => {  event.preventDefault();};

    const [matkhau1, setMatkhau1] = React.useState({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false, });
  const handleChangemk1 = (prop) => (event) => {
    setMatkhau1({ ...matkhau1, [prop]: event.target.value }); console.log(event.target.value); };
  const handleClickShowPassword1 = () => {
    setMatkhau1({  ...matkhau1,  showPassword: !matkhau1.showPassword, });};
  const handleMouseDownPassword1 = (event) => {  event.preventDefault();};

  const [matkhau2, setMatkhau2] = React.useState({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false, });
  const handleChangemk2 = (prop) => (event) => {
    setMatkhau2({ ...matkhau2, [prop]: event.target.value }); console.log(event.target.value); };
  const handleClickShowPassword2 = () => {
    setMatkhau2({  ...matkhau2,  showPassword: !matkhau2.showPassword, });};
    const handleMouseDownPassword2 = (event) => {  event.preventDefault();};
const [saimk,setSaimk] = React.useState(false);
const [trong,setTrong] = React.useState(false);

const handledoimatkhau = async ()=>{
  if(matkhau.password  && matkhau1.password && matkhau1.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&matkhau2.password && matkhau2.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
  && matkhau2.password == matkhau1.password ){
    const kt = await nguoidungApi.ktmatkhaunv(dataNhanvien[0].ma_nd,matkhau.password); 
    if(kt.length >0){
      await nguoidungApi.doimatkhaunv(dataNhanvien[0].ma_nd,matkhau1.password);
      setSaimk(false);setTrong(false); setOpencheckthanhcong(true);    setOpen(!open);
      setMatkhau({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
      setMatkhau1({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
      setMatkhau2({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
    }else{
      setSaimk(true);
    }
  }else{setTrong(true);}
  }
  const handlethemmatkhau = async ()=>{
    if( matkhau1.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&matkhau2.password && matkhau2.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
    && matkhau2.password == matkhau1.password ){
        await nguoidungApi.doimatkhau(dataNhanvien[0].ma_nd,matkhau1.password);
        setSaimk(false);setTrong(false); setOpencheckthanhcong(true);    setOpen(!open);
        setMatkhau({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
        setMatkhau1({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
        setMatkhau2({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false,});
      
    }else{setTrong(true);} setCount((e) => e + 1);
    }
    const [sdt, setSdt] = React.useState({ textmask: "" });
    const handleChangesdt = (event) => {
      setSdt({ ...sdt, [event.target.name]: event.target.value }); console.log(event.target.name, event.target.value); setCount((e) => e + 1);
    };
    const [trangthaisdt, setTrangthaisdt] = React.useState(false);

    const handlethemsdt = async ()=>{
      setTrangthaisdt(true);
      if(sdt.textmask >9){
        const sdtt = await nguoidungApi.addsdt(dataNhanvien[0].ma_nd,sdt.textmask);setOpensdt(false);
      } setCount((e) => e + 1);
    }
    const [ns, setNs] = React.useState(null);
    const [trangthains, setTrangthains] = React.useState(false);

    const handlethemns = async ()=>{
      setTrangthains(true);
      console.log(ns.$y + "-" + (ns.$M + 1) + "-" + ns.$D);
      if(ns){
        const nss = await nguoidungApi.addns(dataNhanvien[0].ma_nd,ns.$y + "-" + (ns.$M + 1) + "-" + ns.$D);setCount((e) => e + 1);setOpenns(false);
      }
    }
    const [gt, setGt] = React.useState('');

    const handleChangegt = (event) => {
      setGt(event.target.value); setCount((e) => e + 1);
    };
    const [trangthaigt, setTrangthaigt] = React.useState(false);

    const handlethemgt = async ()=>{
      setTrangthaigt(true);
      console.log(gt);
      if(gt){
        const nss = await nguoidungApi.addgt(dataNhanvien[0].ma_nd,gt);setCount((e) => e + 1);setOpengt(false);
      }
    }
    const Alert = React.forwardRef(function Alert(props, ref) {return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
 
    const [opencheckthanhcong, setOpencheckthanhcong] = React.useState(false);
    const handleClosecheckthanhcong = () => {setOpencheckthanhcong(false); };
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
          id="123"
          separator="&ensp; › &ensp; "
          aria-label="breadcrumb"
          style={{ marginLeft: "10%", fontSize: "13px", lineHeight: "46px" }}
        >
          <Lin underline="hover" color="inherit" to="#">
            {" "}
            Quản lý{" "}
          </Lin>
         
          <Lin to="#" underline="hover" style={{ color: "#339900" }} value="1">
            {" "}
            Thông tin cá nhân{" "}
          </Lin>
        </Breadcrumbs>
      </div>
      <Grid className="w-[84%] mx-[8%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div style={{width:"79%",float:"right" }}>

        <Grid >
          {datand.map((nd) => (
            <div>
              <div style={{ width: "40%", float: "left" }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "auto",
                  }}
                >
                  {avt == "" ? (
                    <Avatar
                      sx={{
                        width: 250,
                        height: 250,
                        fontSize: "140px",
                        bgcolor: green[500],
                      }}                 alt="Remy Sharp"

                    >
                      {nd.ten_nd.slice(
                        nd.ten_nd.lastIndexOf(" ") + 1,
                        nd.ten_nd.lastIndexOf(" ") + 2
                      )}
                    </Avatar>
                  ) : (
                    <Avatar
                      src={require("../../../imageuser/" + avt)}
                      sx={{
                        width: 250,
                        height: 250,
                        fontSize: "140px",
                        bgcolor: green[500],
                      }}
                    />
                  )}
                </Stack>
                <div id="nested-list-subheader"  style={{    fontSize: "20px",  color: "#333",  fontWeight: "500",  padding: 7,
                    display: "flex",  alignContent: "center",  justifyContent: "center",  height: "auto",  }}
                >  {" "}
                  Ảnh đại diện
                </div>
                <div id="nested-list-subheader"  style={{    fontSize: "20px",  color: "#333",  fontWeight: "500",  padding: 7,
                    display: "flex",  alignContent: "center",  justifyContent: "center",  height: "auto",  }}
                > <Link sx={{textDecoration: "none", color:"#333"}} href="/Manage"><Button variant="outlined" color="success" onClick={handledx}>Đăng xuất</Button></Link>
                </div>
                <div>
                   
                    <Dialog color="success"
                      open={openha}
                      onClose={handleCloseha}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Thay đổi ảnh đại diện"}
                      </DialogTitle>
                      <DialogContent color="success">
                        <DialogContentText id="alert-dialog-description">
                          <form action="#">
                            <div class="form-group">
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
                            </div>
                          </form>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color="success" variant="contained" onClick={handleCloseha}>Quay lại</Button>
                        <Button  color="success" variant="contained" onClick={send} autoFocus>
                          Thực hiện
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <List
                  sx={{ width: "100%", bgcolor: "background.paper" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      sx={{ fontSize: "20px", color: "#333" }}
                    >
                      {" "}
                      Thông tin cá nhân{" "}
                    </ListSubheader>
                  }
                >
                  
                </List>
                <List>
                  <ListItemButton>
                    <ListItemText primary="Chức vụ:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.ten_q}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                    <ListItemText primary="Tên:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.ten_nd}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
              
                <List>
                  <ListItemButton>
                    <ListItemText primary="Email:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.email}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                  <ListItemText primary="Số điện thoại" />
                  <ListItemText sx={{ textAlign: "right" }}>
                  {nd.sdt_nd ? nd.sdt_nd : (
                      opensdt ? <span>Thêm <ExpandLess onClick={handleClicksdt}/></span> :<span>Thêm <ExpandMore onClick={handleClicksdt}/></span>
                    )}
                    </ListItemText>
                    
                  </ListItemButton>
                  <Collapse in={opensdt} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
                        <ListItemText sx={{ textAlign: "right" }}>
                      {nd.sdt_nd ? (nd.sdt_nd):(<FormControl
              variant="outlined"
              sx={{  width: "100%" }}
            >
              <InputLabel color="success" htmlFor="formatted-text-mask-input">
                Thêm số điện thoại
              </InputLabel>
              <OutlinedInput
                color="success" 
                value={sdt.textmask}
                onChange={handleChangesdt}
                name="textmask"
                label="them so dien thoai"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
              { (sdt.textmask.length < 10 && sdt.textmask.length > 0 || sdt.textmask.length>12)
               ? (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Số điện thoại gồm 10 đến 12 chữ số
                </FormHelperText>
              ) : (
                <></>
              )}{trangthaisdt && sdt.textmask.length == 0 ? <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
              Số điện thoại không được để trống
            </FormHelperText>:false }
            </FormControl>)}
                    </ListItemText>
              </ListItemText>
                      </ListItemButton>
                    </List>
                   
                   
                    <Button onClick={handlethemsdt} style={{marginLeft:"40px",marginTop:"5px"}} variant="contained" color="success">Thêm</Button>
                  </Collapse>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                  <ListItemText primary="Giới tính" />
                  <ListItemText sx={{ textAlign: "right" }}>
                  {nd.gioi_tinh ? nd.gioi_tinh : (
                      opensdt ? <span>Thêm <ExpandLess onClick={handleClickgt}/></span> :<span>Thêm <ExpandMore onClick={handleClickgt}/></span>
                    )}
                    </ListItemText>
                    
                  </ListItemButton>
                  <Collapse in={opengt} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
                        <ListItemText sx={{ }}>
                      {nd.gioi_tinh ? (nd.gioi_tinh):(
                       <FormControl success>
                       <FormLabel color="success"  id="demo-row-radio-buttons-group-label">Thêm giới tính</FormLabel>
                       <RadioGroup 
                         row
                         aria-labelledby="demo-row-radio-buttons-group-label"
                         name="row-radio-buttons-group"  value={gt}
                         onChange={handleChangegt}
                       >
                         <FormControlLabel color="success" value="Nam" control={<Radio color="success" />} label="Nam" />
                         <FormControlLabel value="Nữ" control={<Radio color="success" />} label="Nữ" />
                         <FormControlLabel value="Khác" control={<Radio color="success" />} label="Khác" />
                       </RadioGroup>
                     </FormControl>)}
                    </ListItemText>
              </ListItemText>
                      </ListItemButton>
                      { gt == '' && trangthaigt==true ? (<FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                          Giới tính không được để trống!
                        </FormHelperText>):(<></>)}
                    </List>
                   
                   
                    <Button onClick={handlethemgt} style={{marginLeft:"40px",marginTop:"5px"}} variant="contained" color="success">Thêm</Button>
                  </Collapse>
                 
                </List>
                <Divider />
               
                <List>
                  <ListItemButton>
                  <ListItemText primary="Ngày sinh" />
                  <ListItemText sx={{ textAlign: "right" }}>
                  {nd.ngay_sinh != "0000-00-00" ? nd.ngay_sinh.slice(0, 10) : (
                      opensdt ? <span>Thêm <ExpandLess onClick={handleClickns}/></span> :<span>Thêm <ExpandMore onClick={handleClickns}/></span>
                    )}
                    </ListItemText>
                    
                  </ListItemButton>
                  <Collapse in={openns} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
                        <ListItemText sx={{ }}>
                      {nd.ngay_sinh !="0000-00-00" ? (nd.ngay_sinh):(
                      <LocalizationProvider dateAdapter={AdapterDayjs}  sx={{ m: 1   }}>
                      <div >
                        <DatePicker 
                          maxDate={dayjs()}
                          value={ns}
                          inputFormat="YYYY-MM-DD"
                          mask="____-__-__"
                          label="Ngày sinh"
                          onChange={(newValue) => {
                            setNs(newValue);
                          }}
                          renderInput={(params) => <TextField color="success" {...params} />}
                        />
                        { ns == null && trangthains==true ? (<FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                          Ngày sinh không được để trống!
                        </FormHelperText>):(<></>)}
                      </div>
                    </LocalizationProvider>)}
                    </ListItemText>
              </ListItemText>
                      </ListItemButton>
                    </List>
                   
                   
                    <Button onClick={handlethemns} style={{marginLeft:"40px",marginTop:"5px"}} variant="contained" color="success">Thêm</Button>
                  </Collapse>
                </List>
                <Divider />
                
                
                {nd.mat_khau ? (<List>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Mật khẩu" />
                    {                      open ? <span>Thay đổi <ExpandLess/></span> :<span>Thay đổi <ExpandMore /></span>
}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
                        <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu hiện tại
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau.showPassword ? "text" : "password"}
                  value={matkhau.password}
                  onChange={handleChangemk("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {matkhau.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {trong && matkhau.password.length == 0 ?(
                   <FormHelperText error id="component-error-text">
                   Mật khẩu không được để trống!
                 </FormHelperText>
                ):(
                  saimk ==false  ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text">
                      Mật khẩu không chính xác!
                    </FormHelperText>
                  )
                )}
              </FormControl>
              </ListItemText>
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu mới
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau1.showPassword ? "text" : "password"}
                  value={matkhau1.password}
                  onChange={handleChangemk1("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                      >
                        {matkhau1.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {trong && matkhau1.password.length == 0 ?(
                   <FormHelperText error id="component-error-text">
                   Mật khẩu mới không được để trống!
                 </FormHelperText>
                ):(
                  matkhau1.password.match(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                  ) || matkhau1.password.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text">
                      Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái và 1 số và không
                      chứa kí tự đặc biệt!
                    </FormHelperText>
                  )
                )}
              </FormControl>
              </ListItemText>
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Nhập lại mật khẩu mới
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau2.showPassword ? "text" : "password"}
                  value={matkhau2.password}
                  onChange={handleChangemk2("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                      >
                        {matkhau2.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                /> {trong && matkhau2.password.length == 0 ?(
                  <FormHelperText error id="component-error-text">
                  Mật khẩu mới không được để trống!
                </FormHelperText>
               ):(
                matkhau1.password != matkhau2.password && matkhau2.password.length >0 ? (<FormHelperText error id="component-error-text"  sx={{ ml: 1}}>
                      Mật khẩu mới và nhập lại mật khẩu mới không giống nhau!
                    </FormHelperText>):(<></>)
               )}
                 
              </FormControl>
                        </ListItemText>
                      </ListItemButton>
                    </List>
                    <Button  onClick={handledoimatkhau} style={{marginLeft:"40px",marginTop:"5px"}} variant="contained" color="success">Thay đổi</Button>
                    <Button style={{marginLeft:"40px",marginTop:"5px"}} variant="outlined" color="success"><Lin to="/authnv/forgot-password" style={{textDecoration:"none"}}  variant="body2">
                    Quên mật khẩu?
                  </Lin></Button>
                  </Collapse>
                </List>):(
                  <List>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Mật khẩu" />
                    <ListItemText sx={{ textAlign: "right" }}>
                  {
                      open ? <span>Thêm <ExpandLess/></span> :<span>Thêm <ExpandMore /></span>
                    }
                    </ListItemText>
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu mới
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau1.showPassword ? "text" : "password"}
                  value={matkhau1.password}
                  onChange={handleChangemk1("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                      >
                        {matkhau1.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {trong && matkhau1.password.length == 0 ?(
                   <FormHelperText error id="component-error-text">
                   Mật khẩu mới không được để trống!
                 </FormHelperText>
                ):(
                  matkhau1.password.match(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                  ) || matkhau1.password.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text">
                      Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái và 1 số và không
                      chứa kí tự đặc biệt!
                    </FormHelperText>
                  )
                )}
              </FormControl>
              </ListItemText>
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                       
                        <ListItemText>
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Nhập lại mật khẩu mới
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau2.showPassword ? "text" : "password"}
                  value={matkhau2.password}
                  onChange={handleChangemk2("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                      >
                        {matkhau2.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                /> {trong && matkhau2.password.length == 0 ?(
                  <FormHelperText error id="component-error-text">
                  Mật khẩu mới không được để trống!
                </FormHelperText>
               ):(
                matkhau1.password != matkhau2.password && matkhau2.password.length >0 ? (<FormHelperText error id="component-error-text"  sx={{ ml: 1}}>
                      Mật khẩu mới và nhập lại mật khẩu mới không giống nhau!
                    </FormHelperText>):(<></>)
               )}
                 
              </FormControl>
                        </ListItemText>
                      </ListItemButton>
                    </List>
                    <Button  onClick={handlethemmatkhau} style={{marginLeft:"40px",marginTop:"5px"}} variant="contained" color="success">Thêm</Button>
                  </Collapse>
                </List>
                )}
                <Divider />
                
              </div>
            </div>
          ))}
        </Grid> 
        </div>
      </Grid>
      <Snackbar  open={opencheckthanhcong} autoHideDuration={6000} onClose={handleClosecheckthanhcong} >
        <Alert  onClose={handleClosecheckthanhcong}  severity="success"  sx={{ width: "100%" }}>  Thay đổi mật khẩu thành công!</Alert>
      </Snackbar>
    </Box>
  );
}
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="$###########"
      definitions={{
        "#": /[0-9]/,
        $: /[0]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Thongtinnhanvien;
