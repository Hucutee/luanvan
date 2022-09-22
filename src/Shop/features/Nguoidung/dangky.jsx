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
import { addtoUser, login } from "../../app/userSlice";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';

Dangky.propTypes={

};
 function Dangky() {
  const dataUser = useSelector((state) => state?.user?.userItem);
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
const [values, setValues] = React.useState({
    textmask: '',
  });

  const handleChangetext = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
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
      <Grid
        className="abc"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          marginTop="20px"
          height="630px"
          sx={{ borderRadius: "5px" }}
          width="30%"
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
               <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChangetext}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
     
    </Box>
            <Typography component="h1" variant="h7" sx={{marginTop:"30px"}}>
            <span className=" font-bold bg-clip-text text-[34px] 	 text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
          Đăng ký
          </span>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 0, padding: 2 }}>
            <TextField color="success"
                label="Họ và tên đệm"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50%", marginRight:"10%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />

               <TextField color="success"
                label="Tên"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "33%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />
               <TextField color="success"
                label="Giới tính"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "33%", marginRight:"10%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />
               <TextField color="success"
                label="Ngày sinh"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />
              <TextField color="success"
                label="Địa chỉ Email"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "95%" }}
                variant="standard"
                onChange={(e)=>handleChangetk(e.target.value)}
              />
              <TextField color="success"
                label="Số điện thoại"
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
              <FormControl color="success" sx={{ m: 1, width: "95%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Nhập lại mật khẩu
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
                Đăng ký
              </Button>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="$###########"
      definitions={{
        '#': /[0-9]/,
        '$': /[0]/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};






export default Dangky;