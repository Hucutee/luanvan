import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Zoom from "react-img-zoom";
import { Button, ButtonGroup, FormHelperText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addtoCarttt, removeAllCarttt } from "../../app/cartthanhtoan";
import OutlinedInput from "@mui/material/OutlinedInput";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import phieugiamgiaAPI from "../../../Manage/api/phieugiamgiaApi";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import diachiAPI from "../../../Manage/api/diachi";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
function Thanhtoan() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const dataCart = useSelector((state) => state?.cart?.cartItem);
  const dataCarttt = useSelector((state) => state?.carttt?.cartttItem);
  const dataUser = useSelector((state) => state?.user?.current);
  const dispatch = useDispatch();
  const [gia, setGia] = useState("");
  const [count, setCount] = useState(0);
  const [pgg, setPgg] = React.useState("");
  const [datapgg, setDatapgg] = React.useState([]);
  const handleChangepgg = (event) => {
    setPgg(event.target.value);
    console.log(event.target.value);
  };
  const [diachi, setDiachi] = React.useState("");
  const [diachimoi, setDiachimoi] = React.useState("");
  const handleChangediachi = (event) => {
    setDiachi(event.target.value);
    console.log(event.target.value);
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [data, setData] = React.useState([]);
  const [datadiachi, setDatadiachi] = React.useState([]);
  const [datakm, setDatakm] = React.useState([]);
  const [openchecksl, setOpenchecksl] = React.useState(false);
  const handlechecksl = () => {
    setOpenchecksl(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const dc = await diachiAPI.getid(dataUser[0].ma_nd); console.log(loaitt);
        setDatadiachi(dc);
        const dataa = await chitietsanphamApi.getCount();
        const km = await khuyenmaiAPI.getCount();
        setDatakm(km);
        console.log(dataa);
        console.log(km);
        setData(dataa);
        dispatch(removeAllCarttt());
        let a = 0;
        if (dataCart.length !== 0) {
          for (let i = 0; i < dataCart.length; i++) {
            let check = 0;

            if (km.length !== 0) {
              for (let j = 0; j < km.length; j++) {
                if (km[j].ma_sp == dataCart[i].ma_sp) {
                  check = 1;
                  a =
                    a +
                    dataCart[i]?.so_luong * dataCart[i]?.gia_ban -
                    dataCart[i]?.so_luong *
                      ((dataCart[i]?.gia_ban * km[j].phantram_km) / 100);
                  dispatch(
                    addtoCarttt({
                      ma_ctsp: dataCart[i].ma_ctsp,
                      hinh_anh: dataCart[i].hinh_anh,
                      ten_sp: dataCart[i].ten_sp,
                      ten_kt: dataCart[i].ten_kt,
                      so_luong: dataCart[i].so_luong,
                      gia:
                        dataCart[i]?.gia_ban -
                        (dataCart[i]?.gia_ban * km[j].phantram_km) / 100,
                    })
                  );
                }
              }
            }
            if (check == 0) {
              a = a + dataCart[i]?.so_luong * dataCart[i]?.gia_ban;
              dispatch(
                addtoCarttt({
                  ma_ctsp: dataCart[i].ma_ctsp,
                  hinh_anh: dataCart[i].hinh_anh,
                  ten_sp: dataCart[i].ten_sp,
                  ten_kt: dataCart[i].ten_kt,
                  so_luong: dataCart[i].so_luong,
                  gia: dataCart[i]?.gia_ban,
                })
              );
            }
          }
          setGia(a);
          const pgg1 = await phieugiamgiaAPI.getdieukien(a);
          setDatapgg(pgg1);
        }
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);
  const [trangthai, setTrangthai] = React.useState(0);

  const [ho, setHo] = React.useState({ textmask: "" });
  const handleChangeho = (event) => {
    setHo({ ...ho, [event.target.name]: event.target.value });
    setCount((e) => e + 1);
  };
  const [ten, setTen] = React.useState({ textmask: "" });
  const handleChangeten = (event) => {
    setTen({ ...ten, [event.target.name]: event.target.value });
    setCount((e) => e + 1);
  };
  const [sdt, setSdt] = React.useState({ textmask: "" });
  const handleChangesdt = (event) => {
    setSdt({ ...sdt, [event.target.name]: event.target.value });
    setCount((e) => e + 1);
  };
  const [loaitt, setLoaitt] = React.useState(0);
  const handleloaitt = (event) => {
    setLoaitt(event.target.value);
    setCount((e) => e + 1);
  };
  const handledangky = async () => {};
  const handleadddc = async () => {
    if (diachimoi != "") {
      await diachiAPI.create(dataUser[0].ma_nd, diachimoi);
      setCount((e) => e + 1);
      setOpenloi(true);
    }
  };
  const [openloi, setOpenloi] = React.useState(false);
  const handleCloseloi = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenloi(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            lineHeight: "40px",
            marginLeft: "13%",
          }}
        >
          <Link underline="hover" color="inherit" to="/app">
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit" to="/product/cart">
            Giỏ hàng
          </Link>
          <Link to="" underline="hover" style={{ color: "#339900" }}>
            Thanh toán
          </Link>
        </Breadcrumbs>
      </div>
      <div className="w-[74%] mx-[13%] ">
        <div style={{ width: "50%", float: "left", paddingRight: "5%" }}>
          <Box component="form" noValidate sx={{ mt: 0, padding: 2 }}>
            <Typography sx={{marginBottom:"5px"}}>Thông tin liên lạc</Typography>
            <FormControl
              variant="outlined"
              sx={{ m: 1, width: "95%" }}
              size="small"
            >
              <InputLabel color="success" htmlFor="formatted-text-mask-input">
                Số điện thoại
              </InputLabel>
              <OutlinedInput
                color="success"
                value={sdt.textmask}
                onChange={handleChangesdt}
                name="textmask"
                label="so dien thoai"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
              {trangthai && sdt.textmask.length == 0 ? (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Số điện thoại không được để trống
                </FormHelperText>
              ) : (sdt.textmask.length < 10 && sdt.textmask.length > 0) ||
                sdt.textmask.match(/^[^a-zA-Z1-9]+$/) ? (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Số điện thoại gồm 10 đến 12 chữ số
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <FormControl
              size="small"
              variant="outlined"
              sx={{ m: 1, width: "55%", marginRight: "5%" }}
            >
              <InputLabel color="success" htmlFor="outlined-weight-helper-text">
                Họ và tên đệm
              </InputLabel>
              <OutlinedInput
                color="success"
                value={ho.textmask}
                onChange={handleChangeho}
                name="textmask"
                id="outlined-weight-helper-text"
                label="Họ vàn tên đệm"
              />
              {trangthai && ho.textmask.length == 0 ? (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Họ và tên đệm không được để trống
                </FormHelperText>
              ) : ho.textmask.match(
                  /^[a-zA-Z_ ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéẾếêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u
                ) || ho.textmask.length == 0 ? (
                <></>
              ) : (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Họ và tên đệm chỉ gồm chữ cái và khoảng trắng
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              variant="outlined"
              sx={{ m: 1, width: "33%" }}
              size="small"
            >
              <InputLabel color="success" htmlFor="formatted-text-mask-input">
                Tên
              </InputLabel>
              <OutlinedInput
                color="success"
                value={ten.textmask}
                onChange={handleChangeten}
                name="textmask"
                label="ten"
                id="formatted-text-mask-input"
              />
              {trangthai && ten.textmask.length == 0 ? (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Tên không được để trống
                </FormHelperText>
              ) : ten.textmask.match(
                  /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêéẾìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/u
                ) || ten.textmask.length == 0 ? (
                <></>
              ) : (
                <FormHelperText error id="component-error-text" sx={{ m: 0 }}>
                  Tên chỉ gồm chữ cái
                </FormHelperText>
              )}
            </FormControl>
            <Typography sx={{ marginTop: "30px" ,marginBottom:"5px"}}>
              Địa chỉ giao hàng
            </Typography>
            
              <FormControl sx={{m:1}} size="small" color="success" fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  {" "}
                  Chọn địa chỉ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={diachi}
                  label="Chon dia chi"
                  onChange={handleChangediachi}
                  sx={{ width: "95%" }}
                >
                  {datadiachi.length > 0 ? (
                    datadiachi.map((aa) => (
                      <MenuItem value={aa.ten_dc}>{aa.ten_dc} </MenuItem>
                    ))
                  ) : (
                    <MenuItem>Bạn chưa có địa chỉ</MenuItem>
                  )}
                </Select>
              </FormControl>
            
           <Box sx={{height:"70px"}}>
           <Typography sx={{ marginTop: "20px" ,marginBottom:"5px"}}>Thêm địa chỉ mới</Typography>
            
            <FormControl
              size="small"
              variant="outlined"
              sx={{ m: 1, width: "70%", marginRight: "2%", float: "left" }}
            >
              <InputLabel
                color="success"
                htmlFor="outlined-weight-helper-text"
              >
                Nhập địa chỉ mới
              </InputLabel>
              <OutlinedInput
                color="success"
                onChange={(e) => setDiachimoi(e.target.value)}
                name="textmask"
                id="outlined-weight-helper-text"
                label="Nhập địa chỉ mới"
              />
            </FormControl>

            <Button
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#ABD373",
                m: 1,
                width: "20%",
                float: "left",
              }}
              onClick={handleadddc}
            >
              Thêm
            </Button>
           </Box>

          </Box>
          <Typography sx={{pt:2, pl:2 ,marginBottom:"5px" }}>
            Phương thức thanh toán
          </Typography>
          <FormControl sx={{m:1,ml:3}} size="small" color="success" fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  {" "}
                  Chọn phương thứng thanh toán
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Chọn phương thứng thanh toán"
                  onChange={handleloaitt}
                  sx={{ width: "89%" }}
                >
                  
                      <MenuItem value={1}>Thanh toán khi nhận hàng </MenuItem>
                      <MenuItem value={2}>Thanh toán online </MenuItem>

                </Select>
              </FormControl>
              
        <Box >
          <div style={{ marginTop: "15px", padding:"23px" }}>
            <Button
              variant="contained"
              color="success"
              sx={{ backgroundColor: "#ABD373", height: "55px", width:"98%" }}
              onClick={goToTop}
            >
              <Link to="/products">Mua hàng</Link>
            </Button>
          </div>
        </Box>
        </div>
        <div
          style={{
            width: "50%",
            backgroundColor: "#f8f8f8",
            padding: "20px",
            paddingBottom: "0px",
            float: "right",
          }}
        >
          {dataUser.length > 0 ? (
            dataCarttt.length > 0 ? (
              <table className=" w-[100%] rounded-lg	 	">
                <tbody className="">
                  {dataCarttt?.map((product) => (
                    <tr key={product.ma_ctsp} className="h-10">
                      <td className=" w-[100px] p-2 ">
                        <Zoom
                          img={require("../../../images/" + product.hinh_anh)}
                          height={80}
                        />
                      </td>
                      <td className=" ">
                        {product.ten_sp}, {product.ten_kt} <br />
                        <FormHelperText id="component-error-text" sx={{ m: 0 }}>
                          Gía:{" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.gia)}{" "}
                          x{product.so_luong}
                        </FormHelperText>
                      </td>

                      <td className=" ">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.gia * product.so_luong)}

                        <FormHelperText id="component-error-text" sx={{ m: 0 }}>
                          {" "}
                        </FormHelperText>
                      </td>
                    </tr>
                  ))}

                  <tr
                    style={{ height: "100px" }}
                    className="border-t-[2px] 	border-gray-300			 border-solid "
                  >
                    <td colspan="2" className="p-2 ">
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        Phí vận chuyển
                      </p>
                      <FormHelperText id="component-error-text" sx={{ m: 0 }}>
                        Tổng đơn từ 500k sẽ được freeship
                      </FormHelperText>
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#339900",
                        fontWeight: "500",
                        paddingTop: "10px",
                      }}
                    >
                      {gia >= 500000 ? (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(0)}{" "}
                        </p>
                      ) : (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(30000)}{" "}
                        </p>
                      )}
                      <FormHelperText id="component-error-text" sx={{ m: 0 }}>
                        {" "}
                      </FormHelperText>
                    </td>
                  </tr>
                  <tr
                    style={{ height: "100px" }}
                    className="border-t-[2px] 	border-gray-300			 border-solid "
                  >
                    <td colspan="3" className="p-2 ">
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          width: "65%",
                          float: "left",
                          marginTop: "20px",
                        }}
                      >
                        Phiếu giảm giá
                      </p>
                      <FormControl
                        color="success"
                        fullWidth
                        sx={{ mb: 2, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-helper-label">
                          Chọn
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={pgg}
                          label="chon"
                          onChange={handleChangepgg}
                        >
                          {datapgg.length > 0 ? (
                            datapgg.map((aa) => (
                              <MenuItem value={aa.so_tien_giam}>
                                {aa.ten_pgg} <br /> Số tiền giảm:{" "}
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(aa.so_tien_giam)}{" "}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem>
                              Hiện không tìm thấy phiếu giảm giá phù hợp
                            </MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#339900",
                        fontWeight: "500",
                        paddingTop: "10px",
                      }}
                    ></td>
                  </tr>
                  <tr
                    style={{ height: "100px" }}
                    className="border-t-[2px] 	border-gray-300			 border-solid "
                  >
                    <td colspan="2" className="p-2 ">
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        Tổng thanh toán
                      </p>
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#339900",
                        fontWeight: "500",
                        paddingTop: "10px",
                      }}
                    >
                      {gia - pgg >= 500000 ? (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(gia - pgg)}{" "}
                        </p>
                      ) : (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(gia - pgg + 30000)}{" "}
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              false
            )
          ) : (
            false
          )}
        </div>

      </div>
      <Snackbar open={openloi} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert
          onClose={handleCloseloi}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thêm địa chỉ mới thành công!
        </Alert>
      </Snackbar>
    </Box>
  );
}
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="$###########"
      definitions={{
        "#": /[0-9]/,
        $: /[0]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Thanhtoan;
