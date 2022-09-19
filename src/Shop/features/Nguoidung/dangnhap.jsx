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
import {connect} from 'react-redux';
import { propsToClassKey } from "@mui/styles";

Dangnhap.propTypes={

};
 function Dangnhap(props) {
 

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
      const dl = await nguoidungApi.checkdn(email,matkhau.password);
      console.log(dl[0].ma_nd);
      if(dl.length >0){
        props.addUserRedux({id: dl[0].ma_nd, name: dl[0].ten_nd});
      }
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
        
          
        console.log(props.data);
        
        
       
      } catch (error) {
        console.log("loi", error);
      }             

    })();
  }, [count]);
  return (
    <Box>
      <Grid
        className="abc"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          marginTop="50px"
          height="500px"
          sx={{ borderRadius: "5px" }}
          width="27%"
          item
          xs={10}
          sm={8}
          md={5}
          component={Paper}
          elevation={10}
          square
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 2, mt: 4, bgcolor: "#339900" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h7">
            <span className=" font-bold bg-clip-text text-[38px] 	 text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
          Đăng nhập
          </span>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, padding: 2 }}>
              <TextField color="success"
                label="Địa chỉ Email"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "95%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau.showPassword ? "text" : "password"}
                  value={matkhau.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {matkhau.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              
              <Button
                 color="success"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 4,height:"40px" }}
                onClick={handledangnhap}
              >
                Đăng Nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" style={{textDecoration:"none", color:"#333"}}  variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={{textDecoration:"none", color:"#333"}} href="#" variant="body2">
                    {"Bạn chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return { 
      data: state.users 
     }
 }
const mapDispatchToProps = (dispatch) => {
  return{
      deleteUserRedux: (userDelete) =>  dispatch({type: 'DELETE_USER',payload: userDelete}),
      addUserRedux: (hauu) =>  dispatch({type: 'CREATE_USER',payload: hauu}),

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dangnhap);