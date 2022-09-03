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
  sua(id,sp,kt,sl,gb,tt,ha) {
    const API_URL = `/chitietsanpham/sua/${id}&&${sp}&&${kt}&&${sl}&&${gb}&&${tt}&&${ha}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/chitietsanpham";
    return axiosClient.get(API_URL);
  },


 
};

export default chitietsanphamApi;
