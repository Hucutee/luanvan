import React, { useEffect, useState } from "react";
import hoadonnhapAPI from "../../api/hoadonnhapApi";
import nhacungcapAPI from "../../api/nhacungcapApi";
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
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import chitietsanphamApi from "../../api/chitietsanphamApi";
import sanphamApi from "../../api/sanphamApi";
import loaisanphamApi from "../../api/loaisanphamApi";

import Zoom from "react-img-zoom";
import Divider from '@mui/material/Divider';
import NativeSelect from '@mui/material/NativeSelect';
import nguoidungApi from '../../api/nguoidungApi';
import chitiethoadonnhapApi from "../../api/chitiethoadonnhapApi";
export default function Listhdn() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [dsncc, setDsncc] = useState([]);
  const [dstongdonnhap, setDstongdonnhap] = useState([]);
  const [listcthdn, setListcthdn] = useState([]);
  const [mahdn, setMahdn] = useState("");
  const [mancc, setMancc] = useState("");
  const [ghichu, setGhichu] = useState("");
  const [manv, setManv] = useState("");
  const [ngaynhap, setNgaynhap] = React.useState(dayjs());
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
    const [listsp, setListsp] = useState([]);
    const [listkt, setListkt] = useState([]);
    const [listlsp, setListlsp] = useState([]);
    const [listhdn, setListhdn] = useState([]);
    const [getloaiii, setGetloaiii] = useState("");
    const [macthdn, setMacthdn] = useState("");
    const [mactsp, setMactsp] = useState("");
    const [malsp, setMalsp] = useState("");
    const [masp, setMasp] = useState("");
    const [tensp, setTensp] = useState("");
    const [makt, setMakt] = useState("");
    const [tenkt, setTenkt] = useState("");
    const [soluong, setSoluong] = useState("");
    const [soluongcu, setSoluongcu] = useState("");
    const [gianhap, setGianhap] = useState("");

  useEffect(() => {
    (async () => {
      if(dataNhanvien.length==0){
        navigate("/Manage");
      }
      const nacc = await nhacungcapAPI.getCount();
          setDsncc(nacc);
         
       const listcthdnn = await chitiethoadonnhapApi.getCount("a");setListcthdn(listcthdnn); console.log(listcthdnn);
   if(getloaiii){
   const loai = await sanphamApi.checkloai(getloaiii);
       setListsp(loai);  
     }else{
       const loai =await sanphamApi.getCount();
       setListsp(loai);
     }
     if(masp){
       const loaikt =await sanphamApi.getmasp(masp);
       setListkt(loaikt);
     }else{

     }

  const loaiii = await loaisanphamApi.getCount();
       setListlsp(loaiii); 
      if (trangthai) {
        try {
          const datacount = await hoadonnhapAPI.getCount("a"); console.log(datacount);
          const sotrang = Math.ceil(datacount.length / 10);
          setCounttrang(sotrang);
          const data = await hoadonnhapAPI.getList(trang);
          setData(data); 
        
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const datacount = await hoadonnhapAPI.getCounttenget(tenget); console.log(datacount);
          const sotrang = Math.ceil(datacount.length / 10);
          setCounttrang(sotrang);
          const data = await hoadonnhapAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
        const dstdn = await hoadonnhapAPI.dstongdonnhap("a");setDstongdonnhap(dstdn);console.log(dstdn);

    
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
 
    if (ghichu  &&mancc && ngaynhap) {
          const bd = ngaynhap.$y + "-" + (ngaynhap.$M + 1) + "-" + ngaynhap.$D;
              await hoadonnhapAPI.create(
                ghichu,
                mancc,
                dataNhanvien[0].ma_nd,
                ngaynhap.$y + "-" + (ngaynhap.$M + 1) + "-" + (ngaynhap.$D +1),
              );
              setOpenadd(false);  setOpenalert(true);  setGhichu(""); setMancc("");     setCount((e) => e + 1);
           
      } 
    if ((!ghichu  || !mancc || !ngaynhap ) && !openxoa) {
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
    setGhichu("");
    setManv("");
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

    if (ghichu && ngaynhap  && mancc) {
      await hoadonnhapAPI.sua( mahdn,  ghichu,mancc, dataNhanvien[0].ma_nd,
        ngaynhap.$y + "-" + (ngaynhap.$M + 1) + "-" + ngaynhap.$D );
      setCount((e) => e + 1); setOpensua(false); setOpenalert(true); setGhichu("");setMancc(""); setMahdn(""); 

    } else {
      setOpenloi(true);}
    setOpen(false); };
  const handleClickOpensua = (idhdn, idncc, ghichu, nbd) => () => {
    setOpensua(true);  setMahdn(idhdn);  setGhichu(ghichu);setMancc(idncc);     
       setScrollsua("paper"); };

  const handleClosesua = () => { setOpensua(false);  setGhichu("");  
    setManv("");  };
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
    setMahdn(id);   setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (mahdn) {
      await hoadonnhapAPI.delete(mahdn);
      setCount((e) => e + 1);   setOpenalert(true);
    }  setOpenxoa(false);
  };

  const [openshow, setOpenshow] = React.useState(false);
  const [show, setShow] = React.useState('');
  const handleClick = (mahdn) => {
    setOpenshow(!openshow); setShow(mahdn)
  };
//CTHDN
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
   if (gianhap && soluong && mactsp && mahdn) {
   
           if (soluong > 0 && gianhap > 999 && soluong % 1 == 0 && gianhap % 1 == 0) {
             await chitiethoadonnhapApi.create(mahdn,mactsp,soluong,gianhap);
             setOpenadd1(false);  setOpenalert1(true); setMalsp(""); setTensp(""); setTenkt(""); setSoluong(""); setGianhap("");setTenkt(""); setTensp("");  setMakt(""); setMactsp("");   setCount((e) => e + 1);
             await chitiethoadonnhapApi.congsoluong(mactsp,soluong);
           } else {
             setOpensonguyen1(true); }
           }
   if ((!mactsp || !soluong || !mahdn || !gianhap ) && !openxoa1) {
     setOpenloi1(true); }
 };

 const [openadd1, setOpenadd1] = React.useState(false);
 const [scroll1, setScroll1] = React.useState("paper");
 const handleClickOpenadd1 = (scrollType,mahdn) => () => {
   setOpenadd1(true); setMahdn(mahdn)
   setScroll1(scrollType);
 };
 const handleCloseadd1 = () => {
   setOpenadd1(false); setMahdn("")
   setMalsp(""); setTenkt("");
   setMakt("");
   setSoluong(""); setMactsp("");
   setGianhap(""); setGetloaiii("");
   setTensp("");setTenkt(""); setCount((e) => e + 1); 
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
   if (macthdn && mactsp && soluong && gianhap) {
     
       if (soluong > 0 && gianhap >999 && gianhap % 1 ==0 && soluong % 1 == 0) {
         await chitiethoadonnhapApi.sua( macthdn,mactsp, soluong,gianhap);
         if(soluong){
           await chitiethoadonnhapApi.suasl( macthdn,mactsp,soluongcu, soluong,gianhap);
         }
         setCount((e) => e + 1); setOpensua1(false); setOpenalert1(true);setTensp("");setMactsp(""); setTenkt(""); setMacthdn("");setMalsp(""); setMakt(""); setSoluong(""); setGianhap(""); 
       } else {
         setOpensonguyen1(true); }
     
   } else {
     setOpenloi1(true);}
   setOpen1(false); };
 const handleClickOpensua1 = (macthdn,mahdn,mactsp,sl,gn) => () => {
   setOpensua1(true);  setMacthdn(macthdn);  setMahdn(mahdn); setMactsp(mactsp);setSoluong(sl);setSoluongcu(sl);  setGianhap(gn); 
    setScrollsua1("paper"); };

 const handleClosesua1 = () => { setOpensua1(false); setTensp(""); setTenkt("");setMahdn(""); setMactsp(""); setMacthdn("");setMalsp(""); setMakt(""); setSoluong(""); setGianhap(""); };
 const descriptionElementRefsua1 = React.useRef(null);
 React.useEffect(() => {
   if (open1) {
     const { current: descriptionElementsua } = descriptionElementRefsua1;
     if (descriptionElementsua !== null) {
       descriptionElementsua.focus();
     } } }, [open1]);
 //xoa
 const [openxoa1, setOpenxoa1] = React.useState(false);
 const handleClosexoa1 = () => {setMacthdn(""); setMactsp(""); setSoluong("");setMahdn("");
   setOpenxoa1(false);  };
 const handleClickOpenxoa1 = (id,mactsp,sln) => () => {
   setMacthdn(id); setMactsp(mactsp); setSoluong(sln);  setOpenxoa1("true");
 };
 const handleGetloai = (id) => () => {
   setGetloaiii(id);  setCount((e) => e + 1);
 };
 const handleGetkt = (id) => () => {
   setMasp(id);  setCount((e) => e + 1);
 };
 const handleSubmitxoa1 = async (e) => {
   e.preventDefault();
   if (macthdn) {
     await chitiethoadonnhapApi.delete(macthdn);
     await chitiethoadonnhapApi.deletesl(mactsp,soluong);
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
          <Link underline="hover" color="inherit">   Hóa đơn nhập </Link>
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
              placeholder="Tìm Mã hóa đơn nhập"  inputProps={{ "aria-label": "search google maps" }} />
              
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
              <DialogTitle id="scroll-dialog-title">   Thêm hóa đơn nhập mới </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef}   >
                  <div>
                    <div>
                      
                        
                        <FormControl  sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel  htmlFor="grouped-native-select">* Nhà cung cấp</InputLabel>
                        <Select  defaultValue="" id="grouped-select" label="Groupingggggg" onChange={(e) => setMancc(e.target.value)}>
                       {dsncc.map((ncc) => (
                          <MenuItem value={ncc.ma_ncc} >{ncc.ten_ncc}</MenuItem>
                        ))}
    
                      </Select>
                       </FormControl>
                       <TextField fullWidth
                        label="* Ghi chú"  color="success"  onChange={(e) => setGhichu(e.target.value)}
                        style={{ display: "block", marginBottom: "20px" }}   type="text" />
                     
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
        <div  style={{width:"79%",float:"right"}}>
        <div style={{backgroundColor:"#3333", height:"50px",}}>
          <ListItemText sx={{width:"11%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Mã HDN</b></ListItemText>
        <ListItemText sx={{width:"14%",float:"left",paddingTop:"10px"}}><b>Tên NCC</b></ListItemText>
        <ListItemText sx={{width:"12%",float:"left",paddingTop:"10px"}}><b>Tổng đơn</b></ListItemText> 
        <ListItemText sx={{width:"18%",float:"left",paddingTop:"10px"}}><b>Ghi chú</b></ListItemText> 
        <ListItemText sx={{width:"14%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Ngày nhập</b></ListItemText>
        <ListItemText sx={{width:"16%",float:"left",paddingTop:"10px"}}><b>Người nhập</b></ListItemText>
        {/* <ListItemText sx={{width:"7%",float:"left",paddingTop:"10px"}}><b>Xóa </b></ListItemText>  */}
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
            <ListItemButton onClick={(e)=>handleClick(aa.ma_hdn)}>
       
        <ListItemText style={{width:"10%",fontSize:"10px" }}><p style={{fontSize:"14px" }}>{aa.ma_hdn}</p></ListItemText>
        <ListItemText sx={{width:"14%"}}><p style={{fontSize:"14px" }}>{aa.ten_ncc}</p></ListItemText>

         <ListItemText sx={{width:"12%"}}><p style={{fontSize:"14px" }}>{ dstongdonnhap.length ? (dstongdonnhap.map((tong)=>(tong.ma_hdn == aa.ma_hdn ? (new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                               tong.sum
                              )) : false))): (new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                               0
                              ))}</p></ListItemText> 
        <ListItemText sx={{width:"20%"}}><p style={{fontSize:"14px" }}>{aa.ghi_chu}</p></ListItemText>
        <ListItemText sx={{width:"13%"}}><p style={{fontSize:"14px" }}>{aa.ngay_nhap.slice(0,10)}</p></ListItemText>
                    <ListItemText sx={{width:"15%"}}><p style={{fontSize:"14px" }}>{aa.ma_nv}</p></ListItemText>
                    {/* <ListItemText sx={{width:"7%",}}><p style={{fontSize:"14px" }}> <Button   color="success"   variant="outlined"   onClick={handleClickOpenxoa(aa.ma_hdn)} >
                        {" "}
                        <DeleteOutlineIcon /> </Button></p></ListItemText> */}
                    <ListItemText sx={{width:"14%"}}><p style={{fontSize:"14px" ,width:"50px"}}><Button color="success"  variant="outlined"  onClick={handleClickOpensua(
                          aa.ma_hdn, aa.ma_ncc,aa.ghi_chu, aa.ngay_nhap)} >
                        {" "}   <ColorizeIcon /> </Button></p></ListItemText>


  
      </ListItemButton>
      <Divider />
 {aa.ma_hdn == show ? (<span>
         <Collapse in={openshow} timeout="auto" unmountOnExit sx={{marginBottom:"60px"}}>
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
           <ListItemButton sx={{}}>
            
             <ListItemText>
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2 }}>
                <div className="my-1   ">
          <Button
            onClick={handleClickOpenadd1("paper",aa.ma_hdn)} variant="contained"  className="px-4 py-2 " >
            Thêm mới  </Button>
          <form onSubmit={handleAddSubmit1}>
            <Dialog
              className=""    open={openadd1}
              onClose={handleCloseadd1}  scroll={scroll1}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm chi tiết hóa đơn nhập mới </DialogTitle>
              <DialogContent dividers={scroll1 === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef1}   >
                  <div>
                    <div style={{width:"300px"}}>  
                   
                   
                    <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select"> Loại sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingpppppp" onChange={(e) => setMalsp(e.target.value)}>
                       {listlsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_lsp} ><button value={tenspp.ten_lsp} onClick={handleGetloai(tenspp.ma_lsp)}>{tenspp.ten_lsp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                        <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Tên sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppppp" onChange={(e) => setMasp(e.target.value)}>
                       {listsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_sp} ><button value={tenspp.ten_sp} onClick={handleGetkt(tenspp.ma_sp)}>{tenspp.ten_sp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                       <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thước</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppp" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((tenktt) => (
                          <MenuItem value={tenktt.ma_kt} ><button value={tenktt.ma_ctsp} onClick={(e) => setMactsp(e.target.value)}>{tenktt.ten_kt}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                      <TextField fullWidth
                        label="* Số lượng"     color="success"     onChange={(e) => setSoluong(e.target.value)}
                        type="text"     sx={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                        label="* Gía nhập"     color="success"     onChange={(e) => setGianhap(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                      
                        
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
                <div className=" h-[57px] pt-4 mr-[-3px]">  Mã CTHĐN</div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-3px]">   Mã HDN  </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-6px]">  Chi tiết sản phẩm  </div>
              </th>
              <th className="">
                <div className="  h-[57px] pt-4 mr-[-9px]">   Số lượng nhập  </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 mr-[-9px]">  Giá bán </div>
              </th>
             
              
              {/* <th className="">
                <div className=" h-[57px] pt-4 mr-[-3px]">    Xóa  </div>
              </th>
              <th className="">
                <div className="   h-[57px] pt-4 ml-[-3px]">    Sửa  </div>
              </th> */}
            </tr>
            
          </thead>

                      <tbody className="">
                     {listcthdn.map((bb)=>(
                      aa.ma_hdn == bb.ma_hdn ? (
                        <tr key={bb.ma_cthdncthdn} className="h-14" style={{borderBottom:"1px solid #CCCCCC"}}>
                  <td className=" ">
                    {bb.ma_cthdn}{" "} </td>
                    
                  <td className=" ">
                    {bb.ma_hdn} </td>
                    <td className=" ">
                    {bb.ten_sp}, {bb.ten_kt} </td>
                  <td className="">
                    {bb.so_luong_nhap}  </td>
                    <td className="">
                    {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                bb.gia_nhap
                              )}  </td>
                   
                  {/* <td className="">
                    <div>
                      <Button      variant="outlined"   onClick={handleClickOpenxoa1(bb.ma_cthdn,bb.ma_ctsp,bb.so_luong_nhap )} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td>
                  <td className=" ">
                    <div>
                      <Button    variant="outlined"  onClick={handleClickOpensua1(
                          bb.ma_cthdn, bb.ma_hdn, bb.ma_ctsp,bb.so_luong_nhap,bb.gia_nhap)} >
                        {" "}   <ColorizeIcon /> </Button>
                    </div>
                  </td> */}
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
      <Typography    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",marginTop:"20px", fontWeight:"500"}}>Không tìm thấy hóa đơn nhập bạn muốn tìm! </Typography>
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
            <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Nhà cung cấp</InputLabel>
                        <Select defaultValue={mancc} id="grouped-select" label="Groupinggggg" onChange={(e) => setMancc(e.target.value)}>
                       {dsncc.map((loaispp) => (
                          <MenuItem value={loaispp.ma_ncc} >{loaispp.ten_ncc}</MenuItem>
                        ))}
                      </Select> </FormControl>
              <TextField fullWidth label="* Ghi chú"  color="success"
                onChange={(e) => setGhichu(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={ghichu}/>
                
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
                value={mahdn}  onClick={(e) => setMahdn(e.target.value)} >
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
           
                
              <TextField fullWidth label="* Số lượng"  color="success"
                onChange={(e) => setSoluong(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={soluong}/>
             <TextField fullWidth label="* Giá nhập"  color="success"
                onChange={(e) => setGianhap(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={gianhap}/>
             
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
                value={macthdn}  onClick={(e) => setMacthdn(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
