import axiosClient from "./axiosClient";

const nhacungcapAPI = {
  create(tenncc,sdt,diachi) {
    const API_URL = `/nhacungcap/add/${tenncc}&&${sdt}&&${diachi}`;
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
  getCount() {
    const API_URL = "/nhacungcap";
    return axiosClient.get(API_URL);
  },


 
};

export default nhacungcapAPI;
