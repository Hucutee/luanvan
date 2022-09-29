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
  addctdh(mactsp,madh,sl,gia) {
    const API_URL = `/donhang/addctdh/${mactsp}&&${madh}&&${sl}&&${gia}`;
    return axiosClient.get(API_URL);
  },
  getdhkh(id) {
    const API_URL = `/donhang/cuakhachhang/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getctdhkh(id) {
    const API_URL = `/donhang/ctdhcuakhachhang/${id}`;
    return axiosClient.get(API_URL,id);
  },
  getallctdh() {
    const API_URL = `/donhang/getallctdh`;
    return axiosClient.get(API_URL);
  },
  huy(id) {
    const API_URL = `/donhang/huy/${id}`;
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

export default donhangAPI;
