import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Zoom from "react-img-zoom";
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';

function Carts(props) {
  const handledelete=(value)=>{
    props.deletecart({ma_ctsp: value});
  }
  const handlesl = (value)=>{
    props.deletecart({ma_ctsp: value.ma_ctsp});

    props.addcart({ma_ctsp:value.ma_ctsp, ten_sp:value.ten_sp,ten_kt: value.ten_kt ,hinh_anh: value.hinh_anh,so_luong:value.so_luong,gia_ban:value.gia_ban })  
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
                lineHeight: "40px", marginLeft:"13%"
              }}
            >
              <Link underline="hover" color="inherit" to="/app">
                Trang chủ
              </Link>
              
              <Link to="" underline="hover" style={{color:"#339900"}}>
            Giỏ hàng
              </Link>
            </Breadcrumbs>
          </div>
     <div className="w-[74%] mx-[13%] ">
     {props.carts.length ? (
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
              <th className="border-[1px]	border-gray-200	border-solid">
                Giá
              </th>
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
            
             { props.carts.map((product) => (
                <tr key={product.ma_ctsp} className="h-10">
                <td className="border-[1px] 	border-gray-200 			 border-solid ">
                    </td>
                    <td className="border-[1px] w-[160px] p-2 border-gray-200	 			 border-solid ">
                   <Zoom
                    img={require("../../../images/" + product.hinh_anh )}
                    height={180}
                  
                  />
                   </td>
                  <td className="border-[1px] 	border-gray-200		 border-solid ">
                    {product.ten_sp} <br/>Kích thước: {product.ten_kt}</td>
                    <td className="border-[1px] 	border-gray-200			 border-solid ">
                    {product.gia_ban} </td>
                  <td className="border-[1px] 	border-gray-200			 border-solid ">
                  <TextField
     color="success"
          id="outlined-number"
          type="number"
          defaultValue={product.so_luong}
          onChange={(e)=>handlesl(product)}
          InputLabelProps={{
            shrink: true,
          }}
        />  </td>
                    <td className="border-[1px] 	border-gray-200			 border-solid ">
                    {product.so_luong*product.gia_ban}  </td>
                    <td className="border-[1px] 	border-gray-200 			 border-solid ">
                    <ClearIcon className="a1"  onClick={(e)=>(handledelete(product.ma_ctsp))}/>  </td>
                    
                 
                  
                </tr>
              ))}
           
            <tr className="h-14">
              <td  colspan="7"   className="border-[1px] 	border-gray-200	 bg-gray-50	 border-solid ">
              
                  
                  
              
              </td>
            </tr>
          </tbody>
        </table> ) : (
             
                 <div ><div style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center", fontSize: "18px" ,fontWeight: "500",
                }} className="  h-[57px] pt-4 w-[100%]" >  Giỏ hàng của bạn hiện đang trống! </div> <div style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}><Button color="success" variant="outlined"><Link to="/products">Đến trang mua hàng</Link></Button></div> </div> 
                
            )}
        </div>
        
    </Box>
  );
}
const mapStateToProps = (state) => {
    return { data: state.users ,carts : state.carts }
   }
  const mapDispatchToProps = (dispatch) => {
    return{
      deletecart: (hauu) => dispatch({ type: "DELETE_CART", payload: hauu }),
      addcart: (hauu) => dispatch({ type: "ADD_CART", payload: hauu }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carts);
