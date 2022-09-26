import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Zoom from "react-img-zoom";
import { Button, ButtonGroup, FormHelperText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart, removeFromCart, setQuantity } from "../../app/cartSlide";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";

import InputBase from "@mui/material/InputBase";

function Carts() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const dataCart = useSelector((state) => state?.cart?.cartItem);
  const dataUser = useSelector((state) => state?.user?.current);
  const dispatch = useDispatch();
  const deleteCart = (value) => {
    dispatch(removeFromCart({ ma_ctsp: value }));
  };
  const [gia, setGia] = useState("");
  const [count, setCount] = useState(0);

  const handlesl = (value) => {
    {
      data.map((data) =>
        data.ma_ctsp == value.ma_ctsp && data.soluong >= value.so_luong
          ? dispatch(setQuantity(value))
          : false
      );
     
    }

    if (!value.so_luong) {
      dispatch(setQuantity({ ma_ctsp: value.ma_ctsp, so_luong: "" }));
    }
    setCount((e) => e + 1)
  };
  const handlexoaall = () => {
    dispatch(removeAllCart()); goToTop();
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [data, setData] = React.useState([]);
  const [nhap, setNhap] = React.useState(0);
  const [datakm, setDatakm] = React.useState([]);
  const [openchecksl, setOpenchecksl] = React.useState(false);
  const handlechecksl = () => {
    setOpenchecksl(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const dataa = await chitietsanphamApi.getCount();
        const km = await khuyenmaiAPI.getCount();
        setDatakm(km);
        console.log(dataa);
        console.log(km);
        setData(dataa);
        let a = 0;
        if (dataCart.length !== 0) {
          for (let i = 0; i < dataCart.length; i++) {
            let check =0;

            if(km.length !== 0){
              for(let j = 0; j < km.length; j++){
               if(km[j].ma_sp == dataCart[i].ma_sp){
                check = 1;
                a =
                a +
                dataCart[i]?.so_luong * dataCart[i]?.gia_ban -dataCart[i]?.so_luong * (dataCart[i]?.gia_ban*km[j].phantram_km/100);
               }
              } 
            }if(check == 0){a = a + dataCart[i]?.so_luong * dataCart[i]?.gia_ban}
          }
          setGia(a);
        }
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);
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

          <Link to="" underline="hover" style={{ color: "#339900" }}>
            Giỏ hàng
          </Link>
        </Breadcrumbs>
      </div>
      <div className="w-[74%] mx-[13%] ">
        {dataUser.length > 0 ? (
          dataCart.length > 0 ? (
            <table className=" w-[100%] text-center rounded-lg	 	">
              <thead className="h-14   bg-gray-100 	">
                <tr>
                  <th className=" border-[1px] 		border-gray-300	 border-solid">
                    Hình ảnh
                  </th>
                  <th className="border-[1px] 	border-gray-300	border-solid">
                    Sản phẩm
                  </th>
                  <th className="border-[1px]	border-gray-300	border-solid">
                    Giá
                  </th>
                  <th className="border-[1px] 	border-gray-300	border-solid">
                    Số lượng
                  </th>
                  <th className="border-[1px] 	border-gray-300	border-solid">
                    Tổng
                  </th>

                  <th className="border-[1px] 	border-gray-300	border-solid">
                    Xóa
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {dataCart?.map((product) => (
                  <tr key={product.ma_ctsp} className="h-10">
                    <td className="border-[1px] w-[200px] p-2 border-gray-300	 			 border-solid ">
                      <Zoom
                        img={require("../../../images/" + product.hinh_anh)}
                        height={200}
                      />
                    </td>
                    <td className="border-[1px] 	border-gray-300		 border-solid ">
                      {product.ten_sp} <br />
                      Kích thước: {product.ten_kt}
                    </td>
                    <td className="border-[1px] 	border-gray-300			 border-solid ">
                      <p>
                        {" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.gia_ban)}
                      </p>
                      {datakm.map((km) =>
                        km.ma_sp == product.ma_sp ? (
                          <p>
                            <p
                              style={{
                                fontSize: "14px",
                                color: "#333",
                                fontWeight: "300",
                              }}
                            >
                              Giảm: {km.phantram_km}%{" "}
                            </p>
                            <p>
                              Còn:{" "}
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                product.gia_ban -
                                  (product.gia_ban * km.phantram_km) / 100
                              )}{" "}
                            </p>
                          </p>
                        ) : (
                          <></>
                        )
                      )}
                    </td>
                    <td className="border-[1px] w-[15%]	border-gray-300			 border-solid ">
                      <Box
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          width: 150,
                        }}
                      >
                        <button
                          value={product.so_luong}
                          style={{
                            marginLeft: "35px",
                            marginRight: "8px",
                            fontSize: "24px",
                          }}
                          onClick={(e) =>
                            handlesl({
                              ma_ctsp: product.ma_ctsp,
                              so_luong: e.target.value - 1,
                            })
                          }
                        >
                          -
                        </button>

                        <InputBase
                          sx={{ ml: 2, flex: 1 }}
                          color="success"
                          value={product.so_luong}
                          onChange={(e) =>
                            handlesl({
                              ma_ctsp: product.ma_ctsp,
                              so_luong: e.target.value,
                            })
                          }
                        />
                        <button
                          value={product.so_luong}
                          style={{ marginRight: "15px", fontSize: "20px" }}
                          onClick={(e) =>
                            handlesl({
                              ma_ctsp: product.ma_ctsp,
                              so_luong: e.target.value - -1,
                            })
                          }
                        >
                          +
                        </button>
                      </Box>
                     
                      {data.map((aa) =>
                        aa.ma_ctsp == product.ma_ctsp ? (
                          <Box
                            sx={{
                              display: "flex",
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                          >
                            <FormHelperText
                              id="component-error-text"
                              sx={{ m: 0 }}
                            >
                              <p>(Hàng trong kho: {aa.soluong})</p>
                            </FormHelperText>
                          </Box>
                        ) : (
                          false
                        )
                      )}
                    </td>
                    <td className="border-[1px] w-[17%] 	border-gray-300			 border-solid ">
                      <p>
                        {" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.so_luong * product.gia_ban)}
                      </p>
                      {datakm.map((km) =>
                        km.ma_sp == product.ma_sp ? (
                          <p>
                            <p
                              style={{
                                fontSize: "14px",
                                color: "#333",
                                fontWeight: "300",
                              }}
                            >
                              Giảm: {km.phantram_km}%{" "}
                            </p>
                            <p>
                              Còn:{" "}
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(
                                product.so_luong * product.gia_ban -
                                  (product.so_luong *
                                    product.gia_ban *
                                    km.phantram_km) /
                                    100
                              )}
                            </p>
                          </p>
                        ) : (
                          <></>
                        )
                      )}
                    </td>
                    <td className="border-[1px] 	border-gray-300 			 border-solid ">
                      <ClearIcon
                        className="a1"
                        onClick={(e) => deleteCart(product.ma_ctsp)}
                      />{" "}
                    </td>
                  </tr>
                ))}

                <tr className="h-14">
                  <td
                    colspan="6"
                    className="border-[1px] 	border-gray-300	 bg-gray-100	 border-solid "
                  ></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
                className="  h-[57px] pt-4 w-[100%]"
              >
                {" "}
                Giỏ hàng của bạn hiện đang trống!{" "}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Button color="success" variant="outlined">
                  <Link to="/products">Đến trang mua hàng</Link>
                </Button>
              </div>{" "}
            </div>
          )
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "500",
              }}
              className="  h-[57px] pt-4 w-[100%]"
            >
              {" "}
              Bạn hãy quay lại sau khi đăng nhập nhé!{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Button color="success" variant="outlined">
                <Link to="/products/dangnhap">Đăng nhập</Link>
              </Button>
            </div>{" "}
          </div>
        )}
       {dataCart.length > 0 ?  <Box sx={{marginTop:"30px"}} >
      <div>
      <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#ABD373", height: "55px" , marginRight: "30px" }} onClick={handlexoaall}
                >
                  Xóa tất cả sản phẩm
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#ABD373", height: "55px" }} onClick={goToTop}
                >
                 <Link to="/products"> Tiếp tục mua hàng</Link>
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#ABD373", height: "55px" , float:"right"}} 
                >
                  Thanh toán
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  sx={{  height: "55px" , marginRight: "30px" , float:"right"}}
                >
                  Tổng:  {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(gia)}
                </Button>
      </div>
      
    </Box>: <></>}
      </div>
      
    </Box>
  );
}

export default Carts;
