import React, { useEffect, useState } from "react";
import nhacungcapAPI from "../../api/nhacungcapApi";
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
import InputAdornment from "@mui/material/InputAdornment";

export default function Listncc() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [mancc, setMancc] = useState("");
  const [tenncc, setTenncc] = useState("");
  const [diachi, setDiachi] = useState("");
  const [sdt, setSdt] = useState("");
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
const [counttrang,setCounttrang] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [openalert, setOpenalert] = React.useState(false);
  const handleClosealert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };

  const [openloi, setOpenloi] = React.useState(false);
  const handleCloseloi = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenloi(false);
  };

  const [trang, setTrang] = useState(1);
  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1);
  };
  useEffect(() => {
    (async () => {
      if (trangthai) {
        try {
          const data = await nhacungcapAPI.getList(trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      } else {
        try {
          const data = await nhacungcapAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      }
      const datacount = await nhacungcapAPI.getCount("a");
      const sotrang = Math.ceil(datacount.length/10);

      setCounttrang(sotrang);
    })();
  }, [count]);

  const handleTrangthai = () => {
    setTrangthai("1");
    setCount((e) => e + 1);
  };
  const handleTimkim = () => {
    setTrangthai("");
    setCount((e) => e + 1);
  };
  //THEM
  const [opentrung,setOpentrung] =  React.useState(false);
  const handleClosetrung = () => {
    setOpentrung(false);
  };
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (tenncc && diachi && sdt) {
      const check = await nhacungcapAPI.checktrung(tenncc);
      if (check.length == 0) {
      await nhacungcapAPI.create(tenncc, diachi, sdt);
      setOpenadd(false);
      setOpenalert(true);
      setTenncc("");
      setDiachi("");
      setSdt("");
      setCount((e) => e + 1);}
      else {setOpentrung(true);}
    }
    if ((!tenncc || !diachi || !sdt) && !openxoa) {
      setOpenloi(true);
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
    setTenncc("");
    setSdt("");
    setDiachi("");
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

  //sua
  const [opensuatrung, setOpensuatrung] = React.useState(false);
  const handleClosesuatrung = () => {
    setOpensuatrung(false);  };
  const [opensua, setOpensua] = React.useState(false);
  const [scrollsua, setScrollsua] = React.useState("paper");
  const handlesua = async (e) => {
    e.preventDefault();
    if (tenncc && sdt && diachi) {
      const checktrung = await nhacungcapAPI.suatrung(mancc,tenncc);
      console.log(checktrung);
      if(checktrung.length==0){
      await nhacungcapAPI.sua(mancc, tenncc, sdt, diachi);
      setCount((e) => e + 1);
      setOpensua(false);
      setOpenalert(true);
      setTenncc("");
      setSdt("");
      setDiachi("");
    }else{
      setOpensuatrung(true);
    }
    } else {
      setOpenloi(true);
    }
    setOpen(false);
  };
  const handleClickOpensua = (id, ten, sdt, dc) => () => {
    setOpensua(true);
    setMancc(id);
    setTenncc(ten);
    setSdt(sdt);
    setDiachi(dc);
    setScrollsua("paper");
  };

  const handleClosesua = () => {
    setOpensua(false);
    setTenncc("");
    setSdt("");
    setDiachi("");
  };
  const descriptionElementRefsua = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElementsua } = descriptionElementRefsua;
      if (descriptionElementsua !== null) {
        descriptionElementsua.focus();
      }
    }
  }, [open]);

  //xoa
  const [openxoa, setOpenxoa] = React.useState(false);
  const handleClosexoa = () => {
    setOpenxoa(false);
  };
  const handleClickOpenxoa = (id) => () => {
    setMancc(id);
    setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (mancc) {
      await nhacungcapAPI.delete(mancc);
      setCount((e) => e + 1);
      setOpenalert(true);
    }
    setOpenxoa(false);
  };
  // pha trang

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
          <Link underline="hover" color="inherit">
            Nhà cung cấp
          </Link>
          <Link
            value="1"
            underline="hover"
            color="#339900"
            onClick={handleTrangthai}
          >
            Danh sách
          </Link>
        </Breadcrumbs>
        <div className="bg-slate-200">
          <Paper
            elevation={0}
            className="my-1 mr-[4%] border-[1px] 	border-slate-300	bg-slate-200		 border-solid hover:bg-slate-300"
            component="form"
            sx={{
              p: "0px 4px",
              display: "flex",
              alignItems: "center",
              width: "15%",
              float: "left",
              marginLeft: "39%",
              backgroundColor: " rgb(229 231 235);",
            }}
          >
            <InputBase
              onChange={(e) => setTenget(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm nhà cung cấp"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              onClick={handleTimkim}
              type="button"
              sx={{ p: 1 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="my-1   ">
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
                    <div>
                      <TextField
                        label="* Tên nhà cung cấp"
                        color="success"
                        onChange={(e) => setTenncc(e.target.value)}
                        style={{ display: "block", marginBottom: "20px" }}
                        type="text"
                      />
                      <TextField
                        label="* Số điện thoại"
                        color="success"
                        onChange={(e) => setDiachi(e.target.value)}
                        type="text"
                        style={{ display: "block", marginBottom: "20px" }}
                      />
                      <TextField
                        label="* Địa chỉ"
                        color="success"
                        onChange={(e) => setSdt(e.target.value)}
                        type="text"
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
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-9px]">
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
            {data.length ? (
              data.map((product) => (
                <tr key={product.ma_ncc} className="h-12">
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
                        onClick={handleClickOpenxoa(product.ma_ncc)}
                      >
                        {" "}
                        <DeleteOutlineIcon />
                      </Button>
                    </div>
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100	 border-solid ">
                    <div>
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={handleClickOpensua(
                          product.ma_ncc,
                          product.ten_ncc,
                          product.sdt_ncc,
                          product.diachi_ncc
                        )}
                      >
                        {" "}
                        <ColorizeIcon />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th
                  colspan="6"
                  className=" border-[1px] 	border-white			 border-solid"
                >
                  <div className="  bg-gray-100 h-[57px] pt-4">
                    Không tìm thấy dữ liệu bạn đang tìm!
                  </div>
                </th>
              </tr>
            )}

            <tr>
              <th
                colspan="6"
                className=" border-[1px] 	border-white			 border-solid"
              >
                <div className="rounded-bl-2xl rounded-br-2xl   bg-gray-100 h-[57px] pt-4">
                  {" "}
                  <Pagination
                    style={{
                      display: "flex",
                      flexFlow: "row nowrap",
                      justifyContent: "center",
                    }}
                    color="success"
                    count={counttrang}
                    page={trang}
                    onChange={handleChangepage}
                  ></Pagination>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Snackbar
        open={openalert}
        autoHideDuration={6000}
        onClose={handleClosealert}
      >
        <Alert
          onClose={handleClosealert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thực hiện thao tác thành công - kiểm tra ngay!
        </Alert>
      </Snackbar>
      <Snackbar
        open={opentrung}
        autoHideDuration={6000}
        onClose={handleClosetrung}
      >
        <Alert
          onClose={handleClosetrung}
          severity="error"
          sx={{ width: "100%" }}
        >
          Tên này đã tồn tại - vui lòng nhập tên khác!
        </Alert>
      </Snackbar>
      <Snackbar open={openloi} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert onClose={handleCloseloi} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!
        </Alert>
      </Snackbar>
      <Snackbar  open={opensuatrung}  autoHideDuration={6000}  onClose={handleClosesuatrung}>
        <Alert   onClose={handleClosesuatrung}   severity="error"   sx={{ width: "100%" }} >
          Tên nhà cung cấp này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <form onSubmit={handleAddSubmit}>
        <Dialog
          open={opensua}
          onClose={handleClosesua}
          scroll={scrollsua}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Chỉnh sửa dữ liệu</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <TextField
                label="* Tên nhà cung cấp"
                color="success"
                onChange={(e) => setTenncc(e.target.value)}
                className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}
                type="text"
                defaultValue={tenncc}
              />
              <TextField
                label="* Số điện thoại"
                color="success"
                onChange={(e) => setSdt(e.target.value)}
                className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "20px" }}
                type="text"
                defaultValue={sdt}
              />
              <TextField
                label="* Địa chỉ"
                color="success"
                onChange={(e) => setDiachi(e.target.value)}
                className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block" }}
                type="text"
                defaultValue={diachi}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleClosesua}
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
            >
              Quay về
            </button>
            <button
              onClick={handlesua}
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
            >
              Thực hiện
            </button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openxoa}
          onClose={handleClosexoa}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có chắc muốn xóa?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn đồng ý xóa thì không thể khôi phục lại dữ liệu!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              className=" px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg"
              onClick={handleClosexoa}
            >
              Quay lại
            </button>
            <form onSubmit={handleSubmitxoa}>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg ml-4"
                value={mancc}
                onClick={(e) => setMancc(e.target.value)}
              >
                Thực hiện
              </button>
              <div></div>
            </form>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
