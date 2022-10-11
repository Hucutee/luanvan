import React, {useEffect} from "react";
import {useSnackbar} from "notistack";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import payOnlineAPI from "../../../Manage/api/payOnlineAPI";
import donhangAPI from "../../../Manage/api/donhangApi";
import { removeAllCarttt } from "../../app/cartthanhtoan";
import { removeAllCart } from "../../app/cartSlide";
import { removeAllttkh } from "../../app/ttkh";
import { Button } from "@mui/material";

function Kttt() {
  const [lan,setLan]= React.useState(0);
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
            ttkh[0].ten,ttkh[0].diachi,ttkh[0].pgg,ttkh[0].gia,ttkh[0].loaitt,ttkh[0].mand); 
            const maa = await donhangAPI.getdh(dataUser[0].ma_nd);console.log(maa);
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
      } setLan(1);
            dispatch(removeAllCarttt());
             dispatch(removeAllCart());
             dispatch(removeAllttkh());

             
        }
        if(a.Rspcode==="97"){
          setLan(2);
        }
      } catch (error) {
        console.error(error);
      }
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lan]);
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Stack sx={{color: "grey.500"}}>
          {lan == 0 ? <CircularProgress  />:false }
          {lan == 1 ? <CircularProgress color="success" />:false }
          {lan == 2 ? <CircularProgress color="error" />:false }

        </Stack>
      </div>
    </div>
  );
}

export default Kttt;
