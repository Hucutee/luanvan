import axiosClient from "./axiosClient";

const loaisanphamAPI = {
  create(tenlsp) {
    const API_URL = `/loaisanpham/add/${tenlsp}`;
    return axiosClient.get(API_URL);
  },
  checktrung(tenlsp) {
    const API_URL = `/loaisanpham/checktrung/${tenlsp}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/loaisanpham/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/loaisanpham/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/loaisanpham/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten) {
    const API_URL = `/loaisanpham/sua/${id}&&${ten}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/loaisanpham";
    return axiosClient.get(API_URL);
  },


 
};

export default loaisanphamAPI;
