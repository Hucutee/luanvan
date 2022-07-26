import axiosClient from "./axiosClient";

const diachiAPI = {
  create(mand,diachi) {
    const API_URL = `/diachi/add/${mand}&&${diachi}`;
    return axiosClient.get(API_URL);
  },
  checktrung(tenncc) {
    const API_URL = `/nhacungcap/checktrung/${tenncc}`;
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
  getid(id) {
    const API_URL = `/diachi/getma/${id}`;
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

  suatrung(ma,ten) {
    const API_URL = `/nhacungcap/suatrung/${ma}&&${ten}`;
    return axiosClient.get(API_URL);
  },
 
};

export default diachiAPI;
