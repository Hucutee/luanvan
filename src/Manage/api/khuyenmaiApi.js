import axiosClient from "./axiosClient";

const khuyenmaiAPI = {
  create(tenkm,lsp,ptg,nbd,nkt) {
    const API_URL = `/khuyenmai/add/${tenkm}&&${lsp}&&${ptg}&&${nbd}&&${nkt}`;
    return axiosClient.get(API_URL);
  },
  checktrung(tenkm) {
    const API_URL = `/khuyenmai/checktrung/${tenkm}`;
    return axiosClient.get(API_URL);
  },
  getList(trang) {
    const API_URL = `/khuyenmai/${trang}`;
    return axiosClient.get(API_URL);
  },
  delete(id) {
    const API_URL = `/khuyenmai/delete/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getid(ten,trang) {
    const API_URL = `/khuyenmai/get/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  sua(id,ten,lsp,stg,nbd,nkt) {
    const API_URL = `/khuyenmai/sua/${id}&&${ten}&&${lsp}&&${stg}&&${nbd}&&${nkt}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/khuyenmai";
    return axiosClient.get(API_URL);
  },
  checkngay(ngay,ngaybd,ngaykt,makm) {
    const API_URL = `/khuyenmai/checkngay/${ngay}&&${ngaybd}&&${ngaykt}&&${makm}`;
    return axiosClient.get(API_URL);
  },


 
};

export default khuyenmaiAPI;
