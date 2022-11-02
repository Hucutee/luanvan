import React, { useEffect, useState } from "react";
import khuyenmaiAPI from "../../api/khuyenmaiApi";
import loaisanphamAPI from "../../api/loaisanphamApi";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Box, Paper, Typography, Link, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ColorizeIcon from "@mui/icons-material/Colorize";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Listmanager from "../list";
import nguoidungApi from "../../api/nguoidungApi";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Listnhanvien() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [listchucvu, setListchucvu] = useState([]);
  const [manv, setManv] = useState("");
  const [chucvu, setChucvu] = useState("");
  const [tennv, setTennv] = useState("");
  const [gioitinh, setGioitinh] = useState("");
  const [ngaysinh, setNgaysinh] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
  const [sdt, setSdt] = useState("");
  const [listavt, setListavt] = useState([]);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
  const [openalert, setOpenalert] = React.useState(false);
  const handleClosealert = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenalert(false);};
  const [openloi, setOpenloi] = React.useState(false);
  const handleCloseloi = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenloi(false);};
  const [trang, setTrang] = useState(1);
  //danh sach
  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1); };
  useEffect(() => {
    (async () => {
      if(dataNhanvien.length==0){
        navigate("/Manage");
      }
      const loai = await loaisanphamAPI.getCount();
          setListchucvu(loai);
          const listtavt = await nguoidungApi.listavtnv();
          setListavt(listtavt);  console.log(listtavt);
          const listtchucvu = await nguoidungApi.listcvnv();
          setListchucvu(listtchucvu);  console.log(listtchucvu);
      if (trangthai) {
        try {
          const datacount = await nguoidungApi.getcount();
          const sotrang = Math.ceil(datacount.length / 10);
          setCounttrang(sotrang);
          const data = await nguoidungApi.getListnv(trang);console.log(data);
          setData(data);
        
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const datacount = await nguoidungApi.getcounttennv(tenget); console.log(datacount);
          const sotrang = Math.ceil(datacount.length / 10);
          const data = await nguoidungApi.getnv(tenget, trang); console.log(data);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
     
    })();
  }, [count]);

  const handleTrangthai = () => {
    setTrangthai("1"); setTrang(1);
    setCount((e) => e + 1); };
  const handleTimkim = () => {
    setTrangthai(""); setTrang(1);
    setCount((e) => e + 1); };
  //THEM
  const [file, setFile] = React.useState();
 
  const [opentrung, setOpentrung] = React.useState(false);
  const handleClosetrung = () => {
    setOpentrung(false);
  };
  const [opensonguyen, setOpensonguyen] = React.useState(false);
  const handleClosesonguyen = () => {
    setOpensonguyen(false);
  };
  const [openngay, setOpenngay] = React.useState(false);
  const handleClosengay = () => {
    setOpenngay(false);
  };
  const [opentrungngay, setOpentrungngay] = React.useState(false);
  const handleClosetrungngay = () => {
    setOpentrungngay(false);
  };
  const [matkhau, setMatkhau] = React.useState({  amount: "",  password: "", weight: "", weightRange: "", showPassword: false, });
  const handleChangemk = (prop) => (event) => { 
    setMatkhau({ ...matkhau, [prop]: event.target.value }); console.log(event.target.value); };
  const handleClickShowPassword = () => {
    setMatkhau({  ...matkhau,  showPassword: !matkhau.showPassword, });};
    const handleMouseDownPassword = (event) => {  event.preventDefault();};
  const handleAddSubmit = async (e) => {
    e.preventDefault();
 
    if (tennv && gioitinh &&chucvu && ngaysinh &&email &&sdt &&file && matkhau.password) {
      const check = await nguoidungApi.checktrungemailnv(email);
      if (check.length == 0) {
          const bd = ngaysinh.$y + "-" + (ngaysinh.$M + 1) + "-" + ngaysinh.$D;
           
              await nguoidungApi.createnv(
                tennv,
                chucvu,
                gioitinh,
                ngaysinh.$y + "-" + (ngaysinh.$M + 1) + "-" + ngaysinh.$D,
                email,sdt,matkhau.password
              );
             const nvmoi= await nguoidungApi.getnvmoi();
             const data = new FormData();
             data.append("file", file);
             console.log(file);
             data.append("mand", nvmoi[0].ma_nd);
             await nguoidungApi.uploadnv(data);
              setOpenadd(false);  setOpenalert(true); setSdt("");setFile(""); setTennv(""); setChucvu(""); setGioitinh("");  setNgaysinh("");  setEmail("");   setCount((e) => e + 1);
      } else {
        setOpentrung(true); }}
    if ((!tennv || !gioitinh || !chucvu || !ngaysinh || !email || !sdt || !file) && !openxoa) {
      setOpenloi(true); }
  };

  const [openadd, setOpenadd] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpenadd = (scrollType) => () => {
    setOpenadd(true);
    setScroll(scrollType);
  };
  const handleCloseadd = () => {
    setOpenadd(false);
    setTennv("");
    setNgaysinh("");
    setGioitinh("");
    setEmail("");
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openadd) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      } } }, [openadd]);
  //sua
  const [opensua, setOpensua] = React.useState(false);
  const [scrollsua, setScrollsua] = React.useState("paper");
  const handlesua = async (e) => {
    e.preventDefault();

    if (chucvu && manv) {
      await nguoidungApi.suanv(manv, chucvu );
      setCount((e) => e + 1); setOpensua(false);setManv(""); setOpenalert(true); setTennv("");setChucvu(""); setNgaysinh(""); setGioitinh(""); setEmail("");

    } else {
      setOpenloi(true);}
    setOpen(false); };

  const handleClickOpensua = (aa) => () => {
    setOpensua(true);  setManv(aa.ma_nd);setChucvu(aa.quyen);
     setGioitinh(aa.gioitinh); setSdt(aa.sdt_nd);  setScrollsua("paper"); };

  const handleClosesua = () => { setOpensua(false);  setTennv("");  setNgaysinh("");
    setGioitinh(""); setEmail(""); };
  const descriptionElementRefsua = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElementsua } = descriptionElementRefsua;
      if (descriptionElementsua !== null) {
        descriptionElementsua.focus();
      } } }, [open]);
  //xoa
  const [openxoa, setOpenxoa] = React.useState(false);
  const handleClosexoa = () => {
    setOpenxoa(false);  };
  const handleClickOpenxoa = (id) => () => {
    setManv(id);   setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (manv) {
      await nguoidungApi.deletenv(manv); setManv(""); 
      setCount((e) => e + 1);   setOpenalert(true);
    }  setOpenxoa(false);
  };

  return (
    <div>
      <div
        role="presentation"
        style={{ borderTop: "1px solid #ededed",   borderBottom: "1px solid #ededed",   marginBottom: "40px", }} >
        <Breadcrumbs
          separator="&ensp; › &ensp;" aria-label="breadcrumb" 
           style={{    fontSize: "13px",    lineHeight: "50px",   marginLeft: "9.5%",   float: "left", }}  >
          <Link underline="hover" color="inherit" href="">  Quản lý </Link>
          <Link underline="hover" color="inherit">   Nhân viên </Link>
          <Link  value="1"  underline="hover"  color="#339900"  onClick={handleTrangthai}>  Danh sách </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0} component="form"
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            sx={{ p: "0px 4px", display: "flex",  alignItems: "center",  width: "15%",  float: "left",  marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",  }} >
            <InputBase
              onChange={(e) => setTenget(e.target.value)} sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm nhân viên"  inputProps={{ "aria-label": "search google maps" }} />
              
            <IconButton
              onClick={handleTimkim}  type="button"
              sx={{ p: 1 }}  aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="my-1   ">
          <button
            onClick={handleClickOpenadd("paper")}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
            Thêm mới  </button>
          <form onSubmit={handleAddSubmit} style={{width:"260px"}}>
            <Dialog
              className=""    open={openadd}
              onClose={handleCloseadd}  scroll={scroll}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm nhân viên mới </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef}   >
                  <div>
                    <div>
                      <TextField fullWidth
                        label="* Tên nhân viên"  color="success"  onChange={(e) => setTennv(e.target.value)}
                        style={{ display: "block", width: "250px", marginBottom: "20px" }}   type="text" />
                        
                        <FormControl sx={{ width: "250px" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Chức vụ</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="* Chức vụ" onChange={(e) => setChucvu(e.target.value)}>
                       {listchucvu.map((loaispp) => ( loaispp.ma_q != 1 ?
                          <MenuItem value={loaispp.ma_q} >{loaispp.ten_q}</MenuItem> : false
                        ))}
    
                      </Select>
                       </FormControl>
                      <TextField fullWidth
                        label="* Giới tính"     color="success"     onChange={(e) => setGioitinh(e.target.value)}
                        type="text"     style={{ display: "block", width: "250px", marginBottom: "20px" }}   />
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="mb-[20px]">
                          <DatePicker
                           inputFormat="YYYY-MM-DD"
                            mask="____-__-__"    label="* Ngày sinh"
                            value={ngaysinh}    onChange={(newValue) => {     setNgaysinh(newValue);  }}
                            renderInput={(params) => <TextField color="success" {...params} />}/>
                        </div>
                       
                      </LocalizationProvider>
                      <TextField fullWidth
                        label="* Email"     color="success"     onChange={(e) => setEmail(e.target.value)}
                        type="text"     style={{ display: "block",width:"250px", marginBottom: "20px" }}   />
                         <TextField fullWidth
                        label="* Số điện thoại"     color="success"     onChange={(e) => setSdt(e.target.value)}
                        type="text"     style={{ display: "block",width:"250px", marginBottom: "20px" }}   />
                         <FormControl fullWidth color="success" sx={{mb:2, width: "250px" }} variant="outlined">
                <InputLabel variant="outlined" htmlFor="standard-adornment-password">
                 * Mật khẩu
                </InputLabel>
                <OutlinedInput label="* mat khau"
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
               
              </FormControl>
                         <div class="form-group">
                              <input color="success" style={{width:"250px"}}
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
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseadd}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"  >
                  Quay lại  </button>
                <button
                  onClick={handleAddSubmit}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
                  Thêm </button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
      <div className="w-[88%] mx-[6%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div  style={{width:"79%",float:"right"}}>
        <table className=" w-[100%] text-center rounded-lg	 	" style={{fontSize:"14px"}}>
          <thead className="h-14  text-white 	">
            <tr>
              <th className=" border-[1px] w-[6%]	border-white			 border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">  Mã NV</div>
              </th>
              <th className="border-[1px] w-[9%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Hình ảnh  </div>
              </th>
              <th className="border-[1px] w-[14%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">   Tên NV  </div>
              </th>
              <th className="border-[1px] w-[14%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">  Chức vụ  </div>
              </th>
              <th className="border-[1px] w-[7%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Giới tính </div>
              </th>
              <th className="border-[1px] w-[10%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Ngày sinh  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Email  </div>
              </th>
              <th className="border-[1px] w-[11%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Số điện thoại  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Xóa  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 ml-[-3px] ">    Sửa  </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.length ? (
              data.map((product) => (
                <tr key={product.ma_nd} className="h-16">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                  {product.ma_nd} </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                   {listavt.map((avt)=>(product.ma_nd == avt.ma_nd ? <img src={require('../../../imageuser/' + avt.ten_avt)} />  : false))}   </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_nd}  </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {listchucvu.map((cv)=>(product.quyen == cv.ma_q ? cv.ten_q : false))}  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                  {product.gioi_tinh}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                  {product.ngay_sinh.slice(0,10)}
                  </td>
                  <td  className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                  {product.email}
                  </td>
                  <td  className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                  {product.sdt_nd}
              
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button   color="success"   variant="outlined"   onClick={handleClickOpenxoa(product.ma_nd)} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <div>
                      <Button  color="success"  variant="outlined"  onClick={handleClickOpensua(product)} >
                        {" "}   <ColorizeIcon /> </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th  colspan="10"   className=" border-[1px] 	border-white			 border-solid">
                  <div className="  bg-gray-100 h-[57px] pt-4">  Không tìm thấy dữ liệu bạn đang tìm! </div>
                </th>
              </tr>
            )}
            <tr>
              <th  colspan="10"  className=" border-[1px] 	border-white			 border-solid">
                <div className=" bg-gray-100 h-[57px] pt-4">
                  {" "}
                  <Pagination    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",}}
                    color="success" count={counttrang}  page={trang}   onChange={handleChangepage}
                  ></Pagination>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <Snackbar open={openalert} autoHideDuration={6000}  onClose={handleClosealert}>
        <Alert    onClose={handleClosealert}    severity="success"    sx={{ width: "100%" }}  >
          Thực hiện thao tác thành công - kiểm tra ngay!</Alert>
      </Snackbar>
      <Snackbar  open={opentrung}  autoHideDuration={6000}  onClose={handleClosetrung}>
        <Alert   onClose={handleClosetrung}   severity="error"   sx={{ width: "100%" }} >
          Email này đã tồn tại - vui lòng nhập email khác! </Alert>
      </Snackbar>
      <Snackbar open={opensonguyen} autoHideDuration={6000} onClose={handleClosesonguyen}>
        <Alert onClose={handleClosesonguyen} severity="error" sx={{ width: "100%" }} >
          Phần trăm khuyến mãi phải lớn hơn 0 và nhỏ hơn 100 - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opentrungngay} autoHideDuration={6000} onClose={handleClosetrungngay}>
        <Alert onClose={handleClosetrungngay} severity="error" sx={{ width: "100%" }} >
          Loại sản phẩm này đã có khuyến mãi trong khoảng hời gian này - vui lòng nhập lại hời gian! </Alert>
      </Snackbar>
      <Snackbar  open={openngay}  autoHideDuration={6000}  onClose={handleClosengay} >
        <Alert  onClose={handleClosengay}  severity="error"   sx={{ width: "100%" }} >
          Ngày bắt đầu phải lớn hơn hoặc bằng ngày kết thúc - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={openloi} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert onClose={handleCloseloi} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!</Alert>
      </Snackbar>
      <form >
        <Dialog  open={opensua}  onClose={handleClosesua}  scroll={scrollsua}
          aria-labelledby="scroll-dialog-title"   aria-describedby="scroll-dialog-description" >
          <DialogTitle id="scroll-dialog-title">Chỉnh sửa dữ liệu</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText   id="scroll-dialog-description"   ref={descriptionElementRef}    >
            <FormControl sx={{ width: "250px" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Chức vụ</InputLabel>
                        <Select defaultValue={chucvu} id="grouped-select" label="* Chức vụ" onChange={(e) => setChucvu(e.target.value)}>
                       {listchucvu.map((loaispp) => ( loaispp.ma_q != 1 ?
                          <MenuItem value={loaispp.ma_q} >{loaispp.ten_q}</MenuItem> : false
                        ))}
    
                      </Select>
                       </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClosesua} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Quay về </button>
            <button  onClick={handlesua}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Thực hiện  </button>
          </DialogActions>
        </Dialog>
        <Dialog  open={openxoa}  onClose={handleClosexoa}
          aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">  {"Bạn có chắc muốn xóa?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn đồng ý xóa thì không thể khôi phục lại dữ liệu! </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button     className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"     onClick={handleClosexoa}   >
              Quay lại </button>
            <form onSubmit={handleSubmitxoa}>
              <button  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                value={manv}  onClick={(e) => setManv(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
