import userReducer  from './userSlice';
import cartReducer  from './cartSlide';
import quaylaiReducer  from './quaylai';


const { configureStore } = require('@reduxjs/toolkit');

const rootReducerr = {
    user: userReducer,
    cart: cartReducer,
    quaylai: quaylaiReducer,
};
const storee = configureStore({
    reducer: rootReducerr,
});

export default storee;
