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

export default function Donhangquanly() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [datadh, setDatadh] = useState([]);
  const [show, setShow] = React.useState('');
  const [datactdh, setDatactdh] = useState([]);

  const handleClick = (madh) => {
    setOpen(!open); setShow(madh)
  };
  useEffect(() => {
    (async () => {
    const dl = await donhangAPI.getall();
    const dlctdh = await donhangAPI.getallctdh();
    setDatadh(dl);    setDatactdh(dlctdh);

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
          <Link underline="hover" color="inherit">   Chi tiết sản phẩm </Link>
          <Link  value="1"  underline="hover"  color="#339900" >  Danh sách </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0} component="form"
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            sx={{ p: "0px 4px", display: "flex",  alignItems: "center",  width: "15%",  float: "left",  marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",  }} >
            <InputBase
               sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm theo sản phẩm"  inputProps={{ "aria-label": "search google maps" }} />
              
            <IconButton
                type="button"
              sx={{ p: 1 }}  aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="my-1   ">
          
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
        
      <List
      sx={{ width: '100%',  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
      <ListItemButton sx={{bgcolor: "#3333" }}>
       
       <ListItemText sx={{width:"16%",fontWeight:"500", }}><b>Mã đơn hàng</b></ListItemText>
        <ListItemText sx={{width:"22%"}}><b>Ngày đặt hàng</b></ListItemText>
        <ListItemText sx={{width:"20%"}}><b>Tổng đơn</b></ListItemText> 
       <ListItemText sx={{width:"18%"}}><b>Trạng thái</b></ListItemText> 
       
       
     </ListItemButton>
     
      {datadh.map((aa)=>(
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
        {aa.trang_thai ==0 ? (
        <ListItemText sx={{width:"16%"}}><Button variant="outlined" color="success" sx={{marginRight:"5%"}}>Xác nhận</Button><Button variant="outlined" color="error">Hủy đơn</Button></ListItemText>
       ):false}
        {aa.trang_thai ==4 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="error">Đã hủy đơn</Button></ListItemText>):false}
        {aa.trang_thai > 0 && aa.trang_thai <3 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="success">Đã xác nhận</Button></ListItemText>):false}
       {aa.trang_thai ==3 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" >Đã hoàn thành</Button></ListItemText>):false}
        {open ? <ExpandLess onClick={(e)=>handleClick(aa.ma_dh)} /> : <ExpandMore onClick={(e)=>handleClick(aa.ma_dh)} />}
        
      </ListItemButton>
      <Divider />

     {aa.ma_dh == show ? (<span>
         <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
           <ListItemButton sx={{ pl: 4 }}>
            
             <ListItemText>
              <Box sx={{ width: "40%" }}>
                <Grid sx={{  p: 2, pl: 6,pt:0 }}>
                  <Grid sx={{}}>
                    <table className=" w-[100%] rounded-lg border-1	 	">
                      <tbody className="">
                       
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

    </div>
   
  );
}
