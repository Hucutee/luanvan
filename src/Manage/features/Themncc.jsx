import { red } from "@mui/material/colors";
import React, {useEffect, useState} from "react";
import nhacungcapAPI from "../api/nhacungcapApi";
import axiosClient from "../api/axiosClient";


export default function Themncc() {

  const [data, setData] = useState([]);

  useEffect(() => {
      (async () => {
        try{
          const data = await nhacungcapAPI.getList();
          console.log(data);
          setData(data);
      }catch (e){
        console.log("loi lay dl", e)

      }
      })()
  },[]);

  return (
    <div>
       <div>
        {data.map((product) => (
          <div item key={product.ma_ncc} sm={4}>
            {product.ma_ncc} {product.ten_ncc}
          </div>
        ))}
      </div>
    </div>
  );
}
