import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import nguoidungApi from "../../Manage/api/nguoidungApi";

export const login = createAsyncThunk("user/login", async (payload) => {
    if(payload.mat_khau){
      const data = await nguoidungApi.checkdn(payload.email, payload.mat_khau);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    }else {
      const data = await nguoidungApi.checkdngg(payload.email);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    }
 
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || [],
  },
  reducers: {
    logout(state) {
      state.current = [{}];
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const {actions, reducer} = userSlice;
export const {logout} = actions;
export default reducer;
