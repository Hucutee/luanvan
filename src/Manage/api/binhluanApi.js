import axiosClient from "./axiosClient";

const binhluanApi = {
  getlistblid(masp) {
    const API_URL = `/binhluan/getlistblid/${masp}`;
    return axiosClient.get(API_URL);
  },

  getList(trang) {
    const API_URL = `/hoadonnhap/${trang}`;
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
  getCountDESC() {
    const API_URL = "/hoadonnhapDESC";
    return axiosClient.get(API_URL);
  },

 
};

export default binhluanApi;
