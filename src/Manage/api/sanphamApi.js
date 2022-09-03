import axiosClient from "./axiosClient";

const sanphamAPI = {
  create(ten,loai) {
    const API_URL = `/sanpham/add/${ten}&&${loai}`;
    return axiosClient.get(API_URL);
  },
  checktrung(ten) {
    const API_URL = `/sanpham/checktrung/${ten}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/sanpham/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/sanpham/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/sanpham/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten,loai) {
    const API_URL = `/sanpham/sua/${id}&&${ten}&&${loai}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/sanpham";
    return axiosClient.get(API_URL);
  },


 
};

export default sanphamAPI;
