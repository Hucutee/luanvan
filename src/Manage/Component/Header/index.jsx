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
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StoreIcon />}
              </ListItemIcon>
              <ListItemText  ><Link to="/Manager/nhacungcap" className="">
              Nhà cung cấp
            </Link> </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StraightenIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/kichthuoc" className="">
              Kích thước
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <AutoAwesomeMotionIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/loaisanpham" className="">
              Loại sản phẩm
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <AccountBalanceWalletIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/phieugiamgia" className="">
              Phiếu giảm giá
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <LocalAtmIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/khuyenmai" className="">
              Khuyến mãi
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <YardIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/sanpham" className="">
              Sản phẩm
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <StorageIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/chitietsanpham" className="">
              Chi tiết sản phẩm
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <YardIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/hoadonnhap" className="">
              Hóa đơn nhập
            </Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                {"A" % 2 === 0 ? <InboxIcon /> : <YardIcon />}
              </ListItemIcon>
              <ListItemText > <Link to="/Manager/chitiethoadonnhap" className="">
              Chi tiết hóa đơn nhập
            </Link></ListItemText>
            </ListItemButton>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
            <div size="large" aria-label="account of current user" aria-controls="menu-appbar"  aria-haspopup="true" onClick={handleMenu} className="a1 ">
              <AccountCircle />
            </div>
            <Menu
              style={{ marginTop: "30px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClickOpen}>Thông tin tin cá nhân</MenuItem>
              <MenuItem onClick={handleClickOpen}>Đăng nhập</MenuItem>

            </Menu>
          </div>
        </div>  
    </div>
  );
}
