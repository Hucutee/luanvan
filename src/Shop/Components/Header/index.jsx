import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
import { connect } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green } from "@mui/material/colors";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#333",
  },
}));

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClickdn = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEldx, setAnchorEldx] = useState(false);
  const opendx = Boolean(anchorEldx);
  const handleClickdx = (event) => {
    setAnchorEldx(event.currentTarget);
  };
  const handleClosedx = () => {
    setAnchorEldx(null);
  };
  const handleDangxuat = (aa)=>{
    props.deleteUserRedux(aa);

    setAnchorEldx(null);
  }
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
            <Link className="a1" to="/app">
              Trang chủ
            </Link>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/products" className="a1">
              Sản phẩm
            </Link>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/products/carts" className="a1">
              Giỏ hàng
            </Link>
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
              <Link to="/products/carts">
              
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={props.carts.length} color="warning">
                <ShoppingCartIcon className="a1" />
              </StyledBadge>
            </IconButton> </Link>
          </Typography>
          <Typography>
            <div>
              {props.data.length ? (
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickdx}
                >
                  <Avatar
                    size="small"
                    sx={{ bgcolor: green[500], width: 24, height: 24 }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                  >
                    <span style={{ fontSize: "14px" }}>
                      {props.data.map((aa) =>
                        aa.name.slice(
                          aa.name.lastIndexOf(" ") + 1,
                          aa.name.lastIndexOf(" ") + 2
                        )
                      )}
                    </span>
                  </Avatar>
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
                  <Link to="/products/dangnhap">Thông tin cá nhân</Link>
                </MenuItem>
               {props.data.map((aa)=>( <MenuItem onClick={(e)=>handleDangxuat(aa)}>Đăng xuất</MenuItem>))}
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
                  <Link to="/products/dangnhap">Đăng nhập</Link>
                </MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.users,carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: (hauu) => dispatch({ type: "CREATE_USER", payload: hauu }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
