import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Zoom from "react-img-zoom";
import { Button, ButtonGroup, FormHelperText, getImageListItemBarUtilityClass, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addtoCarttt, removeAllCarttt } from "../../app/cartthanhtoan";
import { removeAllCart } from "../../app/cartSlide";
import OutlinedInput from "@mui/material/OutlinedInput";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import phieugiamgiaAPI from "../../../Manage/api/phieugiamgiaApi";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import diachiAPI from "../../../Manage/api/diachi";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import donhangAPI from "../../../Manage/api/donhangApi";
import { useNavigate } from "react-router-dom";
import payOnlineAPI from "../../../Manage/api/payOnlineAPI";
import { addtottkh, removeAllttkh } from "../../app/ttkh";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from "@mui/material/FormControlLabel";
import nguoidungApi from "../../../Manage/api/nguoidungApi";

function Thanhtoan() {
  const history = useNavigate();

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
  const [giam, setGiam] = React.useState(0);

  const [datapgg, setDatapgg] = React.useState([]);
  const handleChangepgg = (event) => {
    setPgg(event.target.value);
    setGiam(event.target.value.so_tien_giam);
    console.log(event.target.value);
  };
  const [diachi, setDiachi] = React.useState("");
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
  const [datand, setDatand] = React.useState([]);

  const handlechecksl = () => {
    setOpenchecksl(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const nd = await nguoidungApi.getttnd(dataUser[0].ma_nd);
        setDatand(nd);
        if(nd[0].sdt_nd){
          setSdt({ ...sdt, textmask: nd[0].sdt_nd });
        }
        const dc = await diachiAPI.getid(dataUser[0].ma_nd);
        console.log(loaitt);
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
  const [sonha, setSonha] = React.useState("");
  const [xa, setXa] = React.useState("");
  const [quan, setQuan] = React.useState("");
  const [thanhpho, setThanhpho] = React.useState("");
  const [thieudc, setThieudc] = React.useState(false);
  const [themdc, setThemdc] = React.useState(false);
  const handlethemdc = () => {
    setThemdc(!themdc);
    setCount((e) => e + 1);
  };

  const handleadddc = async () => {
    if (sonha != "" && xa != "" && quan !="" && thanhpho != "") {
      await diachiAPI.create(dataUser[0].ma_nd, sonha +", "+ xa+", "+quan+", "+thanhpho);
      setCount((e) => e + 1);
      setOpenloi(true);     setThemdc(!themdc);
    }else{ setThieudc(true);}      setCount((e) => e + 1);
  };
  const [themsdt, setThemsdt] = React.useState(false);

  const handleaddsdt = async ()=>{
      if(sdt.textmask >9){
        const sdtt = await nguoidungApi.addsdt(dataUser[0].ma_nd,sdt.textmask);setThemsdt(true);
      } setCount((e) => e + 1);
    }
  const [openloi, setOpenloi] = React.useState(false);
  const handleCloseloi = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenloi(false);setThemsdt(false);
  };
  const handlemua = async () => {
    if ( datand[0]?.sdt_nd && diachi && loaitt == 1) {
      if (pgg) {
        if (gia >= 500000) {
          await donhangAPI.create(
            datand[0]?.ten_nd +", "+datand[0]?.sdt_nd,
            diachi,
            pgg.ma_pgg,
            gia - giam,
            loaitt,
            dataUser[0].ma_nd
          );
        } else {
          await donhangAPI.create(
            datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
            diachi,
            pgg.ma_pgg,
            gia - giam + 30000,
            loaitt,
            dataUser[0].ma_nd
          );
        }
      } else {
        if (gia >= 500000) {
          await donhangAPI.create(
            datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
            diachi,
            "PGG1",
            gia - giam,
            loaitt,
            dataUser[0].ma_nd
          );
        } else {
          await donhangAPI.create(
            datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
            diachi,
            "PGG1",
            gia - giam + 30000,
            loaitt,
            dataUser[0].ma_nd
          );
        }
      }
      const maa = await donhangAPI.getdh(dataUser[0].ma_nd);
      console.log(maa);
      if (dataCarttt.length !== 0) {
        for (let i = 0; i < dataCarttt.length; i++) {
          await donhangAPI.addctdh(
            dataCarttt[i].ma_ctsp,
            maa[0].ma_dh,
            dataCarttt[i].so_luong,
            dataCarttt[i].gia
          );
        }
      }
      dispatch(removeAllCarttt());
      dispatch(removeAllCart());
      history(`/products/donhang`);
    }

    if ( datand[0]?.sdt_nd && diachi && loaitt == 2) {
      if (gia >= 500000) {
        if (pgg) {
          dispatch(removeAllttkh());
          dispatch(
            addtottkh({
              ten: datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
              diachi: diachi,
              pgg: pgg.ma_pgg,
              gia: gia - giam,
              loaitt: loaitt,
              mand: dataUser[0].ma_nd,
            })
          );
          const data = await payOnlineAPI.create_payment_url({
            orderType: "billpayment",
            amount: gia-giam,
            bankCode: "",
            language: "vn",
          });      window.location = data;
        } else {
          dispatch(removeAllttkh());
          dispatch(
            addtottkh({
              ten: datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
              diachi: diachi,
              pgg: "PGG1",
              gia: gia - giam,
              loaitt: loaitt,
              mand: dataUser[0].ma_nd,
            })
          );
          const data = await payOnlineAPI.create_payment_url({
            orderType: "billpayment",
            amount: gia-giam,
            bankCode: "",
            language: "vn",
          });      window.location = data;
        }
      } else {
        if (pgg) {
          dispatch(removeAllttkh());
          dispatch(
            addtottkh({
              ten: datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
              diachi: diachi,
              pgg: pgg.ma_pgg,
              gia: gia - giam + 30000,
              loaitt: loaitt,
              mand: dataUser[0].ma_nd,
            })
          );
          const data = await payOnlineAPI.create_payment_url({
            orderType: "billpayment",
            amount: gia-giam+30000,
            bankCode: "",
            language: "vn",
          });      window.location = data;
        } else {
          dispatch(removeAllttkh());
          dispatch(
            addtottkh({
              ten: datand[0]?.ten_nd + ", " + datand[0]?.sdt_nd,
              diachi: diachi,
              pgg: "PGG1",
              gia: gia - giam + 30000,
              loaitt: loaitt,
              mand: dataUser[0].ma_nd,
            })
          );
          const data = await payOnlineAPI.create_payment_url({
            orderType: "billpayment",
            amount: gia-giam+30000,
            bankCode: "",
            language: "vn",
          });      window.location = data;
        }
      }
    }
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
            <Typography sx={{ marginBottom: "5px" ,fontWeight:500}}>
              Thông tin liên lạc
            </Typography>
            <Typography sx={{paddingLeft:2,paddingTop:1,paddingBottom:1,}} >Họ tên: {dataUser[0].ten_nd}</Typography>
            {datand[0]?.sdt_nd ? ( <Typography sx={{paddingLeft:2}} >Số điện thoại: {datand[0].sdt_nd}</Typography>):(
             <span>
               <FormControl
              variant="outlined"
              sx={{ m: 1, width: "95%" }}
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
            <Button onClick={handleaddsdt} sx={{mx:1}} color="success" variant="outlined">Thêm</Button>

             </span>
            ) }

            <Typography sx={{ marginTop: "30px", marginBottom: "5px" ,fontWeight:500}}>
              Địa chỉ giao hàng
            </Typography>

            <FormControl sx={{ m: 1 }}  color="success" fullWidth>
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
            <Button sx={{marginLeft:"10px"}} color="success" variant="outlined" onClick={handlethemdc}>Thêm mới </Button>
            {themdc ? <Box>
              <Typography sx={{ marginTop: "20px", marginBottom: "5px",fontWeight:500 }}>
                Thêm địa chỉ mới
              </Typography>

              <FormControl   size="small"   variant="outlined"   sx={{ m: 1, width: "70%", marginRight: "2%",  }} >
                <InputLabel  color="success"   htmlFor="outlined-weight-helper-text"  >  Số nhà, tên đường  </InputLabel>
                <OutlinedInput color="success"  label="Số nhà, tên đường" onChange={(e) => setSonha(e.target.value)} name="textmask" id="outlined-weight-helper-text" />
                {thieudc && sonha == "" ? ( <FormHelperText error id="component-error-text">  Số nhà không được để trống! </FormHelperText>): false}
              </FormControl>
              <FormControl   size="small"   variant="outlined"   sx={{ m: 1, width: "70%", marginRight: "2%",  }} >
                <InputLabel  color="success"   htmlFor="outlined-weight-helper-text"  >  Xã, phường, thị trấn  </InputLabel>
                <OutlinedInput color="success"  label="Xã, phường, thị trấn" onChange={(e) => setXa(e.target.value)} name="textmask" id="outlined-weight-helper-text" />
                {thieudc && xa == "" ? ( <FormHelperText error id="component-error-text">  Xã, phường không được để trống! </FormHelperText>): false}
              </FormControl>
              <FormControl   size="small"   variant="outlined"   sx={{ m: 1, width: "70%", marginRight: "2%",  }} >
                <InputLabel  color="success"   htmlFor="outlined-weight-helper-text"  >  Quận, huyện  </InputLabel>
                <OutlinedInput color="success"  label="Quận, huyện" onChange={(e) => setQuan(e.target.value)} name="textmask" id="outlined-weight-helper-text" />
                {thieudc && quan == "" ? ( <FormHelperText error id="component-error-text">  Quận, huyện không được để trống! </FormHelperText>): false}
              </FormControl>
              <FormControl   size="small"   variant="outlined"   sx={{ m: 1, width: "70%", marginRight: "2%",  }} >
                <InputLabel  color="success"   htmlFor="outlined-weight-helper-text"  >  Thành phố  </InputLabel>
                <OutlinedInput color="success"  label="Thành phố" onChange={(e) => setThanhpho(e.target.value)} name="textmask" id="outlined-weight-helper-text" />
                {thieudc && thanhpho == "" ? ( <FormHelperText error id="component-error-text">  Thành phố không được để trống! </FormHelperText>): false}
              </FormControl>
             <div> <Button   variant="contained" color="success"
                sx={{   backgroundColor: "#ABD373", m: 1, width: "20%"}} onClick={handleadddc}   >
                Thêm
              </Button></div>
            </Box>: false}
          </Box>
          <Typography sx={{ pt: 2, pl: 2, marginBottom: "5px",fontWeight:500 }}>
            Phương thức thanh toán
          </Typography>
          <FormControl sx={{ pt: 1, pl: 4, marginBottom: "5px" }} success>
                       <RadioGroup 
                         row
                         aria-labelledby="demo-row-radio-buttons-group-label"
                         name="row-radio-buttons-group"  value={loaitt}
                         onChange={handleloaitt}
                       >
                         <FormControlLabel color="success" value="1" control={<Radio color="success" />} label="Thanh toán khi nhận hàng" />
                         <FormControlLabel value="2" control={<Radio color="success" />} label="Thanh toán online" />
                       </RadioGroup>
                     </FormControl>

          <Box>
            <div style={{ marginTop: "15px", padding: "23px" }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "#ABD373",
                  height: "55px",
                  width: "98%",
                }}
                onClick={handlemua}
              >
                <Link to="#">Mua hàng</Link>
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
                        Tổng cộng
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
                      <p>
                        {" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(gia)}{" "}
                      </p>
                    </td>
                  </tr>
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
                              <MenuItem value={aa}>
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
                      {gia >= 500000 ? (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(gia - giam)}{" "}
                        </p>
                      ) : (
                        <p>
                          {" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(gia - giam + 30000)}{" "}
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
      <Snackbar open={themsdt} autoHideDuration={6000} onClose={handleCloseloi}>
        <Alert
          onClose={handleCloseloi}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thêm số điện thoại thành công!
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
