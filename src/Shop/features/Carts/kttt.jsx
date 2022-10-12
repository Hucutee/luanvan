import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import payOnlineAPI from "../../../Manage/api/payOnlineAPI";
import donhangAPI from "../../../Manage/api/donhangApi";
import { removeAllCarttt } from "../../app/cartthanhtoan";
import { removeAllCart } from "../../app/cartSlide";
import { removeAllttkh } from "../../app/ttkh";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Kttt() {
  const [lan, setLan] = React.useState(0);
  const url = window.location.search;
  const param = Object.fromEntries(new URLSearchParams(url));
  const dataCart = useSelector((state) => state?.cart?.cartItem);
  const dataCarttt = useSelector((state) => state?.carttt?.cartttItem);
  const dataUser = useSelector((state) => state?.user?.current);
  const ttkh = useSelector((state) => state?.ttkh?.ttkhItem);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const history = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const a = await payOnlineAPI.vnpay_ipn(param);
        console.log(a);
        if (a.RspCode === "00") {
          await donhangAPI.create(
            ttkh[0].ten,
            ttkh[0].diachi,
            ttkh[0].pgg,
            ttkh[0].gia,
            ttkh[0].loaitt,
            ttkh[0].mand
          );
          const maa = await donhangAPI.getdh(dataUser[0].ma_nd);
          console.log(maa);
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
          setTimeout(() => {
            setLan(1);
          }, 2000);
          setTimeout(() => {
            dispatch(removeAllCarttt());
            dispatch(removeAllCart());
            dispatch(removeAllttkh());
            navigation("/products/donhang");
          }, 5000);
        } else {
          setTimeout(() => {
            setLan(2);
          }, 2000);
          setTimeout(() => {
            dispatch(removeAllCarttt());
            dispatch(removeAllttkh());
            navigation("/products/carts");
          }, 5000);
        }
      } catch (error) {
        console.error(error);
      }
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Stack sx={{ color: "grey.500" }}>
          {lan == 0 ? <CircularProgress /> : false}
          {lan == 1 ? (
            <Alert severity="success" sx={{ fontSize: "18px" }}>
              <AlertTitle sx={{ fontSize: "18px" }}>
                Thông báo thành công
              </AlertTitle>
              Thanh toán thành công - hãy kiểm tra lại giỏ hàng nhé!
            </Alert>
          ) : (
            false
          )}
          {lan == 2 ? (
            <Alert severity="error" sx={{ fontSize: "18px" }}>
              <AlertTitle sx={{ fontSize: "18px" }}>Thông báo lỗi</AlertTitle>
              Rất tiếc thanh toán không thành công!
            </Alert>
          ) : (
            false
          )}
        </Stack>
      </div>
    </div>
  );
}

export default Kttt;
