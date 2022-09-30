import userReducer  from './userSlice';
import cartReducer  from './cartSlide';
import quaylaiReducer  from './quaylai';
import cartttReducer  from './cartthanhtoan';
import shipperReducer  from './shipperSlice';


const { configureStore } = require('@reduxjs/toolkit');

const rootReducerr = {
    user: userReducer,
    cart: cartReducer,
    quaylai: quaylaiReducer,
    carttt: cartttReducer,
    userShipper: shipperReducer,

};
const storee = configureStore({
    reducer: rootReducerr,
});

export default storee;
