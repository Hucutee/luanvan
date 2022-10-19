import {Icon} from '@iconify/react';
import { Link, useSearchParams} from 'react-router-dom';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import {styled} from '@material-ui/core/styles';
import {Box, Container, Typography} from '@material-ui/core';
import { Paper } from '@mui/material';
import Button from "@mui/material/Button";


export default function Xacthuc() {
    const [searchParams] = useSearchParams();
    let email = searchParams.get('email');
    let forgot = searchParams.get('forgot');
    return (
        <div >
            <Box sx={{maxWidth: 600, mx: 'auto',p:2,pt:4,pb:4}}><Button variant="outlined" >{!!forgot ? <Link to="/products/dangnhap">Quay về</Link>:<Link to="/products/dangky">Quay về</Link>}</Button></Box>
            <Paper sx={{maxWidth: 600, mx: 'auto',p:5}}>
                <Box >
                    

                    <Typography variant="h4" paragraph>
                        Vui lòng kiểm tra email của bạn!
                    </Typography>
                    {!!forgot ? (<Typography sx={{color: 'text.secondary',marginTop:"10px",marginBottom:"10px"}}>
                        Yêu cầu quên mật khẩu đã được gửi về email:
                        <span style={{fontWeight: 'bold'}}> {email}. </span>Vui lòng kiểm tra email của bạn để cập nhật mật khẩu.
                    </Typography>) : <Typography sx={{color: 'text.secondary',marginTop:"10px",marginBottom:"10px",}}>
                        Bạn đã đăng ký tài khoản thành công, để có thể tiếp tục
                        mua sắm và trải nghiệm các dịch vụ của chúng tôi xin vui lòng xác thực email:
                        <span style={{fontWeight: 'bold'}}> {email} </span>của bạn.
                    </Typography>}
                     
                    <Button
                                            size="large"

                        fullWidth
                        variant="contained" 
                        style={{marginTop: "20px"}}
                        onClick={() => {
                            window.open("https://mail.google.com", "_blank");
                        }}
                    >
                        Mở email
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
