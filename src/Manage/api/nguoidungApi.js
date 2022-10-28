import axiosClient from "./axiosClient";

const nguoidungApi = {
  add(ten,gt,ns,tk,pass) {
    const API_URL = `/nguoidung/add/${ten}&&${gt}&&${ns}&&${tk}&&${pass}`;
    return axiosClient.get(API_URL);
  },
  createnv( tennv,
    chucvu,
    gioitinh,
    ngaysinh,
    email,sdt,pass) {
    const API_URL = `/nguoidung/createnv/${tennv}&&${chucvu}&&${gioitinh}&&${ngaysinh}&&${email}&&${sdt}&&${pass}`;
    return axiosClient.get(API_URL);
  },
  getnvmoi(){
    const API_URL = `/nguoidung/getnvmoi`;
    return axiosClient.get(API_URL);
  },
  gettaikhoan(tk){
    const API_URL = `/nguoidung/checktk/${tk}`;
    return axiosClient.get(API_URL);
  },
  deletenv(manv){
    const API_URL = `/nguoidung/deletenv/${manv}`;
    return axiosClient.get(API_URL);
  },
  checkdn(tk,mk) {
    const API_URL = `/nguoidung/login/${tk}&&${mk}`;
    return axiosClient.post(API_URL);
  },
  suanv(manv,quyen) {
    const API_URL = `/nguoidung/suanv/${manv}&&${quyen}`;
    return axiosClient.get(API_URL);
  },
  checkdngg(tk) {
    const API_URL = `/nguoidung/logingg/${tk}`;
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
  getListnv(trang) {
    const API_URL = `/nguoidung/listnv/${trang}`;
    return axiosClient.get(API_URL);
  },
  getcount() {
    const API_URL = `/nguoidung/getcountnv`;
    return axiosClient.get(API_URL);
  },
  getcounttennv(ten) {
    const API_URL = `/nguoidung/getcounttennv/${ten}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/nhacungcap/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getnv(ten,trang) {
    const API_URL = `/nguoidung/getnv/${ten}&&${trang}`;
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
  ktmatkhaunv(mand,mk) {
    const API_URL = `/nguoidung/ktmatkhaunv/${mand}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  doimatkhau(mand,mk) {
    const API_URL = `/nguoidung/doimatkhau/${mand}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  doimatkhaunv(mand,mk) {
    const API_URL = `/nguoidung/doimatkhaunv/${mand}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  addsdt(mand,sdt) {
    const API_URL = `/nguoidung/addsdt/${mand}&&${sdt}`;
    return axiosClient.get(API_URL);
  },
  addns(mand,ns) {
    const API_URL = `/nguoidung/addns/${mand}&&${ns}`;
    return axiosClient.get(API_URL);
  },
  addgt(mand,gt) {
    const API_URL = `/nguoidung/addgt/${mand}&&${gt}`;
    return axiosClient.get(API_URL);
  },
  addsdtnv(mand,sdt) {
    const API_URL = `/nguoidung/addsdtnv/${mand}&&${sdt}`;
    return axiosClient.get(API_URL);
  },
  addnsnv(mand,ns) {
    const API_URL = `/nguoidung/addnsnv/${mand}&&${ns}`;
    return axiosClient.get(API_URL);
  },
  addgtnv(mand,gt) {
    const API_URL = `/nguoidung/addgtnv/${mand}&&${gt}`;
    return axiosClient.get(API_URL);
  },
  quenmk(email) {
    const API_URL = `/auth/forgot-password/${email}`;
    return axiosClient.post(API_URL);
  },
  quenmknv(email) {
    const API_URL = `/authnv/forgot-password/${email}`;
    return axiosClient.post(API_URL);
  },
  resetpass(email,pass) {
    const API_URL = `/auth/reset-password/${email}&&${pass}`;
    return axiosClient.post(API_URL);
  },
  resetpassnv(email,pass) {
    const API_URL = `/authnv/reset-password/${email}&&${pass}`;
    return axiosClient.post(API_URL);
  },
  listavtnv() {
    const API_URL = `/listavtnv`;
    return axiosClient.get(API_URL);
  },
  listcvnv() {
    const API_URL = `/listcvnv`;
    return axiosClient.get(API_URL);
  },
  checktrungemailnv(email) {
    const API_URL = `/nguoidung/checktknv/${email}`;
    return axiosClient.get(API_URL);
  },
};

export default nguoidungApi;
