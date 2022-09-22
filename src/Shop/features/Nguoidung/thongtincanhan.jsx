import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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

Thongtincanhan.propTypes={

};
 function Thongtincanhan() {
  
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

  const [matkhau, setMatkhau] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
const handleChangetk = (value) => {
    setEmail(value);
}
  const handleChange = (prop) => (event) => {
    setMatkhau({ ...matkhau, [prop]: event.target.value }); console.log(event.target.value);
  };
  const handledangnhap= async () => {

    if(email && matkhau.password){
      console.log(email,matkhau.password);
      dispatch(login({email: email,mat_khau: matkhau.password}));

      const dl = await nguoidungApi.checkdn(email,matkhau.password);
      
    }
    setCount((e)=> e + 1);
  }
  const handleClickShowPassword = () => {
    setMatkhau({
      ...matkhau,
      showPassword: !matkhau.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlethem = (hau) => {
    console.log(hau);
}
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
        <div>aa</div>
    </Box>
  );
}


export default Thongtincanhan;