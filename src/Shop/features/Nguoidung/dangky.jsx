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
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import NumberFormat from "react-number-format";

Dangky.propTypes = {};
function Dangky() {
  const dataUser = useSelector((state) => state?.user?.userItem);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [count, setCount] = React.useState(0);
  const [trangthai, setTrangthai] = React.useState(0);
  const [matkhau, setMatkhau] = React.useState({  password: "",  showPassword: false, });
  const handleClickShowPassword = () => { setMatkhau({   ...matkhau,   showPassword: !matkhau.showPassword,  }); };
  const handleMouseDownPassword = (event) => {  event.preventDefault(); };
  const [matkhau2, setMatkhau2] = React.useState({  password: "",  showPassword: false, });
  const handleClickShowPassword2 = () => {  setMatkhau2({   ...matkhau2,   showPassword: !matkhau2.showPassword,  }); };
  const handleMouseDownPassword2 = (event) => {  event.preventDefault(); };
  const handleChangemk = (prop) => (event) => {  setMatkhau({ ...matkhau, [prop]: event.target.value }); };
  const handleChangemk2 = (prop) => (event) => {  setMatkhau2({ ...matkhau2, [prop]: event.target.value });};
  const [sdt, setSdt] = React.useState({ textmask: "", });
  const handleChangesdt = (event) => {
    setSdt({  ...sdt,  [event.target.name]: event.target.value, });
  };
  const [emaill, setEmaill] = React.useState({ textmask: "", });
  const handleChangeEmaill = (event) => { setEmaill({  ...emaill,  [event.target.name]: event.target.value, });
 };
 const [ho, setHo] = React.useState({ textmask: "", });
 const handleChangeho = (event) => { setHo({  ...ho,  [event.target.name]: event.target.value, }); };
 const [ten, setTen] = React.useState({ textmask: "", });
 const handleChangeten = (event) => { setTen({  ...ten,  [event.target.name]: event.target.value, }); };
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
                "& > :not(style)": {
                  m: 1,
                },
              }}
            ></Box>
            <Typography component="h1" variant="h7" sx={{ marginTop: "30px" }}>
              <span className=" font-bold bg-clip-text text-[34px] 	 text-transparent bg-gradient-to-r from-green-900 to-green-500 ">
                Đăng ký
              </span>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 0, padding: 2 }}>
            <FormControl variant="standard" sx={{ m: 1, width: "95%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Địa chỉ email
                </InputLabel>
                <Input
                  color="success"
                  value={ho.textmask}
                  onChange={handleChangeho}
                  name="textmask"
                  id="formatted-text-mask-input"
                />
                {ho.textmask.match(/^[a-zA-Z_ ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u )|| ho.textmask.length == 0 ? (<></>
                
                ) : (
                  <FormHelperText error id="component-error-text">
                  Email phải có dạng xxx@xxx.xxx
                  </FormHelperText>
                )}
              </FormControl>
              <TextField
                color="success"
                label="Họ và tên đệm"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50%", marginRight: "10%" }}
                variant="standard"
                onChange={(e) => handleChangeho(e.target.value)}
              />

              <TextField
                color="success"
                label="Tên"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "33%" }}
                variant="standard"
                onChange={(e) => handleChangeho(e.target.value)}
              />
              <TextField
                color="success"
                label="Giới tính"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "33%", marginRight: "10%" }}
                variant="standard"
                onChange={(e) => handleChangeho(e.target.value)}
              />
              <TextField
                color="success"
                label="Ngày sinh"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50%" }}
                variant="standard"
                onChange={(e) => handleChangeho(e.target.value)}
              />
              <FormControl variant="standard" sx={{ m: 1, width: "95%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Địa chỉ email
                </InputLabel>
                <Input
                  color="success"
                  value={emaill.textmask}
                  onChange={handleChangeEmaill}
                  name="textmask"
                  id="formatted-text-mask-input"
                />
                {emaill.textmask.match(/(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/mg)|| emaill.textmask.length == 0 ? (<></>
                
                ) : (
                  <FormHelperText error id="component-error-text">
                  Email phải có dạng xxx@xxx.xxx
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, width: "95%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Số điện thoại
                </InputLabel>
                <Input
                  color="success"
                  value={sdt.textmask}
                  onChange={handleChangesdt}
                  name="textmask"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
                {(sdt.textmask.length < 10 && sdt.textmask.length > 0) ||
                sdt.textmask.match(/^[^a-zA-Z1-9]+$/) ? (
                  <FormHelperText error id="component-error-text">
                    Số điện thoại gồm 10 chữ số
                  </FormHelperText>
                ) : (
                  <></>
                )}
              </FormControl>
              <FormControl
                color="success"
                sx={{ m: 1, width: "95%" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau.showPassword ? "text" : "password"}
                  value={matkhau.password}
                  onChange={handleChangemk("password")}
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

{matkhau.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)  ? (
                 <></>
                ) : (
                   <FormHelperText error id="component-error-text">
                  Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái và 1 số và không có kí tự đặc biệt
              </FormHelperText>
                )}
              </FormControl>
              <FormControl
                color="success"
                sx={{ m: 1, width: "95%" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Nhập lại mật khẩu
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={matkhau2.showPassword ? "text" : "password"}
                  value={matkhau2.password}
                  onChange={handleChangemk2("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                      >
                        {matkhau2.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                 {(matkhau.password != matkhau2.password)  ? (
                  <FormHelperText error id="component-error-text">
                      Hai trường mật khẩu không giống nhau
                  </FormHelperText>
                ) : (
                  <></>
                )}
              </FormControl>
              <Button
                color="success"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 4, height: "40px" }}
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
        "#": /[0-9]/,
        $: /[0]/,
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
