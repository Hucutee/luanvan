import {createSlice} from "@reduxjs/toolkit";

const cartthanhtoan = createSlice({
  name: "carttt",
  initialState: {
    cartttItem: JSON.parse(localStorage.getItem("carttt")) || [],
  },
  reducers: {
    addtoCarttt(state, action) {
      const newItem = action.payload;
      const index = state.cartttItem.findIndex(
        (x) => !!(x.ma_ctsp === newItem.ma_ctsp ),
      );
      if (index >= 0) {
        state.cartttItem[index].so_luong = newItem.so_luong;
        const a = JSON.parse(localStorage.getItem("carttt"));
        a[index].so_luong = newItem.so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      } else {
        state.cartttItem.push(newItem);
        const a = JSON.parse(localStorage.getItem("carttt")) || [];
        a.push(newItem);
        localStorage.setItem("carttt", JSON.stringify(a));
      }
    },
    setQuantity(state, action) {
      const {ma_ctsp, so_luong} = action.payload;
      const index = state.cartttItem.findIndex((x) => !!(x.ma_ctsp === ma_ctsp));
      if (index >= 0 && so_luong >0 && so_luong % 1 == 0) {
        state.cartttItem[index].so_luong = so_luong;
        const a = JSON.parse(localStorage.getItem("cart"));
        a[index].so_luong = so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      }else{
        state.cartttItem[index].so_luong = "";
        const a = JSON.parse(localStorage.getItem("cart"));
        a[index].so_luong = so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      }
    },
    removeFromCart(state, action) {
      const idRemove = action.payload;

      state.cartttItem = state.cartttItem.filter(
        (x) => !(x.ma_ctsp === idRemove.ma_ctsp ),
      );

      const a = JSON.parse(localStorage.getItem("cart"));
      localStorage.setItem(
        "cart",
        JSON.stringify(
          a.filter((x) => !(x.ma_ctsp === idRemove.ma_ctsp )),
        ),
      );
    },

    removeAllCarttt(state) {
      state.cartttItem = [];
      localStorage.removeItem("carttt");
    },
  },
});

const {actions, reducer} = cartthanhtoan;
export const {setQuantity, removeFromCart, addtoCarttt, removeAllCarttt} = actions;
export default reducer;
