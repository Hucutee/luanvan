import axiosClient from "./axiosClient";

const kichthuocAPI = {
  create(tenkt) {
    const API_URL = `/kichthuoc/add/${tenkt}`;
    return axiosClient.get(API_URL);
  },checktrung(tenkt) {
    const API_URL = `/kichthuoc/checktrung/${tenkt}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/kichthuoc/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/kichthuoc/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/kichthuoc/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten) {
    const API_URL = `/kichthuoc/sua/${id}&&${ten}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/kichthuoc";
    return axiosClient.get(API_URL);
  },


 
};

export default kichthuocAPI;
