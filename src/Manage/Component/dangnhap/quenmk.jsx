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
import {useNavigate} from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

export default function Quenmknv() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [taikhoan,setTaikhoan]= React.useState("");
    const [email, setEmail] = React.useState({ textmask: "" });
  const handleChangeemail = async (event) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
   
  };
    const handleChangetk = (value) => {
        setTaikhoan(value);
    }
    const handlequen = async ()=>{
      if( email.textmask.match(
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
       )){
        await nguoidungApi.quenmknv( email.textmask);
        navigate(`/authnv/verify?email=${ email.textmask}&&forgot=true`);
      }
    }
    return (
        <div >
            <Box sx={{maxWidth: 600, mx: 'auto',p:2,pt:4,pb:4}}><Button variant="outlined" ><Link to="/Manager/thongtincanhan">Quay về</Link></Button></Box>
            <Paper sx={{maxWidth: 600, mx: 'auto',p:5}}>
                <Box >
                    

                    <Typography variant="h4" paragraph>
                        Vui lòng nhập email của bạn!
                    </Typography>
                    <FormControl variant="outlined" sx={{ m: 1, width: "95%" }}>
                <InputLabel  htmlFor="formatted-text-mask-input">
                  Email
                </InputLabel>
                <OutlinedInput
                  value={email.textmask}
                  onChange={handleChangeemail}
                  name="textmask"                   label=" email"
                  id="formatted-text-mask-input" 
                />
                {
                  email.textmask.match(
                    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
                   ) || email.textmask.length == 0 ? (
                    <></>
                  ) : (
                    <FormHelperText error id="component-error-text"  sx={{ m: 0}}>
                    Email không đúng định dạng
                    </FormHelperText>
                  )
                }
              </FormControl>
                    <Button
                                            size="large"

                        fullWidth
                        variant="contained" 
                        style={{marginTop: "20px"}}
                        onClick={handlequen
                        }
                    >
                        Quên mật khẩu
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
