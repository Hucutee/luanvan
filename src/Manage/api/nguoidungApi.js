import axiosClient from "./axiosClient";

const nguoidungApi = {
  add(ten,gt,ns,email,sdt,pass) {
    const API_URL = `/nguoidung/add/${ten}&&${gt}&&${ns}&&${email}&&${sdt}&&${pass}`;
    return axiosClient.get(API_URL);
  },
  getemail(email){
    const API_URL = `/nguoidung/checkemail/${email}`;
    return axiosClient.get(API_URL);
  },
  checkdn(email,mk) {
    const API_URL = `/nguoidung/checkdn/${email}&&${mk}`;
    return axiosClient.get(API_URL);
  },
  checkdnshipper(email,mk) {
    const API_URL = `/nguoidung/checkdnshipper/${email}&&${mk}`;
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
  login() {
    const API_URL = "/nguoidung";
    return axiosClient.get(API_URL);
  },

  suatrung(ma,ten) {
    const API_URL = `/nhacungcap/suatrung/${ma}&&${ten}`;
    return axiosClient.get(API_URL);
  },
 
};

export default nguoidungApi;
