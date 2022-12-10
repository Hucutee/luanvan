import React, { useEffect, useState } from "react";
import sanphamAPI from "../../api/sanphamApi";
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
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import chitietsanphamApi from "../../api/chitietsanphamApi";
import InputAdornment from '@mui/material/InputAdornment';
import kichthuocAPI from "../../api/kichthuocApi";

export default function Listkm() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [datactsp, setDatactsp] = useState([]);
  const [loaisp, setLoaisp] = useState([]);
  const [masp, setMasp] = useState("");
  const [sanphamloai, setSanphamloai] = useState("");
  const [tensp, setTensp] = useState("");
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
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

    const [openshow, setOpenshow] = React.useState(false);
  const [show, setShow] = React.useState('');
  const handleClick = (masp) => {
    setOpenshow(!openshow); setShow(masp)
  };
  useEffect(() => {
    (async () => {
      if(dataNhanvien.length==0){
      
        navigate("/Manage");
     
    }
      const loai = await loaisanphamAPI.getCount();
          setLoaisp(loai);
      const loaii = await kichthuocAPI.getCount();
          setListkt(loaii);
      if (trangthai) {
        try {
          const datacount = await sanphamAPI.getCount("a");
          const sotrang = Math.ceil(datacount.length / 10);
          setCounttrang(sotrang);
          const data = await sanphamAPI.getList(trang);
          setData(data);
        
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const datacount = await sanphamAPI.getCounttheoten(tenget);
          const sotrang = Math.ceil(datacount.length / 10);
          setCounttrang(sotrang);
          const data = await sanphamAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
     

      const datactspp = await chitietsanphamApi.getCount("a"); setDatactsp(datactspp); console.log(datactspp);

    })();
  }, [count]);

  const handleTrangthai = () => {
    setTrangthai("1"); setTrang(1);
    setCount((e) => e + 1); };
  const handleTimkim = () => {
    setTrangthai("");setTrang(1);
    setCount((e) => e + 1); };
  //THEM
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
  const handleAddSubmit = async (e) => {
    e.preventDefault();
 
    if (tensp &&sanphamloai) {
      const check = await sanphamAPI.checktrung(tensp);
      if (check.length == 0) {
              await sanphamAPI.create(
                tensp,
                sanphamloai,
              );
              setOpenadd(false);  setOpenalert(true);  setTensp(""); setSanphamloai("");    setCount((e) => e + 1);
           
      } else {
        setOpentrung(true); }}
    if ((!tensp || !sanphamloai) && !openxoa) {
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
    setTensp("");
    setSanphamloai("");
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openadd) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      } } }, [openadd]);
  //sua
  const [opensuatrung, setOpensuatrung] = React.useState(false);
  const handleClosesuatrung = () => {
    setOpensuatrung(false);  };
  const [opensua, setOpensua] = React.useState(false);
  const [scrollsua, setScrollsua] = React.useState("paper");
  const handlesua = async (e) => {
    e.preventDefault();

    if (tensp && sanphamloai) {
      const trungten = await sanphamAPI.suatrung(masp,tensp, sanphamloai);
      if(trungten.length==0){
        await sanphamAPI.sua( masp,  tensp,sanphamloai);
      setCount((e) => e + 1); setOpensua(false); setOpenalert(true); setTensp("");setSanphamloai(""); 
      }else {
        setOpensuatrung(true);
      }
    } else {
      setOpenloi(true);}
    setOpen(false); };
  const handleClickOpensua = (id, ten,lsp) => () => {
    setOpensua(true);  setMasp(id);  setTensp(ten);setSanphamloai(lsp);  setScrollsua("paper"); };

  const handleClosesua = () => { setOpensua(false);  setTensp("");  };
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
    setMasp(id);   setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (masp) {
      await sanphamAPI.delete(masp);
      setCount((e) => e + 1);   setOpenalert(true);
    }  setOpenxoa(false);
  };
//ctsp
const [open1, setOpen1] = React.useState(false);
const [openalert1, setOpenalert1] = React.useState(false);
const handleClosealert1 = (event, reason) => {
  if (reason === "clickaway") {
    return;  }
  setOpenalert1(false);};
const [openloi1, setOpenloi1] = React.useState(false);
const handleCloseloi1 = (event, reason) => {
  if (reason === "clickaway") {
    return;  }
    
  setOpenloi1(false);};
  const [listsp, setListsp] = useState([]);
  const [listkt, setListkt] = useState([]);
  const [listlsp, setListlsp] = useState([]);
  const [getloaiii, setGetloaiii] = useState("");
  const [mactsp, setMactsp] = useState("");
  const [makt, setMakt] = useState("");
  const [tenkt, setTenkt] = useState("");
  const [soluong, setSoluong] = useState("");
  const [giaban, setGiaban] = useState("");
  const [hinhanh, setHinhanh] = useState("");
  const [thongtin, setThongtin] = useState("");
//THEM
const [opentrung1, setOpentrung1] = React.useState(false);
const handleClosetrung1 = () => {
  setOpentrung1(false);
};
const [opensonguyen1, setOpensonguyen1] = React.useState(false);
const handleClosesonguyen1 = () => {
  setOpensonguyen1(false);
};
const [opentrungten1, setOpentrungten1] = React.useState(false);
const handleClosetrungten1 = () => {
  setOpentrungten1(false);
};
const handleAddSubmit1 = async (e) => {
  e.preventDefault();
  
  if (giaban && soluong &&masp && makt && hinhanh && thongtin) {
    const trung = await chitietsanphamApi.checktrung(masp,makt); console.log(trung);//
    if(!(trung.length >0)){
          if (soluong > 0 && giaban > 999 && soluong % 1 == 0 && giaban % 1 == 0) {
            await chitietsanphamApi.create(masp,makt,soluong,giaban,thongtin,hinhanh,tenkt,tensp);
            setOpenadd1(false);  setOpenalert1(true); setMasp(""); setTensp(""); setTenkt(""); setSoluong(""); setGiaban("");setTenkt(""); setTensp("");  setMakt("");  setHinhanh("");setThongtin("");   setCount((e) => e + 1);
          } else {
            setOpensonguyen1(true); }
          } else { setOpentrungten1(true)}
          }
         
  if ((!masp || !soluong || !makt || !giaban || !thongtin || !hinhanh) && !openxoa1) {
    setOpenloi1(true); }
};

const [openadd1, setOpenadd1] = React.useState(false);
const [scroll1, setScroll1] = React.useState("paper");
const handleClickOpenadd1 = (scrollType,masp,ten) => () => {
  setOpenadd1(true); setMasp(masp); setTensp(ten);
  setScroll1(scrollType);
};
const handleCloseadd1 = () => {
  setOpenadd1(false);
  setMasp("");
  setMakt("");
  setSoluong("");
  setGiaban(""); setGetloaiii("");
  setHinhanh(""); setThongtin("");setTensp("");setTenkt(""); setCount((e) => e + 1); 
};
const descriptionElementRef1 = React.useRef(null);
React.useEffect(() => {
  if (openadd1) {
    const { current: descriptionElement } = descriptionElementRef1;
    if (descriptionElement !== null) {
      descriptionElement.focus();
    } } }, [openadd1]);
//sua
const [opensuatrung1, setOpensuatrung1] = React.useState(false);
const handleClosesuatrung1 = () => {
  setOpensuatrung1(false);  };
const [opensua1, setOpensua1] = React.useState(false);
const [scrollsua1, setScrollsua1] = React.useState("paper");
const handlesua1 = async (e) => {
  e.preventDefault();
  if (masp && tensp && makt  && tenkt && soluong && giaban && thongtin && hinhanh ) {
    const checktrung = await chitietsanphamApi.suatrung(mactsp,masp,makt);
    if (checktrung.length==0){
      if (soluong >= 0 && giaban >999 && giaban % 1 ==0 && soluong % 1 == 0) {
        await chitietsanphamApi.sua( mactsp,masp,tensp,makt,tenkt, soluong,giaban,thongtin,hinhanh);
        setCount((e) => e + 1); setOpensua1(false); setOpenalert1(true);setTensp(""); setTenkt(""); setMactsp("");setMasp(""); setMakt(""); setSoluong(""); setGiaban(""); setThongtin(""); setHinhanh("");
      } else {
        setOpensonguyen1(true); }
    } else{setOpensuatrung1(true);}
       
 

  } else {
    setOpenloi1(true);}
  setOpen1(false); };
const handleClickOpensua1 = (bb) => () => {
  setOpensua1(true);  setMactsp(bb.ma_ctsp);  setMasp(bb.ma_sp); setTensp(bb.ten_sp); setMakt(bb.ma_kt);setTenkt(bb.ten_kt);  setSoluong(bb.soluong);  setGiaban(bb.giaban); setThongtin(bb.thongtin); setHinhanh(bb.hinhanh);
   setScrollsua1("paper"); };

const handleClosesua1 = () => { setOpensua1(false); setTensp(""); setTenkt(""); setMactsp("");setMasp(""); setMakt(""); setSoluong(""); setGiaban(""); setThongtin(""); setHinhanh(""); };
const descriptionElementRefsua1 = React.useRef(null);
React.useEffect(() => {
  if (open1) {
    const { current: descriptionElementsua } = descriptionElementRefsua1;
    if (descriptionElementsua !== null) {
      descriptionElementsua.focus();
    } } }, [open1]);
//xoa
const [openxoa1, setOpenxoa1] = React.useState(false);
const handleClosexoa1 = () => {
  setOpenxoa1(false);  };
const handleClickOpenxoa1 = (bb) => () => {
  setMactsp(bb.ma_ctsp);   setOpenxoa1("true");
};
const handleGetloai1 = (id) => () => {
  setGetloaiii(id);  setCount((e) => e + 1);
};
const handleSubmitxoa1 = async (e) => {
  e.preventDefault();
  if (mactsp) {
    await chitietsanphamApi.delete(mactsp);
    setCount((e) => e + 1);   setOpenalert1(true);
  }  setOpenxoa1(false);
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
          <Link underline="hover" color="inherit">   Sản phẩm </Link>
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
              placeholder="Tìm sản phẩm"  inputProps={{ "aria-label": "search google maps" }} />
              
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
          <form onSubmit={handleAddSubmit}>
            <Dialog
              className=""    open={openadd}
              onClose={handleCloseadd}  scroll={scroll}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm sản phẩm mới </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef}   >
                  <div>
                    <div>
                      <TextField
                        label="* Tên sản phẩm"  color="success"  onChange={(e) => setTensp(e.target.value)}
                        style={{ display: "block", marginBottom: "20px" }}   type="text" />
                        
                        <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Loại</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={(e) => setSanphamloai(e.target.value)}>
                       {loaisp.map((loaispp) => (
                          <MenuItem value={loaispp.ma_lsp} >{loaispp.ten_lsp}</MenuItem>
                        ))}
    
                      </Select>
                       </FormControl>
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
      <div className="w-[84%] mx-[8%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div style={{width:"79%",float:"right"}}>
        <div style={{backgroundColor:"#3333", height:"50px",}}>
          <ListItemText sx={{width:"28%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Mã sản phẩm</b></ListItemText>
        <ListItemText sx={{width:"28%",float:"left",paddingTop:"10px"}}><b>Tên sản phẩm</b></ListItemText>
        <ListItemText sx={{width:"28%",float:"left",paddingTop:"10px"}}><b>Loại sản phẩm</b></ListItemText> 
        <ListItemText sx={{width:"14%",float:"left",paddingTop:"10px"}}><b>Sửa</b></ListItemText> 
       </div>
       <List
      style={{ width: '100%',marginTop:"-10px" , fontSize:"10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
      {data.length ? data.map((aa)=>(
        <span>
              <Divider />
            <ListItemButton  onClick={(e)=>handleClick(aa.ma_sp)}>
       
        <ListItemText style={{width:"27%",fontSize:"10px" }}><p style={{fontSize:"14px" }}>{aa.ma_sp}</p></ListItemText>
        <ListItemText sx={{width:"27%"}}><p style={{fontSize:"14px" }}>{aa.ten_sp}</p></ListItemText>

    
        <ListItemText sx={{width:"27%"}}><p style={{fontSize:"14px" }}>{aa.ten_lsp}</p></ListItemText>
                    
                    <ListItemText sx={{width:"14%"}}><p style={{fontSize:"14px" ,width:"50px"}}><Button color="success"  variant="outlined"  onClick={handleClickOpensua(
                          aa.ma_sp, aa.ten_sp,aa.loai_sp)}>
                        {" "}   <ColorizeIcon /> </Button></p></ListItemText>


  
      </ListItemButton>
      <Divider />
      {aa.ma_sp == show ? (<span>
         <Collapse in={openshow} timeout="auto" unmountOnExit sx={{marginBottom:"60px"}}>
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
           <ListItemButton sx={{}}>
            
             <ListItemText>
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2 }}>
                <div className="my-1   ">
          <Button variant="contained"
            onClick={handleClickOpenadd1("paper",aa.ma_sp,aa.ten_sp)}   className="px-4 py-2" >
            Thêm mới  </Button>
          <form onSubmit={handleAddSubmit1} style={{width:"400px"}}>
            <Dialog 
              className=""    open={openadd1}
              onClose={handleCloseadd1}  scroll={scroll1}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm chi tiết sản phẩm mới </DialogTitle>
              <DialogContent dividers={scroll1 === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef1}   >
                  <div>
                    <div>    
                   
                       <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thước</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppp" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((tenktt) => (
                          <MenuItem value={tenktt.ma_kt} ><button value={tenktt.ten_kt} onClick={(e) => setTenkt(e.target.value)}>{tenktt.ten_kt}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                      <TextField fullWidth
                        label="* Số lượng"     color="success"     onChange={(e) => setSoluong(e.target.value)}
                        type="text"     sx={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                        label="* Gía bán"     color="success"     onChange={(e) => setGiaban(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                      <TextField fullWidth
                        label="* Thông tin"     color="success"     onChange={(e) => setThongtin(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                         label="* Hình ảnh"           color="success"     onChange={(e) => setHinhanh(e.target.value.slice(12 ))}
                        type="file" name="file"     style={{ display: "block", marginBottom: "20px" }}
                        
                        InputProps={{
                          startAdornment: <InputAdornment position="start"> </InputAdornment>,
                        }}   />
                        
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseadd1}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"  >
                  Quay lại  </button>
                <button
                  onClick={handleAddSubmit1}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
                  Thêm </button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
                  <Grid sx={{}}>
                  <table className=" w-[100%] rounded-lg border-1	 	">
                  <thead className="h-14 	">
            <tr style={{borderBottom:"1px solid #CCCCCC"}}>
              <th className="">
                <div className=" h-[57px] pt-4 mr-[-3px]">  Mã CTSP</div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-3px]">   Hình ảnh  </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-6px]">  Sản phẩm  </div>
              </th>
              
              <th className="">
                <div className="  h-[57px] pt-4 mr-[-9px]">   Số lượng  </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-9px]">  Giá bán </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-9px]">  Thông tin </div>
              </th>
              
              {/* <th className="">
                <div className=" h-[57px] w-[7%] pt-4 mr-[-3px]">    Xóa  </div>
              </th> */}
              <th className="">
                <div className="   h-[57px] w-[14%] pt-4 ml-[-3px]">    Sửa  </div>
              </th>
            </tr>
            
          </thead>
          <tbody className="">
                     {datactsp.map((bb)=>(
                      aa.ma_sp == bb.ma_sp ? (
                        <tr  className="h-18" style={{borderBottom:"1px solid #CCCCCC"}}>
                  <td className=" ">
                    {bb.ma_ctsp}{" "} </td>
                    
                  <td className="w-[12%] pt-2 pb-2 pr-4">
                  <img src={require('../../../images/' + bb.hinhanh)} />  </td>
                    <td className=" ">
                    {bb.ten_sp} <br/>
                    Kích thước: {bb.ten_kt}</td>
                    
                  <td className="">
                    {bb.soluong}  </td>
                    <td className="w-[13%]">
                    {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                bb.giaban
                              )}  </td>
                    <td className="">
                    {bb.thongtin}  </td>
                  {/* <td className="w-[7%]">
                    <div>
                      <Button      variant="outlined"   onClick={handleClickOpenxoa1(bb)} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td> */}
                  <td className="w-[14%] ">
                    <div>
                      <Button    variant="outlined"  onClick={handleClickOpensua1(
                          bb)} >
                        {" "}   <ColorizeIcon /> </Button>
                    </div>
                  </td>
                </tr>
                      ) : false
                     ))}
                        
                       
                      </tbody>
                     
                    </table>
                  </Grid>
                </Grid>
              </Box>
            
          
             </ListItemText>
           </ListItemButton>
         </List>
         <Divider />

       </Collapse>

       </span>
     ): false}
     
        </span>
      )):<div className="   h-[57px] pt-4">
      {" "}
      <Typography    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",marginTop:"20px", fontWeight:"500"}}>Không tìm thấy sản phẩm bạn muốn tìm! </Typography>
    </div>}
    </List>
    <div className="   h-[57px] pt-4">
                  {" "}
                  <Pagination    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",}}
                    color="success" count={counttrang}  page={trang}   onChange={handleChangepage}
                  ></Pagination>
                </div>
        
        </div>
      </div>
      <Snackbar open={openalert} autoHideDuration={6000}  onClose={handleClosealert}>
        <Alert    onClose={handleClosealert}    severity="success"    sx={{ width: "100%" }}  >
          Thực hiện thao tác thành công - kiểm tra ngay!</Alert>
      </Snackbar>
      <Snackbar  open={opentrung}  autoHideDuration={6000}  onClose={handleClosetrung}>
        <Alert   onClose={handleClosetrung}   severity="error"   sx={{ width: "100%" }} >
          Tên này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <Snackbar  open={opensuatrung}  autoHideDuration={6000}  onClose={handleClosesuatrung}>
        <Alert   onClose={handleClosesuatrung}   severity="error"   sx={{ width: "100%" }} >
          Tên sản phẩm thuộc loại này đã tồn tại - vui lòng nhập tên khác! </Alert>
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
              <TextField label="* Tên khuyến mãi"  color="success"
                onChange={(e) => setTensp(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={tensp}/>
                <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Loại</InputLabel>
                        <Select defaultValue={sanphamloai} id="grouped-select" label="Grouping" onChange={(e) => setSanphamloai(e.target.value)}>
                       {loaisp.map((loaispp) => (
                          <MenuItem value={loaispp.ma_lsp} >{loaispp.ten_lsp}</MenuItem>
                        ))}
                      </Select> </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}></LocalizationProvider>
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
                value={masp}  onClick={(e) => setMasp(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
      <Snackbar open={openalert1} autoHideDuration={6000}  onClose={handleClosealert1}>
        <Alert    onClose={handleClosealert1}    severity="success"    sx={{ width: "100%" }}  >
          Thực hiện thao tác thành công - kiểm tra ngay!</Alert>
      </Snackbar>
      <Snackbar  open={opentrung1}  autoHideDuration={6000}  onClose={handleClosetrung1}>
        <Alert   onClose={handleClosetrung1}   severity="error"   sx={{ width: "100%" }} >
          Tên này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <Snackbar open={opensonguyen1} autoHideDuration={6000} onClose={handleClosesonguyen1}>
        <Alert onClose={handleClosesonguyen1} severity="error" sx={{ width: "100%" }} >
          Số lượng lớn hơn 0 và giá bán từ 1000 - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opentrungten1} autoHideDuration={6000} onClose={handleClosetrungten1}>
        <Alert onClose={handleClosetrungten1} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opensuatrung1} autoHideDuration={6000} onClose={handleClosesuatrung1}>
        <Alert onClose={handleClosesuatrung1} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={openloi1} autoHideDuration={6000} onClose={handleCloseloi1}>
        <Alert onClose={handleCloseloi1} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!</Alert>
      </Snackbar>
      <form >
        <Dialog  open={opensua1}  onClose={handleClosesua1}  scroll={scrollsua1}
          aria-labelledby="scroll-dialog-title"   aria-describedby="scroll-dialog-description" >
          <DialogTitle id="scroll-dialog-title">Chỉnh sửa dữ liệu</DialogTitle>
          <DialogContent dividers={scroll1 === "paper"}>
            <DialogContentText   id="scroll-dialog-description"   ref={descriptionElementRef1}    >
           
               
                 <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thức</InputLabel>
                        <Select defaultValue={makt} id="grouped-select" label="Groupinggg" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((loaispp) => (
                          <MenuItem value={loaispp.ma_kt} ><button value={loaispp.ten_kt} onClick={(e) => setTenkt(e.target.value)}>{loaispp.ten_kt}</button></MenuItem>
                        ))}
                      </Select> </FormControl>
              <TextField fullWidth label="* Số lượng"  color="success"
                onChange={(e) => setSoluong(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={soluong}/>
             <TextField fullWidth label="* Giá bán"  color="success"
                onChange={(e) => setGiaban(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={giaban}/>
              <TextField fullWidth label="* Thông tin"  color="success"
                onChange={(e) => setThongtin(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={thongtin}/>
              <TextField fullWidth
                         label="* Hình ảnh"       color="success"     onChange={(e) => setHinhanh(e.target.value.slice(12 ))}
                        type="file" name="file"    style={{ display: "block", marginBottom: "20px" }}
                        InputProps={{
                          startAdornment: <InputAdornment position="start"> </InputAdornment>,
                        }}   />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClosesua1} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Quay về </button>
            <button  onClick={handlesua1}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Thực hiện  </button>
          </DialogActions>
        </Dialog>
        <Dialog  open={openxoa1}  onClose={handleClosexoa1}
          aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">  {"Bạn có chắc muốn xóa?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn đồng ý xóa thì không thể khôi phục lại dữ liệu! </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <button     className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"     onClick={handleClosexoa1}   >
              Quay lại </button>
            <form onSubmit={handleSubmitxoa1}>
              <button  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                value={mactsp}  onClick={(e) => setMactsp(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
