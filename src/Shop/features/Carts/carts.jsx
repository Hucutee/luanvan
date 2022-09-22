import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Zoom from "react-img-zoom";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setQuantity } from "../../app/cartSlide";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function Carts() {
  const Alert = React.forwardRef(function Alert(props, ref) {return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; });
  const dataCart = useSelector((state) => state?.cart?.cartItem);
  const dataUser = useSelector((state) => state?.user?.current);

  const dispatch = useDispatch();

  const deleteCart = (value) => {
    dispatch(removeFromCart({ ma_ctsp: value }));
  };
  const handlesl = (value) => {
        console.log(value.so_luong);
    if(value.so_luong > 0 && value.so_luong % 1 ==0){
      dispatch(setQuantity(value));
    }else {
      
    }
  };
  const [openchecksl, setOpenchecksl] = React.useState(false);
  const handlechecksl = () => {  setOpenchecksl(false); };
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
                <th className="border-[1px] 	border-gray-200	border-solid">
                  Chọn
                </th>
                <th className=" border-[1px] 		border-gray-200	 border-solid">
                  Hình ảnh
                </th>
                <th className="border-[1px] 	border-gray-200	border-solid">
                  Sản phẩm
                </th>
                <th className="border-[1px]	border-gray-200	border-solid">Giá</th>
                <th className="border-[1px] 	border-gray-200	border-solid">
                  Số lượng
                </th>
                <th className="border-[1px] 	border-gray-200	border-solid">
                  Tổng
                </th>

                <th className="border-[1px] 	border-gray-200	border-solid">
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody className="">
              {dataCart?.map((product) => (
                <tr key={product.ma_ctsp} className="h-10">
                  <td className="border-[1px] 	border-gray-200 			 border-solid "></td>
                  <td className="border-[1px] w-[200px] p-2 border-gray-200	 			 border-solid ">
                    <Zoom
                      img={require("../../../images/" + product.hinh_anh)}
                      height={200}
                    />
                  </td>
                  <td className="border-[1px] 	border-gray-200		 border-solid ">
                    {product.ten_sp} <br />
                    Kích thước: {product.ten_kt}
                  </td>
                  <td className="border-[1px] 	border-gray-200			 border-solid ">
                    {product.gia_ban}{" "}
                  </td>
                  <td className="border-[1px] w-[15%]	border-gray-200			 border-solid ">
                    <input style={{width: "100px", height:"40px" , hover:{ border: "1px solid #339900"}, borderRadius: "5px", paddingLeft: "40px"}}
                      color="success"
                      id="outlined-number"
                      type="number" 
                      min={1} 
                      defaultValue={product.so_luong}
                      onChange={(e) => handlesl({ma_ctsp: product.ma_ctsp, so_luong: e.target.value})}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />{" "}
                  </td>
                  <td className="border-[1px] w-[17%] 	border-gray-200			 border-solid ">
                    {product.so_luong * product.gia_ban}{" "}
                  </td>
                  <td className="border-[1px] 	border-gray-200 			 border-solid ">
                    <ClearIcon
                      className="a1"
                      onClick={(e) => deleteCart(product.ma_ctsp)}
                    />{" "}
                  </td>
                </tr>
              ))}

              <tr className="h-14">
                <td
                  colspan="7"
                  className="border-[1px] 	border-gray-200	 bg-gray-50	 border-solid "
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
       ):(
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
      </div>
      <Snackbar  open={openchecksl} autoHideDuration={6000} onClose={handlechecksl} >
        <Alert  onClose={handlechecksl}  severity="error"  sx={{ width: "100%" }}>  Số lượng phải là số nguyên lớn hơn 0!</Alert>
      </Snackbar>
    </Box>
  );
}

export default Carts;
