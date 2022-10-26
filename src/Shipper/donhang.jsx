import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import chitietsanphamApi from "../Manage/api/chitietsanphamApi";
import sanphamApi from "../Manage/api/sanphamApi";
import loaisanphamApi from "../Manage/api/loaisanphamApi";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Box, Paper, Typography, Link, TextField } from "@mui/material";
import { Button, ButtonGroup, FormHelperText } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from 'react';
import { useState } from 'react';
import Zoom from "react-img-zoom";
import Divider from '@mui/material/Divider';
import Pagination from "@mui/material/Pagination";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import donhangAPI from '../Manage/api/donhangApi';
import { useDispatch, useSelector } from "react-redux";
import { logoutShipper } from '../Shop/app/shipperSlice';
import { useNavigate } from 'react-router-dom';

export default function Donhangshipper() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [datadh, setDatadh] = useState([]);
  const [show, setShow] = React.useState('');
  const [datactdh, setDatactdh] = useState([]);
  const [dataallctgh, setDataallctgh] = useState([]);

  const [trang, setTrang] = React.useState(1);
  const [datadhtrang, setDatadhtrang] = useState([]);
  const [trangthai, setTrangthai ] = React.useState('24');
  const [counttrang, setCounttrang] = useState(0);
  const dataUser = useSelector((state) => state?.userShipper?.current); 
  const dispatch = useDispatch();
  const handleChangetrangthai = (event) => {
    setTrangthai(event.target.value); setCount((e) => e + 1);console.log(event.target.value);
  };



  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1); };
  const handleClick = (madh) => {
    setOpen(!open); setShow(madh)
  };
  const handlehuydon = async(madh) => {
    await donhangAPI.huydon(madh);
    setCount((e) => e + 1);
  };
  const history = useNavigate();

  const handledx = () => {
    dispatch(logoutShipper()); history(`/shipper`)
    setCount((e) => e + 1);
  };
  const handlexacnhandon = async(aa) => {
    if(aa.trang_thai == 3){
      await donhangAPI.guimailnhanhang(aa.ma_kh,aa.ma_dh);
     }
   await donhangAPI.setttngh(aa.ma_dh,dataUser[0].ma_ngh,aa.trang_thai);
   await donhangAPI.addctgh(aa.ma_dh,dataUser[0].ma_ngh,aa.trang_thai);
  
    setCount((e) => e + 1);}
    const handletuchoidon = async(aa) => {
      await donhangAPI.tuchoigiaohang(aa.ma_dh);
   
       setCount((e) => e + 1);}
    const handlexacnhandon1 = async(aa) => {
      await donhangAPI.setttngh1(aa.ma_dh,dataUser[0].ma_ngh,aa.trang_thai);
      await donhangAPI.addctgh1(aa.ma_dh,dataUser[0].ma_ngh,aa.trang_thai);
      const aaa =await donhangAPI.getdhboom(aa.ma_dh); console.log(aaa);
      await donhangAPI.boomhang(aaa[0].ma_kh);
   if (datactdh.length !== 0) {
      for (let i = 0; i < datactdh.length; i++) {
        if(datactdh[i].ma_dh==aa.ma_dh){
          console.log(datactdh[i].ma_ctsp,datactdh[i].so_luong);
          await donhangAPI.hoanhang(datactdh[i].ma_ctsp,datactdh[i].so_luong);
        }
  } 
  }
       setCount((e) => e + 1);}
  useEffect(() => {
    (async () => { console.log(dataUser);
    const dl = await donhangAPI.getall();setCounttrang(Math.ceil(dl.length / 20));
    if(trangthai == "11"){
      const dltrang = await donhangAPI.gettrangnhangiao(trang,trangthai.slice(0,1),trangthai.slice(1),dataUser[0].ma_ngh);setDatadhtrang(dltrang); console.log(dltrang);

    }else {
      const dltrang = await donhangAPI.gettrangcuangh(trang,trangthai.slice(0,1),trangthai.slice(1),dataUser[0].ma_ngh);setDatadhtrang(dltrang); console.log(dltrang);

    }
    const dlctdh = await donhangAPI.getallctdh();
    const alllctgh = await donhangAPI.allctgh();setDataallctgh(alllctgh);

    setDatadh(dl);    setDatactdh(dlctdh);

    })();
  }, [count]);
  const [file, setFile] = React.useState();
  const send = async (madh) => {
    const data = new FormData();
    data.append("file", file);
    console.log(file);
    data.append("madh", madh);
    await donhangAPI.hinhdonhang(data);
    setCount((e) => e + 1);
  };
  return (
    <div>
       
         <div
        role="presentation"
        style={{ borderTop: "1px solid #ededed",   borderBottom: "1px solid #ededed",   marginBottom: "40px", height:"52px"}} >
       <Button variant="outlined" color="success" sx={{marginLeft:"10%",marginTop:"5px"}}>{dataUser[0].ten_ngh}</Button>
       <Button onClick={handledx} variant="contained" color="success" sx={{float:"right",marginTop:"5px",marginRight:"10%"}} >Đăng xuất</Button>

        <div className="bg-slate-200">
          
        </div>
        <div className="my-1   ">
          
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
        <div style={{backgroundColor:"#3333", height:"50px",}}><ListItemText sx={{width:"23%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Mã đơn hàng</b></ListItemText>
        <ListItemText sx={{width:"27%",float:"left",paddingTop:"10px"}}><b>Ngày đặt hàng</b></ListItemText>
        <ListItemText sx={{width:"25%",float:"left",paddingTop:"10px"}}><b>Tổng đơn</b></ListItemText> 
       <ListItemText sx={{width:"23%",float:"left" ,paddingTop:"8px"}} >  <FormControl variant="standard" color="success" size="small" sx={{  minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={trangthai}
          onChange={handleChangetrangthai}
          label="Age"
        >
         <MenuItem value="11"><b>Đơn hàng chờ</b></MenuItem>
         <MenuItem value="24"><b>Đơn của bạn</b></MenuItem>
          <MenuItem value="22"><b>Đã nhận</b></MenuItem>
          <MenuItem value="33"><b>Đang giao</b></MenuItem>
          <MenuItem value="44"><b>Đã hoàn thành</b></MenuItem>
          <MenuItem value="66"><b>Kháchg boom hàng</b></MenuItem>



        </Select>
      </FormControl></ListItemText> </div>
      <List
      sx={{ width: '100%',marginTop:"-10px"  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
     
     
      {datadhtrang.map((aa)=>(
        <span>
            
            <ListItemButton >
       
        <ListItemText sx={{width:"16%"}}>{aa.ma_dh}</ListItemText>
         <ListItemText sx={{width:"22%"}}>{aa.ngay_dat_hang.slice(0,10)}</ListItemText>
         <ListItemText sx={{width:"20%"}}>{new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                aa.tong_tien
                              )}</ListItemText> 
        {aa.trang_thai ==1 ? (
        <ListItemText sx={{width:"16%"}}><Button variant="outlined" color="success" sx={{marginRight:"5%"}} onClick={(e)=>handlexacnhandon(aa)}>Nhận đơn</Button>
                                          <Button variant="outlined" color="error" sx={{}} onClick={(e)=>handletuchoidon(aa)}>từ chối</Button></ListItemText>
       ):false}
        {aa.trang_thai >5 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="error">Khách boom hàng</Button></ListItemText>):false}
        {aa.trang_thai ==2 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="inherit" onClick={(e)=>handlexacnhandon(aa)}>Đã nhận</Button></ListItemText>):false}
         {aa.trang_thai ==3 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" onClick={(e)=>handlexacnhandon(aa)} >Đang giao</Button><Button sx={{marginLeft:"10px"}} color="warning" variant="contained" onClick={(e)=>handlexacnhandon1(aa)}>Khách boom?</Button></ListItemText>):false}
       {aa.trang_thai ==4 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="success">Đã giao ngày:  {dataallctgh.map((gh)=>(gh.ma_dh ==  aa.ma_dh && gh.trang_thai==4 ) ? gh.ngay_gh.slice(0,10):false)}</Button></ListItemText>):false}
        {open ? <ExpandLess onClick={(e)=>handleClick(aa.ma_dh)} /> : <ExpandMore onClick={(e)=>handleClick(aa.ma_dh)} />}
        
      </ListItemButton>
      <Divider />

     {aa.ma_dh == show ? (<span>
         <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
           <ListItemButton sx={{ pl: 1 }}>
            
             <ListItemText>
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2, pl: 6,pt:0 }}>
                  <Grid sx={{}}>
                    <table className=" w-[100%] rounded-lg border-1	 	">
                      <tbody className="">
                       <tr>
               <td             colSpan={4} 
                            className="border-[2px] 	border-gray-300		p-4	 border-solid w-[40%] text-base ">
                               {aa.trang_thai == 4 && aa.anh == null ?  <div class="form-group" style={{marginBottom:"20px"}}>
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
                              <Button  color="success" variant="contained" onClick={(e)=>send(aa.ma_dh)} >Thực hiện</Button>

                            </div>:false}
                              <p>                              Thông tin khách hàng: {aa.nguoi_nhan}. &ensp;  &ensp;  &ensp; &ensp; Địa chỉ giao: {aa.dia_chi_giao}</p>
                              </td>
                       </tr>
                        {datactdh?.map((aaa) =>
                          aaa.ma_dh == aa.ma_dh ? (
                            <tr className="h-10 ">
                              <td className=" w-[8%] p-2 ">
                                <Zoom
                                  img={require("./../images/" +
                                    aaa.hinhanh)}
                                  height={50} width={50}
                                />
                              </td>
                              <td className="text-base">{aaa.ten_sp} <p className="text-xs">Giá: {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(aaa.gia)}</p></td>
                              <td className="text-base ">Số lượng: {aaa.so_luong}</td>

                              <td className="text-base ">Tổng: {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(aaa.so_luong*aaa.gia)}</td>
                       
                            </tr>
                          ) : (
                            false
                          )
                        )}
                       {aa.anh != null ?
                        <tr >
                        <td colSpan={4} ><p  style={{margin: "20px" }}><b>Ảnh xác nhận</b></p>
                        <div style={{margin: "20px" }}> <Zoom
                  img={require("./../imageuser/" + aa.anh )}
                  height={300}
                  width={200}
                /></div>
                          
                        </td>
                      </tr>:false}
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
      ))}
    </List>
      </div>
      <div className=" h-[57px] pt-4">
                  {" "}
                  <Pagination    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",}}
                    color="success" count={counttrang}  page={trang}   onChange={handleChangepage}
                  ></Pagination>
                </div>
    </div>
   
  );
}
