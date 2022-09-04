import React, { useEffect, useState } from "react";
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
import InputAdornment from "@mui/material/InputAdornment";

export default function Listlsp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [malsp, setMalsp] = useState("");
  const [tenlsp, setTenlsp] = useState("");
  const [tenget, setTenget] = useState("");
  const [trangthai, setTrangthai] = useState("1");
  const [open, setOpen] = React.useState(false);
  const [counttrang, setCounttrang] = useState("");
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
          const data = await loaisanphamAPI.getList(trang);
          setData(data);
          console.log(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      } else {
        try {
          const data = await loaisanphamAPI.getid(tenget, trang);
          setData(data);
        } catch (e) {
          console.log("loi lay dl", e);
        }
      }
      const datacount = await loaisanphamAPI.getCount("a");
      const sotrang = Math.ceil(datacount.length / 10);

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
    if (tenlsp) {
      const check = await loaisanphamAPI.checktrung(tenlsp);
      if (check.length == 0) {
      await loaisanphamAPI.create(tenlsp);
      setOpenadd(false);
      setOpenalert(true);
      setTenlsp("");

      setCount((e) => e + 1);}
      else {setOpentrung(true);}
    }
    if (!tenlsp && !openxoa) {
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
    setTenlsp("");
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
    if (tenlsp) {
      const checktrung = await loaisanphamAPI.suatrung(malsp,tenlsp);
      console.log(checktrung);
      if(checktrung.length==0){
        await loaisanphamAPI.sua(malsp, tenlsp);
      setCount((e) => e + 1);
      setOpensua(false);
      setOpenalert(true);
      setTenlsp("");
      }else{
        setOpensuatrung(true);
      }
    } else {
      setOpenloi(true);
    }
    setOpen(false);
  };
  const handleClickOpensua = (id, ten) => () => {
    setOpensua(true);
    setMalsp(id);
    setTenlsp(ten);

    setScrollsua("paper");
  };

  const handleClosesua = () => {
    setOpensua(false);
    setTenlsp("");
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
    setMalsp(id);
    setOpenxoa("true");
  };
  const handleSubmitxoa = async (e) => {
    e.preventDefault();
    if (malsp) {
      await loaisanphamAPI.delete(malsp);
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
            Loại sản phẩm
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
              placeholder="Tìm Loại sản phẩm"
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
                Thêm loại sản phẩm mới
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
                        label="* Tên loại sản phẩm"
                        color="success"
                        onChange={(e) => setTenlsp(e.target.value)}
                        style={{ display: "block", marginBottom: "10px" }}
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
                  Mã loại sản phẩm
                </div>
              </th>
              <th className="border-[1px] 	border-white	border-solid">
                <div className="  bg-green-700 h-[57px] pt-4 mr-[-6px]">
                  Tên loại sản phẩm
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
                <tr key={product.ma_lsp} className="h-12">
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ma_lsp}{" "}
                  </td>
                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    {product.ten_lsp}
                  </td>

                  <td className="border-[1px] 	border-white	 bg-gray-100			 border-solid ">
                    <div>
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={handleClickOpenxoa(product.ma_lsp)}
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
                          product.ma_lsp,
                          product.ten_lsp 
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
      <Snackbar  open={opensuatrung}  autoHideDuration={6000}  onClose={handleClosesuatrung}>
        <Alert   onClose={handleClosesuatrung}   severity="error"   sx={{ width: "100%" }} >
          Tên loại sản phẩm này đã tồn tại - vui lòng nhập tên khác! </Alert>
      </Snackbar>
      <Snackbar open={openloi} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert onClose={handleCloseloi} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin vào các trường có dấu (*)!
        </Alert>
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
                label="* Tên loại sản phẩm"
                color="success"
          
                onChange={(e) => setTenlsp(e.target.value)}
                className="px-4 py-2 border rounded-lg mb-4"
                style={{ display: "block", marginBottom: "10px" }}
                type="text"
                defaultValue={tenlsp}
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
                value={malsp}
                onClick={(e) => setMalsp(e.target.value)}
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
