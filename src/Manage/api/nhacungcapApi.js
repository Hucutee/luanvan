import axiosClient from "./axiosClient";

const nhacungcapAPI = {
  create(tenncc,sdt,diachi) {
    const API_URL = `/nhacungcap/add/${tenncc}&&${sdt}&&${diachi}`;
    return axiosClient.get(API_URL);
  },
  getList() {
    const API_URL = "/nhacungcap/get";
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/nhacungcap/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },


  getIdAddress(id_dc) {
    const API_URL = `/api/manage/address/iddc=${id_dc}`;
    return axiosClient.get(API_URL);
  },
  getid(ten) {
    const API_URL = `/nhacungcap/get/${ten}`;
    return axiosClient.get(API_URL);
  },


 
};

export default nhacungcapAPI;
