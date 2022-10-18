import axiosClient from "./axiosClient";

const nguoidungApi = {
  add(ten,gt,ns,tk,pass) {
    const API_URL = `/nguoidung/add/${ten}&&${gt}&&${ns}&&${tk}&&${pass}`;
    return axiosClient.get(API_URL);
  },
  gettaikhoan(tk){
    const API_URL = `/nguoidung/checktk/${tk}`;
    return axiosClient.get(API_URL);
  },
  checkdn(tk,mk) {
    const API_URL = `/nguoidung/login/${tk}&&${mk}`;
    return axiosClient.post(API_URL);
  },
  checkdnshipper(email,mk) {
    const API_URL = `/nguoidung/checkdnshipper/${email}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  checkdnnhanvien(email,mk) {
    const API_URL = `/nguoidung/checkdnnhanvien/${email}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/nhacungcap/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/nhacungcap/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/nhacungcap/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten,sdt,dc) {
    const API_URL = `/nhacungcap/sua/${id}&&${ten}&&${sdt}&&${dc}`;
    return axiosClient.get(API_URL);
  },
  login() {
    const API_URL = "/nguoidung";
    return axiosClient.get(API_URL);
  },

  suatrung(ma,ten) {
    const API_URL = `/nhacungcap/suatrung/${ma}&&${ten}`;
    return axiosClient.get(API_URL);
  },
  upload(data) {
    const API_URL = `/upload`;
    return axiosClient.post(API_URL,data);
  },
  uploadnv(data) {
    const API_URL = `/uploadnv`;
    return axiosClient.post(API_URL,data);
  },
  getttnd(idnd) {
    const API_URL = `/nguoidung/getttnd/${idnd}`;
    return axiosClient.get(API_URL);
  },
  getavt(idnd) {
    const API_URL = `/nguoidung/getavt/${idnd}`;
    return axiosClient.get(API_URL);
  },
  getavtnv(idnd) {
    const API_URL = `/nguoidung/getavtnv/${idnd}`;
    return axiosClient.get(API_URL);
  },
  ktmatkhau(mand,mk) {
    const API_URL = `/nguoidung/ktmatkhau/${mand}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  doimatkhau(mand,mk) {
    const API_URL = `/nguoidung/doimatkhau/${mand}&&${mk}`;
    return axiosClient.get(API_URL);
  },
};

export default nguoidungApi;
