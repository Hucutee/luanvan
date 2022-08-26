import * as React from "react";
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
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Register from "../../features/Auth/components/Register";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eeeeee",
  "&:hover": { backgroundColor: "#cccccc" },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#333",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#333",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": { width: "20ch" },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#333",
  },
}));

export default function Header() {
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#fff" }}
        style={{ margin: "auto", width: "75%" , height: "80px" }}
      >
        <Toolbar sx={{marginTop: "10px"}}>
          <Typography
            variant="h7"
            component="div"
            sx={{ flexGrow: 1, width: "20%"  }}
          >
            <span style={{ float: "left"  , marginTop: "-5px" }}>
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
            <Link to="/products" className="a1">
              Khuyến mãi
            </Link>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <div className="a1"> </div>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <div className="a1"> </div>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Typography
            variant="h7"
            component="div"
            sx={{ width: "5%", marginLeft: "15px" }}
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={1} color="warning">
                <ShoppingCartIcon className="a1" />
              </StyledBadge>
            </IconButton>
          </Typography>

          <Typography
            variant="h7"
            component="div"
            sx={{ flexGrow: 1, marginTop: "10px", marginLeft: "20px" }}
          >
            <Typography
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              className="a1"
            >
              <AccountCircle />
            </Typography>
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
              <MenuItem onClick={handleClickOpen}>Đăng nhập</MenuItem>
            </Menu>
          </Typography>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose} fullScreen>
        <AppBar
          elevation={0}
          position="static"
          sx={{ backgroundColor: "#fff" }}
          style={{ margin: "auto", width: "75%" }}
        >
          <Toolbar>
            <Typography
              variant="h7"
              component="div"
              sx={{ flexGrow: 1, width: "23%" }}
            >
              <div style={{ float: "left" }}>
                <img src={logo} width="70px" heigh="70px" />
              </div>
              <div className="ten" style={{ fontSize: "24px" }}>
                Hau's Garden
              </div>
            </Typography>
            <Typography
              variant="h7"
              component="div"
              sx={{ flexGrow: 1, width: "68%", marginTop: "8px" }}
            >
              <Typography
                className="a1"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                Đăng nhập
              </Typography>
            </Typography>
            <Typography
              variant="h7"
              component="div"
              sx={{ flexGrow: 1, width: "15%", marginTop: "12px" }}
            >
              <Typography
                className="a1"
                style={{ fontSize: "16px", fontWeight: "400" }}
                onClick={handleCloseForm}
              >
                Quay lại trang trước
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent style={{ padding: "10px 0px 0px 0px" }}>
          <Register />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
