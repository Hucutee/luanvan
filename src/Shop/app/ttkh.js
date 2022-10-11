import {createSlice} from "@reduxjs/toolkit";

const ttkh = createSlice({
  name: "ttkh",
  initialState: {
    ttkhItem: JSON.parse(localStorage.getItem("ttkh")) || [],
  },
  reducers: {
    addtottkh(state, action) {
      const newItem = action.payload;
      
     
        state.ttkhItem.push(newItem);
        const a = JSON.parse(localStorage.getItem("ttkh")) || [];
        a.push(newItem);
        localStorage.setItem("ttkh", JSON.stringify(a));
      
    },
  

    removeAllttkh(state) {
      state.ttkhItem = [];
      localStorage.removeItem("ttkh");
    },
  },
});

const {actions, reducer} = ttkh;
export const { addtottkh, removeAllttkh} = actions;
export default reducer;
