import axiosClient from "./axiosClient";

const binhluanApi = {
  getlistblid(masp) {
    const API_URL = `/binhluan/getlistblid/${masp}`;
    return axiosClient.get(API_URL);
  },

  addbinhluan(bl,masp,mand) {
    const API_URL = `/binhluan/add/${bl}&&${masp}&&${mand}`;
    return axiosClient.get(API_URL);
  },
  getlistrblid(masp) {
    const API_URL = `/binhluan/getlistrep/${masp}`;
    return axiosClient.get(API_URL);
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
