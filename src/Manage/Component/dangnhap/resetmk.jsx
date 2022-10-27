import {Icon} from '@iconify/react';
import { Link, useSearchParams} from 'react-router-dom';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import {styled} from '@material-ui/core/styles';
import {Box, Container, Typography} from '@material-ui/core';
import { Paper } from '@mui/material';
import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";
import nguoidungApi from '../../../Manage/api/nguoidungApi';
import {useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
export default function Resetmknv() {
    const navigate = useNavigate();
    const {token} = useParams();
    const [trangthai, setTrangthai] = React.useState(0);

    const [searchParams] = useSearchParams();
    const [taikhoan,setTaikhoan]= React.useState("");
    const handleChangetk = (value) => {
        setTaikhoan(value);
    }
    const handlesua = async ()=>{
        setTrangthai(1);        
        if( matkhau.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
        && matkhau2.password == matkhau.password){
            await nguoidungApi.resetpassnv(token,matkhau.password);
            navigate(`/Manager/thongtincanhan`);
        }
    }
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
        setMatkhau({ ...matkhau, [prop]: event.target.value });
      };
      const handleChangemk2 = (prop) => (event) => {
        setMatkhau2({ ...matkhau2, [prop]: event.target.value });
      };
 
    return (
        <div >
            <Box sx={{maxWidth: 600, mx: 'auto',p:2,pt:4,pb:4}}><Button variant="outlined" ><Link to="/Manager/thongtincanhan">Quay về</Link></Button></Box>
            <Paper sx={{maxWidth: 600, mx: 'auto',p:5}}>
                <Box >
                    

                    <Typography variant="h4" paragraph>
                        Vui lòng nhập mật khẩu mới!
                    </Typography>
                 
               <FormControl
                sx={{ m: 1, width: "95%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Mật khẩu mới
                </InputLabel>
                <OutlinedInput label="mat khau moi"
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
                   Mật khẩu mới không được để trống
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
                sx={{ m: 1, width: "95%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="standard-adornment-password"  sx={{ m: 0}}>
                  Nhập lại mật khẩu mới
                </InputLabel>
                <OutlinedInput label="nhap lai mat khau moi"
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
                                            size="large"

                        fullWidth
                        variant="contained" 
                        style={{marginTop: "20px"}}
                        onClick={handlesua
                        }
                    >
                        Thay đổi
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
