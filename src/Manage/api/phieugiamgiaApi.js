import axiosClient from "./axiosClient";

const phieugiamgiaAPI = {
  create(tenpgg,stg,nbd,nkt,sttt) {
    const API_URL = `/phieugiamgia/add/${tenpgg}&&${stg}&&${nbd}&&${nkt}&&${sttt}`;
    return axiosClient.get(API_URL);
  },
  checktrung(tenpgg) {
    const API_URL = `/phieugiamgia/checktrung/${tenpgg}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/phieugiamgia/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/phieugiamgia/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/phieugiamgia/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten,stg,nbd,nkt,sttt) {
    const API_URL = `/phieugiamgia/sua/${id}&&${ten}&&${stg}&&${nbd}&&${nkt}&&${sttt}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/phieugiamgia";
    return axiosClient.get(API_URL);
  },
  getdieukien(aa) {
    const API_URL = `/phieugiamgia/dieukien/${aa}`;
    return axiosClient.get(API_URL);
  },


 
};

export default phieugiamgiaAPI;
