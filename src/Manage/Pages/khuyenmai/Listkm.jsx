import React, { useEffect, useState } from "react";
import khuyenmaiAPI from "../../api/khuyenmaiApi";
import loaisanphamAPI from "../../api/loaisanphamApi";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Box, Paper, Typography, Link, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ColorizeIcon from "@mui/icons-material/Colorize";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Listmanager from "../list";

export default function Listkm() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loaisp, setLoaisp] = useState([]);
  const [makm, setMakm] = useState("");
  const [sanpham, setSanpham] = useState("");
  const [tenkm, setTenkm] = useState("");
  const [phantram, setPhantram] = useState("");
  const [ngaybd, setNgaybd] = React.useState(null);
  const [ngaykt, setNgaykt] = React.useState(null);
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
  const [openalert, setOpenalert] = React.useState(false);
  const handleClosealert = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenalert(false);};
  const [openloi, setOpenloi] = React.useState(false);
  const handleCloseloi = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenloi(false);};
  const [trang, setTrang] = useState(1);
  //danh sach
  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1); };
  useEffect(() => {
    (async () => {
      if(dataNhanvien.length==0){
        navigate("/Manage");
      }
      const loai = await loaisanphamAPI.getCount();
          setLoaisp(loai);
      if (trangthai) {
        try {
          const data = await khuyenmaiAPI.getList(trang);
          setData(data);
        
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const data = await khuyenmaiAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
      const datacount = await khuyenmaiAPI.getCount("a");
      const sotrang = Math.ceil(datacount.length / 10);
      setCounttrang(sotrang);
    })();
  }, [count]);

  const handleTrangthai = () => {
    setTrangthai("1");
    setCount((e) => e + 1); };
  const handleTimkim = () => {
    setTrangthai("");
    setCount((e) => e + 1); };
  //THEM
  const [opentrung, setOpentrung] = React.useState(false);
  const handleClosetrung = () => {
    setOpentrung(false);
  };
  const [opensonguyen, setOpensonguyen] = React.useState(false);
  const handleClosesonguyen = () => {
    setOpensonguyen(false);
  };
  const [openngay, setOpenngay] = React.useState(false);
  const handleClosengay = () => {
    setOpenngay(false);
  };
  const [opentrungngay, setOpentrungngay] = React.useState(false);
  const handleClosetrungngay = () => {
    setOpentrungngay(false);
  };
  const handleAddSubmit = async (e) => {
    e.preventDefault();
 
    if (tenkm && phantram &&sanpham && ngaybd) {
      const check = await khuyenmaiAPI.checktrung(tenkm);
      if (check.length == 0) {
        if (!(ngaybd.$d > ngaykt.$d)) {
          const bd = ngaybd.$y + "-" + (ngaybd.$M + 1) + "-" + ngaybd.$D;
          const kt = ngaykt.$y + "-" + (ngaykt.$M + 1) + "-" + ngaykt.$D;
          const checkngay = await khuyenmaiAPI.checkngayadd(sanpham,bd,kt);
          if(!(checkngay.length >0)) {
            if (phantram > 0 &&phantram<100 && phantram % 1 == 0) {
              await khuyenmaiAPI.create(
                tenkm,
                sanpham,
                phantram,
                ngaybd.$y + "-" + (ngaybd.$M + 1) + "-" + ngaybd.$D,
                ngaykt.$y + "-" + (ngaykt.$M + 1) + "-" + ngaykt.$D
              );
              setOpenadd(false);  setOpenalert(true);  setTenkm(""); setSanpham(""); setPhantram("");  setNgaybd("");  setNgaykt("");   setCount((e) => e + 1);
            } else {
              setOpensonguyen(true); }
          } else {
              setOpentrungngay(true)
          }
        } else {
          setOpenngay(true);  }
      } else {
        setOpentrung(true); }}
    if ((!tenkm || !phantram || !sanpham || !ngaybd || !ngaykt) && !openxoa) {
      setOpenloi(true); }
  };

  const [openadd, setOpenadd] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpenadd = (scrollType) => () => {
    setOpenadd(true);
    setScroll(scrollType);
  };
  const handleCloseadd = () => {
    setOpenadd(false);
    setTenkm("");
    setNgaybd("");
    setPhantram("");
    setNgaykt("");
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openadd) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      } } }, [openadd]);
  //sua
  const [opensua, setOpensua] = React.useState(false);
  const [scrollsua, setScrollsua] = React.useState("paper");
  const handlesua = async (e) => {
    e.preventDefault();

    if (tenkm && ngaybd && phantram && sanpham) {
      const bd = ngaybd.$y + "-" + (ngaybd.$M + 1) + "-" + ngaybd.$D;
      const kt = ngaykt.$y + "-" + (ngaykt.$M + 1) + "-" + ngaykt.$D;
      const checkngay = await khuyenmaiAPI.checkngay(sanpham,bd,kt,makm);
       if(!(checkngay.length >0)) {
        if (!(ngaybd.$d > ngaykt.$d)) {
          if (phantram > 0 && phantram <100 && phantram % 1 == 0) {
      await khuyenmaiAPI.sua( makm,  tenkm,sanpham, phantram,
        ngaybd.$y + "-" + (ngaybd.$M + 1) + "-" + ngaybd.$D, ngaykt.$y + "-" + (ngaykt.$M + 1) + "-" + ngaykt.$D );
      setCount((e) => e + 1); setOpensua(false); setOpenalert(true); setTenkm("");setSanpham(""); setNgaybd(""); setPhantram(""); setNgaykt("");
    } else {
      setOpensonguyen(true); }
   
  } else {
    setOpenngay(true);  }
  } else {
    setOpentrungngay(true)
}
    } else {
      setOpenloi(true);}
    setOpen(false); };
  const handleClickOpensua = (id, ten,lsp, stg, nbd, nkt) => () => {
    setOpensua(true);  setMakm(id);  setTenkm(ten);setSanpham(lsp);  setNgaybd(nbd);  setNgaykt(nkt); 
     setPhantram(stg);  setScrollsua("paper"); };

  const handleClosesua = () => { setOpensua(false);  setTenkm("");  setNgaybd("");
    setPhantram(""); setNgaykt(""); };
  const descriptionElementRefsua = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElementsua } = descriptionElementRefsua;
      if (descriptionElementsua !== null) {
        descriptionElementsua.focus();
      } } }, [open]);
  //xoa
  const [openxoa, setOpenxoa] = React.useState(false);
  const handleClosexoa = () => {
    setOpenxoa(false);  };
  const handleClickOpenxoa = (id) => () => {
    setMakm(id);   setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (makm) {
      await khuyenmaiAPI.delete(makm);
      setCount((e) => e + 1);   setOpenalert(true);
    }  setOpenxoa(false);
  };

  return (
    <div>
      <div
        role="presentation"
        style={{ borderTop: "1px solid #ededed",   borderBottom: "1px solid #ededed",   marginBottom: "40px", }} >
        <Breadcrumbs
          separator="&ensp; › &ensp;" aria-label="breadcrumb" 
           style={{    fontSize: "13px",    lineHeight: "50px",   marginLeft: "9.5%",   float: "left", }}  >
          <Link underline="hover" color="inherit" href="">  Quản lý </Link>
          <Link underline="hover" color="inherit">   Khuyến mãi </Link>
          <Link  value="1"  underline="hover"  color="#339900"  onClick={handleTrangthai}>  Danh sách </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0} component="form"
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            sx={{ p: "0px 4px", display: "flex",  alignItems: "center",  width: "15%",  float: "left",  marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",  }} >
            <InputBase
              onChange={(e) => setTenget(e.target.value)} sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm khuyến mãi"  inputProps={{ "aria-label": "search google maps" }} />
              
            <IconButton
              onClick={handleTimkim}  type="button"
              sx={{ p: 1 }}  aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="my-1   ">
          <button
            onClick={handleClickOpenadd("paper")}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
            Thêm mới  </button>
          <form onSubmit={handleAddSubmit}>
            <Dialog
              className=""    open={openadd}
              onClose={handleCloseadd}  scroll={scroll}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm khuyến mãi mới </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef}   >
                  <div>
                    <div>
                      <TextField
                        label="* Tên khuyến mãi"  color="success"  onChange={(e) => setTenkm(e.target.value)}
                        style={{ display: "block", marginBottom: "20px" }}   type="text" />
                        
                        <FormControl sx={{ width: "85%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Loại</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={(e) => setSanpham(e.target.value)}>
                       {loaisp.map((loaispp) => (
                          <MenuItem value={loaispp.ma_lsp} >{loaispp.ten_lsp}</MenuItem>
                        ))}
    
                      </Select>
                       </FormControl>
                      <TextField
                        label="* Phần trăm giảm (%)"     color="success"     onChange={(e) => setPhantram(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="mb-[20px]">
                          <DatePicker
                            minDate={dayjs()}     inputFormat="YYYY-MM-DD"
                            mask="____-__-__"    label="* Ngày bắt đầu"
                            value={ngaybd}    onChange={(newValue) => {     setNgaybd(newValue);  }}
                            renderInput={(params) => <TextField {...params} />}/>
                        </div>
                        <div>
                          <DatePicker
                            minDate={dayjs()} inputFormat="YYYY-MM-DD"  mask="____-__-__"
                            label="* Ngày kết thúc"   value={ngaykt}
                            onChange={(newValue) => {      setNgaykt(newValue);   }}
                            renderInput={(params) => <TextField {...params} />}  />
                        </div>
                      </LocalizationProvider>
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseadd}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"  >
                  Quay lại  </button>
                <button
                  onClick={handleAddSubmit}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
                  Thêm </button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
      <div className="w-[88%] mx-[6%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div  style={{width:"79%",float:"right"}}>
        <table className=" w-[100%] text-center rounded-lg	 	">
          <thead className="h-14  text-white 	">
            <tr>
              <th className=" border-[1px] 	border-white			 border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">  Mã KM</div>
              </th>
              <th className="border-[1px] w-[20%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">   Tên  KM  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Loại sản phẩm  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Giảm (%) </div>
              </th>
              <th className="border-[1px] w-[17%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Ngày bắt đầu  </div>
              </th>
              <th className="border-[1px] w-[17%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Ngày kết thúc  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Xóa  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 ml-[-3px] ">    Sửa  </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.length ? (
              data.map((product) => (
                <tr key={product.ma_km} className="h-10">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_km}{" "} </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_km} </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.sanpham_km}  </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.phantram_km}  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker   inputFormat="YYYY-MM-DD"    mask="____-__-__"  value={product.ngay_bd}
                       readOnly   renderInput={(params) => <TextField {...params} />}  />
                    </LocalizationProvider>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker  inputFormat="YYYY-MM-DD"  mask="____-__-__"  value={product.ngay_kt}
                        readOnly   renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button   color="success"   variant="outlined"   onClick={handleClickOpenxoa(product.ma_km)} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <div>
                      <Button  color="success"  variant="outlined"  onClick={handleClickOpensua(
                          product.ma_km, product.ten_km,product.sanpham_km, product.phantram_km, product.ngay_bd, product.ngay_kt)} >
                        {" "}   <ColorizeIcon /> </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th  colspan="8"   className=" border-[1px] 	border-white			 border-solid">
                  <div className="  bg-gray-100 h-[57px] pt-4">  Không tìm thấy dữ liệu bạn đang tìm! </div>
                </th>
              </tr>
            )}
            <tr>
              <th  colspan="8"  className=" border-[1px] 	border-white			 border-solid">
                <div className=" bg-gray-100 h-[57px] pt-4">
                  {" "}
                  <Pagination    style={{      display: "flex", flexFlow: "row nowrap", justifyContent: "center",}}
                    color="success" count={counttrang}  page={trang}   onChange={handleChangepage}
                  ></Pagination>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <Snackbar open={openalert} autoHideDuration={6000}  onClose={handleClosealert}>
        <Alert    onClose={handleClosealert}    severity="success"    sx={{ width: "100%" }}  >
          Thực hiện thao tác thành công - kiểm tra ngay!</Alert>
      </Snackbar>
      <Snackbar  open={opentrung}  autoHideDuration={6000}  onClose={handleClosetrung}>
        <Alert   onClose={handleClosetrung}   severity="error"   sx={{ width: "100%" }} >
          Tên này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <Snackbar open={opensonguyen} autoHideDuration={6000} onClose={handleClosesonguyen}>
        <Alert onClose={handleClosesonguyen} severity="error" sx={{ width: "100%" }} >
          Phần trăm khuyến mãi phải lớn hơn 0 và nhỏ hơn 100 - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opentrungngay} autoHideDuration={6000} onClose={handleClosetrungngay}>
        <Alert onClose={handleClosetrungngay} severity="error" sx={{ width: "100%" }} >
          Loại sản phẩm này đã có khuyến mãi trong khoảng hời gian này - vui lòng nhập lại hời gian! </Alert>
      </Snackbar>
      <Snackbar  open={openngay}  autoHideDuration={6000}  onClose={handleClosengay} >
        <Alert  onClose={handleClosengay}  severity="error"   sx={{ width: "100%" }} >
          Ngày bắt đầu phải lớn hơn hoặc bằng ngày kết thúc - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={openloi} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert onClose={handleCloseloi} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!</Alert>
      </Snackbar>
      <form >
        <Dialog  open={opensua}  onClose={handleClosesua}  scroll={scrollsua}
          aria-labelledby="scroll-dialog-title"   aria-describedby="scroll-dialog-description" >
          <DialogTitle id="scroll-dialog-title">Chỉnh sửa dữ liệu</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText   id="scroll-dialog-description"   ref={descriptionElementRef}    >
              <TextField label="* Tên khuyến mãi"  color="success"
                onChange={(e) => setTenkm(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={tenkm}/>
                <FormControl sx={{ width: "85%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Loại</InputLabel>
                        <Select defaultValue={sanpham} id="grouped-select" label="Grouping" onChange={(e) => setSanpham(e.target.value)}>
                       {loaisp.map((loaispp) => (
                          <MenuItem value={loaispp.ma_lsp} >{loaispp.ten_lsp}</MenuItem>
                        ))}
                      </Select> </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}></LocalizationProvider>
              <TextField  label="* Phần trăm giảm"  color="success"
                onChange={(e) => setPhantram(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={phantram}/>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="mb-[20px]">
                  <DatePicker      inputFormat="YYYY-MM-DD"   mask="____-__-__"   label="* Ngày bắt đầu" minDate={"2022-8-1"}
                    value={ngaybd} onChange={(value) => { setNgaybd(value);  }}
                    renderInput={(params) => <TextField {...params} />} />
                </div>
                <div>
                  <DatePicker   inputFormat="YYYY-MM-DD"  mask="____-__-__" minDate={"2022-8-1"}
                    label="* Ngày kết thúc" value={ngaykt} onChange={(value) => {   setNgaykt(value); }}
                    renderInput={(params) => <TextField {...params} />} />
                </div>
              </LocalizationProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClosesua} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Quay về </button>
            <button  onClick={handlesua}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Thực hiện  </button>
          </DialogActions>
        </Dialog>
        <Dialog  open={openxoa}  onClose={handleClosexoa}
          aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">  {"Bạn có chắc muốn xóa?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn đồng ý xóa thì không thể khôi phục lại dữ liệu! </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button     className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"     onClick={handleClosexoa}   >
              Quay lại </button>
            <form onSubmit={handleSubmitxoa}>
              <button  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                value={makm}  onClick={(e) => setMakm(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
