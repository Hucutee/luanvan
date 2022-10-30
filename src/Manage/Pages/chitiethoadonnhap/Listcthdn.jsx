import React, { useEffect, useState } from "react";
import chitiethoadonnhapApi from "../../api/chitiethoadonnhapApi";
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
import hoadonnhapApi from "../../api/hoadonnhapApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Listmanager from "../list";

export default function Listcthdn() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [listsp, setListsp] = useState([]);
  const [listkt, setListkt] = useState([]);
  const [listlsp, setListlsp] = useState([]);
  const [listhdn, setListhdn] = useState([]);
  const [getloaiii, setGetloaiii] = useState("");
  const [macthdn, setMacthdn] = useState("");
  const [mactsp, setMactsp] = useState("");
  const [mahdn, setMahdn] = useState("");
  const [malsp, setMalsp] = useState("");
  const [masp, setMasp] = useState("");
  const [tensp, setTensp] = useState("");
  const [makt, setMakt] = useState("");
  const [tenkt, setTenkt] = useState("");
  const [soluong, setSoluong] = useState("");
  const [soluongcu, setSoluongcu] = useState("");
  const [gianhap, setGianhap] = useState("");
  const [loaiget, setLoaiget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open1, setOpen1] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
  const [openalert1, setOpenalert1] = React.useState(false);
  const handleClosealert1 = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenalert1(false);};
  const [openloi1, setOpenloi1] = React.useState(false);
  const handleCloseloi1 = (event, reason) => {
    if (reason === "clickaway") {
      return;  }
    setOpenloi1(false);};
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
      const dshdn =await hoadonnhapApi.getCountDESC();
          setListhdn(dshdn); 
      if(getloaiii){
      const loai = await sanphamApi.checkloai(getloaiii);
          setListsp(loai);  
        }else{
          const loai =await sanphamApi.getCount();
          setListsp(loai);
        }
        if(masp){
          const loaikt =await sanphamApi.getmasp(masp);
          setListkt(loaikt);
        }else{

        }
   
     const loaiii = await loaisanphamApi.getCount();
          setListlsp(loaiii); 
      if (trangthai) {
        try {
          const data = await chitiethoadonnhapApi.getList(trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);   }
      } else {
        try {
          const data = await chitiethoadonnhapApi.getid(loaiget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        } }
      const datacount = await chitiethoadonnhapApi.getCount("a");
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
  const [opentrung1, setOpentrung1] = React.useState(false);
  const handleClosetrung1 = () => {
    setOpentrung1(false);
  };
  const [opensonguyen1, setOpensonguyen1] = React.useState(false);
  const handleClosesonguyen1 = () => {
    setOpensonguyen1(false);
  };
  const [opentrungten1, setOpentrungten1] = React.useState(false);
  const handleClosetrungten1 = () => {
    setOpentrungten1(false);
  };
  const handleAddSubmit1 = async (e) => {
    e.preventDefault();
    if (gianhap && soluong && mactsp && mahdn) {
    
            if (soluong > 0 && gianhap > 999 && soluong % 1 == 0 && gianhap % 1 == 0) {
              await chitiethoadonnhapApi.create(mahdn,mactsp,soluong,gianhap);
              setOpenadd1(false);  setOpenalert1(true); setMalsp(""); setTensp(""); setTenkt(""); setSoluong(""); setGianhap("");setTenkt(""); setTensp("");  setMakt(""); setMactsp("");   setCount((e) => e + 1);
              await chitiethoadonnhapApi.congsoluong(mactsp,soluong);
            } else {
              setOpensonguyen1(true); }
            }
    if ((!mactsp || !soluong || !mahdn || !gianhap ) && !openxoa1) {
      setOpenloi1(true); }
  };

  const [openadd1, setOpenadd1] = React.useState(false);
  const [scroll1, setScroll1] = React.useState("paper");
  const handleClickOpenadd1 = (scrollType) => () => {
    setOpenadd1(true);
    setScroll1(scrollType);
  };
  const handleCloseadd1 = () => {
    setOpenadd1(false);
    setMalsp("");
    setMakt("");
    setSoluong(""); setMactsp("");
    setGianhap(""); setGetloaiii("");
    setTensp("");setTenkt(""); setCount((e) => e + 1); 
  };
  const descriptionElementRef1 = React.useRef(null);
  React.useEffect(() => {
    if (openadd1) {
      const { current: descriptionElement } = descriptionElementRef1;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      } } }, [openadd1]);
  //sua
  const [opensuatrung1, setOpensuatrung1] = React.useState(false);
  const handleClosesuatrung1 = () => {
    setOpensuatrung1(false);  };
  const [opensua1, setOpensua1] = React.useState(false);
  const [scrollsua1, setScrollsua1] = React.useState("paper");
  const handlesua1 = async (e) => {
    e.preventDefault();
    if (macthdn && mactsp && soluong && gianhap) {
      
        if (soluong > 0 && gianhap >999 && gianhap % 1 ==0 && soluong % 1 == 0) {
          await chitiethoadonnhapApi.sua( macthdn,mactsp, soluong,gianhap);
          if(soluong){
            await chitiethoadonnhapApi.suasl( macthdn,mactsp,soluongcu, soluong,gianhap);
          }
          setCount((e) => e + 1); setOpensua1(false); setOpenalert1(true);setTensp("");setMactsp(""); setTenkt(""); setMacthdn("");setMalsp(""); setMakt(""); setSoluong(""); setGianhap(""); 
        } else {
          setOpensonguyen1(true); }
      
    } else {
      setOpenloi1(true);}
    setOpen1(false); };
  const handleClickOpensua1 = (macthdn,mahdn,mactsp,sl,gn) => () => {
    setOpensua1(true);  setMacthdn(macthdn);  setMahdn(mahdn); setMactsp(mactsp);setSoluong(sl);setSoluongcu(sl);  setGianhap(gn); 
     setScrollsua1("paper"); };

  const handleClosesua1 = () => { setOpensua1(false); setTensp(""); setTenkt("");setMahdn(""); setMactsp(""); setMacthdn("");setMalsp(""); setMakt(""); setSoluong(""); setGianhap(""); };
  const descriptionElementRefsua1 = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElementsua } = descriptionElementRefsua1;
      if (descriptionElementsua !== null) {
        descriptionElementsua.focus();
      } } }, [open1]);
  //xoa
  const [openxoa1, setOpenxoa1] = React.useState(false);
  const handleClosexoa1 = () => {setMacthdn(""); setMactsp(""); setSoluong("");
    setOpenxoa1(false);  };
  const handleClickOpenxoa1 = (id,mactsp,sln) => () => {
    setMacthdn(id); setMactsp(mactsp); setSoluong(sln);  setOpenxoa1("true");
  };
  const handleGetloai = (id) => () => {
    setGetloaiii(id);  setCount((e) => e + 1);
  };
  const handleGetkt = (id) => () => {
    setMasp(id);  setCount((e) => e + 1);
  };
  const handleSubmitxoa1 = async (e) => {
    e.preventDefault();
    if (macthdn) {
      await chitiethoadonnhapApi.delete(macthdn);
      await chitiethoadonnhapApi.deletesl(mactsp,soluong);
      setCount((e) => e + 1);   setOpenalert1(true);
    }  setOpenxoa1(false);
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
          <Link underline="hover" color="inherit">   Chi tiết hóa đơn nhập </Link>
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
              placeholder="Tìm kím theo hóa đơn nhập"  inputProps={{ "aria-label": "search google maps" }} />
              
            <IconButton
              onClick={handleTimkim}  type="button"
              sx={{ p: 1 }}  aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="my-1   ">
          <button
            onClick={handleClickOpenadd1("paper")}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
            Thêm mới  </button>
          <form onSubmit={handleAddSubmit1}>
            <Dialog
              className=""    open={openadd1}
              onClose={handleCloseadd1}  scroll={scroll1}
              aria-labelledby="scroll-dialog-title"  aria-describedby="scroll-dialog-description" >
              <DialogTitle id="scroll-dialog-title">   Thêm chi tiết hóa đơn nhập mới </DialogTitle>
              <DialogContent dividers={scroll1 === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description" ref={descriptionElementRef1}   >
                  <div>
                    <div style={{width:"300px"}}>  
                    <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Hóa đơn nhập</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppppp" onChange={(e) => setMahdn(e.target.value)}>
                       {listhdn.map((tenktt) => (
                          <MenuItem value={tenktt.ma_hdn} ><button value={tenktt.ma_hdn} onClick={(e) => setMahdn(e.target.value)}>{tenktt.ma_hdn}: {tenktt.ghi_chu}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                   
                    <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select"> Loại sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingpppppp" onChange={(e) => setMalsp(e.target.value)}>
                       {listlsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_lsp} ><button value={tenspp.ten_lsp} onClick={handleGetloai(tenspp.ma_lsp)}>{tenspp.ten_lsp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                        <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Tên sản phẩm</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppppp" onChange={(e) => setMasp(e.target.value)}>
                       {listsp.map((tenspp) => (
                          <MenuItem value={tenspp.ma_sp} ><button value={tenspp.ten_sp} onClick={handleGetkt(tenspp.ma_sp)}>{tenspp.ten_sp}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                       <FormControl sx={{ width: "100%" , marginBottom: "20px" }} color="success">
                        <InputLabel htmlFor="grouped-native-select">* Kích thước</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Groupingppp" onChange={(e) => setMakt(e.target.value)}>
                       {listkt.map((tenktt) => (
                          <MenuItem value={tenktt.ma_kt} ><button value={tenktt.ma_ctsp} onClick={(e) => setMactsp(e.target.value)}>{tenktt.ten_kt}</button></MenuItem>
                        ))}
                      </Select>
                       </FormControl>
                      <TextField fullWidth
                        label="* Số lượng"     color="success"     onChange={(e) => setSoluong(e.target.value)}
                        type="text"     sx={{ display: "block", marginBottom: "20px" }}   />
                        <TextField fullWidth
                        label="* Gía nhập"     color="success"     onChange={(e) => setGianhap(e.target.value)}
                        type="text"     style={{ display: "block", marginBottom: "20px" }}   />
                      
                        
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseadd1}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"  >
                  Quay lại  </button>
                <button
                  onClick={handleAddSubmit1}   className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg" >
                  Thêm </button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
      <div className="w-[84%] mx-[8%] ">
      <div style={{width:"18%",float:"left" , backgroundColor:"#f8f8f8"}}>
          <Listmanager/>
        </div>
        <div  style={{width:"79%",float:"right"}}>
        <table className=" w-[100%] text-center rounded-lg	 	">
          <thead className="h-14  text-white 	">
            <tr>
              <th className=" border-[1px] 	border-white			 border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">  Mã CT HĐN</div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">   Mã hóa đơn nhập  </div>
              </th>
              <th className="border-[1px] w-[20%]	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">  Chi tiết sản phẩm  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">   Số lượng nhập  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">  Giá bán </div>
              </th>
             
              
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-3px]">    Xóa  </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 ml-[-3px]">    Sửa  </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.length ? (
              data.map((product) => (
                <tr key={product.ma_cthdncthdn} className="h-10">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_cthdn}{" "} </td>
                    
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_hdn} </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_sp}, {product.ten_kt} </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.so_luong_nhap}  </td>
                    <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.gia_nhap}  </td>
                   
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button   color="success"   variant="outlined"   onClick={handleClickOpenxoa1(product.ma_cthdn,product.ma_ctsp,product.so_luong_nhap )} >
                        {" "}
                        <DeleteOutlineIcon /> </Button>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <div>
                      <Button  color="success"  variant="outlined"  onClick={handleClickOpensua1(
                          product.ma_cthdn, product.ma_hdn, product.ma_ctsp,product.so_luong_nhap,product.gia_nhap)} >
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
      <Snackbar open={openalert1} autoHideDuration={6000}  onClose={handleClosealert1}>
        <Alert    onClose={handleClosealert1}    severity="success"    sx={{ width: "100%" }}  >
          Thực hiện thao tác thành công - kiểm tra ngay!</Alert>
      </Snackbar>
      <Snackbar  open={opentrung1}  autoHideDuration={6000}  onClose={handleClosetrung1}>
        <Alert   onClose={handleClosetrung1}   severity="error"   sx={{ width: "100%" }} >
          Tên này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <Snackbar open={opensonguyen1} autoHideDuration={6000} onClose={handleClosesonguyen1}>
        <Alert onClose={handleClosesonguyen1} severity="error" sx={{ width: "100%" }} >
          Số lượng lớn hơn 0 và giá bán từ 1000 - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opentrungten1} autoHideDuration={6000} onClose={handleClosetrungten1}>
        <Alert onClose={handleClosetrungten1} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={opensuatrung1} autoHideDuration={6000} onClose={handleClosesuatrung1}>
        <Alert onClose={handleClosesuatrung1} severity="error" sx={{ width: "100%" }} >
          Sản phẩm có kích thước này đã tồn tại - vui lòng nhập lại! </Alert>
      </Snackbar>
      <Snackbar open={openloi1} autoHideDuration={6000} onClose={handleCloseloi1}>
        <Alert onClose={handleCloseloi1} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!</Alert>
      </Snackbar>
      <form >
        <Dialog  open={opensua1}  onClose={handleClosesua1}  scroll={scrollsua1}
          aria-labelledby="scroll-dialog-title"   aria-describedby="scroll-dialog-description" >
          <DialogTitle id="scroll-dialog-title">Chỉnh sửa dữ liệu</DialogTitle>
          <DialogContent dividers={scroll1 === "paper"}>
            <DialogContentText   id="scroll-dialog-description"   ref={descriptionElementRef1}    >
           
                
              <TextField fullWidth label="* Số lượng"  color="success"
                onChange={(e) => setSoluong(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={soluong}/>
             <TextField fullWidth label="* Giá nhập"  color="success"
                onChange={(e) => setGianhap(e.target.value)}  className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}  type="text"  defaultValue={gianhap}/>
             
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClosesua1} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Quay về </button>
            <button  onClick={handlesua1}  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4">
              Thực hiện  </button>
          </DialogActions>
        </Dialog>
        <Dialog  open={openxoa1}  onClose={handleClosexoa1}
          aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">  {"Bạn có chắc muốn xóa?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn đồng ý xóa thì không thể khôi phục lại dữ liệu! </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <button     className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"     onClick={handleClosexoa1}   >
              Quay lại </button>
            <form onSubmit={handleSubmitxoa1}>
              <button  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                value={macthdn}  onClick={(e) => setMacthdn(e.target.value)} >
                Thực hiện </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
