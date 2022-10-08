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
import { propsToClassKey } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { green, pink } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import nguoidungApi from "../../api/nguoidungApi";

Thongtinnhanvien.propTypes = {};
function Thongtinnhanvien() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [file, setFile] = React.useState();
  const send = async () => {
    setLoadding(true);
    const data = new FormData();
    data.append("file", file);
    console.log(file);
    data.append("mand", dataNhanvien[0].ma_nd);
    await nguoidungApi.uploadnv(data);
    setCount((e) => e + 1);
    setLoadding(false);
  };
  const [count, setCount] = React.useState(0);
  const [datand, setDatand] = React.useState([]);
  const [avt, setAvt] = React.useState("");
  const [loadding, setLoadding] = React.useState(false);
  const [openha, setOpenha] = React.useState(false);

  const handleClickOpenha = () => {
    setOpenha(true);
  };

  const handleCloseha = () => {
    setOpenha(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const avt = await nguoidungApi.getavtnv(dataNhanvien[0].ma_nd);
        if (avt.length != 0) {
          setAvt(avt[0].ten_avt);
        }
        const nd = await nguoidungApi.getttnd(dataNhanvien[0].ma_nd);
        setDatand(nd);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);
  return (
    <Box>
      <div
        role="presentation"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
          marginBottom: "40px",
        }}
      >
        <Breadcrumbs
          id="123"
          separator="&ensp; › &ensp; "
          aria-label="breadcrumb"
          style={{ marginLeft: "10%", fontSize: "13px", lineHeight: "46px" }}
        >
          <Link underline="hover" color="inherit" to="#">
            {" "}
            Quản lý{" "}
          </Link>
         
          <Link to="#" underline="hover" style={{ color: "#339900" }} value="1">
            {" "}
            Thông tin cá nhân{" "}
          </Link>
        </Breadcrumbs>
      </div>
      <Grid className="w-[74%] mx-[13%] ">
        
        <Grid>
          {datand.map((nd) => (
            <div>
              <div style={{ width: "45%", float: "left" }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "auto",
                  }}
                >
                  {avt == "" ? (
                    <Avatar
                      sx={{
                        width: 250,
                        height: 250,
                        fontSize: "140px",
                        bgcolor: green[500],
                      }}
                    >
                      {nd.ten_nd.slice(
                        nd.ten_nd.lastIndexOf(" ") + 1,
                        nd.ten_nd.lastIndexOf(" ") + 2
                      )}
                    </Avatar>
                  ) : (
                    <Avatar
                      src={require("../../../imageuser/" + avt)}
                      sx={{
                        width: 250,
                        height: 250,
                        fontSize: "140px",
                        bgcolor: green[500],
                      }}
                    />
                  )}
                </Stack>
                <div
                  id="nested-list-subheader"
                  style={{
                    fontSize: "20px",
                    color: "#333",
                    fontWeight: "500",
                    padding: 7,
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "auto",
                  }}
                >
                  {" "}
                  Ảnh đại diện (<span onClick={handleClickOpenha} ><ModeEditIcon     className="a1"             sx={{ width: 16, height: 16 }}
/></span>){" "}
                </div>
                <div>
                   
                    <Dialog color="success"
                      open={openha}
                      onClose={handleCloseha}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Thay đổi ảnh đại diện"}
                      </DialogTitle>
                      <DialogContent color="success">
                        <DialogContentText id="alert-dialog-description">
                          <form action="#">
                            <div class="form-group">
                              <input color="success"
                                type="file"
                                id="file"
                                name="file"
                                accept=".jpg"
                                onChange={(event) => {
                                  const file = event.target.files[0];
                                  setFile(file);
                                }}
                              />
                            </div>
                          </form>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color="success" variant="contained" onClick={handleCloseha}>Quay lại</Button>
                        <Button  color="success" variant="contained" onClick={send} autoFocus>
                          Thực hiện
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <List
                  sx={{ width: "100%", bgcolor: "background.paper" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      sx={{ fontSize: "20px", color: "#333" }}
                    >
                      {" "}
                      Thông tin cá nhân{" "}
                    </ListSubheader>
                  }
                >
                  
                </List>
                <List>
                  <ListItemButton>
                    <ListItemText primary="Tên:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.ten_nd}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                    <ListItemText primary="Tài khoản:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.tai_khoan}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                    <ListItemText primary="Giới tính:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.gioi_tinh}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton>
                    <ListItemText primary="Ngày sinh:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.ngay_sinh.slice(0, 10)}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                
                <List>
                  <ListItemButton>
                    <ListItemText primary="Email:" />{" "}
                    <ListItemText sx={{ textAlign: "right" }}>
                      {nd.email}
                    </ListItemText>
                  </ListItemButton>
                </List>
                <Divider />
                <List>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Đổi mật khẩu" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
                <Divider />
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Thongtinnhanvien;
