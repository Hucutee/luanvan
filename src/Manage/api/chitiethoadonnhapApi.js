import axiosClient from "./axiosClient";

const chitiethoadonnhapApi = {
  create(mahdn,mactsp,sl,gn) {
    const API_URL = `/chitiethoadonnhap/add/${mahdn}&&${mactsp}&&${sl}&&${gn}`;
    return axiosClient.get(API_URL);
  },
  congsoluong(mactsp,sl) {
    const API_URL = `/chitiethoadonnhap/addsl/${mactsp}&&${sl}`;
    return axiosClient.get(API_URL);
  },
  checktrung(sp,kt) {
    const API_URL = `/chitietsanpham/checktrung/${sp}&&${kt}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/chitiethoadonnhap/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/chitiethoadonnhap/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  deletesl(id,sl) {
    const API_URL = `/chitiethoadonnhap/deletesl/${id}&&${sl}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/chitiethoadonnhap/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(macthdn,mactsp,sl,gn) {
    const API_URL = `/chitietsanpham/sua/${macthdn}&&${mactsp}&&${sl}&&${gn} `;
    return axiosClient.get(API_URL);
  },
  suasl(macthdn,mactsp,slc,sl,gn) {
    const API_URL = `/chitietsanpham/suasl/${macthdn}&&${mactsp}&&${slc}&&${sl}&&${gn} `;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/chitiethoadonnhap";
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

export default chitiethoadonnhapApi;
