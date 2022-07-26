import axiosClient from "./axiosClient";

const productAPI = {
  createProduct(data) {
    const API_URL = "/api/manage/product/add";
    return axiosClient.post(API_URL, data);
  },

  getProduct(idsp) {
    const API_URL = `${idsp}`;
    return axiosClient.get(API_URL);
  },

  getListProducts() {
    const API_URL = "/api/manage/product/list";
    return axiosClient.get(API_URL);
  },

  getProductList(params) {
    const API_URL = "/api/manage/product/product_list";
    return axiosClient.get(API_URL, {params});
  },

  getId() {
    const API_URL = "/api/manage/product/id";
    return axiosClient.get(API_URL);
  },

  updateProduct(idnv, data) {
    const API_URL = `/api/manage/product/update/${idnv}`;
    return axiosClient.put(API_URL, data);
  },

  deleteProduct(id) {
    const API_URL = `/api/manage/product/delete/id=${id}`;
    return axiosClient.delete(API_URL);
  },

  getNewProduct() {
    const API_URL = "/api/manage/new_product/list";
    return axiosClient.get(API_URL);
  },

  getDiscountProduct() {
    const API_URL = "/api/manage/discount_product/list";
    return axiosClient.get(API_URL);
  },
};

export default productAPI;
