import userReducer  from './userSlice';
import cartReducer  from './cartSlide';
import quaylaiReducer  from './quaylai';
import cartttReducer  from './cartthanhtoan';


const { configureStore } = require('@reduxjs/toolkit');

const rootReducerr = {
    user: userReducer,
    cart: cartReducer,
    quaylai: quaylaiReducer,
    carttt: cartttReducer,
};
const storee = configureStore({
    reducer: rootReducerr,
});

export default storee;
