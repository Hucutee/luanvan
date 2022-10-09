import axiosClient from "./axiosClient";

const repblApi = {
  create(ten,dc,pgg,gia,loaitt,makh) {
    const API_URL = `/donhang/add/${ten}&&${dc}&&${pgg}&&${gia}&&${loaitt}&&${makh}`;
    return axiosClient.get(API_URL);
  },
  addrepbinhluan(nd,mand,masp,mabl) {
    const API_URL = `/repbl/addrep/${nd}&&${mand}&&${masp}&&${mabl}`;
    return axiosClient.get(API_URL);
  },
  settrangthai(mabl) {
    const API_URL = `/repbl/settrangthai/${mabl}`;
    return axiosClient.get(API_URL);
  },
  getdh(makh) {
    const API_URL = `/donhang/getmadh/${makh}`;
    return axiosClient.get(API_URL);
  },
  getall() {
    const API_URL = `/repbl`;
    return axiosClient.get(API_URL);
  },
  gettrang(trang,t1,t2) {
    const API_URL = `/repbl/${trang}&&${t1}&&${t2}`;
    return axiosClient.get(API_URL);
  },
  gettlbl() {
    const API_URL = `/repbl/tlbl`;
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
  setslctsp(idctsp,slg) {
    const API_URL = `/donhang/setslctsp/${idctsp}&&${slg}`;
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
};

export default repblApi;
