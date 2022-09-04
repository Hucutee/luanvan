import React, { useEffect, useState } from "react";
import chitietsanphamApi from "../../api/chitietsanphamApi";
import sanphamApi from "../../api/sanphamApi";
import loaisanphamApi from "../../api/loaisanphamApi";
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import kichthuocApi from "../../api/kichthuocApi";
import InputAdornment from '@mui/material/InputAdornment';

export default function Listctsp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [listsp, setListsp] = useState([]);
  const [listkt, setListkt] = useState([]);
  const [listlsp, setListlsp] = useState([]);
  const [getloaiii, setGetloaiii] = useState("");
  const [mactsp, setMactsp] = useState("");
  const [masp, setMasp] = useState("");
  const [tensp, setTensp] = useState("");
  const [makt, setMakt] = useState("");
  const [tenkt, setTenkt] = useState("");
  const [soluong, setSoluong] = useState("");
  const [giaban, setGiaban] = useState("");
  const [hinhanh, setHinhanh] = useState("");
  const [thongtin, setThongtin] = useState("");
  const [loaiget, setLoaiget] = useState("");
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
      if(getloaiii){
      const loai = await sanphamApi.checkloai(getloaiii);
          setListsp(loai);  
        }else{
          const loai =await sanphamApi.getCount();
          setListsp(loai);
        }
      const loaii = await kichthuocApi.getCount();
          setListkt(loaii);
    
     const loaiii = await loaisanphamApi.getCount();
          setListlsp(loaiii); 
      if (trangthai) {
        try {
          const data = await chitietsanphamApi.getList(trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const data = await chitietsanphamApi.getid(loaiget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
      const datacount = await chitietsanphamApi.getCount("a");
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
  const [opentrungten, setOpentrungten] = React.useState(false);
  const handleClosetrungten = () => {
    setOpentrungten(false);
  };
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    

    if (giaban && soluong &&masp && makt && hinhanh && thongtin) {
      const trung = await chitietsanphamApi.checktrung(masp,makt); console.log(trung);//
      if(!(trung.length >0)){
            if (soluong > 0 && giaban > 999 && soluong % 1 == 0 && giaban % 1 == 0) {
              await chitietsanphamApi.create(masp,makt,soluong,giaban,thongtin,hinhanh,tenkt,tensp);
              setOpenadd(false);  setOpenalert(true); setMasp(""); setTensp(""); setTenkt(""); setSoluong(""); setGiaban("");setTenkt(""); setTensp("");  setMakt("");  setHinhanh("");setThongtin("");   setCount((e) => e + 1);
            } else {
              setOpensonguyen(true); }
            } else { setOpentrungten(true)}
            }
           
    if ((!masp || !soluong || !makt || !giaban || !thongtin || !hinhanh) && !openxoa) {
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
    setMasp("");
    setMakt("");
    setSoluong("");
    setGiaban("");
    setHinhanh(""); setThongtin("");setTensp("");setTenkt(""); setMasp(""); setCount((e) => e + 1);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openadd) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      } } }, [openadd]);
  //sua
  const [opensuatrung, setOpensuatrung] = React.useState(false);
  const handleClosesuatrung = () => {
    setOpensuatrung(false);  };
  const [opensua, setOpensua] = React.useState(false);
  const [scrollsua, setScrollsua] = React.useState("paper");
  const handlesua = async (e) => {
    e.preventDefault();
    if (masp && tensp && makt  && tenkt && soluong && giaban && thongtin && hinhanh ) {
      const checktrung = await chitietsanphamApi.suatrung(mactsp,masp,makt);
      if (checktrung.length==0){
        if (soluong > 0 && giaban >999 && giaban % 1 ==0 && soluong % 1 == 0) {
          await chitietsanphamApi.sua( mactsp,masp,tensp,makt,tenkt, soluong,giaban,thongtin,hinhanh);
          setCount((e) => e + 1); setOpensua(false); setOpenalert(true);setTensp(""); setTenkt(""); setMactsp("");setMasp(""); setMakt(""); setSoluong(""); setGiaban(""); setThongtin(""); setHinhanh("");
        } else {
          setOpensonguyen(true); }
      } else{setOpensuatrung(true);}
         
   
 
    } else {
      setOpenloi(true);}
    setOpen(false); };
  const handleClickOpensua = (id,sp,tensp,kt,tenkt,sl,gb,tt, ha) => () => {
    setOpensua(true);  setMactsp(id);  setMasp(sp); setTensp(tensp); setMakt(kt);setTenkt(tenkt);  setSoluong(sl);  setGiaban(gb); setThongtin(tt); setHinhanh(ha);
     setScrollsua("paper"); };

  const handleClosesua = () => { setOpensua(false); setTensp(""); setTenkt(""); setMactsp("");setMasp(""); setMakt(""); setSoluong(""); setGiaban(""); setThongtin(""); setHinhanh(""); };
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
    setMactsp(id);   setOpenxoa("true");
  };
  const handleGetloai = (id) => () => {
    setGetloaiii(id);  setCount((e) => e + 1);
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (mactsp) {
      await chitietsanphamApi.delete(mactsp);
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
          <Link underline="hover" color="inherit">   Chi tiết sản phẩm </Link>
          <Link  value="1"  underline="hover"  color="#339900"  onClick={handleTrangthai}>  Danh sách </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0} component="form"
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            sx={{ p: "0px 4px", display: "flex",  alignItems: "center",  width: "15%",  float: "left",  marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",  }} >
            <InputBase
              onChange={(e) => setLoaiget(e.target.value)} sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm theo sản phẩm"  inputProps={{ "aria-label": "search google maps" }} />
              
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
              <DialogTitle id="scroll-dialog-title">   Thêm chi tiết sản phẩm mới </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef}   >
                  <div>
                    <div>    
                    <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select"> Loại sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingpppppp" onChange={(e) => setMasp(e.target.value)}>
                       {listlsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_lsp} ><button value={tenspp.ten_lsp} onClick={handleGetloai(tenspp.ma_lsp)}>{tenspp.ten_lsp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                        <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Tên sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppppp" onChange={(e) => setMasp(e.target.value)}>
                       {listsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_sp} ><button value={tenspp.ten_sp} onClick={(e) => setTensp(e.target.value)}>{tenspp.ten_sp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                       <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thước</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppp" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((tenktt) => (
                          <MenuItem value={tenktt.ma_kt} ><button value={tenktt.ten_kt} onClick={(e) => setTenkt(e.target.value)}>{tenktt.ten_kt}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                      <TextField fullWidth
                        label="* Số lượng"     color="success"     onChange={(e) => setSoluong(e.target.value)}
                        type="text"     sx={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                        label="* Gía bán"     color="success"     onChange={(e) => setGiaban(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                      <TextField fullWidth
                        label="* Thông tin"     color="success"     onChange={(e) => setThongtin(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                         label="* Hình ảnh"           color="success"     onChange={(e) => setHinhanh(e.target.value.slice(12 ))}
                        type="file" name="file"     style={{ display: "block", marginBottom: "20px" }}
                        
                        InputProps={{
                          startAdornment: <InputAdornment position="start"> </InputAdornment>,
                        }}   />
                        
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
      <div className="w-[84%] mx-[8%] ">
        <table className=" w-[100%] text-center rounded-lg	 	">
          <thead className="h-14  text-white 	">
            <tr>
              <th className=" border-[1px] 	border-white			 border-solid">
                <div className="rounded-tl-2xl  bg-green-700 h-[57px] pt-4 mr-[-3px]">  Mã CTSP</div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Hình ảnh  </div>
              </th>
              <th className="border-[1px] w-[20%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">   Sản phẩm  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    kích thước  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">    Số lượng </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    giá bán </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Thông tin  </div>
              </th>
              
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Xóa  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 ml-[-3px] rounded-tr-2xl">    Sửa  </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.length ? (
              data.map((product) => (
                <tr key={product.ma_ctsp} className="h-10">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_ctsp}{" "} </td>
                    <td className="border-[1px] w-20 	border-white	 bg-gray-100			 border-solid ">
                     <img src={require('../../../images/' + product.hinhanh)} /> </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_sp} </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_kt} </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.soluong}  </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.giaban}  </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.thongtin}  </td>
                    
                 
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button   color="success"   variant="outlined"   onClick={handleClickOpenxoa(product.ma_ctsp)} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <div>
                      <Button  color="success"  variant="outlined"  onClick={handleClickOpensua(
                          product.ma_ctsp, product.ma_sp, product.ten_sp,product.ma_kt,product.ten_kt,product.soluong, product.giaban, product.thongtin, product.hinhanh)} >
                        {" "}   <ColorizeIcon /> </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th  colspan="9"   className=" border-[1px] 	border-white			 border-solid">
                  <div className="  bg-gray-100 h-[57px] pt-4">  Không tìm thấy dữ liệu bạn đang tìm! </div>
                </th>
              </tr>
            )}
            <tr>
              <th  colspan="9"  className=" border-[1px] 	border-white			 border-solid">
                <div className="rounded-bl-2xl rounded-br-2xl   bg-gray-100 h-[57px] pt-4">
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
          Số lượng lớn hơn 0 và giá bán từ 1000 - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opentrungten} autoHideDuration={6000} onClose={handleClosetrungten}>
        <Alert onClose={handleClosetrungten} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opensuatrung} autoHideDuration={6000} onClose={handleClosesuatrung}>
        <Alert onClose={handleClosesuatrung} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
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
           
                <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Tên sản phẩm</InputLabel>
                        <Select defaultValue={masp} id="grouped-select" label="Groupinggggg" onChange={(e) => setMasp(e.target.value)}>
                       {listsp.map((loaispp) => (
                          <MenuItem value={loaispp.ma_sp} ><button value={loaispp.ten_sp} onClick={(e) => setTensp(e.target.value)}>{loaispp.ten_sp}</button></MenuItem>
                        ))}
                      </Select> </FormControl>
                 <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thức</InputLabel>
                        <Select defaultValue={makt} id="grouped-select" label="Groupinggg" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((loaispp) => (
                          <MenuItem value={loaispp.ma_kt} ><button value={loaispp.ten_kt} onClick={(e) => setTenkt(e.target.value)}>{loaispp.ten_kt}</button></MenuItem>
                        ))}
                      </Select> </FormControl>
              <TextField fullWidth label="* Số lượng"  color="success"
                onChange={(e) => setSoluong(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={soluong}/>
             <TextField fullWidth label="* Giá bán"  color="success"
                onChange={(e) => setGiaban(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={giaban}/>
              <TextField fullWidth label="* Thông tin"  color="success"
                onChange={(e) => setThongtin(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={thongtin}/>
              <TextField fullWidth
                         label="* Hình ảnh"       color="success"     onChange={(e) => setHinhanh(e.target.value.slice(12 ))}
                        type="file" name="file"    style={{ display: "block", marginBottom: "20px" }}
                        InputProps={{
                          startAdornment: <InputAdornment position="start"> </InputAdornment>,
                        }}   />
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
                value={mactsp}  onClick={(e) => setMactsp(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
