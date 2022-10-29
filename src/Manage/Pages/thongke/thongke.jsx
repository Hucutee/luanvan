import React, { useEffect, useState } from "react";
import hoadonnhapAPI from "../../api/hoadonnhapApi";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Listmanager from "../list";
export default function Thongke() {
  const dataNhanvien = useSelector((state) => state?.userNhanvien?.current);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [thang, setThang] = useState(dayjs().$y + "-" + (dayjs().$M + 1));
  const [nam, setNam] = useState(dayjs().$y);
  const [count, setCount] = useState(0);
  const [tongdb, setTongdb] = useState([]);
  const [tongdn, setTongdn] = useState([]);
  const [tongdbn, setTongdbn] = useState([]);
  const [tongdnn, setTongdnn] = useState([]);
  const [thang1, setThang1] = useState("");
  const [nam1, setNam1] = useState("");
  const [nam2, setNam2] = useState("");
  const [manv, setManv] = useState("");
  const [ngaynhap, setNgaynhap] = React.useState(null);
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
  //danh sach
  const handleChangepage = (event, value) => {
    setTrang(value);
    setCount((e) => e + 1);
  };
  useEffect(() => {
    (async () => {
      if (dataNhanvien.length == 0) {
        navigate("/Manage");
      }
      console.log(thang);

      try {
        const tt = await hoadonnhapAPI.tongnhapthang(thang);
        setTongdn(tt);
        console.log(tt);
        const ttt = await hoadonnhapAPI.tongbanthang(thang);
        setTongdb(ttt);
        console.log(ttt);
        const tttt = await hoadonnhapAPI.tongnhapthang(nam);
        setTongdnn(tttt);
        console.log(tttt);
        const ttttt = await hoadonnhapAPI.tongbanthang(nam);
        setTongdbn(ttttt);
        console.log(ttttt);
      } catch (e) {
        console.log("loi lay dl", e);
      }
    })();
  }, [count]);

  const handleTrangthai = () => {
    setTrangthai("1");
    setCount((e) => e + 1);
  };
  const handlethang = () => {
    if ((nam1, thang1)) {
      setThang(nam1 + "-" + thang1);
      console.log(nam1, thang1);
    }
    setCount((e) => e + 1);
  };
  const handlenam = () => {
    if ((nam2)) {
      setNam(nam2);
    }
    setCount((e) => e + 1);
  };
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
          style={{ fontSize: "13px", lineHeight: "50px", marginLeft: "9.5%" }}
        >
          <Link underline="hover" color="inherit" href="">
            {" "}
            Quản lý{" "}
          </Link>
          <Link underline="hover" color="inherit">
            {" "}
            Thống kê{" "}
          </Link>
          <Link
            value="1"
            underline="hover"
            color="#339900"
            onClick={handleTrangthai}
          >
            {" "}
            Danh sách{" "}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="w-[84%] mx-[8%] ">
        <div
          style={{ width: "18%", float: "left", backgroundColor: "#f8f8f8" }}
        >
          <Listmanager />
        </div>
        <div style={{ width: "79%", float: "right" }}>
          <div className="grid grid-cols-2 gap-2">
            <div className="  bg-gray-50  mr-[10%]">
              <div
                style={{ fontSize: "20px", fontWeight: "500" }}
                className="  text-white  bg-green-700 h-[57px] pt-3 pl-4 text-center "
              >
                Doanh thu tháng {thang.slice(5, 7)}-{thang.slice(0, 4)}{" "}
              </div>
              <div
                style={{ fontSize: "16px", fontWeight: "400" }}
                className="grid grid-cols-2 gap-2 text-center pt-1 "
              >
                <div className="p-2">
                  Số lượng nhập:{" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#ABD373",
                    }}
                  >
                    {tongdn[0]?.tongsl ? tongdn[0]?.tongsl : 0}{" "}
                  </p>{" "}
                  Sản phẩm{" "}
                  <div className="pt-5">
                    Tổng tiền nhập:{" "}
                    <p>
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "50px",
                          fontWeight: "600",
                          color: "#ABD373",
                          fontFamily: "IBM Plex Sans,sans-serif",
                        }}
                      >
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tongdn[0]?.tonggia)}
                      </span>
                    </p>{" "}
                  </div>
                </div>
                <div className="p-2">
                  Số lượng bán:{" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#ABD373",
                    }}
                  >
                    {tongdb[0]?.tongsl ? tongdb[0]?.tongsl : 0}{" "}
                  </p>{" "}
                  Sản phẩm{" "}
                  <div className="pt-5">
                    Tổng tiền bán:{" "}
                    <p>
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "50px",
                          fontWeight: "600",
                          color: "#ABD373",
                          fontFamily: "IBM Plex Sans,sans-serif",
                        }}
                      >
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tongdb[0]?.tonggia)}
                      </span>
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="text-center bg-gray-200">
                <span style={{ fontSize: "18px", fontWeight: "400" }}>
                  Lợi nhuận: &ensp;
                </span>{" "}
                <span
                  style={{
                    fontSize: "24px",
                    lineHeight: "50px",
                    fontWeight: "600",
                    color: "#339900",
                    fontFamily: "IBM Plex Sans,sans-serif",
                  }}
                >
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(tongdb[0]?.tonggia - tongdn[0]?.tonggia)}
                </span>{" "}
              </div>
            </div>

            <div className="  bg-gray-50  mr-[10%]">
              <div
                style={{ fontSize: "20px", fontWeight: "500" }}
                className="  text-white  bg-green-700 h-[57px] pt-3 pl-4 text-center "
              >
                Doanh thu năm {nam}
              </div>
              <div
                style={{ fontSize: "16px", fontWeight: "400" }}
                className="grid grid-cols-2 gap-2 text-center pt-1 "
              >
                <div className="p-2">
                  Số lượng nhập:{" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#ABD373",
                    }}
                  >
                    {tongdnn[0]?.tongsl ? tongdnn[0]?.tongsl : 0}{" "}
                  </p>{" "}
                  Sản phẩm{" "}
                  <div className="pt-5">
                    Tổng tiền nhập:{" "}
                    <p>
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "50px",
                          fontWeight: "600",
                          color: "#ABD373",
                          fontFamily: "IBM Plex Sans,sans-serif",
                        }}
                      >
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tongdnn[0]?.tonggia)}
                      </span>
                    </p>{" "}
                  </div>
                </div>
                <div className="p-2">
                  Số lượng bán:{" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#ABD373",
                    }}
                  >
                    {tongdbn[0]?.tongsl ? tongdbn[0]?.tongsl : 0}{" "}
                  </p>{" "}
                  Sản phẩm{" "}
                  <div className="pt-5">
                    Tổng tiền bán:{" "}
                    <p>
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "50px",
                          fontWeight: "600",
                          color: "#ABD373",
                          fontFamily: "IBM Plex Sans,sans-serif",
                        }}
                      >
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tongdbn[0]?.tonggia)}
                      </span>
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="text-center bg-gray-200">
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  Lợi nhuận: &ensp;
                </span>{" "}
                <span
                  style={{
                    fontSize: "24px",
                    lineHeight: "50px",
                    fontWeight: "600",
                    color: "#339900",
                    fontFamily: "IBM Plex Sans,sans-serif",
                  }}
                >
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(tongdbn[0]?.tonggia - tongdnn[0]?.tonggia)}
                </span>{" "}
              </div>
            </div>
           
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="">
                <TextField
                  color="success"
                  size="small"
                  style={{ width: "70px" }}
                  id="outlined-required"
                  onChange={(e) => setThang1(e.target.value)}
                  label="Tháng"
                />
                <TextField
                  color="success"
                  size="small"
                  id="outlined-disabled"
                  onChange={(e) => setNam1(e.target.value)}
                  label="Năm"
                  style={{ width: "70px" }}
                />
                <IconButton
                  size="small"
                  className="a1"
                  onClick={handlethang}
                  type="button"
                  sx={{ p: 1 }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </div>
              <div>
              <TextField
                  color="success"
                  size="small"
                  id="outlined-disabled"
                  onChange={(e) => setNam2(e.target.value)}
                  label="Năm"
                  style={{ width: "70px" }}
                />
                <IconButton
                  size="small"
                  className="a1"
                  onClick={handlenam}
                  type="button"
                  sx={{ p: 1 }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
