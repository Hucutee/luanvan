import userReducer  from './userSlice';
import cartReducer  from './cartSlide';


const { configureStore } = require('@reduxjs/toolkit');

const rootReducerr = {
    user: userReducer,
    cart: cartReducer,
};
const storee = configureStore({
    reducer: rootReducerr,
});

export default storee;
