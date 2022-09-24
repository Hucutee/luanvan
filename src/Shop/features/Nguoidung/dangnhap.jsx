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
import { Link, useNavigate } from "react-router-dom";
import { addtoUser, login } from "../../app/userSlice";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ConstructionOutlined } from "@mui/icons-material";
const Transitiondnn = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
Dangnhap.propTypes={

};
 function Dangnhap() {
  const dataquaylai = useSelector((state) => state?.quaylai?.quaylaiItem);


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
      if(dl.length > 0) {setOpendnn(true);}
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
  const [opendnn, setOpendnn] = React.useState(false);

  const handleClickOpendnn = () => {
    setOpendnn(true);
  };

  const handleClosednn = () => {
    setOpendnn(false);
  };
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
                  <Link to="" style={{textDecoration:"none", color:"#333"}}  variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={{textDecoration:"none", color:"#333"}} to="" variant="body2">
                    {"Bạn chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Dialog
        open={opendnn}
        TransitionComponent={Transitiondnn}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Đăng nhập thành công"}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description" >
           Bạn đã đăng nhập thành công vào tài khoản của mình!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        {dataquaylai.length >0 ? <Button variant="contained" color="success" onClose={handleClosednn}  ><Link  to={`${dataquaylai[0].link}`}>Quay lại mua hàng</Link></Button> : <></>}

          <Button variant="contained" color="success"><Link  to="/products/thongtincanhan" >Thông tin cá nhân</Link></Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


export default Dangnhap;