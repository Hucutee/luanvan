import {createSlice} from "@reduxjs/toolkit";

const quaylai = createSlice({
  name: "quaylai",
  initialState: {
    quaylaiItem: JSON.parse(localStorage.getItem("quaylai")) || [],
  },
  reducers: {
    addquaylai(state, action) {
      state.quaylaiItem = [];
      localStorage.removeItem("quaylai");
      const newItem = action.payload;
        state.quaylaiItem.push(newItem);
        const a = JSON.parse(localStorage.getItem("quaylai")) || [];
        a.push(newItem);
        localStorage.setItem("quaylai", JSON.stringify(a));
      
    },
  
    removequaylai(state) {
      state.quaylaiItem = [];
      localStorage.removeItem("quaylai");
    },

    
  },
});

const {actions, reducer} = quaylai;
export const { addquaylai,removequaylai} = actions;
export default reducer;
