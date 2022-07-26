import axiosClient from "./axiosClient";

const khuyenmaiAPI = {
  create(ghichu,mancc,manv,nbd) {
    const API_URL = `/hoadonnhap/add/${ghichu}&&${mancc}&&${manv}&&${nbd}`;
    return axiosClient.get(API_URL);
  },

  getList(trang) {
    const API_URL = `/hoadonnhap/${trang}`;
    return axiosClient.get(API_URL);
  },
  dstongdonnhap() {
    const API_URL = `/dstongdonnhap`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/hoadonnhap/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/hoadonnhap/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ghichu,mancc,manv,nbd) {
    const API_URL = `/hoadonnhap/sua/${id}&&${ghichu}&&${mancc}&&${manv}&&${nbd}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/hoadonnhap";
    return axiosClient.get(API_URL);
  },
  getCounttenget(ten) {
    const API_URL = `/hoadonnhap/getcounttenget/${ten}`;
    return axiosClient.get(API_URL);
  },
  getCountDESC() {
    const API_URL = "/hoadonnhapDESC";
    return axiosClient.get(API_URL);
  },
  tongnhapthang(thang) {
    const API_URL = `/hoadonnhap/tongnhapthang/${thang}`;
    return axiosClient.get(API_URL);
  },
  tongbanthang(thang) {
    const API_URL = `/hoadonxuat/tongbanthang/${thang}`;
    return axiosClient.get(API_URL);
  },
  tongnhapnam(nam) {
    const API_URL = `/hoadonnhap/tongnhapnam/${nam}`;
    return axiosClient.get(API_URL);
  },
  tongbannam(nam) {
    const API_URL = `/hoadonxuat/tongbannam/${nam}`;
    return axiosClient.get(API_URL);
  },
 
};

export default khuyenmaiAPI;
