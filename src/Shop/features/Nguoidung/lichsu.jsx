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
import { makeStyles } from "@mui/styles";
import Menucanhan from "./nenu";


Lichsu.propTypes={

};
 function Lichsu() {

  const dataUser = useSelector((state) => state?.user?.userItem);
  const handledx = ()=>{
    dispatch(logout());
setCount((e) => e + 1);
  }

  const dispatch = useDispatch();
  const navigation = useNavigate();

const [email,setEmail]= React.useState("");
const [count,setCount]= React.useState(0);
const [data,setData]= React.useState([]);
const [trangthai,setTrangthai]= React.useState(0);

  useEffect(() => {
    (async () => {
      try {
        
          
        
        
       
      } catch (error) {
        console.log("loi", error);
      }             

    })();
  }, [count]);
  return (
    <Box>
        <div
        role="presentation" style={{ borderTop: "1px solid #ededed",  borderBottom: "1px solid #ededed",  marginBottom: "40px", }}
      >
        <Breadcrumbs id="123"
          separator="&ensp; › &ensp; " aria-label="breadcrumb" style={{ marginLeft: "13%", fontSize: "13px", lineHeight: "40px" }}
        >
          <Link underline="hover" color="inherit" to="/app">
            {" "} Trang chủ{" "}
          </Link>
          <Link to="#" underline="hover"  value="1" >
            {" "}  Tài khoản{" "}
          </Link>
          <Link to="#" underline="hover" style={{color:"#339900"}} value="1" >
            {" "}  Lịch sử mua hàng{" "}
          </Link>
        </Breadcrumbs>
      </div>
      <Grid className="w-[74%] mx-[13%] ">
        <Grid sx={{width:"20%", float:"left" }}>
        <Menucanhan/>
        </Grid>
        <Grid sx={{width:"80%", float:"left"}}></Grid>
        </Grid>
    </Box>
  );
}


export default Lichsu;