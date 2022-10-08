import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import nguoidungApi from "../../Manage/api/nguoidungApi";

export const loginNhanvien = createAsyncThunk("user/loginNhanvien", async (payload) => {
  const data = await nguoidungApi.checkdnnhanvien(payload.email, payload.mat_khau);

  localStorage.setItem("userNhanvien", JSON.stringify(data));

  return data;
});

const nhanvienSlice = createSlice({
  name: "userNhanvien",
  initialState: {
    current: JSON.parse(localStorage.getItem("userNhanvien")) || [],
  },
  reducers: {
    logoutNhanvien(state) {
      state.current = [{}];
      localStorage.removeItem("userNhanvien");
    },
  },
  extraReducers: {
    [loginNhanvien.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const {actions, reducer} = nhanvienSlice;
export const {logoutNhanvien} = actions;
export default reducer;
