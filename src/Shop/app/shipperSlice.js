import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import nguoidungApi from "../../Manage/api/nguoidungApi";

export const loginShipper = createAsyncThunk("user/loginShipper", async (payload) => {
  const data = await nguoidungApi.checkdnshipper(payload.email, payload.mat_khau);

  localStorage.setItem("userShipper", JSON.stringify(data));

  return data;
});

const shipperSlice = createSlice({
  name: "userShipper",
  initialState: {
    current: JSON.parse(localStorage.getItem("userShipper")) || [],
  },
  reducers: {
    logoutShipper(state) {
      state.current = [{}];
      localStorage.removeItem("userShipper");
    },
  },
  extraReducers: {
    [loginShipper.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const {actions, reducer} = shipperSlice;
export const {logoutShipper} = actions;
export default reducer;
