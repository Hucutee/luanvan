import axiosClient from "./axiosClient";

const donhangAPI = {
  create(ten,dc,pgg,gia,loaitt,makh) {
    const API_URL = `/donhang/add/${ten}&&${dc}&&${pgg}&&${gia}&&${loaitt}&&${makh}`;
    return axiosClient.get(API_URL);
  },
  getdh(makh) {
    const API_URL = `/donhang/getmadh/${makh}`;
    return axiosClient.get(API_URL);
  },
  getall() {
    const API_URL = `/donhang`;
    return axiosClient.get(API_URL);
  },
  gettrang(trang,t1,t2) {
    const API_URL = `/donhang/${trang}&&${t1}&&${t2}`;
    return axiosClient.get(API_URL);
  },
  tuchoigiaohang(madh) {
    const API_URL = `/donhang/tuchoigiaohang/${madh}`;
    return axiosClient.get(API_URL);
  },
  gettrangnhangiao(trang,t1,t2,mangh) {
    const API_URL = `/donhang/nhangiao/${trang}&&${t1}&&${t2}&&${mangh}`;
    return axiosClient.get(API_URL);
  },
  gettrangcuangh(trang,t1,t2,mangh) {
    const API_URL = `/donhang/cuangh/${trang}&&${t1}&&${t2}&&${mangh}`;
    return axiosClient.get(API_URL);
  },
  addctdh(mactsp,madh,sl,gia) {
    const API_URL = `/donhang/addctdh/${mactsp}&&${madh}&&${sl}&&${gia}`;
    return axiosClient.get(API_URL);
  },
  getdhkh(id,t1,t2) {
    const API_URL = `/donhang/cuakhachhang/${id}&&${t1}&&${t2}`;
    return axiosClient.get(API_URL,id);
  },
  getctdhkh(id) {
    const API_URL = `/donhang/ctdhcuakhachhang/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getallctdh() {
    const API_URL = `/donhang/ctdh/getallctdh`;
    return axiosClient.get(API_URL);
  },
  huy(id) {
    const API_URL = `/donhang/huy/${id}`;
    return axiosClient.get(API_URL);
  },
  huydon(id,manv) {
    const API_URL = `/donhang/huydon/${id}&&${manv}`;
    return axiosClient.get(API_URL);
  },
  huydonnd(id) {
    const API_URL = `/donhang/huydonnd/${id}`;
    return axiosClient.get(API_URL);
  },
  setslctsp(idctsp,slg) {
    const API_URL = `/donhang/setslctsp/${idctsp}&&${slg}`;
    return axiosClient.get(API_URL);
  },
  hoantien(id) {
    const API_URL = `/donhang/hoantien/${id}`;
    return axiosClient.get(API_URL);
  },
  daxacnhan(madh,manv) {
    const API_URL = `/donhang/daxacnhan/${madh}&&${manv}`;
    return axiosClient.get(API_URL);
  },

  setttngh(ma,mangh,tt) {
    const API_URL = `/donhang/settrangthaidonhang/${ma}&&${mangh}&&${tt}`;
    return axiosClient.get(API_URL);
  },
  addctgh(ma,mangh,tt) {
    const API_URL = `/donhang/themctgh/${ma}&&${mangh}&&${tt}`;
    return axiosClient.get(API_URL);
  },
  setttngh1(ma,mangh,tt) {
    const API_URL = `/donhang/settrangthaidonhang1/${ma}&&${mangh}&&${tt}`;
    return axiosClient.get(API_URL);
  },
  addctgh1(ma,mangh,tt) {
    const API_URL = `/donhang/themctgh1/${ma}&&${mangh}&&${tt}`;
    return axiosClient.get(API_URL);
  },
  hoanhang(mactsp,sl) {
    const API_URL = `/donhang/hoanhang/${mactsp}&&${sl}`;
    return axiosClient.get(API_URL);
  },
  getctgh(makh) {
    const API_URL = `/donhang/chitietgiaohang/${makh}`;
    return axiosClient.get(API_URL);
  },
  boomhang(madh) {
    const API_URL = `/donhang/boomhang/${madh}`;
    return axiosClient.get(API_URL);
  },
  getdhboom(madh) {
    const API_URL = `/donhang/laydonhangboom/${madh}`;
    return axiosClient.get(API_URL);
  },
  allctgh() {
    const API_URL = `/chitietgiaohang`;
    return axiosClient.get(API_URL);
  },
  ttngh() {
    const API_URL = `/thongtinnguoigiaohang`;
    return axiosClient.get(API_URL);
  },
  listngh() {
    const API_URL = `/thongtinnguoigiaohang/list`;
    return axiosClient.get(API_URL);
  },
  setchonngh(madh,chonngh) {
    const API_URL = `/chonngh/${madh}&&${chonngh}`;
    return axiosClient.get(API_URL);
  },
};

export default donhangAPI;
