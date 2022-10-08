import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Link as Lin, Routes } from "react-router-dom";
import Link  from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";
import logo from "./logo.jpg";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListPage from "../../features/Product/page2";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/userSlice";
import { removeAllCart } from "../../app/cartSlide";
import { removeAllCarttt } from "../../app/cartthanhtoan";
import nguoidungApi from "../../../Manage/api/nguoidungApi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#333",
  },
}));

function Header() {
  const dataCart = useSelector((state) => state?.cart?.cartItem);
  const dataUser = useSelector((state) => state?.user?.current);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClickdn = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [avt,setAvt]= React.useState("");

  const [anchorEldx, setAnchorEldx] = useState(false);
  const opendx = Boolean(anchorEldx);
  const handleClickdx = (event) => {
    setAnchorEldx(event.currentTarget);

  };
  const handleClosedx = () => {
    setAnchorEldx(null);
  };
  const handledx = ()=>{
    
    dispatch(logout());
    dispatch(removeAllCart());    dispatch(removeAllCarttt());


  }
  useEffect(() => {
    (async () => {
      try {
        const avt = await nguoidungApi.getavt(dataUser[0].ma_nd); if(avt.length != 0) {setAvt(avt[0].ten_avt);}
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, []);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#fff" }}
        style={{ margin: "auto", width: "80%", height: "80px" }}
      >
        <Toolbar sx={{ marginTop: "10px" }}>
          <Typography
            variant="h7"
            component="div"
            sx={{ flexGrow: 1, width: "20%" }}
          >
            <span style={{ float: "left", marginTop: "-5px" }}>
              <img src={logo} width="60px" heigh="60px" />
            </span>
            <span className=" font-bold bg-clip-text text-[24px] 	 text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
              Hau's Garden
            </span>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Lin className="a1" to="/app">
              Trang chủ
            </Lin>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Lin to="/products" className="a1">
              Sản phẩm
            </Lin>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Lin to="/products/carts" className="a1">
              Ưu đãi
            </Lin>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <div className="a1"> </div>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <div className="a1"> </div>
          </Typography>

          <Typography
            variant="h7"
            component="div"
            sx={{ width: "5%", marginLeft: "15px" }}
          >
              <Lin to="/products/carts">
              
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={dataCart.length} color="warning">
                <ShoppingCartIcon className="a1" />
              </StyledBadge>
            </IconButton> </Lin>
          </Typography>
          <Typography>
            <div>
              {dataUser.length > 0 ? (
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined} onClick={handleClickdx}
                >
               {avt == "" ?
                <Avatar
                size="small"
                sx={{ bgcolor: green[500], width: 24, height: 24 }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <span style={{ fontSize: "14px" }}>
                  {dataUser.map((aa) =>
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
              ) : (
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickdn}
                >
                  <AccountCircleIcon className="a1" />
                </Button>
              )}
              <Menu
                            sx={{marginTop: "40px"}}

                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEldx}
                open={opendx}
                onClose={handleClosedx}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClosedx}>
                  <Lin to="/products/thongtincanhan">Thông tin cá nhân</Lin>

                </MenuItem>
                <MenuItem onClick={handleClosedx}>                  <Lin to="/products/donhang">Đơn hàng</Lin></MenuItem>
                <MenuItem onClick={handledx}>   <Link sx={{textDecoration: "none", color:"#333"}} href="/app">Đăng xuất</Link></MenuItem>
              </Menu>
              <Menu
              sx={{marginTop: "40px"}}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Lin to="/products/dangnhap">Đăng nhập</Lin>
                  

                </MenuItem>
                <MenuItem onClick={handleClose}><Lin to="/products/dangky">Đăng ký</Lin></MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
