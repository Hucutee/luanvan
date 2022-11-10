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
import repblAPI from '../../api/repblApi';
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
import binhluanApi from '../../api/binhluanApi';
import Listmanager from '../list';
export default function Repdg() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [datadh, setDatadh] = useState([]);
  const [show, setShow] = React.useState('');
  const [datactdh, setDatactdh] = useState([]);
  const [trang, setTrang] = React.useState(1);
  const [datadhtrang, setDatadhtrang] = useState([]);
  const [trangthai, setTrangthai ] = React.useState('01');
  const [counttrang, setCounttrang] = useState(0);
  const [dataallctgh, setDataallctgh] = useState([]);
  const [nguoidung, setNguoidung] = useState([]);
  const [datangh, setDatangh] = useState([]);
  const [binhluan, setBinhluan] = useState("");
  const handlebl = async (aa) => {
    if(binhluan != "" && dataNhanvien[0].ma_nd){ 
      console.log(aa);
      await repblAPI.addrepdanhgia(binhluan,dataNhanvien[0].ma_nd,aa.ma_sp,aa.ma_dg,aa.ma_ctdh);
      await repblAPI.settrangthaidanhgia(aa.ma_dg);
    } setBinhluan("");
    setCount((e) => e + 1);
  };
  const handleChangetrangthai = (event) => {
    setTrangthai(event.target.value); setCount((e) => e + 1);console.log(event.target.value);
  };


  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1); };
  const handleClick = (madh) => {
    setOpen(!open); setShow(madh)
  };
 
  
  useEffect(() => {
    (async () => {
      if(dataNhanvien.length==0){
        navigate("/Manage");
      }
    const dl = await repblAPI.danhgiagetall();setCounttrang(Math.ceil(dl.length / 20));console.log(dl);
    const dltrang = await repblAPI.gettrangdanhgia(trang,trangthai.slice(0,1),trangthai.slice(1));setDatadhtrang(dltrang); console.log(dltrang);
    const dltl = await repblAPI.gettldg(); setDatactdh(dltl);
    setDatadh(dl);    
    const alllctgh = await repblAPI.allctgh();setDataallctgh(alllctgh);
    const ngh = await repblAPI.ttngh();setDatangh(ngh);console.log(ngh);

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
          <Link underline="hover" color="inherit">  Đánh giá </Link>
          <Link  value="1"  underline="hover"  color="#339900" >  Danh sách </Link>
        </Breadcrumbs>
        
        <div className="my-1   ">
          
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div  style={{width:"79%",float:"right"}}>
        <div style={{backgroundColor:"#3333", height:"50px",}}><ListItemText sx={{width:"23%",fontWeight:"500",float:"left",paddingTop:"10px" }}><b>&ensp; Tên sản phẩm</b></ListItemText>
        <ListItemText sx={{width:"27%",float:"left",paddingTop:"10px"}}><b>Ngày đánh giá</b></ListItemText>
        <ListItemText sx={{width:"25%",float:"left",paddingTop:"10px"}}><b>Nội dung</b></ListItemText> 
       <ListItemText sx={{width:"23%",float:"left" ,paddingTop:"8px"}} >  <FormControl variant="standard" color="success" size="small" sx={{  minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={trangthai}
          onChange={handleChangetrangthai}
          label="Age"
        >
                    <MenuItem value="01"><b>Tất cả đáng giá</b></MenuItem>
          <MenuItem value="00"><b>Chưa trả lời</b></MenuItem>
          <MenuItem value="13"><b>Đã trả lời</b></MenuItem>

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
       
        <ListItemText sx={{width:"16%"}}>{aa.ten_sp}</ListItemText>
         <ListItemText sx={{width:"22%"}}>{aa.ngay.slice(0,10)}</ListItemText>
         <ListItemText sx={{width:"20%"}}>{aa.noi_dung}</ListItemText> 
        
        {aa.trang_thai_dg == 0 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" color="warning">Chưa trả lời</Button></ListItemText>):false}
        {aa.trang_thai_dg > 0 ? (
       <ListItemText sx={{width:"16%"}}> <Button variant="contained" >Đã trả lời</Button></ListItemText>):false}
       
        {open ? <ExpandLess onClick={(e)=>handleClick(aa.ma_dg)} /> : <ExpandMore onClick={(e)=>handleClick(aa.ma_dg)} />}
        
      </ListItemButton>
      <Divider />

     {aa.ma_dg == show ? (<span>
         <Collapse in={open} timeout="auto" unmountOnExit>
          
         <List component="div" disablePadding sx={{ bgcolor: "#f8f8f8"}}>
         
      {aa.anhdg ? <p style={{marginLeft: "20px" }}><p style={{paddingTop: "20px",paddingBottom: "20px",fontWeight:"500" }}>Ảnh đánh giá</p><Zoom 
                  img={require("./../../../imageuser/" + aa.anhdg )}
                  height={300}
                  width={200}
                /></p>:false}
           <ListItemButton sx={{ pl: 4 }}>
            
             <ListItemText>
              <Box sx={{ width: "100%" }}>
                <Grid sx={{  p: 2, pl: 6,pt:0 }}>
                  <Grid sx={{}}>
                    <table className=" w-[100%] rounded-lg border-1	 	">
                      <tbody className="">
                      <tr>
                          
                       </tr>
                        {datactdh?.map((aaa) =>
                          aaa.rep == aa.ma_dg ? (
                            <tr className="h-10 ">
                              
                              <td className="text-base">Trả lời bởi: {aa.ma_nv} <p className="text-xs">ngày: {aaa.ngay.slice(0,10)}</p></td>
                              <td className="text-base">Nội dung: {aaa.noi_dung}</td>

                        
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
           <Grid sx={{paddingLeft:6,paddingRight:6,paddingBottom:2}}><TextField sx={{width:"92%", backgroundColor:"white"}} id="outlined-basic" label="Nhập nội dung phản hồi đánh giá" color="success" variant="outlined" onChange={(e)=>setBinhluan(e.target.value)} /> <Button  onClick={(e)=>handlebl(aa)}  sx={{ width:"7%",height:"50px"}}><SendIcon className="a1"  /></Button> </Grid>

         </List>
         <Divider />

       </Collapse>

       </span>
     ): false}
        </span>
      ))}
    </List>
    <div className=" h-[57px] pt-4">
                  {" "}
                  <Pagination    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",}}
                    color="success" count={counttrang}  page={trang}   onChange={handleChangepage}
                  ></Pagination>
                </div>
    </div>
      </div>
     
    </div>
   
  );
}
