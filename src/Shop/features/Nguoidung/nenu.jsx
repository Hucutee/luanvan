import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";
import nguoidungApi from "../../../Manage/api/nguoidungApi";
import { propsToClassKey } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoUser, login, logout } from "../../app/userSlice";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


Menucanhan.propTypes={

};
 function Menucanhan() {

  const dataUser = useSelector((state) => state?.user?.userItem);


  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <Box>
        <Grid sx={{backgroundColor:"#f8f8f8" }}>
        <Grid sx={{
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "16px",  fontWeight: "500",}}
                >
                  <Grid sx={{margin:"20px"}}><Link to="/products/thongtincanhan">Thông tin</Link></Grid> 
                  <Grid sx={{margin:"10px"}}><Link to="/products/donhang">Đơn hàng</Link></Grid> 
                  <Grid sx={{margin:"20px"}}>Tích lũy</Grid> 
                  <Grid sx={{margin:"10px"}}>Đăng xuất</Grid> 

                </Grid>
        </Grid>
       
       
    </Box>
  );
}


export default Menucanhan;