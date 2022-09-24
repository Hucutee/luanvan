import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transitiondnn = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
Dangky.propTypes = {};
function Dangky() {
  const dataUser = useSelector((state) => state?.user?.userItem);
  const [count, setCount] = React.useState(0);
  const [trung, setTrung] = React.useState(0);

  const [trangthai, setTrangthai] = React.useState(0);
  const [matkhau, setMatkhau] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setMatkhau({ ...matkhau, showPassword: !matkhau.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [matkhau2, setMatkhau2] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword2 = () => {
    setMatkhau2({ ...matkhau2, showPassword: !matkhau2.showPassword });
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const handleChangemk = (prop) => (event) => {
    setMatkhau({ ...matkhau, [prop]: event.target.value }); setCount((e) => e + 1);
  };
  const handleChangemk2 = (prop) => (event) => {
    setMatkhau2({ ...matkhau2, [prop]: event.target.value });setCount((e) => e + 1);
  };
  const [sdt, setSdt] = React.useState({ textmask: "" });
  const handleChangesdt = (event) => {
    setSdt({ ...sdt, [event.target.name]: event.target.value }); setCount((e) => e + 1);
  };
  const [emaill, setEmaill] = React.useState({ textmask: "" });
  const handleChangeEmaill = async (event) => {
    setEmaill({ ...emaill, [event.target.name]: event.target.value });
    const dl=  await nguoidungApi.getemail(event.target.value);
    if(dl.length >0){ setTrung(1);}else { setTrung(0);}
    setCount((e) => e + 1);
  };
  const [ho, setHo] = React.useState({ textmask: "" });
  const handleChangeho = (event) => {
    setHo({ ...ho, [event.target.name]: event.target.value });setCount((e) => e + 1);
  };
  const [ten, setTen] = React.useState({ textmask: "" });
  const handleChangeten = (event) => {
    setTen({ ...ten, [event.target.name]: event.target.value });setCount((e) => e + 1);
  };
  const [gioitinh, setGioitinh] = React.useState("");
  const handleChangegioitinh = (a) => {
    setGioitinh(a);setCount((e) => e + 1);
  };
  const [ngaysinh, setNgaysinh] = React.useState(null);
  const handledangky = async () => {
    setTrangthai(1);
    if(ho.textmask != '' && ho.textmask.match(
      /^[a-zA-Z_ ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u)  
      && ten.textmask != '' && ten.textmask.match(
      /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u ) 
      && ngaysinh !=null && gioitinh != ""
      && matkhau.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
      && matkhau2.password == matkhau.password
      && emaill.textmask.length !=0 &&  emaill.textmask.match(/(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm) 
        &&  (sdt.textmask.length <= 12 && sdt.textmask.length > 9) && sdt.textmask.match(/[a-zA-Z1-9]+$/) ){
      const dl = await nguoidungApi.getemail(emaill.textmask);
      if(dl.length == 0){
        await nguoidungApi.add(ho.textmask +" "+ten.textmask,gioitinh,ngaysinh.$y + "-" + (ngaysinh.$M + 1) + "-" + ngaysinh.$D,emaill.textmask,sdt.textmask,matkhau.password);
      setOpendnn(true);
      } else {
        console.log("aaaaaaaa");
      }

    }
  }
  useEffect(() => {
    (async () => {
      try {
        console.log(ho.textmask,ten.textmask,gioitinh,sdt.textmask,ngaysinh,emaill.textmask,matkhau.password);

      } catch (error) {
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
          height: "auto"
        }}
      >
        <Grid
          marginTop="20px"
          sx={{ borderRadius: "5px" }}
          width="35%"
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
              mx: 2,
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
              <FormControl
                variant="outlined"
                sx={{ m: 1, width: "55%", marginRight: "5%" }}
              >
                <InputLabel
                  color="success"
                  htmlFor="outlined-weight-helper-text"
                >
                  Họ và tên đệm
                </InputLabel>
                <OutlinedInput
                  color="success"
                  value={ho.textmask}
                  onChange={handleChangeho}
                  name="textmask"
                  id="outlined-weight-helper-text"
                  label="Họ vàn tên đệm"
                />
                {trangthai && ho.textmask.length == 0 ? (
                  <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                  Họ và tên đệm không được để trống
                </FormHelperText>
                ):(
                  ho.textmask.match(
                    /^[a-zA-Z_ ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéẾếêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u
                  ) || ho.textmask.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Họ và tên đệm chỉ gồm chữ cái và khoảng trắng
                    </FormHelperText>
                  )
                )}
              </FormControl>

              <FormControl variant="outlined" sx={{ m: 1, width: "33%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Tên
                </InputLabel>
                <OutlinedInput
                  color="success"
                  value={ten.textmask}
                  onChange={handleChangeten}
                  name="textmask"                   label="ten"

                  id="formatted-text-mask-input"
                />
                {trangthai && ten.textmask.length == 0 ?(
                  <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                  Tên không được để trống
                </FormHelperText>
                ):(
                  ten.textmask.match(
                    /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêéẾìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u
                  ) || ten.textmask.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Tên chỉ gồm chữ cái
                    </FormHelperText>
                  )
                )}
              </FormControl>
              <Grid sx={{ padding: 1 }}>
                <FormControl
                  variant="outlined"
                  color="success"
                  sx={{ width: "35%", marginRight: "8.5%", float: "left" ,marginBottom: 1}}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Giới tính
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Giới tính"
                    onChange={(e)=> handleChangegioitinh(e.target.value)}
                  >
                    <MenuItem value="Nam">Nam</MenuItem>
                    <MenuItem value="Nữ">Nữ</MenuItem>
                  </Select>
                  {trangthai && gioitinh == "" ? (<FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Giới tính không được để trống
                    </FormHelperText>):(<></>)}
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}  sx={{ m: 1   }}>
                  <div style={{ m: 1,  float: "left" }}>
                    <DatePicker 
                      maxDate={dayjs()}
                      inputFormat="YYYY-MM-DD"
                      mask="____-__-__"
                      label="Ngày sinh"
                      value={ngaysinh}
                      onChange={(newValue) => {
                        setNgaysinh(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    {trangthai && ngaysinh == null ? (<FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Ngày sinh không được để trống
                    </FormHelperText>):(<></>)}
                  </div>
                </LocalizationProvider>
              </Grid>
              <FormControl variant="outlined" sx={{ m: 1, width: "95%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Địa chỉ email
                </InputLabel>
                <OutlinedInput
                  color="success"
                  value={emaill.textmask}
                  onChange={handleChangeEmaill}
                  name="textmask"                   label="                  Địa chỉ email"
                  id="formatted-text-mask-input" 
                />
                {trung ? (<FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Email này đã được đăng kí - vui lòng nhập email khác.
                    </FormHelperText>):(trangthai && emaill.textmask.length == 0 ? (
                   <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                   Email không được để trống
                 </FormHelperText>
                ):(
                  emaill.textmask.match(
                    /(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm
                  ) || emaill.textmask.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Email phải có dạng x@xx.xx
                    </FormHelperText>
                  )
                ))}
              </FormControl>
              <FormControl variant="outlined" sx={{ m: 1, width: "95%" }}>
                <InputLabel color="success" htmlFor="formatted-text-mask-input">
                  Số điện thoại
                </InputLabel>
                <OutlinedInput
                  color="success"
                  value={sdt.textmask}
                  onChange={handleChangesdt}
                  name="textmask" label="so dien thoai"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
                {trangthai && sdt.textmask.length == 0 ? (
                  <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                  Số điện thoại không được để trống
                </FormHelperText>
                ):(
                  (sdt.textmask.length < 10 && sdt.textmask.length > 0) ||
                  sdt.textmask.match(/^[^a-zA-Z1-9]+$/) ? (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Số điện thoại gồm 10 đến 12 chữ số
                    </FormHelperText>
                  ) : (
                    <></>
                  )
                )}
              </FormControl>
              <FormControl
                color="success"
                sx={{ m: 1, width: "95%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput label="mat khau"
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

                {trangthai && matkhau.password.length == 0 ?(
                   <FormHelperText error id="component-error-text">
                   Mật khẩu không được để trống
                 </FormHelperText>
                ):(
                  matkhau.password.match(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                  ) || matkhau.password.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text">
                      Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái và 1 số và không
                      chứa kí tự đặc biệt
                    </FormHelperText>
                  )
                )}
              </FormControl>
              <FormControl
                color="success"
                sx={{ m: 1, width: "95%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="standard-adornment-password"  sx={{ m: 0}}>
                  Nhập lại mật khẩu
                </InputLabel>
                <OutlinedInput label="nhap lai mat khau"
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
                {trangthai && matkhau2.password.length == 0 ? (
                  <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                  Mật khẩu nhập lại không được để trống
                </FormHelperText>
                ):(
                  matkhau.password != matkhau2.password && matkhau2.password.length >0 ? (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                      Hai trường mật khẩu không giống nhau
                    </FormHelperText>
                  ) : (
                    <></>
                  )
                )}
              </FormControl>
              <Button
                color="success"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 1, height: "40px" }} onClick={handledangky}
              >
                Đăng ký
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Dialog
        open={opendnn}
        TransitionComponent={Transitiondnn}
        keepMounted
        onClose={handleClosednn} 
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Đăng ký tài khoản thành công"}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description" >
            Bạn đã có tài khoản. Hãy đăng nhập đễ xem thông tin cá nhân  và trải nghiệm các dịch vụ của chúng tôi nhé!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success"><Link  to="/products/dangnhap">Đăng nhập</Link></Button>
        </DialogActions>
      </Dialog>
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
