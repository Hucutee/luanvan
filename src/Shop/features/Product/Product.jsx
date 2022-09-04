import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box, Grid, Skeleton } from "@mui/material";
import textt from "./text.png";
import "./stylesp.css";
import Zoom from "react-img-zoom";
import { Link, useNavigate } from "react-router-dom";
import chitietsanphamAPI from "../../../Manage/api/chitietsanphamApi";

Product.propTypes = {
  product: PropTypes.object,
};

function Product(product) {
  const [data, setData] = useState([]);
  const [gia1, setGia1] = useState([]);
  const [gia2, setGia2] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await chitietsanphamAPI.getsp(product.data.ma_sp);
        setData(data);
        if (data.length == 1) {
          const dataa = await chitietsanphamAPI.getgia1(product.data.ma_sp);
          setGia1(dataa);
        }
        if (data.length > 1) {
          const dataaa = await chitietsanphamAPI.getgia2(product.data.ma_sp);
          setGia2(dataaa);
        }
      } catch (e) {
        console.log("loi lay dl", e);
      }
    })();
  }, []);
  return (
    <div>
      {data.length > 1
        ? gia2.map((product) => (
            <div className="ml-2 mb-2">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.min)}{" "}
              -{" "}
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.max)}{" "}
            </div>
          ))
        : gia1.map((product) => <div className="ml-2 mb-2">{new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.giaban)}</div>)}
    </div>
  );
}

export default Product;
