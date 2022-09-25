import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "quaylai",
  initialState: {
    cartItem: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItem.findIndex(
        (x) => !!(x.ma_ctsp === newItem.ma_ctsp ),
      );
      if (index >= 0) {
        state.cartItem[index].so_luong = newItem.so_luong;
        const a = JSON.parse(localStorage.getItem("cart"));
        a[index].so_luong = newItem.so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      } else {
        state.cartItem.push(newItem);
        const a = JSON.parse(localStorage.getItem("cart")) || [];
        a.push(newItem);
        localStorage.setItem("cart", JSON.stringify(a));
      }
    },
    setQuantity(state, action) {
      const {ma_ctsp, so_luong} = action.payload;
      const index = state.cartItem.findIndex((x) => !!(x.ma_ctsp === ma_ctsp));
      if (index >= 0 && so_luong >0 && so_luong % 1 == 0) {
        state.cartItem[index].so_luong = so_luong;
        const a = JSON.parse(localStorage.getItem("cart"));
        a[index].so_luong = so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      }else{
        state.cartItem[index].so_luong = "";
        const a = JSON.parse(localStorage.getItem("cart"));
        a[index].so_luong = so_luong;
        localStorage.setItem("cart", JSON.stringify(a));
      }
    },
    removeFromCart(state, action) {
      const idRemove = action.payload;

      state.cartItem = state.cartItem.filter(
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

    removeAllCart(state) {
      state.cartItem = [];
      localStorage.removeItem("cart");
    },
  },
});

const {actions, reducer} = cartSlice;
export const {setQuantity, removeFromCart, addtoCart, removeAllCart} = actions;
export default reducer;
