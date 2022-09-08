import axiosClient from "./axiosClient";

const chitietsanphamApi = {
  create(sp,kt,sl,gb,tt,ha,tenkt,tensp) {
    const API_URL = `/chitietsanpham/add/${sp}&&${kt}&&${sl}&&${gb}&&${tt}&&${ha}&&${tenkt}&&${tensp}`;
    return axiosClient.get(API_URL);
  },
  checktrung(sp,kt) {
    const API_URL = `/chitietsanpham/checktrung/${sp}&&${kt}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/chitietsanpham/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/chitietsanpham/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/chitietsanpham/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,sp,tensp,kt,tenkt,sl,gb,tt,ha) {
    const API_URL = `/chitietsanpham/sua/${id}&&${sp}&&${tensp}&&${kt}&&${tenkt}&&${sl}&&${gb}&&${tt}&&${ha}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/chitietsanpham";
    return axiosClient.get(API_URL);
  },
  suatrung(mactsp,masp,makt) {
    const API_URL = `/chitietsanpham/suatrung/${mactsp}&&${masp}&&${makt}`;
    return axiosClient.get(API_URL);
  },
//trang khach hang
  getsp(id) {
    const API_URL = `/chitietsanphamProduct/${id}`;
    return axiosClient.get(API_URL);
  },
  getgia1(id) {
    const API_URL = `/chitietsanphamProduct/gia1/${id}`;
    return axiosClient.get(API_URL);
  },
  getgia2(id) {
    const API_URL = `/chitietsanphamProduct/gia2/${id}`;
    return axiosClient.get(API_URL);
  },
  getsp1(id) {
    const API_URL = `/chitietsanphamProduct1/${id}`;
    return axiosClient.get(API_URL);
  },
};

export default chitietsanphamApi;
