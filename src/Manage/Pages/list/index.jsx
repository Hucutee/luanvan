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
import { useNavigate } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CommentIcon from '@mui/icons-material/Comment';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
export default function Listmanager() {
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
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if(dataNhanvien.length==0){
          navigate("/Manage");
        }
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
      
      
    </Box>
  );

  return (
    <div className="">
     {dataNhanvien.length >0 ? 
      <div className=" ">
      <List>
      {dataNhanvien[0].quyen == 2  ?<span>
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <StackedBarChartIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/thongke" className="">
        Thống kê
      </Lin></ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <PeopleAltIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/nhanvien" className="">
        Nhân viên
      </Lin></ListItemText>
      </ListItemButton>
      <Divider/>
  </span>:false} 
{dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 3 || dataNhanvien[0].quyen == 4 ?<span>
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <AutoAwesomeMotionIcon />}
        </ListItemIcon>
        <ListItemText > <Lin onClick={toggleDrawer("left", false)} to="/Manager/loaisanpham" className="">
        Loại sản phẩm
      </Lin></ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <StraightenIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/kichthuoc" className="">
        Kích thước
      </Lin></ListItemText>
      </ListItemButton>
    <ListItemButton sx={{ pl: 3 }} >
        <ListItemIcon >
          {"A" % 2 === 0 ? <InboxIcon /> : <YardIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/sanpham" className="">
        Sản phẩm
      </Lin></ListItemText>
      </ListItemButton>
      <Divider/> 
  </span>:false}

{dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 3 ?<span>
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <StoreIcon />}
        </ListItemIcon>
        <ListItemText  ><Lin  onClick={toggleDrawer("left", false)} to="/Manager/nhacungcap" className="">
        Nhà cung cấp
      </Lin> </ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <ReceiptIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/hoadonnhap" className="">
        Hóa đơn nhập
      </Lin></ListItemText>
      </ListItemButton>
      <Divider/> 

</span>:false}

{dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 4 ?<span>
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <ShoppingBasketIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/donhang" className="">
        Đơn hàng
      </Lin></ListItemText>
      </ListItemButton>
      <Divider/>
  </span>:false} 
{dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 5 ?<span>
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <AccountBalanceWalletIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/phieugiamgia" className="">
        Phiếu giảm giá
      </Lin></ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <PercentIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/khuyenmai" className="">
        Khuyến mãi
      </Lin></ListItemText>
      </ListItemButton>
 <Divider/>
</span>:false}  
{dataNhanvien[0].quyen == 2 || dataNhanvien[0].quyen == 5 ?<span> 
  <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <CommentIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/repbl" className="">
        Bình luận
      </Lin></ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ pl: 3 }}>
        <ListItemIcon>
          {"A" % 2 === 0 ? <InboxIcon /> : <CommentIcon />}
        </ListItemIcon>
        <ListItemText > <Lin  onClick={toggleDrawer("left", false)} to="/Manager/repdg" className="">
        Đánh giá
      </Lin></ListItemText>
      </ListItemButton>
</span>:false} 
     
    
      
</List>

       
        
        </div> :false} 
    </div>
  );
}
