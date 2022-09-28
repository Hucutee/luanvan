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
  addctdh(mactsp,madh,sl,gia) {
    const API_URL = `/donhang/addctdh/${mactsp}&&${madh}&&${sl}&&${gia}`;
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

export default donhangAPI;
