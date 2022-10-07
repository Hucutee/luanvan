import axiosClient from "./axiosClient";

const binhluanApi = {
  getlistblid(masp) {
    const API_URL = `/binhluan/getlistblid/${masp}`;
    return axiosClient.get(API_URL);
  },

  addbinhluan(bl,masp,mand) {
    const API_URL = `/binhluan/add/${bl}&&${masp}&&${mand}`;
    return axiosClient.get(API_URL);
  },
  getlistrblid(masp) {
    const API_URL = `/binhluan/getlistrep/${masp}`;
    return axiosClient.get(API_URL);
  },
  getlistdgid(masp) {
    const API_URL = `/danhgia/getlistdg/${masp}`;
    return axiosClient.get(API_URL);
  },
  danhgia(data) {
    const API_URL = "/danhgia";
    return axiosClient.post(API_URL,data);
  },

  settrangthaictdh(mactdh) {
    const API_URL = `/chitietdonhang/suatrangthai/${mactdh}`;
    return axiosClient.get(API_URL);
  },
  getCount() {
    const API_URL = "/hoadonnhap";
    return axiosClient.get(API_URL);
  },
  getCountDESC() {
    const API_URL = "/hoadonnhapDESC";
    return axiosClient.get(API_URL);
  },

 
};

export default binhluanApi;
