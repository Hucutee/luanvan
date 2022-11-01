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
  getCounttheoten(ten) {
    const API_URL = `/sanpham/getCounttheoten/${ten}`;
    return axiosClient.get(API_URL);
  },
  checkloai(loai) {
    const API_URL = `/sanpham/checkloai/${loai}`;
    return axiosClient.get(API_URL);
  },
  suatrung(ma,ten,loai) {
    const API_URL = `/sanpham/suatrung/${ma}&&${ten}&&${loai}`;
    return axiosClient.get(API_URL);
  },
//san pham trang khach hang
  getListnoi(trang) {
    const API_URL = `/sanphamnoi/${trang}`;
    return axiosClient.get(API_URL);
  },
  getsp(id) {
    const API_URL = `/sanphamProduct/${id}`;
    return axiosClient.get(API_URL);
  },
  getListnoicount() {
    const API_URL = `/sanphamnoicount`;
    return axiosClient.get(API_URL);
  },
  getidnoi(ten,trang) {
    const API_URL = `/sanpham/getidnoi/${ten}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoiloai(locloai,trang) {
    const API_URL = `/sanphamnoiloai/${locloai}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoigia(locgia,trang) {
    const API_URL = `/sanphamnoigia/${locgia}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoikhoanggia(nho,lon,trang) {
    const API_URL = `/sanphamnoikhoanggia/${nho}&&${lon}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoiloaigia(loai,gia,trang) {
    const API_URL = `/sanphamnoiloaigia/${loai}&&${gia}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoiloaikhoanggia(loai,nho,lon,trang) {
    const API_URL = `/sanphamnoiloaikhoanggia/${loai}&&${nho}&&${lon}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoigiakhoanggia(gia,nho,lon,trang) {
    const API_URL = `/sanphamnoigiakhoanggia/${gia}&&${nho}&&${lon}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getListnoiloaigiakhoanggia(loai,gia,nho,lon,trang) {
    const API_URL = `/sanphamnoiloaigiakhoanggia/${loai}&&${gia}&&${nho}&&${lon}&&${trang}`;
    return axiosClient.get(API_URL);
  },
  getmasp(id) {
    const API_URL = `/sanphammasp/${id}`;
    return axiosClient.get(API_URL);
  },
  getlq(id) {
    const API_URL = `/sanpham/lienquan/${id}`;
    return axiosClient.get(API_URL);
  },
  getlistlq(id,masp) {
    const API_URL = `/sanpham/listlienquan/${id}&&${masp}`;
    return axiosClient.get(API_URL);
  },
  spmoi() {
    const API_URL = `/sanphamm`;
    return axiosClient.get(API_URL);
  },
};

export default sanphamAPI;
