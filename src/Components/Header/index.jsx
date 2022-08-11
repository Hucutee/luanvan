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
  return (
    <Box sx={{ flexGrow: 1, mb: 2, mt: 2 }}>
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
            sx={{ flexGrow: 1, width: "20%" }}
          >
            <div style={{ float: "left" }}>
              <img src={logo} width="70px" heigh="70px" />
            </div>
            <div className="ten">Hau's Garden</div>
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

          <Button>
            {" "}
            <AccountCircleIcon className="a1" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
