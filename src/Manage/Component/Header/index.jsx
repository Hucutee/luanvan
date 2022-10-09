import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Disclosure } from '@headlessui/react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../../Shop/Components/Header/logo.jpg";
import ListIcon from '@mui/icons-material/List';
import StoreIcon from '@mui/icons-material/Store';
import StraightenIcon from '@mui/icons-material/Straighten';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SpaIcon from '@mui/icons-material/Spa';
import StorageIcon from '@mui/icons-material/Storage';
import YardIcon from '@mui/icons-material/Yard';
import GrassIcon from '@mui/icons-material/Grass';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GiteIcon from '@mui/icons-material/Gite';
import PercentIcon from '@mui/icons-material/Percent';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { useDispatch, useSelector } from "react-redux";
import { logoutNhanvien } from '../../../Shop/app/nhanvienSlice';
import Avatar from "@mui/material/Avatar";
import { deepOrange, green } from "@mui/material/colors";
import { useEffect } from "react";
import nguoidungApi from '../../api/nguoidungApi';
import Link  from "@mui/material/Link";
import { BrowserRouter as Router, Route, Link as Lin, Routes } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const dispatch = useDispatch();
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [chon, setChon] = React.useState(true);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [opensp, setOpensp] = React.useState(false);
  const handleClicksp = () => {
    setOpensp(!opensp);
  };
  const [opencskh, setOpencskh] = React.useState(false);
  const handleClickcskh = () => {
    setOpencskh(!opencskh);
  };
  const [openkho, setOpenkho] = React.useState(false);
  const handleClickkho = () => {
    setOpenkho(!openkho);
  };
  const [opengg, setOpengg] = React.useState(false);
  const handleClickgg = () => {
    setOpengg(!opengg);
  };
  const [openhd, setOpenhd] = React.useState(false);
  const handleClickhd = () => {
    setOpenhd(!openhd);
  };
  const [avt,setAvt]= React.useState("");

  const [anchorEldx, setAnchorEldx] = React.useState(null);
  const opendx = Boolean(anchorEldx);
  const handleClickdx = (event) => {
    setAnchorEldx(event.currentTarget);
  };
  const handleClosedx = () => {
    setAnchorEldx(null);
  };

  const handledx = ()=>{
    
    dispatch(logoutNhanvien());


  }
  useEffect(() => {
    (async () => {
      try {
        const avt = await nguoidungApi.getavtnv(dataNhanvien[0].ma_nd); if(avt.length != 0) {setAvt(avt[0].ten_avt);}
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, []);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      
    >
      <List>

      {dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 3 || dataNhanvien[0].quyen == 4 ?<span><ListItemButton onClick={handleClicksp}>
        <ListItemIcon>
          <YardIcon />
        </ListItemIcon>
        <ListItemText primary="Sản phẩm" />
        {opensp ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opensp} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <AutoAwesomeMotionIcon />}
              </ListItemIcon>
              <ListItemText > <Lin onClick={toggleDrawer("left", false)} to="/Manager/loaisanpham" className="">
              Loại sản phẩm
            </Lin></ListItemText>
            </ListItemButton>
          <ListItemButton sx={{ pl: 6 }} >
              <ListItemIcon >
                {"A" % 2 === 0 ? <InboxIcon /> : <YardIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/sanpham" className="">
              Sản phẩm
            </Lin></ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StraightenIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/kichthuoc" className="">
              Kích thước
            </Lin></ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StorageIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/chitietsanpham" className="">
              Chi tiết sản phẩm
            </Lin></ListItemText>
            </ListItemButton>
           
            
        </List>
      </Collapse></span>:false}

      {dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 3 ?<span><ListItemButton onClick={handleClickkho}>
        <ListItemIcon>
          <GiteIcon />
        </ListItemIcon>
        <ListItemText  primary="Nhập kho" />
        {openkho ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openkho} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StoreIcon />}
              </ListItemIcon>
              <ListItemText  ><Lin  onClick={toggleDrawer("left", false)} to="/Manager/nhacungcap" className="">
              Nhà cung cấp
            </Lin> </ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <ReceiptIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/hoadonnhap" className="">
              Hóa đơn nhập
            </Lin></ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <ReceiptLongIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/chitiethoadonnhap" className="">
              Chi tiết hóa đơn nhập
            </Lin></ListItemText>
            </ListItemButton>
        </List>
      </Collapse>
      </span>:false}
      
      {dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 4 ?<span> <ListItemButton onClick={handleClickhd}>
        <ListItemIcon>
          <UnarchiveIcon />
        </ListItemIcon>
        <ListItemText primary="Xuất kho" />
        {openhd ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openhd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <ShoppingBasketIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/donhang" className="">
              Đơn hàng
            </Lin></ListItemText>
            </ListItemButton>
            
        </List>
      </Collapse></span>:false} 
      {dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 5 ?<span><ListItemButton onClick={handleClickgg}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="Ưu đãi" />
        {opengg ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opengg} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <AccountBalanceWalletIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/phieugiamgia" className="">
              Phiếu giảm giá
            </Lin></ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <PercentIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/khuyenmai" className="">
              Khuyến mãi
            </Lin></ListItemText>
            </ListItemButton>
        </List>
      </Collapse>
      </span>:false}  
      {dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 5 ?<span> <ListItemButton onClick={handleClickcskh}>
        <ListItemIcon>
          <UnarchiveIcon />
        </ListItemIcon>
        <ListItemText primary="CS-KH" />
        {opencskh ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opencskh} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <ShoppingBasketIcon />}
              </ListItemIcon>
              <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/donhang" className="">
              Đơn hàng
            </Lin></ListItemText>
            </ListItemButton>
            
        </List>
      </Collapse></span>:false} 
           
          
            
      </List>
      
    </Box>
  );

  return (
    <div className="">
      <div className="flex  justify-between  items-center w-[84%]  m-auto py-3  ">
        <div>
        <span style={{ float: "left"  , marginTop: "-5px" }}>
              <img src={logo} width="60px" heigh="60px" />
            </span>
        <span className=" font-bold bg-clip-text text-[26px] text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
          Hau's Garden
          </span>
        </div>

        <div className="flex gap-8">
          <React.Fragment key={"left"}>
          <button className="text-[24px]  a1" onClick={toggleDrawer("left", true)}> <ListIcon/> </button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
        </div>
        <div  className="w-[65%]"></div>
        <div  className="mr-[1%]">
            <div size="large" aria-label="account of current user" aria-controls="menu-appbar"  aria-haspopup="true"  className="a1 ">
    
              {dataNhanvien.length > 0 ? (
                <Button
                id="demo-positioned-button"
                aria-controls={opendx ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={opendx ? 'true' : undefined}
                onClick={handleClickdx}
                >
               {avt == "" ?
                <Avatar
                size="small"
                sx={{ bgcolor: green[500], width: 24, height: 24 }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <span style={{ fontSize: "14px" }}>
                  {dataNhanvien.map((aa) =>
                    aa.ten_nd.slice(
                      aa.ten_nd.lastIndexOf(" ") + 1,
                      aa.ten_nd.lastIndexOf(" ") + 2
                    )
                  )}
                </span>
              </Avatar>:
              <Avatar
              src={require("../../../imageuser/"+ avt )}
              sx={{ width: 30, height: 30,fontSize:"140px", bgcolor: green[500] }}/>}
                </Button>
              ) :(false)}
               <Menu                             sx={{marginTop: "40px"}}

        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEldx}
        open={opendx}
        onClose={handleClosedx}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
                <MenuItem onClick={handleClosedx}><Lin sx={{textDecoration: "none", color:"#333"}} to="/Manager/thongtincanhan">Thông tin cá nhân</Lin></MenuItem>

        <MenuItem onClick={handledx}><Link sx={{textDecoration: "none", color:"#333"}} href="/Manage">Đăng xuất</Link></MenuItem>

      </Menu>
       
            
            </div>
          
          </div>
        </div>  
    </div>
  );
}
