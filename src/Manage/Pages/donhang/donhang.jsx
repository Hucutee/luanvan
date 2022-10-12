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
import chitietsanphamApi from "../../api/chitietsanphamApi";
import sanphamApi from "../../api/sanphamApi";
import loaisanphamApi from "../../api/loaisanphamApi";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Box, Paper, Typography, Link, TextField } from "@mui/material";
import { Button, ButtonGroup, FormHelperText } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from 'react';
import { useState } from 'react';
import donhangAPI from '../../api/donhangApi';
import Zoom from "react-img-zoom";
import Divider from '@mui/material/Divider';
import Pagination from "@mui/material/Pagination";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import nguoidungApi from '../../api/nguoidungApi';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Donhangquanly() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [datadh, setDatadh] = useState([]);
  const [show, setShow] = React.useState('');
  const [datactdh, setDatactdh] = useState([]);
  const [trang, setTrang] = React.useState(1);
  const [datadhtrang, setDatadhtrang] = useState([]);
  const [trangthai, setTrangthai ] = React.useState('06');
  const [counttrang, setCounttrang] = useState(0);
  const [dataallctgh, setDataallctgh] = useState([]);
  const [nguoidung, setNguoidung] = useState([]);
  const [datangh, setDatangh] = useState([]);

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
    await donhangAPI.huydon(madh,dataNhanvien[0].ma_nd);
    setCount((e) => e + 1);
  };
  const handlexacnhandon = async(madh) => {
    const dlctdh = await donhangAPI.getallctdh();console.log(dlctdh);
    let a =0;
    if (dlctdh.length !== 0) {
      for (let i = 0; i < dlctdh.length; i++) {
        if(dlctdh[i].so_luong > dlctdh[i].soluong && dlctdh[i].ma_dh==madh){
          a=a+1; 
        }
  } 
  } console.log(a);
    if (dlctdh.length !== 0 && a<1) {
      for (let i = 0; i < dlctdh.length; i++) {
        if(dlctdh[i].ma_dh==madh){
          await donhangAPI.setslctsp(dlctdh[i].ma_ctsp,dlctdh[i].so_luong); console.log(dlctdh[i].ma_ctsp,dlctdh[i].so_luong);
        }
  } await donhangAPI.daxacnhan(madh,dataNhanvien[0].ma_nd);
    
  } setCount((e) => e + 1);}
  useEffect(() => {
    (async () => {
    const dl = await donhangAPI.getall();setCounttrang(Math.ceil(dl.length / 20));
    const dltrang = await donhangAPI.gettrang(trang,trangthai.slice(0,1),trangthai.slice(1));setDatadhtrang(dltrang); 
    const dlctdh = await donhangAPI.getallctdh();
    setDatadh(dl);    setDatactdh(dlctdh);
    const alllctgh = await donhangAPI.allctgh();setDataallctgh(alllctgh);
    const ngh = await donhangAPI.ttngh();setDatangh(ngh);console.log(ngh);

      const nd = await nguoidungApi.login(); setNguoidung(nd); console.log(nd);
    })();
  }, [count]);

  return (
    <div>
       
         <div
        role="presentation"
        style={{ borderTop: "1px solid #ededed",   borderBottom: "1px solid #ededed",   marginBottom: "40px", height:"52px"}} >
        <Breadcrumbs
          separator="&ensp; › &ensp;" aria-label="breadcrumb" 
           style={{    fontSize: "13px",    lineHeight: "50px",   marginLeft: "9.5%",   float: "left", }}  >
          <Link underline="hover" color="inherit" href="">  Quản lý </Link>
          <Link underline="hover" color="inherit">   Đơn hàng </Link>
          <Link  value="1"  underline="hover"  color="#339900" >  Danh sách </Link>
        </Breadcrumbs>
        
        <div className="my-1   ">
          
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
        <div style={{backgroundColor:"#3333", height:"50px",}}><ListItemText sx={{width:"17%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Mã đơn hàng</b></ListItemText>
        <ListItemText sx={{width:"20%",float:"left",paddingTop:"10px"}}><b>Ngày đặt hàng</b></ListItemText>
        <ListItemText sx={{width:"17%",float:"left",paddingTop:"10px"}}><b>Tổng đơn</b></ListItemText> 
        <ListItemText sx={{width:"25%",float:"left",paddingTop:"10px"}}><b>Hình thức thanh toán</b></ListItemText> 

       <ListItemText sx={{width:"20%",float:"left" ,paddingTop:"8px"}} >  <FormControl variant="standard" color="success" size="small" sx={{  minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={trangthai}
          onChange={handleChangetrangthai}
          label="Age"
        >
                    <MenuItem value="06"><b>Tất cả đơn hàng</b></MenuItem>
          <MenuItem value="00"><b>Chưa xác nhận</b></MenuItem>
          <MenuItem value="13"><b>Đã xác nhận</b></MenuItem>
          <MenuItem value="44"><b>Đã hoàn thành</b></MenuItem>
          <MenuItem value="55"><b>Đơn đã hủy</b></MenuItem>
          <MenuItem value="66"><b>Khách boom hàng</b></MenuItem>

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
       
        <ListItemText sx={{width:"17%"}}>{aa.ma_dh}</ListItemText>
         <ListItemText sx={{width:"21%"}}>{aa.ngay_dat_hang.slice(0,10)}</ListItemText>
         <ListItemText sx={{width:"18%"}}>{new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                aa.tong_tien
                              )}</ListItemText> 
        {aa.hinh_thuc_thanh_toan==1 ?          <ListItemText sx={{width:"25%"}}>Thanh toán khi nhận hàng</ListItemText>:         <ListItemText sx={{width:"25%"}}>Thanh toán Online</ListItemText>

}
        {aa.trang_thai ==0 ? (
        <ListItemText sx={{width:"20%"}}><Button variant="outlined" color="success" sx={{marginRight:"5%"}} onClick={(e)=>handlexacnhandon(aa.ma_dh)}>Xác nhận</Button><Button onClick={(e)=>handlehuydon(aa.ma_dh)} variant="outlined" color="error">Hủy đơn</Button></ListItemText>
       ):false}
        {aa.trang_thai ==5 ? (
       <ListItemText sx={{width:"20%"}}> <Button variant="contained" color="warning">Đã hủy đơn bởi: {aa.ma_nv}</Button></ListItemText>):false}
        {aa.trang_thai > 0 && aa.trang_thai <4 ? (
       <ListItemText sx={{width:"20%"}}> <Button variant="contained" >Đã xác nhận bởi: {aa.ma_nv}</Button></ListItemText>):false}
       {aa.trang_thai ==4 ? (
       <ListItemText sx={{width:"20%"}}> <Button variant="contained" color="success">ĐÃ GIAO NGÀY: {dataallctgh.map((gh)=>(gh.ma_dh ==  aa.ma_dh && gh.trang_thai==4 ) ? gh.ngay_gh.slice(0,10):false)}</Button></ListItemText>):false}
           {aa.trang_thai >5 ? (
       <ListItemText sx={{width:"20%"}}> <Button variant="contained" color="error">Khách boom hàng</Button></ListItemText>):false}
        {open ? <ExpandLess onClick={(e)=>handleClick(aa.ma_dh)} /> : <ExpandMore onClick={(e)=>handleClick(aa.ma_dh)} />}
        
      </ListItemButton>
      <Divider />

     {aa.ma_dh == show ? (<span>
         <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
           <ListItemButton sx={{ pl: 4 }}>
            
             <ListItemText>
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2, pl: 6,pt:0 }}>
                  <Grid sx={{}}>
                    <table className=" w-[100%] rounded-lg border-1	 	">
                      <tbody className="">
                      <tr>
                          <td           colSpan={5}
                            className="border-[2px] 	border-gray-300		p-4	 border-solid w-[40%] text-base ">Thông tin khách hàng: {aa.nguoi_nhan}. &ensp; &ensp; &ensp; &ensp; Địa chỉ giao: {aa.dia_chi_giao}.  {nguoidung.map((nd)=>(nd.ma_nd==aa.ma_kh && nd.boom >0 ? <p style={{color:'red'}}>Đã boom hàng {nd.boom} lần.</p> : false))}<br/>
                            {datangh.map((ngh)=>(ngh.ma_dh==aa.ma_dh && ngh.ma_ngh !="NGH1" ? <p>Thông tin người giao hàng: {ngh.ten_ngh}. &ensp;&ensp;&ensp; Số điện thoại: {ngh.sdt}</p>:false))}
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
                              <td className="text-base">{aaa.ten_sp} <p className="text-xs">Giá: {aaa.gia}</p></td>
                              <td className="text-base">Số lượng mua: {aaa.so_luong}</td>

                              <td className="text-base ">Tổng: {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(aaa.so_luong*aaa.gia)}</td>
                        <td className="text-base ">Số lượng trong kho: {aaa.soluong}</td>
                            </tr>
                          ) : (
                            false
                          )
                        )}
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
