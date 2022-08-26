import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import nhacungcapAPI from "../../api/nhacungcapApi";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Box, Paper, Typography, Link } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ColorizeIcon from "@mui/icons-material/Colorize";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

export default function Listncc() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [mancc, setMancc] = useState("");
  const [tenncc, setTenncc] = useState("");
  const [diachi, setDiachi] = useState("");
  const [sdt, setSdt] = useState("");
  const [tenget, setTenget] = useState("");
  const [dataid, setDataid] = useState([]);
  const [trangthai, setTrangthai] = useState("");
  const [rong, setRong] = useState("");
  const [open, setOpen] = React.useState(false);


  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [openalert, setOpenalert] = React.useState(false);
  const handleClosealert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenalert(false);
  };  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await nhacungcapAPI.getList();
        console.log(data);
        setData(data);
      } catch (e) {
        console.log("loi lay dl", e);
      }
    })();
  }, [count]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mancc) {
      await nhacungcapAPI.delete(mancc);
      setCount((e) => e + 1);
    }
    setOpen(false);
  };

  const handleGetid = async (e) => {
    e.preventDefault();
    setTrangthai("1");
    if (tenget) {
     const dataa = await nhacungcapAPI.getid(tenget);
     setDataid(dataa);

    } 
    
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (tenncc && diachi && sdt) {
      await nhacungcapAPI.create(tenncc, diachi, sdt);
      setCount((e) => e + 1);
      setOpenadd(false);
      setOpenalert(true);

    }
  };

  const [openadd, setOpenadd] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpenadd = (scrollType) => () => {
    setOpenadd(true);
    setScroll(scrollType);
  };

  const handleCloseadd = () => {
    setOpenadd(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openadd) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openadd]);

  return (
    <div>
      <div
        role="presentation"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
          marginBottom: "40px",
        }}
      >
        <Breadcrumbs
          separator="&ensp; › &ensp;"
          aria-label="breadcrumb"
          style={{
            fontSize: "13px",
            lineHeight: "50px",
            marginLeft: "9.5%",
            float: "left",
          }}
        >
          <Link underline="hover" color="inherit" href="">
            Quản lý
          </Link>
          <Link underline="hover" color="inherit" >
             Nhà cung cấp
          </Link><Link  value="0" underline="hover" color="#339900" onClick={(e) => setTrangthai(e.target.value)}>
             Danh sách
          </Link>
        </Breadcrumbs>
        <div className="bg-slate-200" >
        <Paper elevation={0} className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
          component="form"
          sx={{
            p: "0px 4px",
            display: "flex",
            alignItems: "center",
            width: "15%", float: "left",marginLeft:"39%" ,backgroundColor: " rgb(229 231 235);"
          }}
        >
          <InputBase 
            onChange={(e) => setTenget(e.target.value)}
            sx={{ ml: 1, flex: 1 }} 
            placeholder="Tìm nhà cung cấp"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton onClick={handleGetid} type="button" sx={{ p: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        </div>
        <div className="my-1   " >
          <button
            onClick={handleClickOpenadd("paper")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
          >
            Thêm mới
          </button>
          <form onSubmit={handleAddSubmit}>
            <Dialog
              className="mt-[-200px]"
              open={openadd}
              onClose={handleCloseadd}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">
                Thêm nhà cung cấp mới
              </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  <div>
                    <div className="">
                      <input
                        onChange={(e) => setTenncc(e.target.value)}
                        className="px-4 py-2 border rounded-lg mb-4"
                        style={{ display: "block" }}
                        type="text"
                        placeholder="Tên nhà cung cấp"
                      />
                      <input
                        onChange={(e) => setDiachi(e.target.value)}
                        className="px-4 py-2 border rounded-lg mb-4"
                        type="text"
                        placeholder="Số điện thoại"
                        style={{ display: "block" }}
                      />
                      <input
                        onChange={(e) => setSdt(e.target.value)}
                        className="px-4 py-2 border rounded-lg "
                        type="text"
                        placeholder="Địa chỉ"
                      />
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseadd}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
                >
                  Quay lại
                </button>
                <button
                  onClick={handleAddSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
                >
                  Thêm
                </button>
                
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
        <table className=" w-[100%] text-center rounded-lg	 	">
          <thead className="h-14  text-white 	">
            <tr>
              <th className="w-[20%] border-[1px] 	border-white			 border-solid">
                <div className="rounded-tl-2xl  bg-green-700 h-[57px] pt-4 mr-[-3px]">
                  Mã nhà cung cấp
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">
                  Tên nhà cung cấp
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">
                  Số điện thoại
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">
                  Địa chỉ
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">
                  Xóa
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 ml-[-3px] rounded-tr-2xl">
                  Sửa
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {trangthai ? (
              dataid.length ? (dataid.map((product) => (
                <tr key={product.ma_ncc} className="h-10">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_ncc}{" "}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.sdt_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.diachi_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div >
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={handleClickOpen}
                        
                      >
                        <DeleteOutlineIcon />
                      </Button>
                      <Dialog
                       className="opacity-50"

                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Bạn có chắc muốn xóa?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Khi bạn đồng ý xóa thì không thể khôi phục lại dữ
                            liệu!
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <button
                            className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
                            onClick={handleClose}
                          >
                            Quay lại
                          </button>
                          <form onSubmit={handleSubmit}>
                            <button
                              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                              value={product.ma_ncc}
                              onClick={(e) => setMancc(e.target.value)}
                            >
                              Chấp nhận
                            </button>
                            <div></div>
                          </form>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    
                    <Button  color="success"
                        variant="outlined"> <ColorizeIcon /></Button>
                    
                  </td>
                </tr>
              ))) : (<tr>
                <th
                  colspan="6"
                  className=" border-[1px] 	border-white			 border-solid"
                >
                  <div className="  bg-gray-100 h-[57px] pt-4">Không tìm thấy dữ liệu bạn đang tìm!</div>
                </th>
              </tr>)
            ) : (
              data.map((product) => (
                <tr key={product.ma_ncc} className="h-10">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_ncc}{" "}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.sdt_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.diachi_ncc}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={handleClickOpen}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                      <Dialog
                        className="opacity-50"
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Bạn có chắc muốn xóa?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Khi bạn đồng ý xóa thì không thể khôi phục lại dữ
                            liệu!
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <button
                            className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
                            onClick={handleClose}
                          >
                            Quay lại
                          </button>
                          <form onSubmit={handleSubmit}>
                            <button
                              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                              value={product.ma_ncc}
                              onClick={(e) => setMancc(e.target.value)}
                            >
                              Chấp nhận
                            </button>
                            <div></div>
                          </form>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <Button  color="success"
                        variant="outlined"> <ColorizeIcon /></Button>
                    
                  </td>
                </tr>
              ))
            )}
            
            <tr>
              <th
                colspan="6"
                className=" border-[1px] 	border-white			 border-solid"
              >
                <div className="rounded-bl-2xl rounded-br-2xl  bg-gray-100 h-[57px] pt-4"></div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Snackbar open={openalert} autoHideDuration={6000} onClose={handleClosealert}>
        <Alert onClose={handleClosealert} severity="success" sx={{ width: '100%' }}>
          Thực hiện thao tác thành công - kiểm tra ngay!
        </Alert>
      </Snackbar>
     
    </div>
  );
}
